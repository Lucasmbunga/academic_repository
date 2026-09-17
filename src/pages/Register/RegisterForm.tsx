import { useEffect, useState, type FC } from "react";
import { Button, Input, PasswordInput, SuccessModal } from "../../components";
import { useForm, useWatch, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import useRegisterUser from "../../hooks/useRegisterUser";
import useInstitutions from "../../hooks/useInstitutions";
import useFaculties from "../../hooks/useFaculties";
import { useCourses } from "../../hooks/useCourses";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const registerSchema = z.object({
  name: z.string().min(8, 'Nome é obrigatório'),
  email: z.email('E-mail inválido'),
  password: z.string().min(6, 'A palavra-passe deve ter pelo menos 6 caracteres'),
  institutionId: z.union([z.number(),z.undefined()]),
  facultyId: z.union([z.number(),z.undefined()]),
  courseId: z.union([z.number(),z.undefined()]),
  role:z.enum(["STUDENT","VISITOR"])
});

type RegisterFormData = z.infer<typeof registerSchema>;

export const RegisterForm: FC = () => {
  const {register,handleSubmit,setValue,setError,reset,control,formState: { errors },} = useForm<RegisterFormData>({resolver:zodResolver(registerSchema)});
  const [isStudent,setIsStudent]=useState<boolean>(false); 
  const {mutate: registerUser,isSuccess,isPending,isError,} = useRegisterUser();

  const [status, setStatus] = useState<"success" | "error">("error");
  const [message, setMessage] = useState<string>("");
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const [selectedInstitutionId, setSelectedInstitutionId] = useState<number>(0);
  const selectedFacultyId = useWatch({ control, name: "facultyId" });

  const { data: institutions, isSuccess: institutionsLoaded } =
    useInstitutions();
  const { data: faculties, isSuccess: facultiesLoaded } = useFaculties(
    selectedInstitutionId,
  );
  const { data: courses } = useCourses(selectedFacultyId);

  const navigate = useNavigate();

  const selectInstitution = (institutionName: string) => {
    const selectedInstitution = institutions?.find(
      (institution) => institution.name === institutionName,
    );
    if (selectedInstitution) {
      setSelectedInstitutionId(selectedInstitution?.id as number);
      setValue("institutionId", selectedInstitutionId);
    }
  };

  const onChangeInstitution=(institutionName:string)=>{
    if(institutions?.find(institution=>institution.name===institutionName)){
      selectInstitution(institutionName)}
    else{
      setError('institutionId',{message: "Instituição não encontrada."})

    }
  }

  const onSubmit:SubmitHandler<RegisterFormData> = (userData) => {
    registerUser(userData);
  };

  const openModal = () => {
    if (isSuccess || isError) {
      setShowSuccessModal(true);
    }
  };

  useEffect(() => {
    let timer: number;
    if (isSuccess) {
      setStatus("success");
      setMessage("Conta criada com sucesso!");
      reset()
      timer = setTimeout(() => {
        navigate("/login");
      }, 5000);
    } else {
      setStatus("error");
      setMessage("Erro ao criar conta");
    }

    openModal();

    setTimeout(() => {
      setShowSuccessModal(false);
    }, 5000);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isSuccess, isError, navigate]);

  useEffect(() => {
    
    if (institutionsLoaded) {
      const defaultInstitutionId = institutions?.at(0)?.id;
      setValue("institutionId", defaultInstitutionId as number);
    }
    if (facultiesLoaded) {
      const defaultFacultyId = faculties?.at(0)?.id;
      setValue("facultyId", defaultFacultyId as number);
    }

    if(isStudent){
      setValue('role',"STUDENT");
    }
    else{
      setValue('role',"VISITOR");
      
    }
  }, [facultiesLoaded, institutionsLoaded,setValue,isStudent]);
  
  return (
    <div className="h-screen">
      <div className="h-full grid grid-cols-1 lg:grid-cols-2 items-center gap-4 transition-all duration-300 ease-linear">
        <div className="hidden lg:block h-full bg-[#75333c] rounded-md"></div>
        <div className="px-6 sm:px-12 py-6 transition-all duration-300 ease-linear">
          <h2 className="text-4xl md:text-5xl  text-[#54232D] font-bold tracking-tight mb-4 transition-all duration-300 ease-linear">
            Criar a sua conta
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
              <Input label="Nome completo" type="text" placeholder="Nome Completo" error={errors.name} {...register("name")}/>
              <Input label="E-mail" type="email" placeholder="ex: nome@gmail.com" error={errors.email} {...register("email")}/>
              <PasswordInput label="Palavra-passe" error={errors.password} placeholder="A sua palavra-passe" {...register("password")}
              />
            </div>
            <div className="flex items-center gap-2 my-2">
              <input type="checkbox" id="" onChange={()=>setIsStudent(!isStudent)}/>
              <label htmlFor="">Sou estudante universitário</label>
            </div>
              {errors.role && (<p className="text-xs text-red-400 pt-1 pb-4">{errors.role?.message}</p>)}

            
            {isStudent && (
              <div>
                <div className="flex flex-col gap-4">
                  <Input type="text" list="institutionsList" onChange={(event) => onChangeInstitution(event.target.value)}
                    label="Universidade"
                    error={errors.institutionId}
                  >
                    <p>
                      <datalist id="institutionsList">
                        {institutions?.map((institution) => (
                          <option value={institution.name} key={institution.id}></option>
                        ))}
                      </datalist>
                    </p>
                  </Input>
                  <div className="flex flex-col min-[400px]:flex-row gap-4 *:w-full">
                    <div>
                      <label htmlFor="">Faculdade</label>
                      <select
                        id=""
                        {...register("facultyId",{valueAsNumber:true,value:0})}
                        disabled={!selectedInstitutionId}
                        className="flex items-center justify-between w-full px-4 py-2 bg-[#FBF9F5] rounded-md border border-[#DED5C7]  focus:border-2 focus:border-[#F0C995] disabled:bg-gray-200 disabled:border-none disabled:ring-1 disabled:ring-gray-300 "
                      >
                        {faculties?.map((faculty) => (
                          <option value={faculty.id} key={faculty.id}>{faculty.name}</option>
                        ))}
                      </select>
                        {errors.facultyId && (<p className="text-xs text-red-400 pt-1 pb-4">{errors.facultyId?.message}</p>)}

                    </div>
                    <div>
                      <label htmlFor="">Curso</label>
                      <select id="" {...register("courseId",{valueAsNumber:true,value:0})}
                        disabled={!selectedFacultyId}
                        className="flex items-center justify-between w-full px-4 py-2 bg-[#FBF9F5] rounded-md border border-[#DED5C7]  focus:border-2 focus:border-[#F0C995] invalid:border-red-500 disabled:bg-gray-200 disabled:border-none disabled:ring-1 disabled:ring-gray-300"
                      >
                        {courses?.map((course) => (
                          <option value={course.id} key={course.id}> {course.name}</option>
                        ))}
                      </select>
                      {errors.courseId && (<p className="text-xs text-red-400 pt-1 pb-4">{errors.courseId.message}</p>)}
                    </div>
                  </div>
                </div>
              </div>
            )}
            <Button
              defaultText="Criar conta" loadingText="Criando a conta..." isLoading={isPending} isSucess={isSuccess}/>
            <p className="text-sm text-center mx-auto mt-4">
              Tem uma conta?{" "}
              <Link
                to={"/login"}
                className="text-sm font-bold text-[#75333c] underline decoration-[#c6903f] underline-offset-4"
              >
                Entrar
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
      <SuccessModal message={message} status={status} isOpen={showSuccessModal}/>
    </div>
  );
};
