

const makeOrder = async (data) => {
    const {address, cvv, email, firstname, holderCard, month, numberCard, products, surname, tel, total, totalEl} = data;
    const apiData = {
        address, cvv, email, firstname, holderCard, month, numberCard, products, surname, tel, total, totalEl
    };
    console.log(apiData)
    return new Promise( (res, rej) => {
        setTimeout( () => {
            res({
                success: true,
                data
            })
        }, 1500)
    })    
}

export {
    makeOrder
}