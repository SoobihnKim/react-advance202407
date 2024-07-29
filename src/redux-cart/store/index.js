 // 이 파일 하나로 사용

import { configureStore } from "@reduxjs/toolkit";
import uiReducer from './ui-slice'

// 단일 리덕스 스토어 생성
const store = configureStore({
    reducer: {
        ui: uiReducer,

    }

});

export default store;