import { CaretLeft, CaretRight, X } from "@phosphor-icons/react";
import propTypes from "prop-types";

export function Modal({ isOpen, setModal, selectedProduct, products }) {
  const currentIndex = products.findIndex(
    (product) => product.id === selectedProduct?.id
  );

  const handlePrevProduct = () => {
    const prevIndex = (currentIndex - 1 + products.length) % products.length;
    setModal(products[prevIndex]);
  };

  const handleNextProduct = () => {
    const nextIndex = (currentIndex + 1) % products.length;
    setModal(products[nextIndex]);
  };
  4;
  const handleCloseModal = () => {
    setModal(null); // Fechar o modal ao setar selectedProduct como null
  };

  if (!isOpen || !selectedProduct) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex gap-6 bg-slate-600 p-8 rounded-lg max-w-2xl relative">
        <button onClick={() => handlePrevProduct()}>
          <CaretLeft className="hover:text-green-400 transition" size={32} />
        </button>
        <button
          onClick={handleCloseModal}
          className="absolute top-0 right-0 p-2 text-slate-300 bg-red-500 rounded-tr hover:bg-red-600 transition"
        >
          <X size={20} className="text-slate-200 hover:text-slate-100" />
        </button>
        <div className="flex flex-col p-2 justify-between">
          <div>
            <h2 className="text-center font-bold mb-6">
              {selectedProduct.title}
            </h2>
          </div>
          <div className="border-1 border-slate-800 rounded">
            <img
              className="w-[500px] h-[300px] object-cover rounded mb-4"
              src={selectedProduct.image}
            />
            <span className="text-2xl text-white">
              U$ {selectedProduct.price}
            </span>
          </div>
        </div>
        <button onClick={() => handleNextProduct()}>
          <CaretRight className="hover:text-green-400 transition" size={32} />
        </button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: propTypes.bool.isRequired,
  setModal: propTypes.func.isRequired,
  selectedProduct: propTypes.object,
  products: propTypes.array.isRequired,
};
