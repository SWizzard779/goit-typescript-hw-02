import css from './ErrorMessage.module.css';
import { ErrorMessageProps } from './ErrorMessage.types';

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className="css.error">
    {message}
  </div>
);

export default ErrorMessage;