import { useLocation, useNavigate } from "react-router-dom"
import { Button } from "./ui/button";

export const Pagamento = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const { total } = location.state || {};

    const handleCancelarCompra = () => {
        navigate('/home')
    }

    return (

        <div className="h-screen w-screen flex justify-center items-center flex-col">

            <h1 className="font-semibold">QRCODE do pagemento:</h1>

            <img src="/qrcode.png" alt="qrcode" className="mt-4 w-80"/>

            <span>Total da conta: {total}</span>

            <Button onClick={handleCancelarCompra} variant={"destructive"} className="mt-5">Cancelar Compra</Button>

        </div>

    )

}