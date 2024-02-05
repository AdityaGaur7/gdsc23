import Button from '../../common/button/Button'
import './Hero.css'
import Card from '../section1/Card'
import Service from "../Section2/Service"
import About from "../About/About"
export default function Hero() {
    return (
<>
    <div className='hero'>
        <img className='heroleft' src='heroleft.png' alt='heroleft' />
        <img className='heroright' src='heroright.png' alt='heroright' />
        <div className="wrapper">
            <img src='/shortlogo.svg' alt='short logo' />
            <h2>Google Developer <br/>Student Club</h2>
            <p>MMMUT</p>
            <Button text={'Join Us'} />
            <img src="image1/homegif.gif" className='gif2' alt="gif2" />
        </div>
    </div>
    <About/>
    <Card/>
    <Service/>
    </>
    )
}   
