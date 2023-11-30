import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { DefaultLayout } from "../layout/defaultLayout/index.jsx";
import { Home } from "../pages/Home/index.jsx";
import { NotFould } from "../pages/error/index.jsx";
import { Article } from "../pages/Articles/index.jsx";

export default function LayoutRouter() {
    return (
        <Router>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="/artigos" element={<Article />} />
          </Route>
            <Route path= "*" element={<NotFould />} />
        </Routes>
      </Router>
    );
}
