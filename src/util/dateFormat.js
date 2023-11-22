const dateFormat = (time) => {
    const timestamp = new Date(time).getTime()
    const day = new Date(timestamp).getDate()
    const month = new Date(timestamp).getMonth() + 1
    const year = new Date(timestamp).getFullYear()
    const hour = new Date(timestamp).getHours()
    const minute = new Date(timestamp).getMinutes()

    return `${day}/${month}/${year} ${hour}:${minute}`
}

export default dateFormat