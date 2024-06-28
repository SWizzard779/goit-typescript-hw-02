import css from './ErrorMessage.module.css';
import { ErrorMessageProps } from './ErrorMessage.types';

// export default function ErrorMessage({ children }) {
//   return <p className={css.error}>{children}</p>;
// }


const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className="error-message">
    {message}
  </div>
);

export default ErrorMessage;