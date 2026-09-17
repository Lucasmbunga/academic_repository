export interface LoginData {
  email: string;
  password: string;
}

export interface UserRegisterProps {
  name: string;
  email: string;
  password: string;
  institutionId: number | undefined;
  facultyId: number | undefined;
  courseId: number | undefined;
  role: "STUDENT" | "VISITOR";
}

export interface PageProps {
  page:number;
  number:number;
  size:number;
  totalElements:number;
  totalPages:number;
}
export interface PageModel<T>{
  content:T;
  page:PageProps;
}
export interface ResponseProps<T> {
  sucess: boolean;
  data: T ;
  errors: [],
  errorCode: number;
  message: string;
  timestamp: Date;
  path: string;
}

export interface InstitutionProps {
  id: number;
  name: string;
  acronym: string;
  type: string;
}

export interface FacultyProps {
  id: number;
  name: string;
  acronym: string;
  institutionName: string;
}

export interface CourseProps {
  id: number;
  name: string;
  degree: string;
  duration: number;
  institutionName: string;
}
