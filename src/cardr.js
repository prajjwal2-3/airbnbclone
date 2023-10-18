import Card from './card.js';
import image1 from './image 12.png';
import image2 from './image2.png';
import image3 from './image3.png';
import './card.css'

function Crd(){
    return(
        <div className='forrow'>
            <Card
      image = {image1}
      para = "Life Lessons with katie Zaferes"
      star = "5.0"
      no = "6"
      country = "USA"
      price = "$136"
    />
    <Card
      image = {image2}
      para = "Group Mountain Biking"
      star = "4.8"
      no = "2"
      country = "USA"
      price = "$50"
    />
    <Card
      image = {image3}
      para = "Learn wedding photography"
      star = "5.0"
      no = "30"
      country = "USA"
      price = "$125"
    />
        </div>
    )
}

export default Crd;