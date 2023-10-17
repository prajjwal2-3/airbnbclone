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
      para = "Life Lessons with katie Zaferes"
      star = "5.0"
      no = "6"
      country = "USA"
      price = "$136"
    />
    <Card
      image = {image3}
      para = "Life Lessons with katie Zaferes"
      star = "5.0"
      no = "6"
      country = "USA"
      price = "$136"
    />
        </div>
    )
}

export default Crd;