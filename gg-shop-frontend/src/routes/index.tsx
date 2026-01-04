import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthRoutes } from '@/features/auth/routes';
import { ProductRoutes } from '@/features/product/routes';
import { OrderRoutes } from '@/features/order/routes';
import { AdminRoutes } from '@/features/admin/routes';
import { MainLayout } from '@/components/layouts/MainLayout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '',
                element: <div>Home Page (Landing)</div>,
            },
            {
                path: 'products/*',
                element: <ProductRoutes />,
            },
            {
                path: 'orders/*',
                element: <OrderRoutes />,
            },
        ]
    },
    {
        path: '/admin/*',
        element: <AdminRoutes />,
    },
    {
        path: '/auth/*',
        element: <AuthRoutes />,
    }
]);

export const AppRoutes = () => {
    return <RouterProvider router={router} />;
};
