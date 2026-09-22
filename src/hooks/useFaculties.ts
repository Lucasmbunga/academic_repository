import type { AxiosPromise } from "axios";
import api from "../services/api"
import { useQuery } from "@tanstack/react-query";
import type { FacultyProps, PageModel, ResponseProps } from "../types/types";

const getFacultiesByInstitution = async (institutionId: number):AxiosPromise<ResponseProps<PageModel<FacultyProps[]>>> => {
    const response =await api.get('/faculties/institutions/' + institutionId);
    return response;
}

export const useGetFacultiesByInstitution=(institutionId: number)=>{
    const query=useQuery({
        queryKey:['faculties',institutionId],
        queryFn:()=>getFacultiesByInstitution(institutionId),
        retry:2,
        enabled:!!institutionId && institutionId > 0

    })
    return {...query,data:query.data?.data.data.content}
}
