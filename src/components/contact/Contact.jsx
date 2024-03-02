import './Contact.css'
export default function Contact() {
    return (
        <>
        
        <div className="hanging-words-container">
    <span className="hanging-word"><img src="image1/img/g.svg" alt=""/></span>
    <span className="hanging-word"><img src="image1/img/d.svg" alt=""/> </span>
    <span className="hanging-word"><img src="image1/img/s.svg" alt=""/></span>
    <span className="hanging-word"><img src="image1/img/c.svg" alt=""/> </span>
  </div>
  <div>
    <h1>Find us on</h1>
    <ul className="flex">
      <li>
        <a className="decor" href="/">
          <img src="img/insta.svg" alt="instagram-icon"/>
          <span id="insta">Instagram</span>
        </a>
      </li>
      <li>
        <a className="decor" href="/">
          <img src="img/linkedin.svg" alt="linkedin-icon"/>
          <span id="link">LinkedIn</span>
        </a>
      </li>
      <li>
        <a className="decor" href="/">
          <img src="img/telegram.svg" alt="instagram-icon"/>
          <span id="tele">Telegram</span>
        </a>
      </li>
      <li>
        <a className="decor" href="/">
          <img src="img/x.svg" alt="instagram-icon"/>
          <span id="twit">Twitter</span>
        </a>
      </li>
    </ul>
  </div>
        
        
        </>
    )
}