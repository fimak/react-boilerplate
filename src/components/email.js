import React, {PropTypes} from 'react'

export default class Email extends React.Component {
  constructor(props) {
    super(props)
  }
  static PropTypes = {
    handleEmailChange: PropTypes.func,
    fetchGravatar: PropTypes.func,
  }

  render() {
    return (
      <div className='form-group'>
        <input onChange={this.props.handleEmailChange} className='form-control' style={{
          width: 200
        }} type='text'/>
        <button onClick={this.props.fetchGravatar} className='btn-success btn '>Fetch</button>
      </div>
    )
  }
}