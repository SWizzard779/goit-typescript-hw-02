import css from './LoadMoreBtn.module.css';
import React from 'react';
import { LoadMoreBtnProps } from './LoadMoreBtn.types';

// export default function LoadMoreBtn({ onClick }) {
//   return (
//     <button className={css.Loadmore_btn} type="submit" onClick={onClick}>
//       Load more
//     </button>
//   );
// }

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => (
  <button type="button" onClick={onClick}>
    Load More
  </button>
);

export default LoadMoreBtn;