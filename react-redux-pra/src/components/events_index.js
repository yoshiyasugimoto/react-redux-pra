import React, {Component} from 'react'
import { connect } from 'react-redux'

import { readEvents } from "../actions"


class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents()
  }
  render() {
    return (
      <>
      </>
    )
  }
}

const mapStateToProps = state => ({events:state.evetnts})
const mapDispatchToProps = ({ readEvents})

export default connect(mapStateToProps,mapDispatchToProps)(EventsIndex)
