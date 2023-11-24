import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import {
    getTasks,
    getTodos,
    updateTodo,
    deleteData,
} from '../services/task.service'

const initialState = {
    tasks: [],
    completeTask: [],
    unCompleteTask: [],
    activeTask: 1,
    isLoading: false,
}

export const getTasksData = createAsyncThunk('task/getTasksData', () => getTasks())
export const getTodosData = createAsyncThunk('task/getTodosData', (id, thunkAPI) => getTodos(id, thunkAPI))
export const deleteTodo = createAsyncThunk('task/deleteTodo', ({ taskID, todoID, index, complete }, thunkAPI) => {
    thunkAPI.dispatch(deleteLocal({ complete, index }))
    return deleteData(taskID, todoID)
})
export const updateTodoData = createAsyncThunk('task/updateTodoData', ({ taskID, todoID, complete, index }, thunkAPI) => {
    thunkAPI.dispatch(updateLocalTodo({ taskID, todoID, complete, index }))
    return updateTodo(taskID, todoID, complete, index)
})

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        changeTask: (state, action) => {
            state.activeTask = action.payload
        },
        deleteLocal: (state, action) => {
            if (action.payload.complete) {
                state.completeTask.splice(action.payload.index, 1)
            } else {
                state.unCompleteTask.splice(action.payload.index, 1)
            }
        },
        updateLocalTodo: (state, action) => {
            if (action.payload.complete) {
                state.completeTask[action.payload.index].complete = false
                const unComplete = state.completeTask.splice(action.payload.index, 1)
                state.unCompleteTask.unshift(...unComplete)
            } else {
                state.unCompleteTask[action.payload.index].complete = true
                const complete = state.unCompleteTask.splice(action.payload.index, 1)
                state.completeTask.unshift(...complete)
            }
        }
    },
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
            state.completeTask = action.payload.filter(data => data.complete === true)
            state.unCompleteTask = action.payload.filter(data => data.complete === false)
        })
        builder.addCase(getTodosData.rejected, (state) => {
            state.isLoading = false
        })
    }
})

export default taskSlice.reducer
export const {
    changeTask,
    updateLocalTodo,
    deleteLocal
} = taskSlice.actions