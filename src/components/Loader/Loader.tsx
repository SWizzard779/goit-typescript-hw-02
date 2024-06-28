import { Circles } from 'react-loader-spinner';
import css from './Loader.module.css';
import { LoaderProps } from './Loader.types';

const Loader: React.FC<LoaderProps> = () => (
  <div className={css.loader}>Loading...</div>
);

export default Loader;