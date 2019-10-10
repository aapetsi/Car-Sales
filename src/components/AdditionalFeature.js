import React from 'react'
import { connect } from 'react-redux'
import { buyItem } from '../index'

const AdditionalFeature = props => {
  console.log(props)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        onClick={() => props.dispatch(buyItem(props.feature))}
        className='button'
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  )
}

export default connect(
  null,
  null
)(AdditionalFeature)
