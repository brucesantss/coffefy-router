import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button";

import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { redirect, useNavigate } from "react-router-dom";

export const Home = () => {

    const [numeroMesa, setNumeroMesa] = useState<number | null>(null);
    const [isSetNumeroMesa, setIsSetNumeroMesa] = useState<boolean | null>(false);

    const [quantidade, setQuantidade] = useState<number>(0);

    const handleContinuar = () => {
        if (numeroMesa && numeroMesa > 0) {
            setIsSetNumeroMesa(true);
        }
    };

    const navigate = useNavigate();

    const handlePedido = () => {
        navigate("/pedido", {
            state: {
                mesa: numeroMesa,
                quantidade: quantidade
            }
        });
    };

    return (

        <div className="w-screen h-screen flex flex-col items-center justify-center">

            {!isSetNumeroMesa ? (
                <div className="flex flex-col gap-4 w-80 text-center">
                    <h1 className="font-semibold">Digite o número da sua mesa :)</h1>
                    <Input placeholder="Exemplo: 20" onChange={(e) => setNumeroMesa(parseInt(e.target.value))} />

                    <Button onClick={handleContinuar} className="bg-green-400">Continuar</Button>
                </div>
            ) : (
                <div className="flex flex-col gap-4 w-80 text-center justify-center items-center">
                    <h1 className="font-semibold">Número da mesa: {numeroMesa}</h1>

                    <div className="w-[250px] h-[500px] shadow-md flex flex-col items-center justify-center">

                        <h2 className="text-2xl font-semibold">Café <br /> Expresso</h2>

                        <img src="../src/assets/coffe.png" className="w-40 mt-8" />

                        <div className="flex gap-4 justify-center items-center">

                            <div
                                onClick={() => quantidade > 0 ? setQuantidade(quantidade - 1) : ''}
                                className="w-10 h-10 bg-green-600 rounded-full text-white justify-center items-center flex"> <ArrowLeft /></div>

                            <span className="text-2xl font-semibold">{quantidade}</span>

                            <div
                                onClick={() => setQuantidade(quantidade + 1)}
                                className="w-10 h-10 bg-green-600 rounded-full text-white justify-center items-center flex"> <ArrowRight /></div>


                        </div>

                        <Button className="mt-10" variant={"outline"} onClick={handlePedido}>Fazer pedido</Button>

                    </div>
                </div>
            )}





        </div>

    )

}