import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/user'
import Page from '../components/page'
import * as pageActions from '../actions/page'

class App extends Component {
  render() {
    const { user, page } = this.props
    const { setYear } = this.props.pageActions

    return <div>
      <User name={user.name} />
      <Page photos={page.photos} year={page.year} setYear={setYear} />
    </div>
  }
}

function mapStateToProps (state) {
  return {
    user: state.user,
    page: state.page
  }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)