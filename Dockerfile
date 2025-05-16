FROM node:20-alpine AS development-dependencies-env
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .

FROM node:20-alpine AS production-dependencies-env
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

FROM node:20-alpine AS build-env
# هنا ننسخ كل شيء لأننا نحتاج كل كود المصدر للبناء
# ونستخدم node_modules من المرحلة السابقة
COPY . /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app
RUN npm run build

FROM node:20-alpine
# (هنا يمكنك إضافة خطوة إنشاء مستخدم غير root كما شرحت سابقًا إذا أردت)
# RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app
COPY ./package.json package-lock.json /app/
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build

# RUN chown -R appuser:appgroup /app # إذا أضفت مستخدمًا
# USER appuser # إذا أضفت مستخدمًا

EXPOSE 3000 # توثيق المنفذ

CMD ["npm", "run", "start"]
