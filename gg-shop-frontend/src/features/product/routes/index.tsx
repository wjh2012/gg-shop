import { Route, Routes } from 'react-router-dom';
import { Products } from './Products';
import { ProductDetail } from './ProductDetail';

export const ProductRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<Products />} />
            <Route path=":productId" element={<ProductDetail />} />
        </Routes>
    );
};
