import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from 'react-hook-form';
import { fetchBreweryByName, fetchBreweryByCity } from "../Actions";


const SearchBar = () => {
  const [result, setResult] = useState('brewery');
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, reset } = useForm();

  const handleSelectChange = e => {
    setResult(e.currentTarget.value);
  }

  const handleFormSubmit = (query) => {
    
    if (query.name) {
      dispatch(
        fetchBreweryByName(query)
      )
    } else if (query.city) {
      dispatch(
        fetchBreweryByCity(query)
      )
    } else {
      console.log("Something has gone terribly wrong with the search!!")
    }
    

    reset();
    setResult('brewery');
  }

  return (
    <div className='container search-bar'>
      <form className='container row' defaultValue='brewery' onSubmit={handleSubmit(handleFormSubmit)}>
        <div>
          <label className='form-label'>Select the type of search from the dropdown then enter your Brewery or City name</label>
        </div>
        <div className='mb-3'>
          <div className='col-md-2 mb-2'>
            <select className='form-select' onChange={handleSelectChange}>
              <option value='brewery'>Brewery</option>
              <option value='city'>City</option>
            </select>
          </div>          
          <div className='input-group'>
            <input className='form-control' type='text' {...register(result === 'brewery' ? 'name' : 'city')} placeholder={result === 'brewery' ? 'Type a Brewery' : 'Type a City'}></input>
            <button className='btn btn-primary' type='submit'>Search</button>
          </div>
          
        </div>
      <hr />
    </form>
    </div>
  )
}

export default SearchBar;