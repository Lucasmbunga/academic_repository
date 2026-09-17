import '@tanstack/react-query';
import type { ResponseProps } from "./types";

declare module '@tanstack/react-query' {
  interface Register {
    defaultError: ResponseProps;
  }
}
