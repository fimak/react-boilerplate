import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
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
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}