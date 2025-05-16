import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse, Link as Link$1 } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaMobileAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout$1({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout: Layout$1,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function Header() {
  return /* @__PURE__ */ jsx("header", { className: "bg-sky-100 shadow-sm", children: /* @__PURE__ */ jsx("nav", { className: "container mx-auto px-4 py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-baseline mb-4 sm:mb-0", children: [
      /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-sky-600", children: "Ramadan Waly" }),
      /* @__PURE__ */ jsx("div", { className: "text-sm md:ml-2 text-sky-800", children: "CraftedByHand" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex space-x-4 sm:space-x-6", children: [
      /* @__PURE__ */ jsx(
        NavLink,
        {
          to: "/",
          className: ({ isActive }) => `${isActive ? "text-sky-600 font-medium" : "text-sky-800 hover:text-sky-600 transition-colors"} px-2 py-1`,
          children: "Home"
        }
      ),
      /* @__PURE__ */ jsx(
        NavLink,
        {
          to: "/about",
          className: ({ isActive }) => `${isActive ? "text-sky-600 font-medium" : "text-sky-800 hover:text-sky-600 transition-colors"} px-2 py-1`,
          children: "About"
        }
      ),
      /* @__PURE__ */ jsx(
        NavLink,
        {
          to: "/services",
          className: ({ isActive }) => `${isActive ? "text-sky-600 font-medium" : "text-sky-800 hover:text-sky-600 transition-colors"} px-2 py-1`,
          children: "Services"
        }
      )
    ] })
  ] }) }) });
}
const CONTACT_INFO = {
  phone: "01122024938",
  email: "ramadan.waly@outlook.com",
  address: "El Haram, Giza, Egypt"
};
const SOCIAL_LINKS = {
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  pinterest: "https://pinterest.com"
};
const COPYRIGHT_TEXT = "© 2024 Ramadan Waly | CraftedByHand. All rights reserved.";
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-sky-900 text-white py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center md:text-left", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Contact Us" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx(FaMobileAlt, { className: "inline mr-2" }),
            " ",
            CONTACT_INFO.phone
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx(FaEnvelope, { className: "inline mr-2" }),
            " ",
            CONTACT_INFO.email
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx(FaMapMarkerAlt, { className: "inline mr-2" }),
            " ",
            CONTACT_INFO.address
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Quick Links" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/about",
              className: "hover:text-sky-400 transition-colors",
              children: "About Us"
            }
          ) }),
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/services",
              className: "hover:text-sky-400 transition-colors",
              children: "Our Services"
            }
          ) }),
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(Link, { to: "#", className: "hover:text-sky-400 transition-colors", children: "Portfolio" }) }),
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center md:text-right", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Follow Us" }),
        /* @__PURE__ */ jsxs("div", { className: "space-x-4", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: SOCIAL_LINKS.facebook,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-2xl hover:text-sky-400 transition-colors",
              children: /* @__PURE__ */ jsx(FaFacebook, {})
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: SOCIAL_LINKS.instagram,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-2xl hover:text-sky-400 transition-colors",
              children: /* @__PURE__ */ jsx(FaInstagram, {})
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: SOCIAL_LINKS.pinterest,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-2xl hover:text-sky-400 transition-colors",
              children: /* @__PURE__ */ jsx(FaPinterest, {})
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-sky-700 pt-8 text-center", children: /* @__PURE__ */ jsx("p", { children: COPYRIGHT_TEXT }) })
  ] }) });
}
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-grow", children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function meta$2() {
  return [{
    title: "Home | Ramadan Waly"
  }, {
    name: "description",
    content: "Welcome to Ramadan Waly's Furniture Crafting Services"
  }];
}
const home = withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(Layout, {
    children: /* @__PURE__ */ jsx("div", {
      className: "container mx-auto px-4 py-16",
      children: /* @__PURE__ */ jsxs("div", {
        className: "text-center max-w-4xl mx-auto",
        children: [/* @__PURE__ */ jsx("h1", {
          className: "text-5xl md:text-7xl font-bold text-sky-900 mb-8",
          children: "Welcome to Your Digital Journey"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-xl text-sky-800 mb-12 leading-relaxed",
          children: "Discover how we can transform your ideas into reality with our innovative solutions and expert services."
        }), /* @__PURE__ */ jsx("div", {
          className: "mb-12",
          children: /* @__PURE__ */ jsx("img", {
            src: "https://placehold.co/600x400",
            alt: "Welcome",
            className: "rounded-xl shadow-lg mx-auto hover:shadow-xl transition-shadow duration-300 w-full max-w-lg h-auto"
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex flex-col sm:flex-row gap-6 justify-center items-center",
          children: [/* @__PURE__ */ jsx(Link$1, {
            to: "/about",
            className: "w-full sm:w-auto px-8 py-4 text-lg font-semibold bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors duration-300 shadow-md hover:shadow-lg",
            children: "Learn About Us"
          }), /* @__PURE__ */ jsx(Link$1, {
            to: "/services",
            className: "w-full sm:w-auto px-8 py-4 text-lg font-semibold border-2 border-sky-600 text-sky-600 rounded-lg hover:bg-sky-50 transition-colors duration-300",
            children: "Explore Services"
          })]
        })]
      })
    })
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
function meta$1() {
  return [{
    title: "About | Ramadan Waly"
  }, {
    name: "description",
    content: "Learn about Ramadan Waly's master craftsmanship and furniture expertise."
  }];
}
const about = withComponentProps(function About() {
  return /* @__PURE__ */ jsx(Layout, {
    children: /* @__PURE__ */ jsx("div", {
      className: "container mx-auto px-4 py-16",
      children: /* @__PURE__ */ jsxs("div", {
        className: "max-w-6xl mx-auto",
        children: [/* @__PURE__ */ jsx("h1", {
          className: "text-4xl font-bold text-sky-900 mb-12 text-center",
          children: "Master Craftsman"
        }), /* @__PURE__ */ jsx("div", {
          className: "bg-sky-100 rounded-xl shadow-lg p-4 sm:p-8 mb-12",
          children: /* @__PURE__ */ jsxs("div", {
            className: "flex flex-col lg:flex-row items-center gap-6 sm:gap-12",
            children: [/* @__PURE__ */ jsx("div", {
              className: "lg:w-1/2",
              children: /* @__PURE__ */ jsx("img", {
                src: "https://images.unsplash.com/photo-1581612129334-551ccd2c6a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                alt: "Carpenter at work",
                className: "rounded-lg shadow-md w-full h-auto max-h-[400px] object-cover"
              })
            }), /* @__PURE__ */ jsxs("div", {
              className: "lg:w-1/2",
              children: [/* @__PURE__ */ jsx("h2", {
                className: "text-3xl font-semibold text-sky-900 mb-6",
                children: "Crafting Excellence Since 1995"
              }), /* @__PURE__ */ jsx("p", {
                className: "text-sky-800 text-lg leading-relaxed mb-6",
                children: "With over 25 years of experience in fine woodworking, I bring traditional craftsmanship into the modern era. Each piece I create is a unique blend of timeless techniques and contemporary design, ensuring furniture that's not just beautiful, but built to last generations."
              }), /* @__PURE__ */ jsx("p", {
                className: "text-sky-800 text-lg leading-relaxed mb-8",
                children: "Specializing in custom furniture, historic restorations, and bespoke cabinetry, I work closely with clients to bring their visions to life. Every project receives the same dedication to detail and excellence, whether it's a simple coffee table or an entire home's worth of custom furnishings."
              }), /* @__PURE__ */ jsxs("div", {
                className: "flex flex-wrap gap-3",
                children: [/* @__PURE__ */ jsx("span", {
                  className: "px-4 py-2 bg-sky-200 text-sky-800 rounded-full text-sm font-medium",
                  children: "Custom Furniture"
                }), /* @__PURE__ */ jsx("span", {
                  className: "px-4 py-2 bg-sky-200 text-sky-800 rounded-full text-sm font-medium",
                  children: "Historic Restoration"
                }), /* @__PURE__ */ jsx("span", {
                  className: "px-4 py-2 bg-sky-200 text-sky-800 rounded-full text-sm font-medium",
                  children: "Fine Woodworking"
                }), /* @__PURE__ */ jsx("span", {
                  className: "px-4 py-2 bg-sky-200 text-sky-800 rounded-full text-sm font-medium",
                  children: "Bespoke Design"
                })]
              })]
            })]
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "space-y-8",
          children: [/* @__PURE__ */ jsx("h3", {
            className: "text-2xl font-semibold text-sky-900",
            children: "Expertise"
          }), /* @__PURE__ */ jsxs("div", {
            className: "grid md:grid-cols-2 gap-6",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "bg-sky-100 rounded-lg p-6 shadow-md",
              children: [/* @__PURE__ */ jsx("h4", {
                className: "text-xl font-medium text-sky-900 mb-2",
                children: "Custom Furniture Design"
              }), /* @__PURE__ */ jsx("p", {
                className: "text-sky-800",
                children: "Creating unique pieces tailored to each client's specific needs and preferences, from concept to completion."
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "bg-sky-100 rounded-lg p-6 shadow-md",
              children: [/* @__PURE__ */ jsx("h4", {
                className: "text-xl font-medium text-sky-900 mb-2",
                children: "Restoration Services"
              }), /* @__PURE__ */ jsx("p", {
                className: "text-sky-800",
                children: "Breathing new life into antique and vintage furniture while preserving their historical integrity."
              })]
            })]
          })]
        })]
      })
    })
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: about,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
function meta() {
  return [{
    title: "Services | Ramadan Waly"
  }, {
    name: "description",
    content: "Discover our range of bespoke furniture services and craftsmanship solutions."
  }];
}
const services = withComponentProps(function Services() {
  return /* @__PURE__ */ jsx(Layout, {
    children: /* @__PURE__ */ jsxs("div", {
      className: "container mx-auto px-4 py-16",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "text-center mb-16",
        children: [/* @__PURE__ */ jsx("h1", {
          className: "text-4xl font-bold text-sky-900 mb-4",
          children: "Our Furniture Services"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-xl text-sky-800 max-w-2xl mx-auto",
          children: "Expert craftsmanship and bespoke furniture solutions for your home"
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-6xl mx-auto",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "bg-sky-100 rounded-xl shadow-lg p-4 sm:p-8 hover:shadow-xl transition-shadow",
          children: [/* @__PURE__ */ jsx("div", {
            className: "h-14 w-14 bg-sky-200 rounded-lg flex items-center justify-center mb-6",
            children: /* @__PURE__ */ jsx("svg", {
              className: "w-8 h-8 text-sky-600",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              })
            })
          }), /* @__PURE__ */ jsx("h3", {
            className: "text-xl font-semibold text-sky-900 mb-4",
            children: "Custom Bedroom Furniture"
          }), /* @__PURE__ */ jsx("p", {
            className: "text-sky-800 mb-4",
            children: "Bespoke bedroom furniture crafted to your exact specifications and style preferences."
          }), /* @__PURE__ */ jsxs("ul", {
            className: "text-sky-800 space-y-2",
            children: [/* @__PURE__ */ jsxs("li", {
              className: "flex items-center",
              children: [/* @__PURE__ */ jsx("span", {
                className: "text-sky-600 mr-2",
                children: "•"
              }), " Wardrobes & Closets"]
            }), /* @__PURE__ */ jsxs("li", {
              className: "flex items-center",
              children: [/* @__PURE__ */ jsx("span", {
                className: "text-sky-600 mr-2",
                children: "•"
              }), " Bed Frames & Headboards"]
            }), /* @__PURE__ */ jsxs("li", {
              className: "flex items-center",
              children: [/* @__PURE__ */ jsx("span", {
                className: "text-sky-600 mr-2",
                children: "•"
              }), " Bedside Tables"]
            })]
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "bg-sky-100 rounded-xl shadow-lg p-4 sm:p-8 hover:shadow-xl transition-shadow",
          children: [/* @__PURE__ */ jsx("div", {
            className: "h-14 w-14 bg-sky-200 rounded-lg flex items-center justify-center mb-6",
            children: /* @__PURE__ */ jsx("svg", {
              className: "w-8 h-8 text-sky-600",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              })
            })
          }), /* @__PURE__ */ jsx("h3", {
            className: "text-xl font-semibold text-sky-900 mb-4",
            children: "Kitchen Design & Installation"
          }), /* @__PURE__ */ jsx("p", {
            className: "text-sky-800 mb-4",
            children: "Complete kitchen solutions from design to installation, creating your perfect cooking space."
          }), /* @__PURE__ */ jsxs("ul", {
            className: "text-sky-800 space-y-2",
            children: [/* @__PURE__ */ jsxs("li", {
              className: "flex items-center",
              children: [/* @__PURE__ */ jsx("span", {
                className: "text-sky-600 mr-2",
                children: "•"
              }), " Custom Cabinetry"]
            }), /* @__PURE__ */ jsxs("li", {
              className: "flex items-center",
              children: [/* @__PURE__ */ jsx("span", {
                className: "text-sky-600 mr-2",
                children: "•"
              }), " Kitchen Islands"]
            }), /* @__PURE__ */ jsxs("li", {
              className: "flex items-center",
              children: [/* @__PURE__ */ jsx("span", {
                className: "text-sky-600 mr-2",
                children: "•"
              }), " Storage Solutions"]
            })]
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "bg-sky-100 rounded-xl shadow-lg p-4 sm:p-8 hover:shadow-xl transition-shadow",
          children: [/* @__PURE__ */ jsx("div", {
            className: "h-14 w-14 bg-sky-200 rounded-lg flex items-center justify-center mb-6",
            children: /* @__PURE__ */ jsx("svg", {
              className: "w-8 h-8 text-sky-600",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              })
            })
          }), /* @__PURE__ */ jsx("h3", {
            className: "text-xl font-semibold text-sky-900 mb-4",
            children: "Furniture Restoration"
          }), /* @__PURE__ */ jsx("p", {
            className: "text-sky-800 mb-4",
            children: "Expert restoration services to bring your cherished furniture pieces back to life."
          }), /* @__PURE__ */ jsxs("ul", {
            className: "text-sky-800 space-y-2",
            children: [/* @__PURE__ */ jsxs("li", {
              className: "flex items-center",
              children: [/* @__PURE__ */ jsx("span", {
                className: "text-sky-600 mr-2",
                children: "•"
              }), " Antique Restoration"]
            }), /* @__PURE__ */ jsxs("li", {
              className: "flex items-center",
              children: [/* @__PURE__ */ jsx("span", {
                className: "text-sky-600 mr-2",
                children: "•"
              }), " Repairs & Refinishing"]
            }), /* @__PURE__ */ jsxs("li", {
              className: "flex items-center",
              children: [/* @__PURE__ */ jsx("span", {
                className: "text-sky-600 mr-2",
                children: "•"
              }), " Upholstery Services"]
            })]
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "bg-sky-100 rounded-xl shadow-lg p-4 sm:p-8 hover:shadow-xl transition-shadow",
          children: [/* @__PURE__ */ jsx("div", {
            className: "h-14 w-14 bg-sky-200 rounded-lg flex items-center justify-center mb-6",
            children: /* @__PURE__ */ jsx("svg", {
              className: "w-8 h-8 text-sky-600",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z"
              })
            })
          }), /* @__PURE__ */ jsx("h3", {
            className: "text-xl font-semibold text-sky-900 mb-4",
            children: "Door & Window Fitting"
          }), /* @__PURE__ */ jsx("p", {
            className: "text-sky-800 mb-4",
            children: "Professional installation of custom doors and windows to enhance your home."
          }), /* @__PURE__ */ jsxs("ul", {
            className: "text-sky-800 space-y-2",
            children: [/* @__PURE__ */ jsxs("li", {
              className: "flex items-center",
              children: [/* @__PURE__ */ jsx("span", {
                className: "text-sky-600 mr-2",
                children: "•"
              }), " Custom Door Installation"]
            }), /* @__PURE__ */ jsxs("li", {
              className: "flex items-center",
              children: [/* @__PURE__ */ jsx("span", {
                className: "text-sky-600 mr-2",
                children: "•"
              }), " Window Fitting"]
            }), /* @__PURE__ */ jsxs("li", {
              className: "flex items-center",
              children: [/* @__PURE__ */ jsx("span", {
                className: "text-sky-600 mr-2",
                children: "•"
              }), " Frame Repairs"]
            })]
          })]
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "text-center mt-16",
        children: /* @__PURE__ */ jsx("a", {
          href: "mailto:ramadan.waly@outlook.com",
          className: "bg-sky-600 text-white px-8 py-3 rounded-lg hover:bg-sky-700 transition-colors inline-block",
          children: "Request a Quote"
        })
      })]
    })
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: services,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-BqKDnr5N.js", "imports": ["/assets/chunk-D4RADZKF-af7J5MXj.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-CiGfUJHG.js", "imports": ["/assets/chunk-D4RADZKF-af7J5MXj.js", "/assets/with-props-BdOAGcDU.js"], "css": ["/assets/root-D-lVR1un.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-FPiU0HkH.js", "imports": ["/assets/with-props-BdOAGcDU.js", "/assets/chunk-D4RADZKF-af7J5MXj.js", "/assets/Layout-C9viDPmg.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "/about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/about-DVqaKInX.js", "imports": ["/assets/with-props-BdOAGcDU.js", "/assets/chunk-D4RADZKF-af7J5MXj.js", "/assets/Layout-C9viDPmg.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/services": { "id": "routes/services", "parentId": "root", "path": "/services", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/services-CBOyBUDV.js", "imports": ["/assets/with-props-BdOAGcDU.js", "/assets/chunk-D4RADZKF-af7J5MXj.js", "/assets/Layout-C9viDPmg.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-f5b307e9.js", "version": "f5b307e9", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "/about",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/services": {
    id: "routes/services",
    parentId: "root",
    path: "/services",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
