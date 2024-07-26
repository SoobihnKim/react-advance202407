// import {createStore} from "redux";
import {configureStore, createSlice} from "@reduxjs/toolkit";

// 액션 타입 상수
// export const INCREMENT = 'INCREMENT';
// export const DECREMENT = 'DECREMENT';
// export const MULTIPLY = 'MULTIPLY';
// export const TOGGLE = 'TOGGLE';

// 관리할 초기 상태값 객체
const initialCountState = {
    counter: 0,
    showCounter: true
};

// reducer: 상태 변경을 위한 순수 함수 - 부수 효과(비동기코드..)가 없는 함수
// 카운터 상태관리를 위한 리듀서 정의
/**
 * param1 (state) : 상태 변경 이전의 상태
 * param2 (action) : 상태를 어떻게 변경할지의 대한 명세
 * return - 변경 후 새로운 상태 값
 */
// const counterReducer = (state = initialCountState, action) => {
//     console.log('prev state: ', state);
//     console.log('action: ', action);
//
//     // 1. 상태값 변경 시 반드시 새로운 상태를 반환해야 함.
//     // 2. 상태값 변경은 반드시 새로운 객체를 할당해야 함.
//     switch (action.type) {
//         case INCREMENT:
//             return {
//                 ...state, // 이전 상태값 복사해서 가져와야함
//                 counter: state.counter + 1
//             };
//         case DECREMENT:
//             return {
//                 ...state,
//                 counter: state.counter - 1
//             };
//         case MULTIPLY:
//             return {
//                 ...state,
//                 counter: state.counter * action.payload
//             };
//         case TOGGLE:
//             return {
//                 ...state,
//                 showCounter: !state.showCounter
//             };
//         default:
//             return state;
//     }
// };

// reducer를 slice로 변경
/**
 * option 객체에 들어가있는 프로퍼티 설명
 * prop1: name - 컴포넌트가 해당 리듀서를 사용할 때 부르는 이름
 * prop2: initialState - 관리할 상태값들의 초기값
 * prop3: reducers - 기존 리듀서에서 사용하던 내용들(실제 액션)
 */
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCountState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        multiply(state, action) {
            // console.log('state: ', state);
            // console.log('action: ', action);
            state.counter *= action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        },

    }
});


// 단 하나의 리덕스 스토어
// 스토어에는 여러 리듀서를 제공할 수 있다.
const store = configureStore({
    reducer: counterSlice.reducer
});

// 슬라이스 안에 reducers에 정의한 함수들을 내보내기
export const counterActions = counterSlice.actions;

// 리액트의 index.js에게 store를 제공
export default store;

