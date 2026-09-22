import { useEffect, useState, type ChangeEvent, type FC } from "react";
import { Button, Input, PasswordInput, SuccessModal } from "../../components";
import { useForm, useWatch, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import useRegisterUser from "../../hooks/useRegisterUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select } from "../../components/Select";
import type { RegisterFormData } from "../../types/types";
import registerSchema from "../../schemas/userRegisterSchema";
import { useCourses } from "../../hooks/useCourses";
import { useInstitutions } from "../../hooks/useInstitutions";
import { useGetFacultiesByInstitution } from "../../hooks/useFaculties";

export const RegisterForm: FC = () => {
  const { register, handleSubmit, setValue, reset, control, formState: { errors }, watch, } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema), defaultValues: {
      name: "",
      email: "",
      password: "",
      institutionId: 0,
      facultyId: 0,
      courseId: 0,
      role: "VISITOR",
    },
  });

  const { mutate: registerUser, isSuccess, isPending, isError } = useRegisterUser();

  const [status, setStatus] = useState<"success" | "error">("error");
  const [message, setMessage] = useState<string>("");
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [institutionNameInput, setInstitutionNameInput] = useState<string>("");

  const isStudent = watch("role") === "STUDENT";
  const selectedInstitutionId = useWatch({ control, name: "institutionId" }) ?? 0;
  const selectedFacultyId = useWatch({ control, name: "facultyId" }) ?? 0;

  const { data: institutions, isSuccess: institutionsLoaded } = useInstitutions();
  const { data: faculties, isSuccess: facultiesLoaded } = useGetFacultiesByInstitution(selectedInstitutionId);
  const { data: courses, isSuccess: coursesLoaded } = useCourses(selectedFacultyId);

  const navigate = useNavigate();

  const filteredInstitutions = (institutions ?? []).filter((institution) => {
    if (!institutionNameInput.trim()) return true;

    return institution.name.toLowerCase().includes(institutionNameInput.toLowerCase());
  });


  const handleStudentToggle = (checked: boolean) => {
    const nextRole = checked ? "STUDENT" : "VISITOR";

    setValue("role", nextRole, { shouldValidate: true });

    if (!checked) {
      setValue("institutionId", 0, { shouldValidate: true });
      setValue("facultyId", 0, { shouldValidate: true });
      setValue("courseId", 0, { shouldValidate: true });
      setInstitutionNameInput("");
    }
  };

  const handleInstitutionChange = (value: string) => {
    setInstitutionNameInput(value);

    const institutionFound = filterInstitutionByName(value);

    if (institutionFound) {
      setValue("institutionId", institutionFound.id, { shouldValidate: true });
      setValue("facultyId", 0, { shouldValidate: true });
      setValue("courseId", 0, { shouldValidate: true });
      return;
    }

    setValue("institutionId", 0, { shouldValidate: true });
    setValue("facultyId", 0, { shouldValidate: true });
    setValue("courseId", 0, { shouldValidate: true });
  };

  const filterInstitutionByName=(institutionName:string)=>{
    const institutionFound = institutions?.find(
      (institution) => institution.name.toLowerCase() === institutionName.toLowerCase(),
    );
    return institutionFound;
  }

  const selectFaculty=(event:ChangeEvent<HTMLSelectElement>) => {
    const nextFacultyId = Number(event.target.value) || 0;
    setValue("facultyId", nextFacultyId, { shouldValidate: true });
    setValue("courseId", 0, { shouldValidate: true });
    }
  

  const onSubmit: SubmitHandler<RegisterFormData> = (userData) => {
    const payload = {
      ...userData,
      institutionId: userData.role === "STUDENT" ? userData.institutionId : undefined,
      facultyId: userData.role === "STUDENT" ? userData.facultyId : undefined,
      courseId: userData.role === "STUDENT" ? userData.courseId : undefined,
    };

    registerUser(payload);
  };

  const openModal = () => {
    if (isSuccess || isError) {
      setShowSuccessModal(true);
    }
  };

  const closeSuccessModal=()=>{
      setShowSuccessModal(false);
  }

  useEffect(() => {
    let timer: number;

    if (isSuccess) {
      setStatus("success");
      setMessage("Conta criada com sucesso!");
      reset();
      timer = setTimeout(() => {
        navigate("/login");
      }, 5000);
    } else {
      setStatus("error");
      setMessage("Erro ao criar conta");
    }

    openModal();

    setTimeout(() => {
      closeSuccessModal();
    }, 5000);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isSuccess, isError, navigate, reset]);

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
              <Input label="Nome completo" type="text" placeholder="Nome Completo" error={errors.name} {...register("name")} />
              <Input label="E-mail" type="email" placeholder="ex: nome@gmail.com" error={errors.email} {...register("email")} />
              <PasswordInput label="Palavra-passe" error={errors.password} placeholder="A sua palavra-passe" {...register("password")} />
            </div>

            <div className="flex items-center gap-2 my-2">
              <input type="checkbox" id="student-role" checked={isStudent} onChange={(event) => handleStudentToggle(event.target.checked)}
              />
              <label htmlFor="student-role">Sou estudante universitário</label>
            </div>

            {errors.role && (<p className="text-xs text-red-400 pt-1 pb-4">{errors.role?.message}</p>)}

            {isStudent && (
              <div className="flex flex-col gap-4">
                <div>
                  <Input label="Universidade" list="institutionsList" type="text" placeholder="Digite ou selecione a sua universidade"
                    autoFocus
                    value={institutionNameInput}
                    onChange={(event) => handleInstitutionChange(event.target.value)}
                    error={errors.institutionId}
                  >
                    <datalist id="institutionsList">
                      {institutionsLoaded ? (
                        filteredInstitutions.map((institution) => (
                          <option value={institution.name} key={institution.id} />
                        ))
                      ) : (
                        <option value="Carregando universidades..." />
                      )}
                    </datalist>
                  </Input>
                </div>

                <div className="flex flex-col min-[400px]:flex-row gap-4 *:w-full ">
                  <Select
                    label="Faculdade"
                    error={errors.facultyId}
                    depends={selectedInstitutionId}
                    dependsName="instituição"
                    {...register("facultyId", { valueAsNumber: true })}
                    isLoaded={facultiesLoaded}
                    onChange={ selectFaculty}
                  >
                    {faculties?.map((faculty) => (
                      <option value={faculty.id} key={faculty.id}>{faculty.name}</option>
                    ))}
                  </Select>

                  <Select label="Curso" error={errors.courseId} depends={selectedFacultyId} dependsName="faculdade" {...register("courseId", { valueAsNumber: true })}
                    isLoaded={coursesLoaded}
                  >
                    {courses?.map((course) => (
                      <option value={course.id} key={course.id}>{course.name}</option>
                    ))}
                  </Select>
                </div>
              </div>
            )}

            <Button defaultText="Criar conta" loadingText="Criando a conta..." isLoading={isPending} isSucess={isSuccess} />
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
      <SuccessModal message={message} status={status} isOpen={showSuccessModal} />
    </div>
  );
};
