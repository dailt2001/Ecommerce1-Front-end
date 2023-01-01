import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
    Home,
    Login,
    Register,
    ProductDetails,
    ProductList,
    Cart,
} from "./pages";
import {
    UserOrders,
    UserCartDetails,
    UserOrderDetails,
    UserProfile,
} from "./pages/user";
import { ProtectedRoutesComponents, Header, Footer } from "./components";
import {
    AdminAnalytics,
    AdminChats,
    AdminCreateProduct,
    AdminEditProduct,
    AdminEditUser,
    AdminOrderDetails,
    AdminOrders,
    AdminProducts,
    AdminUsers,
} from "./pages/admin";
import RoutesWithUserChat from "./components/user/RoutesWithUserChat";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route element={<RoutesWithUserChat />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/product-list" element={<ProductList />} />
                    <Route
                        path="/product-details"
                        element={<ProductDetails />}
                    />
                    <Route
                        path="/product-details/:id"
                        element={<ProductDetails />}
                    />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<Home />} />
                </Route>
                {/* User */}

                <Route element={<ProtectedRoutesComponents admin={false} />}>
                    <Route path="/user" element={<UserProfile />} />
                    <Route path="/user/my-orders" element={<UserOrders />} />
                    <Route
                        path="/user/cart-details"
                        element={<UserCartDetails />}
                    />
                    <Route
                        path="/user/order-details"
                        element={<UserOrderDetails />}
                    />
                </Route>

                {/* Admin */}

                <Route element={<ProtectedRoutesComponents admin={true} />}>
                    <Route path="/admin/user" element={<AdminUsers />} />
                    <Route
                        path="/admin/edit-user"
                        element={<AdminEditUser />}
                    />
                    <Route path="/admin/products" element={<AdminProducts />} />
                    <Route
                        path="/admin/create-new-product"
                        element={<AdminCreateProduct />}
                    />
                    <Route
                        path="/admin/edit-product"
                        element={<AdminEditProduct />}
                    />
                    <Route path="/admin/orders" element={<AdminOrders />} />
                    <Route
                        path="/admin/order-details"
                        element={<AdminOrderDetails />}
                    />
                    <Route path="/admin/chat" element={<AdminChats />} />
                    <Route
                        path="/admin/analytics"
                        element={<AdminAnalytics />}
                    />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
