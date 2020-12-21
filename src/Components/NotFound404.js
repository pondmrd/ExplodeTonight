import React, { Component } from 'react'

class NotFound404 extends Component {
    render() {
        const Styles = {
            padding: "30px"
        };
        return (
            <div style={Styles} >
                <h3>404 page not found</h3>
                <p>We are sorry but the page you are looking for does not exist.</p>
            </div>
        )
    }
}

export default NotFound404
