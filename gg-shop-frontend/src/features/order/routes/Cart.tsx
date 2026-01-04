import { Link } from 'react-router-dom';
import { useCartStore } from '../stores/cart';

export const Cart = () => {
    const { items, removeItem, updateQuantity } = useCartStore();

    const total = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

    if (items.length === 0) {
        return (
            <div className="py-12 text-center">
                <h2 className="text-2xl font-bold">장바구니가 비어있습니다.</h2>
                <Link to="/products" className="mt-4 inline-block text-indigo-600 hover:text-indigo-500">
                    상품 구경하러 가기
                </Link>
            </div>
        );
    }

    return (
        <div className="py-6">
            <h1 className="mb-6 text-2xl font-bold">장바구니</h1>
            <div className="flow-root">
                <ul className="-my-6 divide-y divide-gray-200">
                    {items.map((item) => (
                        <li key={item.id} className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                {item.product.imageUrl ? (
                                    <img
                                        src={item.product.imageUrl}
                                        alt={item.product.name}
                                        className="h-full w-full object-cover object-center"
                                    />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center bg-gray-100 text-xs">No Img</div>
                                )}
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                            <Link to={`/products/${item.product.id}`}>{item.product.name}</Link>
                                        </h3>
                                        <p className="ml-4">{(item.product.price * item.quantity).toLocaleString()}원</p>
                                    </div>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">
                                        수량:
                                        <select
                                            value={item.quantity}
                                            onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                                            className="ml-2 rounded border p-1"
                                        >
                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                                                <option key={n} value={n}>{n}</option>
                                            ))}
                                        </select>
                                    </p>

                                    <div className="flex">
                                        <button
                                            type="button"
                                            onClick={() => removeItem(item.id)}
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                            삭제
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-8 border-t border-gray-200 py-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>총 주문 금액</p>
                    <p>{total.toLocaleString()}원</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">배송비와 세금은 결제 시 계산됩니다.</p>
                <div className="mt-6">
                    <Link
                        to="/orders/checkout"
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                        주문하기
                    </Link>
                </div>
            </div>
        </div>
    );
};
