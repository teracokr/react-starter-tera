import { Navigate } from 'react-router-dom';

const Logout = () => {

  localStorage.clear();

  return <Navigate to="/" replace={true} />;
};

export default Logout;