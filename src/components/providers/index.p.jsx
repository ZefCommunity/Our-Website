import { QueryProvider } from "./query-provider";

export function Providers({ children }) {
  return <QueryProvider>{children}</QueryProvider>;
}
