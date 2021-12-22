import React, {useState, useEffect}  from 'react';
import './App.css';
import {Route, Switch, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import axios from 'axios';

import Home from './components/Home';
import Plant from './components/Plant';
import PlantList from './components/PlantList';
import Login from './components/Login';

const initialFormValues = {
  nickname: '',
  species: '',
  image: '',
  waterFrequency: ''
}


export default function App() {
  const [plant, setPlant] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  
  const postPlantList = newPlant => {


    axios.post('https://water-my-plants-build-week-123.herokuapp.com/api/plants/additem/:user_id', newPlant)
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
  
      <div className="App">
       
       <header>
          <Navigation/>
          Water My Plants
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
        </Switch>
        
      </div>
   
  );
}


