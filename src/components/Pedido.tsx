import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
import { SelectGroup } from "@radix-ui/react-select";

export const Pedido = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { mesa, quantidade } = location.state || {};

    const [total, setTotal] = useState<number>(0);

    const handleTotal = () => {

        setTotal(quantidade * 2.50);

    }

    const handleFinalizarCompra = () => {

        navigate('/pagamento', {
            state: {
                total: total
            }
        })

    }

    useEffect(() => {
        handleTotal();
    }, [])

    return (
        <div className="flex h-screen w-screen flex-col justify-center items-center">
            <h1 className="text-2xl font-semibold mb-4">Número da mesa: {mesa}</h1>
            <span className="text-lg font-semibold">Total de itens: {quantidade}</span>

            <span className="text-2xl font-semibold mt-16">Total da conta (R$): {total}</span>

            <div className="mt-8">
                <span className="2xl font-semibold">Formas de pagamento</span>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Pagamentos" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="pix">Pix</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <Button variant={"outline"} className="mt-10" onClick={handleFinalizarCompra}>Finalizar Compra</Button>
        </div>
    );
};
