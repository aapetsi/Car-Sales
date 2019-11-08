import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'

import 'bulma/css/bulma.css'
import './styles.scss'

import { createStore } from 'redux'

// actions
const BUY_ITEM = 'BUY_ITEM'
const REMOVE_FEATURE = 'REMOVE_FEATURE'

// action creators
export const buyItem = item => ({
  type: BUY_ITEM,
  payload: {
    item
  }
})

export const removeFeature = item => ({
  type: REMOVE_FEATURE,
  payload: {
    item
  }
})

// reducer
const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  store: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
}

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ITEM:
      // check if item already exists in cart
      const itemToCheck = action.payload.item
      const features = state.car.features
      if (features.includes(itemToCheck)) return
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload.item.price,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload.item]
        }
      }
    case REMOVE_FEATURE:
      // filter out feature
      const removedFeature = state.car.features.filter(
        feature => feature.id !== action.payload.item.id
      )
      console.log(removedFeature)
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.payload.item.price,
        car: {
          ...state.car,
          // price: state.car.price - action.payload.item.price,
          features: state.car.features.filter(
            feature => feature.id !== action.payload.item.id
          )
        }
      }
    default:
      return state
  }
}

// create store
const store = createStore(
  storeReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
