import Card from './card.js';

import data from './data.js'
import './card.css'


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