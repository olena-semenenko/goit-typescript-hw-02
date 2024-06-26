import { useEffect, useRef } from 'react';
import css from './LoadMoreBtn.module.css';
import { LoadMoreBtnProps } from './LoadMoreBtn.types';



const LoadMoreBtn:React.FC<LoadMoreBtnProps> = ({ onLoadMoreBtn, loadMoreScroll }) => {
  const onBtnRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (onBtnRef.current) {
      onBtnRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [loadMoreScroll]);
  const handleClick = ():void => {
    onLoadMoreBtn();
  };

  return (
    <div className={css.container}>
      <button onClick={handleClick} type="button" className={css.button} ref={onBtnRef}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
