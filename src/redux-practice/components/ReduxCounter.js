import React from 'react';
import styles from './ReduxCounter.module.css';
import {useSelector} from "react-redux";

const ReduxCounter = () => {

    // useSelector 라는 훅을 통해 redux store에 있는 상태값을 가져옴
    const counter = useSelector(state => state.counter);

    return (
        <main className={styles.counter}>
            <h1>Redux Counter</h1>
            <div className={styles.value}>-- {counter} --</div>

            <div>
                <button>Increment</button>
                <button>Decrement</button>
            </div>
            <button>Toggle Counter</button>
        </main>
    );
};

export default ReduxCounter;