import React, { Component, PropTypes } from 'react'

export default class Page extends Component {
    static PropTypes = {
        year: PropTypes.number.isRequired,
        photos: PropTypes.array.isRequired
    }

    btnClick = (e) => {
        this.props.setYear(+e.target.textContent)
    }

    render() {
        const { year, photos } = this.props

        return (
            <div>
                <p>
                    <button onClick={this.btnClick}>2016</button>
                    <button onClick={this.btnClick}>2015</button>
                    <button onClick={this.btnClick}>2014</button>
                </p>
                <h3>{year} year</h3>
                <p>Photos count: {photos.length}.</p>
            </div>
        )
    }
}