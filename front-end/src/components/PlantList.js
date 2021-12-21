import React from 'react'
import Home from './Home'
import { NavLink } from 'react-router-dom'



export default function PlantList(props) {
    //destructured props ...uncomment when PlantForm is built out (remove props if no functions are built out)
    const{
        values,
        submit,
        change,
        //errors,
        //disabled
    } =props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }



return (
    <div>
    <NavLink to ='/Home'> <button>Home</button></NavLink >
   

    <form className= 'form container' id='plant-form' onSubmit={onSubmit}>
        <div className='form-group submit'>
        <h1>Make a New Plant</h1>

    
        {/*
        uncomment div if/when error function is built out in PlantForm
        <div className='errors'>
        <div>{errors.nickname}</div>
        <div>{errors.species}</div>
        <div>{errors.image}</div>
        <div>{errors.waterFrequency}
        </div>*/}

        </div> 

    <div className='form-group inputs'>
        <label>Enter a nickname for your plant:
            <input id='nickname-input'
                value={values.nickname}
                onChange={onChange}
                nickname='nickname'
                type='text'
            />
        </label>
        </div>

        <div className='form-group inputs'>
        <label>Upload a file for your plant:
            <input id='plant-image'
                value={values.image}
                onChange={onChange}
                nickname='image'
                type='file'
            />
        </label>
        </div>
    

    <div className='form-group inputs'>
        <label id='species'>What is this plant's species?
            <input
                value={values.species}
                onChange={onChange}
                type='input'
                name='species'
            />
        </label>
    </div>    
        
    <div className='form-group select'>    
        <label>How often should this plant be watered?
          <select id='waterFrequency-dropdown'
            onChange={onChange}
            value={values.waterFrequency}
            name='waterFrequency'
            >
            <option value=''>- Select the Watering Frequency -</option>
            <option value='daily'>Once a Day</option>
            <option value='weekly'>Once a Week</option>
            <option value='monthly'>Once a Month</option>
          </select>
        </label>
    </div>
    
    

   

    <button type='submit' id="submit-button">Submit New Plant</button>
</form>
</div>
)
}