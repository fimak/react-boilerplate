import React, { Component, PropTypes } from 'react'

export default class SomeForm extends Component {
    static PropTypes = {
        name: PropTypes.string.isRequired
    }

    static defaultProps = {
        name: 'default'
    }

    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name
        }
    }

    _changeHandler = (e) => {
        let name = e.target.value

        this.setState({
            name
        })
    }

    render() {
        return (
            <div style={{border: '1px solid black'}}>
                <div>
                    <label htmlFor='name'>{this.state.name}</label>
                </div>
                <div>
                    <input type='text' name='name' onChange={this._changeHandler} />
                </div>
            </div>
        )
    }
}