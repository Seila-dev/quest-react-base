import './button.css';

const alertUser = (prop) => {
    window.alert(`A label desse botão é ${prop}`)
}

const Button = (Props) => {
    return <button 
    className='button' 
    onClick={() => alertUser(Props.label)}>{Props.label}</button>
}

export default Button