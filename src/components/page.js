import React, { Component, PropTypes } from 'react'

export default class Page extends Component {
    static PropTypes = {
        year: PropTypes.number.isRequired,
        photos: PropTypes.array.isRequired,
        getPhotos: PropTypes.func.isRequired
    }

    btnClick = (e) => {
        this.props.getPhotos(+e.target.textContent)
    }

    render() {
        const { year, photos, fetching } = this.props

        return (
            <div>
                <p>
                    <button onClick={this.btnClick}>2016</button>
                    <button onClick={this.btnClick}>2015</button>
                    <button onClick={this.btnClick}>2014</button>
                </p>
                <h3>{year} year</h3>
                {
                    fetching ?
                    <p>loading...</p> :
                    <p>Photos count: {photos.length}.</p>
                }
            </div>
        )
    }
}