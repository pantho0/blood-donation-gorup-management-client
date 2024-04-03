
import ReactDOM from "react-dom/client";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Routes.jsx";
import ThemeProvider from "./components/utils/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
 <ThemeProvider>
   <RouterProvider router={router}/>
 </ThemeProvider>
);
