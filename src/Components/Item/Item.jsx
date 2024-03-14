import propTypes from "prop-types";

const Item = ({ product, onOpenModal }) => (
  <li key={product.id} className="bg-slate-800 h-80 rounded-md">
    <div className="h-1/2 w-full">
      <img className="w-full h-full object-cover" src={product.image} />
    </div>

    <div className="h-1/2 w-full flex flex-col justify-between p-3">
      <h3>{product.title}</h3>
      <button
        className="w-full bg-emerald-800 text-slate-200 rounded py-1 hover:bg-emerald-700 hover:text-slate-100 transition"
        onClick={onOpenModal}
      >
        Abrir modal
      </button>
    </div>
  </li>
);

Item.propTypes = {
  product: propTypes.shape({
    id: propTypes.number.isRequired,
    image: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
  }).isRequired,
  onOpenModal: propTypes.func.isRequired,
};

export default Item;
