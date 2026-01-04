export type User = {
    id: number;
    email: string;
    role: 'ADMIN' | 'USER';
};

export type AuthResponse = {
    token: string;
    user: User;
};
