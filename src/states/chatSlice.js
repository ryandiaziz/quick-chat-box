import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getRooms } from '../services/chat.service'

const initialState = {
    rooms: [],
    isLoading: false,
}

export const getRoomsData = createAsyncThunk('chat/getRommsData', () => getRooms())

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getRoomsData.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getRoomsData.fulfilled, (state, action) => {
            state.isLoading = false
            state.rooms = action.payload
        })
        builder.addCase(getRoomsData.rejected, (state) => {
            state.isLoading = false
        })
    }
})

export default chatSlice.reducer