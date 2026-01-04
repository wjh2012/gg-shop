import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/features/product/types';

export type CartItem = {
    id: string; // product id + options if any
    productId: number;
    product: Product;
    quantity: number;
};

type CartStore = {
    items: CartItem[];
    addItem: (product: Product) => void;
    removeItem: (itemId: string) => void;
    updateQuantity: (itemId: string, quantity: number) => void;
    clearCart: () => void;
};

export const useCartStore = create<CartStore>()(
    persist(
        (set) => ({
            items: [],
            addItem: (product) =>
                set((state) => {
                    const existingItem = state.items.find((item) => item.productId === product.id);
                    if (existingItem) {
                        return {
                            items: state.items.map((item) =>
                                item.productId === product.id
                                    ? { ...item, quantity: item.quantity + 1 }
                                    : item
                            ),
                        };
                    }
                    return {
                        items: [
                            ...state.items,
                            { id: `${product.id}`, productId: product.id, product, quantity: 1 },
                        ],
                    };
                }),
            removeItem: (itemId) =>
                set((state) => ({ items: state.items.filter((item) => item.id !== itemId) })),
            updateQuantity: (itemId, quantity) =>
                set((state) => ({
                    items: state.items.map((item) =>
                        item.id === itemId ? { ...item, quantity } : item
                    ),
                })),
            clearCart: () => set({ items: [] }),
        }),
        {
            name: 'cart-storage',
        }
    )
);
