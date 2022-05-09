// import {ReactComponent as Divider} from  '../images/pattern-divider-mobile.svg'
// import {ReactComponent as Divide} from  '../images/pattern-divider-desktop.svg'
import smallPic from  '../images/pattern-divider-mobile.svg'
import bigPic from  '../images/pattern-divider-desktop.svg' 

export default function Advice({randomAdvice, getRandomAdvice,adviceId,setAdviceId}) {
  

  return (
    <div className="Advice">
      <h1>Advice #{adviceId}</h1>
      <h2 key={adviceId}>"{randomAdvice}"</h2>
      <div className='Advice--divider'>
        {/* <Divider /> */}
        <picture>
          <source media="(max-width: 768px)" srcSet={smallPic} />
          <img src={bigPic} alt="" />
        </picture>
      </div>
    </div>
  )

}

