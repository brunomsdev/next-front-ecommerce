import { FiGithub, FiUser } from "react-icons/fi";
import CustomInput from "../CustomInput";
import { CiMail } from "react-icons/ci";
import { GoLock } from "react-icons/go";
import CustomButton from "../CustomButton";
import { FaChrome } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import customToast from "@/helpers/customToast";
import requestApi from "@/helpers/requestApi";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      customToast.error({
        message: "Preencha todos os campos",
      });
      return;
    }

    if (password !== confirmPassword) {
      customToast.error({
        message: "As senhas não coincidem",
      });
      return;
    }

    if (password.length < 8) {
      customToast.error({
        message: "A senha deve ter no mínimo 8 caracteres",
      });
      return;
    }

    try {
      await requestApi({
        url: "/users",
        method: "POST",
        data: {
          name,
          email,
          password,
          role: "user",
        },
      });

      customToast.success({
        message: "Conta criada com sucesso",
      });

      router.push("/login");
    } catch (error) {
      console.error(error);
      customToast.error({
        message: "Erro ao criar conta",
      });
    }
  }

  return (
    <div className="w-full max-w-md mx-auto bg-gradient-to-br from-[#181b20cc] to-[#1d2025e6] border-[#2c313a]/50 backdrop-blur-xl shadow-[#181blf] rounded-lg text-gray-400">
      <div className="p-8">
        <div className="text-center m-8">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-br from-[#5593f7] to-[#1d4fd7] text-transparent bg-clip-text">
            Criar Conta
          </h2>
          <p>Preencha os dados para criar sua conta</p>
        </div>
        <form onSubmit={handleRegister} className="space-y-6">
          <CustomInput
            label="Nome Completo"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome completo"
            icon={<FiUser />}
            required={true}
          />
          <CustomInput
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@gmail.com"
            icon={<CiMail />}
            required={true}
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

          <CustomInput
            label="Confirmar senha"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirme sua senha"
            icon={<GoLock />}
            required={true}
          />

          <CustomButton type="submit" className="h-[40px]">
            Criar conta
          </CustomButton>

          <div className="w-full flex items-center justify-center">
            <div className="w-[45%] h-[1px] bg-[#2c313a]"></div>
            <p className="text-[12px] text-gray-400">OU</p>
            <div className="w-[45%] h-[1px] bg-[#2c313a]"></div>
          </div>

          <div className="space-y-3">
            <CustomButton
              variant="outline"
              className="text-sm hover:bg-[#F9AF32]"
            >
              <FiGithub size={20} />
              Continuar com GitHub
            </CustomButton>

            <CustomButton
              variant="outline"
              className="text-sm hover:bg-[#4487f4]"
            >
              <FaChrome size={20} />
              Continuar com Google
            </CustomButton>
          </div>

          <div className="text-center mt-6 flex items-center justify-center gap-2">
            <p className="text-sm text-gray-400">Já tem uma conta?</p>
            <Link
              href="/"
              className="text-sm text-[#5593f7] hover:text-[#5593f7]/80 transition-colors"
            >
              Fazer login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
