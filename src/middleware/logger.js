/*eslint-disable */
export default function logger(store) {
    return (next) => (action) => {
        console.log(action)
    }
}
/*eslint-enable */