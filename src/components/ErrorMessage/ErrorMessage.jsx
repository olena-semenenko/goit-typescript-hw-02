import React from 'react';
import css from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <>
      <p className={css.message}>Oops, something went wrong</p>
    </>
  );
};

export default ErrorMessage;
