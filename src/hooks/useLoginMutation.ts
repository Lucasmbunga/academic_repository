import type { AxiosPromise } from "axios";
import api from "../services/api"
import type { LoginData, ResponseProps } from "../types/types"
import { useMutation } from "@tanstack/react-query";

interface LoginResponse {
    token: string;
}
const login = async (loginData: LoginData): AxiosPromise<ResponseProps<LoginResponse>> => {
    const response = await api.post('/auth/login', loginData);
    return response;
}

const useLoginMutation = () => {
    const mutation = useMutation({
        mutationFn: login,
        retry: 2
    })

    return { ...mutation, data: mutation.data?.data };
}
export default useLoginMutation;