import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/axios';
import { QueryConfig } from '@/lib/react-query';
import { Product } from '../types';

export const getProducts = (): Promise<Product[]> => {
    return api.get('/items');
};

type UseProductsOptions = {
    queryConfig?: QueryConfig<typeof getProducts>;
};

export const useProducts = ({ queryConfig }: UseProductsOptions = {}) => {
    return useQuery({
        queryKey: ['products'],
        queryFn: () => getProducts(),
        ...queryConfig,
    });
};
