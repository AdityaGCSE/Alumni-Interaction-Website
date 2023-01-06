import React from 'react'
import "./Home.css"
import {AiOutlineClockCircle} from "react-icons/ai";
import {TfiLocationPin} from "react-icons/tfi"
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
  return (
<div id='body'> 
<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 titleimg"
          src="https://alumnitdgp.in/images/home/DAA_Flyer2.jpg?v=011339"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 titleimg"
          src="https://i0.wp.com/indiacollegefest.com/wp-content/uploads/2022/05/ESMOC-2021-3rd-Energy-System-Modeling-and-Optimization-Conference-NIT-Durgapur.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 titleimg"
          src="https://backend.istenitdgp.com/media/images/gallery/winter2-min.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  
  <div className='highlightdiv'>
    <span className='highlight'>HIGHLIGHTS</span>
  </div>
  <div className='highlightflex'>
    <div className="hfbox">
      <div className="content">
        <h5>ALUMNI VISITING FACULTY</h5>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus id sint corrupti itaque pariatur laborum libero eveniet.
        </span>
      </div>
      <button className="readmore"><a href='/'>Read More...</a></button>
    </div>
    <div className="hfbox">
      <div className="content">
        <h5>ALUMNI VISITING FACULTY</h5>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, sit beatae! Modi, dolor quod. Pariatur, ipsum.
        </span>
      </div>
      <button className="readmore"><a href='/'>Read More...</a></button>
    </div>
    <div className="hfbox">
      <div className="content">
        <h5>ALUMNI LECTURE SERIES</h5>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo praesentium et perspiciatis id totam error impedit earum doloribus?
        </span>
      </div>
      <button className="readmore"><a href='/'>Read More...</a></button>
    </div>
    <div className="hfbox">
      <div className="content">
        <h5>MENTORSHIP PROGRAM</h5>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, suscipit? Id aliquid, sint nulla debitis itaque in?
        </span>
      </div>
      <button className="readmore"><a href='/'>Read More...</a></button>
    </div>
  </div>
  <div className="nextdiv">
    <div id='big'>1000+</div>
    <div id='text'> Number of Alumni have joined and taken the advantage of Alumni Services run by the CSAIC!</div>
    <div id='join'> <a href='/'> Join Now </a> </div>
  </div>
  <div className="eventcal" id='evcalid'>
    <div className="a">
      <div className='highlightdiv' id='ev'>
        <span className='highlight'>EVENTS</span>
      </div>
      <div className="ev">
      <Carousel>
      <Carousel.Item>
        <div className="left">
          <img
            className="d-block w-100 imghight"
            src="https://alumnitdgp.in/images/home/DAA_Flyer2.jpg?v=011339"
            alt="First slide"
          />
          <div className="ldoc">
            <div className='evhead'>Lorem ipsum dolor, sit amet</div>
            <div className='evstart'>started on 20th December</div>
            <div className='evdescript'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias harum debitis deserunt. Sint.</div>
            <div className="buttondiv">
              <a className='readmorebutton' href='/'>Read More...</a>
            </div>
        </div>
        </div>
        <div className="right">
          <img
            className="d-block w-100 imghight"
            src="https://i0.wp.com/indiacollegefest.com/wp-content/uploads/2022/05/ESMOC-2021-3rd-Energy-System-Modeling-and-Optimization-Conference-NIT-Durgapur.jpg"
            alt="Second slide"
          />
          <div className="rdoc">
            <div className='evhead'>Lorem ipsum dolor, sit amet</div>
            <div className='evstart'>started on 20th December</div>
            <div className='evdescript'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias harum debitis deserunt. Sint.</div>
            <div className="buttondiv">
              <a className='readmorebutton' href='/'>Read More...</a>
            </div>
         </div>
        </div>
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <div className="left">
          <img
            className="d-block w-100 imghight"
            src="https://nitdgp.ac.in/uploads/userfiles/images/100.png"
            alt="Second slide"
          />
          <div className="ldoc">
                <div className='evhead'>Lorem ipsum dolor, sit amet</div>
                <div className='evstart'>started on 20th December</div>
                <div className='evdescript'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias harum debitis deserunt. Sint.</div>
                <div className="buttondiv">
              <a className='readmorebutton' href='/'>Read More...</a>
            </div>
          </div>
        </div>
        <div className="right">
          <img
            className="d-block w-100 imghight"
            src="https://backend.istenitdgp.com/media/images/gallery/winter2-min.png"
            alt="Third slide"
          />
          <div className="rdoc">
            <div className='evhead'>Lorem ipsum dolor, sit amet</div>
            <div className='evstart'>started on 20th December</div>
            <div className='evdescript'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias harum debitis deserunt. Sint.</div>
            <div className="buttondiv">
              <a className='readmorebutton' href='/'>Read More...</a>
            </div>
          </div>
        </div>

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <div className="left">
          <img
            className="d-block w-100 imghight"
            src="https://pbs.twimg.com/media/ErxbEIzVcAA1nRZ.jpg"
            alt="Third slide"
          />
          <div className="ldoc">
            <div className='evhead'>Lorem ipsum dolor, sit amet</div>
            <div className='evstart'>started on 20th December</div>
            <div className='evdescript'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias harum debitis deserunt. Sint.</div>
            <div className="buttondiv">
              <a className='readmorebutton' href='/'>Read More...</a>
            </div>
          </div>
        </div>
        <div className="right">
          <img
            className="d-block w-100 imghight"
            src="https://alumnitdgp.in/images/home/DAA_Flyer2.jpg?v=011339"
            alt="First slide"
            />
            <div className="rdoc">
              <div className='evhead'>Lorem ipsum dolor, sit amet</div>
              <div className='evstart'>started on 20th December</div>
              <div className='evdescript'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias harum debitis deserunt. Sint.</div>
              <div className="buttondiv">
                <a className='readmorebutton' href='/'>Read More...</a>
              </div>
            </div>
        </div>
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
      </div>
    </div>
    <div className="b">
      <div className='highlightdiv' id='cal'>
        <span className='highlight'>CALENDAR</span>
      </div>
      <div className="cal">
        <div className="evcal">
          <div className="date">
            25 Dec <br /> 2022
          </div>
          <div className="evdes">
            <span className='evdesline'>Lorem ipsum dolor sit amet consectetur.</span> <br /> <AiOutlineClockCircle/> 11:00 a.m. &nbsp; <TfiLocationPin/> Virtual
          </div>
        </div>
        <div className='evcal'>
          <div className="date">
            25 Dec <br /> 2022
          </div>
          <div className="evdes">
            <span className='evdesline'>Lorem ipsum dolor sit amet consectetur.</span><br /> <AiOutlineClockCircle/> 11:00 a.m. &nbsp; <TfiLocationPin/> Virtual
          </div>
        </div>
        <div className="evcal">
          <div className="date">
            25 Dec <br /> 2022
          </div>
          <div className="evdes">
            <span className='evdesline'>Lorem ipsum dolor sit amet consectetur.</span><br /> <AiOutlineClockCircle/> 11:00 a.m. &nbsp; <TfiLocationPin/> Virtual
          </div>
        </div>
        <div className="evcal">
          <div className="date">
            25 Dec <br /> 2022
          </div>
          <div className="evdes">
            <span className='evdesline'>Lorem ipsum dolor sit amet consectetur.</span><br /> <AiOutlineClockCircle/> 11:00 a.m. &nbsp; <TfiLocationPin/> Virtual
          </div>
        </div>
        <div className="evcal">
          <div className="date">
            25 Dec <br /> 2022
          </div>
          <div className="evdes">
           <span className='evdesline'>Lorem ipsum dolor sit amet consectetur.</span><br /> <AiOutlineClockCircle/> 11:00 a.m. &nbsp; <TfiLocationPin/> Virtual 
          </div>
        </div>
        <div className="evcal">
          <div className="date">
            25 Dec <br /> 2022
          </div>
          <div className="evdes">
            <span className='evdesline'>Lorem ipsum dolor sit amet consectetur.</span><br /> <AiOutlineClockCircle/> 11:00 a.m. &nbsp; <TfiLocationPin/> Virtual
          </div>
        </div>
        <div className="evcal">
          <div className="date">
            25 Dec <br /> 2022
          </div>
          <div className="evdes">
            <span className='evdesline'>Lorem ipsum dolor sit amet consectetur.</span><br /> <AiOutlineClockCircle/> 11:00 a.m. &nbsp; <TfiLocationPin/> Virtual
          </div>
        </div>
        <div className="evcal">
          <div className="date">
            25 Dec <br /> 2022
          </div>
          <div className="evdes">
            <span className='evdesline'>Lorem ipsum dolor sit amet consectetur.</span><br /> <AiOutlineClockCircle/> 11:00 a.m. &nbsp; <TfiLocationPin/> Virtual
          </div>
        </div>
        <div className="evcal">
          <div className="date">
            25 Dec <br /> 2022
          </div>
          <div className="evdes">
            <span className='evdesline'>Lorem ipsum dolor sit amet consectetur.</span><br /> <AiOutlineClockCircle/> 11:00 a.m. &nbsp; <TfiLocationPin/> Virtual
          </div>
        </div>
        <div className="evcal">
          <div className="date">
            25 Dec <br /> 2022
          </div>
          <div className="evdes">
            <span className='evdesline'>Lorem ipsum dolor sit amet consectetur.</span><br /> <AiOutlineClockCircle/> 11:00 a.m. &nbsp; <TfiLocationPin/> Virtual
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
