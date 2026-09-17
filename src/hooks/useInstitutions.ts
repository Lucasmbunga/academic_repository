import type { AxiosPromise } from "axios";
import  api  from "../services/api"
import type { InstitutionProps, PageModel, ResponseProps } from "../types/types";
import { useQuery } from "@tanstack/react-query";

const getInstitutions = async (): AxiosPromise<ResponseProps<PageModel<InstitutionProps[]>>> => {
    const response = await api.get('/institutions');
    return response;
}

const useGetInstitutions = () => {
    const query = useQuery({
        queryKey: ['institutions'],
        queryFn: getInstitutions,
        retry: 2
    })
    return {...query,data:query.data?.data.data.content}
}

export default useGetInstitutions;