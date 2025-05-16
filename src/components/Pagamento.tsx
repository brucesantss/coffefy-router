import { useLocation } from "react-router-dom"

export const Pagamento = () => {

    const location = useLocation();
    const { total } = location.state || {};

    return (

        <div className="h-screen w-screen flex justify-center items-center flex-col">

            <h1 className="font-semibold">QRCODE do pagemento:</h1>

            <img src="../src/assets/qrcode.png" alt="qrcode" className="mt-4 w-80"/>

            <span>Total da conta: {total}</span>

        </div>

    )

}