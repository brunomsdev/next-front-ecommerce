import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { GoLock } from "react-icons/go";
import { FiGithub } from "react-icons/fi";
import { PiGoogleChromeLogo } from "react-icons/pi";
import { useState } from "react";
import CustomInput from "../CustomInput";
import customToast from "@/helpers/customToast";
import requestApi from "@/helpers/requestApi";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email || !password) {
      customToast.error({
        message: "Preencha todos os campos",
      });
      return;
    }

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false
      })

      if(result?.error){
        return customToast.error({
          message: "Erro ao fazer login. Verifique suas credenciais."
        })
      }

      customToast.success({
        message: "Login realizado com sucesso"
      })

      router.push("/")

    } catch (error: any) {
      console.error(error);
      customToast.error({
        message: error.response.data.error,
      });
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-gradient-to-br from-[#181b20cc] to-[#1d20245e6] drop-blur-lg border-[#2c313a]/50 shadow-[#181b1f] rounded-lg">
        <div className="flex flex-col p-6 text-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#5593f7] to-[#1d4fd7] text-transparent bg-clip-text">
            Bem-vindo de volta
          </h1>
          <p className="text-sm text-gray-400">
            Entre na sua conta para continuar
          </p>
        </div>
        <div className="pt-0 p-6 space-y-6">
          <form onSubmit={handleLogin} className="space-y-4">
            <CustomInput
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@gmail.com"
              icon={<CiMail />}
            />
            <CustomInput
              label="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              icon={<GoLock />}
              required={true}
            />
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  className="w-4 h-4I rounded-sm border border-[#2c313a]/50 text-[#5593f7]"
                />
                <span className="text-gray-400">Lembrar-me</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-sm text-[#5593f7] hover:text-[#5593f7]/80 transition-colors"
              >
                Esqueceu sua senha?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full text-lg font-medium rounded-lg bg-gradient-to-r from-[#5593f7] to-[#1d4fd7] h-[50px] cursor-pointer hover:shadow-xl hover:shadow-[#4896ff26] transition-all duration-300 ease-in-out"
            >
              Entrar
            </button>
          </form>
          <div className="w-full flex items-center justify-center">
            <div className="w-[35%] h-[1px] bg-[#2c313a]"></div>
            <p className="text-[12px] text-gray-400">OU CONTINUE COM</p>
            <div className="w-[35%] h-[1px] bg-[#2c313a]"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button className="border border-[#2c313a]/50 rounded-xl bg-[111418] h-[45px] text-[#F1F2F3] flex items-center justify-center gap-4  hover:bg-[#F15000] transition-all duration-300 ease-in-out cursor-pointer">
              <FiGithub size={20} />
              <span className="text-sm font-medium">Github</span>
            </button>
            <button className="border border-[#2c313a]/50 rounded-xl bg-[111418] h-[45px] text-[#F1F2F3] flex items-center justify-center gap-4 hover:bg-[#4181EE] transition-all duration-300 ease-in-out cursor-pointer">
              <PiGoogleChromeLogo size={20} />
              <span className="text-sm font-medium">Google</span>
            </button>
          </div>
          <div className="text-center text-sm text-gray-500 flex justify-center gap-1">
            <p>Não tem uma conta?</p>
            <Link
              href="/register"
              className="text-[#5593f7] hover:[#5593f7]/80 transition-colors font-medium"
            >
              Cadastre-se
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
