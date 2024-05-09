import { useState,FormEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';
import { SearchBarProps } from './SearchBar.types';



const SearchBar:React.FC<SearchBarProps> = ({ onSubmit }) => {
  // logic function to handle search bar input

  const handleSubmit = (e:FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    if (userInput) {
      const userSearch = userInput.toLocaleLowerCase().trim();

      onSubmit(userSearch);
    } else {
      toast.error('Please enter a search value.');
    }
  };

  // logic for the search bar
  const [userInput, setUserInput] = useState<string>('');
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
    setUserInput(e.target.value);
  };

  return (
    <header className={css.header}>
      <div>
        <Toaster position="top-right" />
      </div>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          value={userInput}
          onChange={handleChange}
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          🔍
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
