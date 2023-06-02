import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from 'react-hook-form';
import { fetchBrewery } from "../Actions";


const SearchBar = () => {
  const [result, setResult] = useState('brewery');
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, reset } = useForm();

  const handleSelectChange = e => {
    setResult(e.currentTarget.value);
  }

  const handleFormSubmit = (query) => {
    dispatch(
      fetchBrewery(query)
    )

    reset();
  }

  return (
    <div>
      <div className='container'>
  
        <form className='container row' onSubmit={handleSubmit(handleFormSubmit)}>
          <div>
            <label className='form-label'>Search for Specific Brewery or a City and Find a Brewery</label>
          </div>
          <div className='mb-3'>
            <div className='input-group'>
              <input className='form-control' type='text' {...register('name')} placeholder={result === 'brewery' ? 'Type a Brewery' : 'Type a City'}></input>
              <button className='btn btn-primary' type='submit'>Search</button>
            </div>
            <div className='col-md-2'>
              <select defaultValue='brewery' className='form-select' onChange={handleSelectChange}>
                <option value='brewery'>Brewery</option>
                <option value='city'>City</option>
              </select>
            </div>
            
            {/* <div className='form-check form-check-inline'>
              <input class='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault1'></input>
              <label className='form-check-label' for='flexRadioDefault1'>Brewery</label>
            </div>
            <div className='form-check form-check-inline'>
              <input className='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault2'></input>
              <label className='form-check-label' for='flexRadioDefault2'>City</label>
            </div> */}
          </div>
        <hr />
      </form>


      </div>
    </div>
    
  )
}

export default SearchBar;