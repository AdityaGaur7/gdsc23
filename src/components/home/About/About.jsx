import React from 'react'
import "./About.css"
import Button from '../../common/button/Button'
function About() {
  return (
    <div>
       <div className="about">
        <div className="left">
          <div className="title">
            <h1>About The Community</h1>
            <h6>How we are so good at it</h6>
          </div>
          <div className="text">
            <h2>What's GDSC are for?</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat libero quod quas exercitationem officia totam impedit tempora voluptate? Unde repellendus error nisi voluptatem debitis laborum corporis dicta omnis atque hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptates beatae illum tempore, fugiat vel nobis corrupti assumenda laudantium fuga.</p>
            <h6>#lets Learn ,Grow and Innovate together</h6>
          </div>
          <Button text={'Know more'} />
        </div>
        <div className="right">
            <div className="image">
                <img src="image1/bootcamp.png" alt="" />
            </div>
        </div>
       </div>
      
    </div>
  )
}

export default About
