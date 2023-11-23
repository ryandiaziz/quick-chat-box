const countDay = (date) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(date);
    const secondDate = new Date();
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

    return diffDays
}

export default countDay