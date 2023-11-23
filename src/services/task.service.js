import axios from 'axios'

const BASE_URL = 'https://655dfad79f1e1093c59a48fc.mockapi.io'

const getTasks = async () => {
    try {
        const res = await axios({
            method: 'GET',
            url: `${BASE_URL}/tasks/`
        })

        return res.data
    } catch (error) {
        return error.message
    }
}

const getTodos = async (id) => {
    try {
        const res = await axios({
            method: 'GET',
            url: `${BASE_URL}/tasks/${id}/todos`
        })

        return res.data
    } catch (error) {
        return error.message
    }
}

const updateTodo = async (taskID, todoID) => {
    try {
        await axios({
            method: 'PUT',
            url: `${BASE_URL}/tasks/${taskID}/todos/${todoID}`
        })
    } catch (error) {
        return error.message
    }
}

export {
    getTasks,
    getTodos,
    updateTodo,
}