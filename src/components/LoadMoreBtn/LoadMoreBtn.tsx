import styles from './LoadMoreBtn.module.css';
import React from 'react';
import { LoadMoreBtnProps } from './LoadMoreBtn.types';

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => (
  <button className={styles.Loadmore_btn} type="button" onClick={onClick}>
    Load More
  </button>
);

export default LoadMoreBtn;