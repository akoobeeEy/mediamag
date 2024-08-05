import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LazySpinner } from "@/components/lazy-load-spinner";
import { MainLayout, OrderLayout } from "@/layouts";
const Home = lazy(() => import("@/pages/home/Home"));
const Cart = lazy(() => import("@/pages/cart/Cart"));
const Order = lazy(() => import("@/pages/order/Order"));

function App() {
  return (
    <Suspense fallback={<LazySpinner />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/" element={<OrderLayout />}>
            <Route path="cart" element={<Cart />} />
            <Route path="order" element={<Order/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
