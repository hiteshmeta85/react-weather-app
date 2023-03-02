import React from 'react';

const Form = () => {
  return (
    <div className='weather__form__section'>
      <form>
        <input
          type='text'
          placeholder='Enter city name'
          className='weather__form__input'
        />
        <button
          type='submit'
          className='weather__form__button'
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
