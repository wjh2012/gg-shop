import { Route, Routes } from 'react-router-dom';
import { AdminLayout } from '../components/AdminLayout';
import { Dashboard } from './Dashboard';

export const AdminRoutes = () => {
    return (
        <Routes>
            <Route element={<AdminLayout />}>
                <Route path="" element={<Dashboard />} />
                <Route path="products" element={<div>상품 관리 (WIP)</div>} />
                <Route path="orders" element={<div>주문 관리 (WIP)</div>} />
            </Route>
        </Routes>
    );
};
