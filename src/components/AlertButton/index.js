import './index.css';

const Button = (Props) => {
    return <button 
    className='button' 
    onClick={() => alert(`A label desse botão é ${Props.label}`)}>{Props.label}</button>
}

export default Button