import { useNavigate } from "react-router-dom";

export const ProductCardView = ({ id, name, description, price, handler }) => {

    const navigate = useNavigate();

    const onAddProduct = (product) => {
        handler(product);
        navigate('/cart');
    }
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">$ {price}</p>
                    <button className="btn btn-outline-primary"
                        onClick={() => onAddProduct({ id, name, description, price })}
                    >Agregar</button>
                </div>
            </div>
        </>
    )
}
