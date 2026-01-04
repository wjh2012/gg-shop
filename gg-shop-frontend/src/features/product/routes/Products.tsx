import { Link } from 'react-router-dom';
import { useProducts } from '../api/getProducts';
import { Spinner } from '@/components/ui/spinner';

export const Products = () => {
    const { data: products, isLoading, error } = useProducts();

    if (isLoading) {
        return (
            <div className="flex h-48 w-full items-center justify-center">
                <Spinner size="lg" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex h-48 w-full items-center justify-center text-red-500">
                상품을 불러오는데 실패했습니다.
            </div>
        );
    }

    return (
        <div className="py-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">상품 목록</h1>
                <p className="mt-2 text-sm text-gray-500">최고의 게이밍 기어를 만나보세요.</p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products?.map((product) => (
                    <div key={product.id} className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
                            {product.imageUrl ? (
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-400">
                                    No Image
                                </div>
                            )}
                        </div>
                        <div className="mt-4 flex justify-between px-4 pb-4">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                    <Link to={`/products/${product.id}`}>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {product.name}
                                    </Link>
                                </h3>
                            </div>
                            <p className="text-sm font-medium text-gray-900">{product.price.toLocaleString()}원</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

