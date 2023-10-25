import { HomeScreen } from "./screens/HomeScreen";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { ProductDetailScreen } from "./screens/ProductDetailScreen";
import { CartScreen } from "./screens/CartScreen";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomeScreen />} />
                <Route path="/categories" element={<h1>Categories</h1>} />
                <Route path="/news" element={<h1>News</h1>} />
                <Route path="/product/:id" element={<ProductDetailScreen />} />
                <Route path="/cart" element={<CartScreen />} />
                {/* Using path="*"" means "match anything", so this route
              acts like a catch-all for URLs that we don't have explicit
              routes for. */}
                <Route path="*" element={<h2> OOps </h2>} />
            </Route>
        </Routes>
    );
}

export default App;
