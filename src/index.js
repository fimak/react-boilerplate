import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// import App from './containers/app'
import Gravatar from './containers/gravatar'
import configureStore from './redux/configureStore'

const store = configureStore()

render(
    <Gravatar />,
    document.getElementById('root')
)

// render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// )