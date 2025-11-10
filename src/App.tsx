import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./core/routes/router";
import { ThemeProvider } from "./core/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
