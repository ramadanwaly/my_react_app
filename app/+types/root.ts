import type {
  MetaFunction,
  LinksFunction as RouterLinksFunction,
} from "react-router";

export type RouteMetaArgs = Parameters<MetaFunction>[0];
export type RouteLinksFunction = RouterLinksFunction;
export interface RouteErrorBoundaryProps {
  error: Error;
}
