import React, { useState } from 'react';

import { log } from '../../log';

const HistoryItem = ({ count }) => {
    log('<HistoryItem /> rendered', 3);

    const [selected, setSelected] = useState(false);

    const clickHandler = () => {
        setSelected((prevSelected) => !prevSelected);
    };

    return (
        <li onClick={clickHandler} className={selected ? 'selected' : undefined}>
            {count}
        </li>
    );
};

const CounterHistory = ({ history }) => {
    log('<CounterHistory /> rendered', 2);


    // key가 변경되면 해당 컴포넌트를 리셋(언마운팅)시키고 다시 렌더링(마운팅)함
    // index로 하면 계속 변경되기 때문에 index 사용하면 안됨
    // id 처럼 안바뀌는 값으로 설정해야함
    return (
        <ol>
            {history.map((count, index) => (
                <HistoryItem key={count.id} count={count.value} />
            ))}
        </ol>
    );
};
export default CounterHistory;
