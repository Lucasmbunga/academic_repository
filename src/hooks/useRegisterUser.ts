import { useMutation } from "@tanstack/react-query";
import  api  from "../services/api";
import type { ResponseProps, UserRegisterProps } from "../types/types";

const registerUser=async(userData:UserRegisterProps)=>{
    const response=await api.post('/auth/register',userData);
    return response.data
}

const useRegisterUser=()=>{
    const mutate=useMutation<void, ResponseProps<null>, UserRegisterProps>({
        mutationFn:registerUser,
        retry:2
    })

    return mutate;
}
export default useRegisterUser;