import { useSelector } from 'react-redux';
import styles from './AuthError.module.css';
import { selectAuthError } from '../../redux/auth/selectors';

const AuthError = () => {
  const error = useSelector(selectAuthError);

  return <p className={styles.error}>{error}</p>;
};

export default AuthError;
