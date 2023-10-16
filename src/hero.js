import hero from './Group 77.png';
import './hero.css';
 function Hero(){
    return(
      <>
        <div className='imgbox'>
            <img className='imhero' src={hero}></img>

        </div>
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts all without leaving home.</p>
        </>
    )
 }
 export default Hero;