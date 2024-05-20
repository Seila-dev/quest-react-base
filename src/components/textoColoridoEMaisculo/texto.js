import React from 'react'
import './texto.css'

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