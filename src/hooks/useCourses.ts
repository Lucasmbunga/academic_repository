import { useQuery } from "@tanstack/react-query";
import api from "../services/api";
import type { AxiosPromise } from "axios";
import type { CourseProps, PageModel, ResponseProps } from "../types/types";


const getCourses=async (facultyId?: number):AxiosPromise<ResponseProps<PageModel<CourseProps[]>>> => {
      const response = await api.get(`/courses/faculties/${facultyId}`);
      return response;
    }

export const useCourses = (facultyId?: number) => {
  const query= useQuery({
    queryKey: ['courses', facultyId],
    queryFn:()=> getCourses(facultyId),
    enabled: !!facultyId && facultyId>0, // Executa APENAS quando o ID da faculdade for válido
  });

  return {...query,data:query.data?.data.data.content}
};