import { useEffect, useContext, useState } from "react";
import { Context } from "../../context";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { checkUser, user, loding, setLoding } = useContext(Context);
    const navigation = useNavigate();
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        if (!checkUser) {
            navigation("/");
        }

        const fetchData = async () => {
            try {
                setLoding(true);
                await fetch(`https://dummyjson.com/carts/user/${user.id}`
                ).then(res => res.json()).then(res => setCartProducts(res.carts))

                setLoding(false);
            } catch {
                setLoding(false);
            }
        }

        fetchData();
    }, [])

    console.log(cartProducts);

    return (
        <div className="">
            {
                loding ?
                    <h2>searching ... </h2> :
                    <div className="">
                        {
                            cartProducts.map(((cart, index) => (
                                <ul key={index}>
                                    {
                                        cart.products.map((product, index) => (
                                            <li key={index}>
                                                {product.title}
                                            </li>
                                        ))
                                    }
                                </ul>
                            )))
                        }
                    </div>
            }
        </div>
    )
}

export default Cart;