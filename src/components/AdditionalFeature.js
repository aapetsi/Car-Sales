import React from 'react'
import { connect } from 'react-redux'
import { buyItem } from '../index'

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className='button'>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  )
}

const mapDispatchToProps = dispatch => ({
  buyItem: dispatch(buyItem({ type: 'BUY_ITEM' }))
})

export default connect(
  null,
  mapDispatchToProps
)(AdditionalFeature)
