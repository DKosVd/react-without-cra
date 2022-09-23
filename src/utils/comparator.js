

const sortNumber = (type) => {
    const coef = type === "small" ? 1 : -1;
    return (a, b) => {
        return coef * (a.price - b.price);
    }
}

const sortAlpha = (a, b) => {
    return a.name.localeCompare(b.name);
}

export {
    sortNumber,
    sortAlpha
}