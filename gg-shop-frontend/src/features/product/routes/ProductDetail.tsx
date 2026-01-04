import { useParams } from 'react-router-dom';

export const ProductDetail = () => {
    const { productId } = useParams();

    return (
        <div className="py-6">
            <h1 className="text-2xl font-bold">상품 상세 정보 (ID: {productId})</h1>
            <p className="mt-4">상품 상세 정보 페이지 준비 중입니다.</p>
        </div>
    );
};
