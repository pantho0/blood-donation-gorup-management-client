
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Routes.jsx";
import ThemeProvider from "./components/utils/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
 <ThemeProvider>
   <RouterProvider router={router}/>
 </ThemeProvider>
);
