import { Link, Outlet } from 'react-router-dom';

export const MainLayout = () => {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="border-b bg-white shadow-sm">
                <div className="container mx-auto flex h-16 items-center justify-between px-4">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="text-xl font-bold text-indigo-600">
                            GG-Shop
                        </Link>
                        <nav className="hidden md:flex gap-6">
                            <Link to="/products" className="text-gray-600 hover:text-indigo-600">
                                상품 목록
                            </Link>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to="/auth/login" className="text-sm font-medium text-gray-600 hover:text-indigo-600">
                            로그인
                        </Link>
                        <Link to="/auth/register" className="text-sm font-medium text-gray-600 hover:text-indigo-600">
                            회원가입
                        </Link>
                    </div>
                </div>
            </header>
            <main className="flex-1 bg-gray-50 p-4">
                <div className="container mx-auto">
                    <Outlet />
                </div>
            </main>
            <footer className="border-t bg-white py-6 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} GG-Shop. All rights reserved.
            </footer>
        </div>
    );
};
