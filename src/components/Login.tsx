import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState<string>();
  const [senha, setSenha] = useState<string>();

  // dados mockados
  const users = [
    {email: 'admin', senha: 'admin'}
  ];

  const handleLogin = () => {

    for(let i = 0; i < users.length; i++){
      if(users[i].email == email && users[i].senha == senha){
        navigate('/home');
      }
    }

  }

  return (
    <main className="h-screen w-screen flex justify-center items-center">

      <div className="h-full md:h-[400px] w-full lg:w-[600px] flex justify-center items-center flex-col">
        <h1 className="text-4xl font-semibold">Entrar na conta</h1>
        <p className="font-semibold text-zinc-500">Bem-vindo ao CoffeFy ☕</p>

        <div className="w-3/4 flex flex-col gap-2 mt-4 font-semibold">
          <Input placeholder="seu e-mail" onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="sua senha"  onChange={(e) => setSenha(e.target.value)}/>

          <Button onClick={handleLogin}>Continuar</Button>
        </div>

        <div className="flex gap-2 underline font-semibold mt-2">
          <span className="hover:text-zinc-500"><a href="/">criar conta</a></span>
          <span className="hover:text-zinc-500"><a href="/">esqueci a senha</a></span>
        </div>

      </div>

    </main>
  )

}

export default Login;