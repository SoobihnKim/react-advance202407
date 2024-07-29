import {createSlice} from "@reduxjs/toolkit";

// 상태 관리할 값들의 초기값
const initialState = {
    cartIsVisible: false
};

const uislice = createSlice({
    name: 'ui',
    initialState: initialState, // 이름 같으면 생략 가능
    reducers: {
        // 상태변경 행위(액션함수)
        // state: 변경 전 상태값
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        },

    }
});

// 액션 함수들 내보내기
export const uiActions = uislice.actions;

export default uislice.reducer;