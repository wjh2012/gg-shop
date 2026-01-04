import { useMutation } from '@tanstack/react-query';
import { api } from '@/lib/axios';
import { z } from 'zod';
import { MutationConfig } from '@/lib/react-query';
import { AuthResponse } from '../types';

export const loginInputSchema = z.object({
    email: z.string().email('이메일 형식이 올바르지 않습니다.'),
    password: z.string().min(1, '비밀번호를 입력해주세요.'),
});

export type LoginInput = z.infer<typeof loginInputSchema>;

export const login = (data: LoginInput): Promise<AuthResponse> => {
    return api.post('/auth/login', data);
};

type UseLoginOptions = {
    mutationConfig?: MutationConfig<typeof login>;
};

export const useLogin = ({ mutationConfig }: UseLoginOptions = {}) => {
    return useMutation({
        onSuccess: (data) => {
            // Store token (implementation depends on requirement, usually localStorage or cookie)
            localStorage.setItem('token', data.token);
            console.log('Login success', data);
        },
        ...mutationConfig,
        mutationFn: login,
    });
};
