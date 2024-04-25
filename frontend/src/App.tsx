import { HomeScreen } from "./screens/HomeScreen";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { ProductDetailScreen } from "./screens/ProductDetailScreen";
import { CartScreen } from "./screens/CartScreen";
import WishListScreen from "./screens/WishListScreen";
import { DatenschutzScreen } from "./screens/DatenschutzScreen";
import { ImpressumScreen } from "./screens/ImpressumScreen";
import { ContactScreen } from "./screens/ContactScreen";
import { ShoppingInfoScreen } from "./screens/ShoppingInfoScreen";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomeScreen />} />
                <Route path="/categories" element={<h1>Categories</h1>} />
                <Route path="/news" element={<h1>News</h1>} />
                <Route path="/product/:id" element={<ProductDetailScreen />} />
                <Route path="/cart" element={<CartScreen />} />
                <Route path="/wish-list" element={<WishListScreen />} />
                <Route path="/datenschutz" element={<DatenschutzScreen />} />
                <Route path="/impressum" element={<ImpressumScreen />} />
                <Route path="/contact" element={<ContactScreen />} />
                <Route path="/shopping-info" element={<ShoppingInfoScreen />} />
                {/* Using path="*"" means "match anything", so this route
              acts like a catch-all for URLs that we don't have explicit
              routes for. */}
                <Route path="*" element={<h2> OOps </h2>} />
            </Route>
        </Routes>
    );
}

export default App;
