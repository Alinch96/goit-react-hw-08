import { useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { selectAuthError } from '../../redux/auth/selectors';
import AuthError from '../../components/AuthError/AuthError';

const RegisterPage = () => {
  const error = useSelector(selectAuthError);

  return (
    <div>
      <DocumentTitle>Registration</DocumentTitle>
      <RegistrationForm />
      {error && <AuthError />}
    </div>
  );
};

export default RegisterPage;
