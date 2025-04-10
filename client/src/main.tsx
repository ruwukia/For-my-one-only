import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Create the React root and render the app
const root = createRoot(document.getElementById("root")!);

root.render(<App />);
