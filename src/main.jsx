import { StrictMode, Component } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Global Error Handler for startup crashes
window.onerror = function (message, source, lineno, colno, error) {
  const root = document.getElementById("root");
  if (root) {
    root.innerHTML += `<div style="color: red; padding: 20px; border: 1px solid red; margin: 20px; font-family: monospace;">
      <h3>Startup Error</h3>
      <p>${message}</p>
      <pre>${source}:${lineno}:${colno}</pre>
    </div>`;
  }
  console.error("Global Error:", error);
};

console.log("App initializing...");

// React Error Boundary to catch render errors
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React Error Boundary:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "40px", fontFamily: "monospace", color: "red" }}>
          <h1>Something went wrong.</h1>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

try {
  const rootElement = document.getElementById("root");
  if (!rootElement) throw new Error("Root element not found");

  createRoot(rootElement).render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>,
  );
  console.log("App mounted successfully");
} catch (e) {
  console.error("Mount Error:", e);
  document.body.innerHTML += `<div style="color: red; padding: 20px; font-family: monospace;">Mount Error: ${e.message}</div>`;
}
