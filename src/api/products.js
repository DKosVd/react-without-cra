import products from "../mock-data/products";

const getProducts = () => {
    return products;
}

const getProductById = (id) => {
    return products.filter(( {_id}) => _id === id ).pop();
}

export {
    getProductById,
    getProducts
}