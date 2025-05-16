import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Item = {
  id: number;
  title: string;
  img: string;
  price: number;
  quantity: number;
};

const produtos: Omit<Item, "quantity">[] = [
  {
    id: 1,
    title: "Café Expresso",
    img: "/coffe.png", // Certifique-se que as imagens estejam na pasta public
    price: 2.5,
  },
  {
    id: 2,
    title: "Croissant",
    img: "/croissant.png",
    price: 5.0,
  },
];

export const Home = () => {
  const [numeroMesa, setNumeroMesa] = useState<number | null>(null);
  const [isSetNumeroMesa, setIsSetNumeroMesa] = useState(false);
  const [pedido, setPedido] = useState<Item[]>([]);
  const navigate = useNavigate();

  const handleContinuar = () => {
    if (numeroMesa && numeroMesa > 0) {
      setIsSetNumeroMesa(true);
    }
  };

  const incrementar = (id: number) => {
    setPedido((prev) => {
      const existe = prev.find((item) => item.id === id);
      if (existe) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      const produto = produtos.find((p) => p.id === id)!;
      return [...prev, { ...produto, quantity: 1 }];
    });
  };

  const decrementar = (id: number) => {
    setPedido((prev) => {
      const existe = prev.find((item) => item.id === id);
      if (!existe) return prev;

      if (existe.quantity === 1) {
        return prev.filter((item) => item.id !== id);
      }

      return prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const handlePedido = () => {
    navigate("/pedido", {
      state: {
        mesa: numeroMesa,
        pedido: pedido,
      },
    });
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center p-4">
      {!isSetNumeroMesa ? (
        <div className="flex flex-col gap-4 w-80 text-center">
          <h1 className="font-semibold text-xl">Digite o número da sua mesa :)</h1>
          <Input
            type="number"
            placeholder="Exemplo: 20"
            onChange={(e) => setNumeroMesa(parseInt(e.target.value))}
          />
          <Button onClick={handleContinuar} className="bg-green-500 text-white">
            Continuar
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-lg font-semibold">Número da mesa: {numeroMesa}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {produtos.map((item) => {
              const itemPedido = pedido.find((p) => p.id === item.id);
              const quantidade = itemPedido?.quantity || 0;

              return (
                <div
                  key={item.id}
                  className="flex flex-col items-center shadow-md p-4 rounded-md"
                >
                  <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-32 h-32 object-contain mb-4"
                  />

                  <div className="flex gap-4 items-center">
                    <button
                      onClick={() => decrementar(item.id)}
                      className="w-10 h-10 bg-green-600 rounded-full text-white flex justify-center items-center"
                    >
                      <ArrowLeft />
                    </button>

                    <span className="text-xl font-bold">{quantidade}</span>

                    <button
                      onClick={() => incrementar(item.id)}
                      className="w-10 h-10 bg-green-600 rounded-full text-white flex justify-center items-center"
                    >
                      <ArrowRight />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <Button
            className="mt-4"
            variant="outline"
            onClick={handlePedido}
            disabled={pedido.length === 0}
          >
            Fazer pedido
          </Button>
        </div>
      )}
    </div>
  );
};
