import { useEffect, useState, type FC } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import type { LoginData } from "../../types/types";
import useLoginMutation from "../../hooks/useLoginMutation";
import { Button, Input, PasswordInput, SuccessModal } from "../../components";

export const LoginForm: FC = () => {
  const {register,handleSubmit,formState: { errors },} = useForm<LoginData>();
  let [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [status, setStatus] = useState<"success" | "error">("error");
  const [message, setMessage] = useState<string>('');
  const navigate=useNavigate();

  const {data,isError,isSuccess,isPending,mutate: login,} = useLoginMutation();

  const onSubmit = (data: LoginData) => {
    login(data);
  };

  const openSucessModal=()=>{
    if(isSuccess || isError){

      setShowSuccessModal(true);
    }
  }

  useEffect(() => {
    if (isSuccess) {
      setStatus("success");
      setMessage("Login efetuado com sucesso!");
      const token=data?.data.token;

      if(token){
        localStorage.setItem("token",JSON.stringify(token));

      } 

    } else if (isError) {
      setStatus("error");
      setMessage("E-mail ou palavra-passe incorreta.");
    }

    openSucessModal()

    setTimeout(()=>{
      setShowSuccessModal(false);
    },5000)

  }, [isSuccess, isError]);

  useEffect(() => {
    let timer: number;

    if (isSuccess) {
      timer = setTimeout(() => {
        navigate('/documents', { replace: true });
      }, 5000); 
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isSuccess, navigate]);

  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2 gap-6 bg-[#F7F3EC] sm:p-6 md:p-12 lg:py-6 transition-all duration-300 ease-linear">
      <div className=" hidden lg:block  p-12 rounded-md bg-[#75333c]"></div>
      <div className="max-[769px]:w-full max-[429px]:h-full lg:h-full  flex flex-col justify-center bg-[#FBF8F4] p-6  sm:p-8 m-auto sm:border border-[#DED5C7] rounded-lg shadow-sm transition-all duration-300 ease-linear">
        <h2 className="text-4xl md:text-5xl  text-[#54232D] font-bold tracking-tight mb-4 transition-all duration-300 ease-linear">
          Bem-Vindo de volta
        </h2>
        <p className="text-[#716871] mb-4">Use o e-mail com que criou conta.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Input label="E-mail" type="email " placeholder="seu_nome@gmail.com" {...register("email")} error={errors.email}/>
          <PasswordInput label=" Palavra-passe" error={errors.password} placeholder="A sua palavra-passe" {...register("password")}/>
          <Button defaultText="Entrar" loadingText="A entrar..." isLoading={isPending}/>
        </form>
        <p className="text-sm mx-auto mt-4">
          Ainda não tem uma conta?{" "}
          <Link
            to={"/sign-up"}
            className="text-sm font-bold text-[#75333c] underline decoration-[#c6903f] underline-offset-4"
          >
            Criar conta
          </Link>{" "}
        </p>
      </div>
      <SuccessModal status={status} message={message} isOpen={showSuccessModal} />
    </div>
  );
};
