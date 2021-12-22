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
    <StyleHome>
        <div>
<h1>Water My Plants</h1>

</div>

<img className = "PlantPic" src = {require("./images/plant4.jpg")} alt = {"Plant"} />
<img className = "PlantPic1" src = {require("./images/plant3.jpg")} alt = {"Plant"} />


</StyleHome>



)



}

