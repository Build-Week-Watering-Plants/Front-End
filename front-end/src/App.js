import React, {useState, useEffect }  from 'react';
import './App.css';
import {Route, Switch, Routes, useParams } from 'react-router-dom';
import Navigation from './components/Navigation';
import axios from 'axios';
import styled from 'styled-components'
import Home from './components/Home';
import Plant from './components/Plant';
import PlantList from './components/PlantList';
import SignupPage from './components/SignupPage';
import PrivateRoute from './components/PrivateRoute';
import UserProfile from './components/UserProfile';


const StyleHeader = styled.header`
background-color: #e8dfe3;`

const initialFormValues = {
  nickname: '',
  species: '',
  image: '',
  waterFrequency: ''
}


export default function App() {
  const [plant, setPlant] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const { user_id } = useParams;
  
  const postPlantList = newPlant => {

    axios.post(`https://water-my-plants-build-week-123.herokuapp.com/api/plants/additem/${user_id}`, newPlant) // find out what user_id is
    .then(resp => {
      setPlant(resp.data)
      console.log(plant)
    }).catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues))
  }

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value
    })
  }
  
  const plantSubmit = () => {
    const newPlant = {
      nickname: formValues.nickname.trim(),
      species: formValues.species.trim(),
      image: formValues.image,
      waterFrequency: formValues.waterFrequency
    }
    postPlantList(newPlant)
  }


  
  return (
    <StyleHeader>
      <div className="App">
       
       <header>
          <Navigation/>
          
        </header>

      
       

      <Switch>
        <Route exact path='/'>
          <Home/>

        </Route>

        <Route exact path='/plantlist'>
            <PlantList values={formValues}
                        change={inputChange}
                        submit={plantSubmit}
                        //errors={formErrors}
                        />
        </Route>
        <Route exact path="/signup" component={SignupPage} />
        <PrivateRoute exact path="/userprofile" component={UserProfile} />
        </Switch>
        
      </div>
      </StyleHeader>
  );
}


