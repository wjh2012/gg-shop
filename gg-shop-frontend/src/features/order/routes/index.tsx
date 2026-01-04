import { Route, Routes } from 'react-router-dom';
import { Cart } from './Cart';

export const OrderRoutes = () => {
    return (
        <Routes>
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<div>Checkout Page (WIP)</div>} />
        </Routes>
    );
};
