import { Link, Outlet } from 'react-router-dom';

// Note: Real implementation would check user role here
export const AdminLayout = () => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <aside className="w-64 bg-white shadow-md">
                <div className="p-6">
                    <h1 className="text-xl font-bold text-indigo-600">GG-Shop Admin</h1>
                </div>
                <nav className="px-4 space-y-2">
                    <Link to="/admin" className="block rounded px-4 py-2 text-gray-700 hover:bg-gray-100">
                        대시보드
                    </Link>
                    <Link to="/admin/products" className="block rounded px-4 py-2 text-gray-700 hover:bg-gray-100">
                        상품 관리
                    </Link>
                    <Link to="/admin/orders" className="block rounded px-4 py-2 text-gray-700 hover:bg-gray-100">
                        주문 관리
                    </Link>
                    <div className="pt-4 border-t">
                        <Link to="/" className="block rounded px-4 py-2 text-gray-500 hover:bg-gray-50">
                            쇼핑몰로 돌아가기
                        </Link>
                    </div>
                </nav>
            </aside>
            <main className="flex-1 p-8">
                <Outlet />
            </main>
        </div>
    );
};
