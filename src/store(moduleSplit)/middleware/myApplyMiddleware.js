export default function myApplyMiddleware(store, ...midds) {
    midds.forEach(item => {
        item(store)
    })
}