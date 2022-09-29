// use local storage to manage cart data
const addToDb = id => {
    localStorage.setItem('time-cart', JSON.stringify(id));
}

export {
    addToDb
}