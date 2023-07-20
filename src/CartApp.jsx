import { useItemsCart } from "./hooks/useItemsCart"
import { Navbar } from "./components/Navbar";
import { CartRoutes } from "./routes/CartRoutes";
export const CartApp = () => {

    const { cartItems, handlerAddProductCart, handlerDeleteProductCart } = useItemsCart();

    return (
        <>
            <Navbar />
            <div className="container my-4">
                <div className="row">
                    <div className="col">
                        <h3>Cart App</h3>
                    </div>
                </div>
                <CartRoutes
                    cartItems={cartItems}
                    handlerAddProductCart={handlerAddProductCart}
                    handlerDeleteProductCart={handlerDeleteProductCart}
                />
            </div >
        </>
    )
}