import React from 'react';

const Form = ({ currentLocation, setCurrentLocation, onSubmitHandler }) => {
  return (
    <div className='weather__form__section'>
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmitHandler();
        }}
        className='weather__form'
      >
        <input
          type='text'
          placeholder='Enter city name'
          className='weather__form__input'
          value={currentLocation}
          onChange={e => setCurrentLocation(e.target.value)}
        />
        <button type='submit' className='weather__form__button'>
          <img src='/search.svg' alt='search' />
        </button>
      </form>
    </div>
  );
};

export default Form;
