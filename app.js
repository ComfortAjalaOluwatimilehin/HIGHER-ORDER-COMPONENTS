import React from 'react'
import {render} from "react-dom"
import {createStore, applyMiddleware} from "redux"
import reducer from "./reducers/index"
import App from "./components/app"
import {Provider} from "react-redux"


const createStoreWithMiddleware = applyMiddleware()(createStore)










render(

    <Provider store={createStoreWithMiddleware(reducer)}>
        <App/>
    </Provider>

  ,document.getElementById("app"))


