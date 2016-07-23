import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/user'
import Page from '../components/page'
import { getPhotos } from '../redux/modules/page'
import '../style/app.css'

class App extends Component {
  render() {
    const { user, page } = this.props
    const { getPhotos } = this.props.pageActions

    return <div className='app'>
      <User name={user.name} />
      <Page photos={page.photos} year={page.year} getPhotos={getPhotos} fetching={page.fetching} />
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
        pageActions: bindActionCreators({getPhotos}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)