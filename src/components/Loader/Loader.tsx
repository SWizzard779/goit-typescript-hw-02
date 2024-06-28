import { Circles } from 'react-loader-spinner';
import css from './Loader.module.css';
import { LoaderProps } from './Loader.types';

// export default function Loader() {
//   return (
//     <div className={css.loader}>
//       <Circles
//         height="100"
//         dth="100"
//         color="blue"
//         ariaLabel="circles-loading"
//         wrapperStyle={{}}
//         wrapperClass=""
//         visible={true}
//       />
//     </div>
//   );
// }

const Loader: React.FC<LoaderProps> = () => (
  <div className={css.loader}>Loading...</div>
);

export default Loader;