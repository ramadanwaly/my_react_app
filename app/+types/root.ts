import type { MetaFunction, LinksFunction as RouterLinksFunction } from "react-router";

export namespace Route {
  export type MetaArgs = Parameters<MetaFunction>[0];
  export type LinksFunction = RouterLinksFunction;
  export interface ErrorBoundaryProps {
    error: Error;
  }
} 