import React from 'react'
import ReactPlayer from 'react-player'
import Navbar from './Navbar'

const Mood = () => {
  return (
    <div className="container">
      <Navbar></Navbar>
      <header>
        <h4 className="center">Moods</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae repellat illo magni eligendi cupiditate voluptates eius nam voluptate. Incidunt nihil ullam quae quia officia quaerat, deserunt eligendi explicabo totam?</p>
      </header>
      <section>
        <header>
          <h2>MOMENTS</h2>
          <p>queens have moments</p>
        </header>
        <section class='video-section'>
          <div class='video'>
            <h4>i'm joey jay</h4>
            <ReactPlayer url='https://www.youtube.com/watch?v=_G5S4CGntXg'/>
          </div>
          <div class='video'>
            <h4>what you wanna do</h4>
            <ReactPlayer url='https://www.youtube.com/watch?v=J1m9UuH1l6U'/>
          </div>
          <div class='video'>
            <h4>kinda like the smell</h4>
            <ReactPlayer url='https://www.youtube.com/watch?v=h_lxALtojAw'/>
          </div>
        </section>
      </section>
      <section>
        <header>
          <h2>ADAM JOSEPH</h2>
          <p>queens have music</p>
        </header>
        <section class='video-section'>
          <div class='video'>
            <h4>miss vanjie</h4>
            <ReactPlayer url='https://www.youtube.com/watch?v=FqfgMMJgJT8'/>
          </div>
          <div class='video'>
            <h4>okurrr</h4>
            <ReactPlayer url='https://www.youtube.com/watch?v=12vWFbP-Kzc'/>
          </div>
          <div class='video'>
            <h4>linda evangelista</h4>
            <ReactPlayer url='https://www.youtube.com/watch?v=hU8PPZosUhw'/>
          </div>
          <div class='video'>
            <h4>voguing right now</h4>
            <ReactPlayer url='https://www.youtube.com/watch?v=HkqGKfcqp4k'/>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Mood