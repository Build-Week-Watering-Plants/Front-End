
import React from 'react'
import styled from 'styled-components'
import Plant5 from './images/plant5.jpg'
const StyleHome = styled.div`
background-color: ###e8dfe3;
div{
    background-image: url(${Plant5});
background-size: contain;
  width:100%;
  height:100px;
    margin:auto;
}
h1{
    font-family: 'Chelsea Market';
    font-size: 3em;
  text-align: center;
  color:#3a5b34;
  
}
img{
display:flex;
width:50%;
margin:auto;
}
`

export default function Home() {



return(
    <div className='home-container'>
        <h2>Never kill a plant again (hopefully)</h2>
        <img src="https://rem-stroitelstvo.ru/wp-content/uploads/2017/02/skandi22.jpg" />

        <p>Ok, so we can’t really guarantee you won’t kill your houseplants. <br></br>Plants have different needs and react to sunlight, water, and fertilizer in a variety of ways. Learn about their needs and you might be able to stop the damage in time. Use a little extra TLC, and they might even <i>flourish</i>.</p>

        <p>Not sure where to start? <br></br>Our app is here to help you figure out what your plants need and how you can nurture them.</p>

        <h2>Identify Your Plant</h2>
        <p>Manually enter your plant babies' species into the app and you'll get a brief description of what your plants should look like when they're healthy, care instructions with their water and light preferences, as well as a list of common issues that cause them to fall ill.</p>

        <h2>Smart Tracking</h2>
        <p>By logging the different species of plants you have at home, you can manually keep track of the light intensity of the room in which they're placed and <b>get push notifications</b> about when you should water them based on the weather in your area.</p>
        <h4></h4>
    </div>


<StyleHome>
        <div>
<h1>Water My Plants</h1>

</div>

<img className = "PlantPic" src = {require("./images/plant4.jpg")} alt = {"Plant"} />
<img className = "PlantPic1" src = {require("./images/plant3.jpg")} alt = {"Plant"} />


</StyleHome>

)

}
