const getMonth = (date) => {
    return new Date(date).getMonth() + 1;
}

const getYear = (date) => {
    return new Date(date).getFullYear();
}

export {
    getMonth, 
    getYear
}