

import data from './data.js'
import './card.css'


function Card(props){
    return(
        
        <div className='card'>
    <img src={props.image} alt="nothing to show " className='image'></img>
    <span className="">{props.star}</span>
    <span className=""> ({props.no})</span>
    <span className="">.{props.country}</span>
    <p className="para">{props.para}</p>
    <h3 className ="price">From {props.price}/ person</h3>
  </div>
        
    )
}



const cards = data.map(item => (
  <Card
    image={item.coverImg}
    para={item.title}
    star={item.stats.rating}
    no={item.stats.reviewCount}
    country={item.location}
    price={item.price}
  />
));


function Crd(){
    return(
      cards
    )
}

export default Crd;