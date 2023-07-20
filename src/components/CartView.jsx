import { useEffect, useState } from "react";
import { calculateTotal } from "../services/productService";
import { useNavigate } from "react-router-dom";

export const CartView = ({ items, handlerDelete }) => {
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        setTotal(calculateTotal(items));
    }, [items]);

    const onDeleteProduct = (id) => {
        console.log('eliminar')
        handlerDelete(id);
    }
    const onCatalog = () => {
        navigate('/catalog');
    }
    return (
        <>
            <div className="row my-4 w-50">
                <h3>Carro de compras</h3>
                <div className="col">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => (
                                <tr key={item.product.id}>
                                    <td>{item.product.name}</td>
                                    <td>{item.product.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.quantity * item.product.price}</td>
                                    <td><button onClick={() => onDeleteProduct(item.product.id)} className="btn btn-outline-danger">Eliminar</button></td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>

                                <td colSpan={3} className="text-end fw-bold">Total</td>
                                <td colSpan={2} className="fw-bold">{total}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            <button
                className="btn btn-outline-primary"
                onClick={onCatalog}
            >seguir comprando</button>
        </>
    )
}
