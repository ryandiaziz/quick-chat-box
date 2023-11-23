import axios from 'axios'

const BASE_URL = 'https://64f98b194098a7f2fc1493c1.mockapi.io/test-api/rooms'

const getRooms = async () => {
    try {
        const res = await axios({
            method: 'GET',
            url: BASE_URL
        })

        return res.data
    } catch (error) {
        console.log(error.message)
        return error.message
    }
}

export {
    getRooms
}