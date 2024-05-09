import css from './ErrorMessage.module.css';

const ErrorMessage:React.FC = () => {
  return (
    <>
      <p className={css.message}>Oops, something went wrong</p>
    </>
  );
};

export default ErrorMessage;
