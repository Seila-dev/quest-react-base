import React from 'react'
import './index.css'

class TextoCostumizavel extends React.Component {
    render() {
        return (
            <div className='texto' style={{color: this.props.cor, textTransform: 'uppercase'}}>
                <p>{this.props.texto}</p>
            </div>
        )
    }
}

export default TextoCostumizavel