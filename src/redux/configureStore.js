import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
    const logger = createLogger()
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, logger)
    )

    if (module.hot) {
        module.hot.accept('./rootReducer', () => {
            const nextRootReducer = require('./rootReducer').default
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}