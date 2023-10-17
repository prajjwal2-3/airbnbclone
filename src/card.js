
import './card.css'


function Card(props){
    return(
        
        <div className='card'>
    <img src={props.image} alt="nothing to show" className='image'></img>
    <span className="">{props.star}</span>
    <span className=""> ({props.no})</span>
    <span className="">.{props.country}</span>
    <p className="para">{props.para}</p>
    <h3 className ="price">From {props.price}/ person</h3>
  </div>
        
    )
}
export default Card;