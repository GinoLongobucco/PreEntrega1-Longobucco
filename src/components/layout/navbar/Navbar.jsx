import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navContainer">
      <h4>Tienda CIP</h4>

      <ul className="containerCategories">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>

      <CartWidget />
    </div>
  );
};

export default Navbar;
