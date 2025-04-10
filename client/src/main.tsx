import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { UserProvider } from "./contexts/user-context";

// Make sure React is properly loading the context
const root = createRoot(document.getElementById("root")!);

root.render(
  <UserProvider>
    <App />
  </UserProvider>
);
