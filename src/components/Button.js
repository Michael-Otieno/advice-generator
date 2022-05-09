import {ReactComponent as Logo} from '../images/icon-dice.svg'

export default function Button({getNewAdvice}){

  return(
    <div className='Button'>
      <button
      onClick={getNewAdvice}
      >
        <Logo />
      </button>
    </div>
  )
}