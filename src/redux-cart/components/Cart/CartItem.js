import React from "react";
import styles from './CartItem.module.css';
import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";

const CartItem = ({item}) => {

    const dispatch = useDispatch();

    const { title, quantity, total, price, id } = item;

    const addCartHandler = e => {
        // fetch(); 리듀서 함수 내부에서 fetch 쓸 수 없고, 이렇게 써야함
        dispatch(cartActions.addCartItem(item));
    };

    const removeCartHandler = e => {
        dispatch(cartActions.removeCartItem(id));
    }

    return (
        <li className={styles.item}>
            <header>
                <h3>{title}</h3>
                <div className={styles.price}>
                    {total}{' '}
                    <span className={styles.itemprice}>({price}/item)</span>
                </div>
            </header>
            <div className={styles.details}>
                <div className={styles.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={styles.actions}>
                    <button onClick={removeCartHandler}>-</button>
                    <button onClick={addCartHandler}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;