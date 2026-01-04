import { useMutation } from '@tanstack/react-query';
import { api } from '@/lib/axios';
import { z } from 'zod';
import { MutationConfig } from '@/lib/react-query';
import { AuthResponse } from '../types';

export const registerInputSchema = z.object({
    email: z.string().email('이메일 형식이 올바르지 않습니다.'),
    password: z.string().min(1, '비밀번호를 입력해주세요.'),
    name: z.string().min(1, '이름을 입력해주세요.'),
});

export type RegisterInput = z.infer<typeof registerInputSchema>;

export const register = (data: RegisterInput): Promise<AuthResponse> => {
    return api.post('/auth/signup', data);
};

type UseRegisterOptions = {
    mutationConfig?: MutationConfig<typeof register>;
};

export const useRegister = ({ mutationConfig }: UseRegisterOptions = {}) => {
    return useMutation({
        onSuccess: (data) => {
            // You might want to automatically log the user in or store the token here
            console.log('Registration success', data);
        },
        ...mutationConfig,
        mutationFn: register,
    });
};
