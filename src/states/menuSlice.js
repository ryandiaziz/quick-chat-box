import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isQuickActive: false,
    isChatActive: false,
    isTaskActive: false,
}

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setQuickMenu: (state) => {
            state.isQuickActive = !state.isQuickActive
            if (state.isChatActive || state.isTaskActive) {
                state.isChatActive = false
                state.isTaskActive = false
            }
        },
        setMenuChat: (state) => {
            state.isChatActive = !state.isChatActive
            if (state.isTaskActive) {
                state.isTaskActive = false
            }
        },
        setMenuTask: (state) => {
            state.isTaskActive = !state.isTaskActive
            if (state.isChatActive) {
                state.isChatActive = false
            }
        }
    }
})

export default menuSlice.reducer
export const { setMenuChat, setMenuTask, setQuickMenu } = menuSlice.actions