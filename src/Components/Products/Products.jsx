import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import { Modal } from "../Modal/Modal";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para armazenar o termo de busca

  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Filtrar produtos com base no termo de busca
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="">
      {loading ? (
        <span>Carregando...</span>
      ) : (
        <div>
          <form className="w-full mb-2">
            <input
              className="w-full bg-transparent  text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
              type="text"
              placeholder="Busque um produto"
              value={searchTerm} // Valor do input é definido pelo estado
              onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o estado com o valor digitado
            />
          </form>
          <div className="w-full h-px bg-slate-500 mb-6" />
          <ul className="grid grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Item
                key={product.id}
                product={product}
                onOpenModal={() => handleOpenModal(product)}
              />
            ))}
          </ul>

          <Modal
            isOpen={openModal}
            setModal={(product) => {
              setSelectedProduct(product);
              setOpenModal(true);
            }}
            selectedProduct={selectedProduct}
            products={products}
          />
        </div>
      )}
    </div>
  );
}
