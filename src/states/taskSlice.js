import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import {
    getTasks,
    getTodos,
    updateTodo
} from '../services/task.service'

const initialState = {
    tasks: [],
    complete: [],
    unComplete: [],
    isLoading: false,
}

export const getTasksData = createAsyncThunk('task/getTasksData', () => getTasks())
export const getTodosData = createAsyncThunk('task/getTodosData', (id) => getTodos(id))
export const updateTodoData = createAsyncThunk('task/updateTodoData', ({ taskID, todoID }) => updateTodo(taskID, todoID))

const taskSlice = createSlice({
    name: 'task',
    initialState,
    extraReducers: (builder) => {
        // get task
        builder.addCase(getTasksData.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getTasksData.fulfilled, (state, action) => {
            state.isLoading = false
            state.tasks = action.payload
        })
        builder.addCase(getTasksData.rejected, (state) => {
            state.isLoading = false
        })
        // get todo
        builder.addCase(getTodosData.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getTodosData.fulfilled, (state, action) => {
            state.isLoading = false
            state.complete = action.payload.filter(data => data.complete === true)
            state.unComplete = action.payload.filter(data => data.complete === false)
        })
        builder.addCase(getTodosData.rejected, (state) => {
            state.isLoading = false
        })
        // update todo
        builder.addCase(updateTodoData.pending, (state) => {
            setTimeout(() => {
                console.log("object")
            }, 1000)
            // console.log("object")
        })
    }
})

export default taskSlice.reducer