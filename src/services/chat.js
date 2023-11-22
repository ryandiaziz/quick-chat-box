import axios from 'axios'

const BASE_LINK = 'https://64f98b194098a7f2fc1493c1.mockapi.io/test-api/rooms'

const getRooms = async () => {
    try {
        console.log("MASOK")
        const res = await axios({
            method: 'GET',
            url: BASE_LINK
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