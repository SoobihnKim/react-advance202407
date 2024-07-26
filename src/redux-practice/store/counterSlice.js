
import {createSlice} from "@reduxjs/toolkit";

// 관리할 초기 상태값 객체
const initialCountState = {
    counter: 0,
    showCounter: true,
};

// reducer: 상태 변경을 위한 순수 함수 - 부수 효과(비동기코드..)가 없는 함수
// 카운터 상태관리를 위한 리듀서 정의

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

// 슬라이스 안에 reducers에 정의한 함수들을 내보내기
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;