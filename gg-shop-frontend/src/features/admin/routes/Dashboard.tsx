export const Dashboard = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">관리자 대시보드</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-medium text-gray-900">총 주문수</h3>
                    <p className="mt-2 text-3xl font-bold text-indigo-600">123</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-medium text-gray-900">총 상품수</h3>
                    <p className="mt-2 text-3xl font-bold text-indigo-600">45</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-medium text-gray-900">회원수</h3>
                    <p className="mt-2 text-3xl font-bold text-indigo-600">890</p>
                </div>
            </div>
        </div>
    );
};
