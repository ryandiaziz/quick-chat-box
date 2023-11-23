import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import chatReducer from "./chatSlice";
import taskReducer from "./taskSlice";

const store = configureStore({
    reducer: {
        menu: menuReducer,
        chat: chatReducer,
        task: taskReducer,
    }
})

export default store