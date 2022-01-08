import React from 'react'
import ReactPlayer from 'react-player'
import Navbar from './Navbar'

const Show = () => {
  return (
    <div className="container">
      <Navbar></Navbar>
      <header>
        <h4 className="center">Show</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae repellat illo magni eligendi cupiditate voluptates eius nam voluptate. Incidunt nihil ullam quae quia officia quaerat, deserunt eligendi explicabo totam?</p>
      </header>
      <section>
        <header>
          <h2>SONGS</h2>
          <p>queens perform songs</p>
        </header>
        <section class='video-section'>
          <div class='video'>
            <h4>read you wrote you</h4>
            <ReactPlayer url='https://www.youtube.com/watch?v=PPTyqzM253Q'/>
          </div>
          <div class='video'>
            <h4>i'm that bitch</h4>
            <ReactPlayer url='https://www.youtube.com/watch?v=K2sGNUBUVv4'/>
          </div>
          <div class='video'>
            <h4>category is</h4>
            <ReactPlayer url='https://www.youtube.com/watch?v=Y1TWOYx9-TQ'/>
          </div>
          <div class='video'>
            <h4>UK hun?</h4>
            <ReactPlayer url='https://www.youtube.com/watch?v=209EnSDlKC8'/>
          </div>
        </section>
      </section>
      <section>
        <header>
          <h2>SCENES</h2>
          <p>queens perform skits and tricks</p>
        </header>
        <section class='video-section'>
          <div class='video'>
            <h4>team britney</h4>
            <ReactPlayer url='https://www.youtube.com/watch?v=jO4T8dpNEro'/>
          </div>
          <div class='video'>
            <h4>snatch game</h4>
            <ReactPlayer url='https://www.youtube.com/watch?v=NZ5WSiEUhEY'/>
          </div>
          <div class='video'>
            <h4>reading is fundamental</h4>
            <ReactPlayer url='https://www.youtube.com/watch?v=ZH5wM7tfiiU&t=132s'/>
          </div>
          <div class='video'>
            <h4>ruveal dance line</h4>
            <ReactPlayer url='https://www.youtube.com/watch?v=wdKjADotu4I&t=354s'/>
          </div>
        </section>
      </section>
      <section>
        <header>
          <h2>LIP SYNCS</h2>
          <p>queens lip syncing</p>
        </header>
        <section class='video-section'>
          <div class='video'>
            <h4>laganja v trinity</h4>
            <ReactPlayer url='https://www.youtube.com/watch?v=QjExLN38GSs'/>
          </div>
          <div class='video'>
            <h4>denali v kahmora</h4>
            <ReactPlayer url='https://www.youtube.com/watch?v=_YZ22KEafkc'/>
          </div>
          <div class='video'>
            <h4>alyssa v tatiana</h4>
            <ReactPlayer url='https://www.youtube.com/watch?v=LeEWBFTHvdw'/>
          </div>
          <div class='video'>
            <h4>yvie v brooklyn</h4>
            <ReactPlayer url='https://www.youtube.com/watch?v=PIxOkhOKAJo'/>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Show