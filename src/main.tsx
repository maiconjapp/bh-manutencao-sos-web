
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create root element and render the app
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Failed to find the root element");
  throw new Error("Failed to find the root element");
}

const root = createRoot(rootElement);

// Render the app with strict mode disabled to avoid double rendering in development
root.render(<App />);
