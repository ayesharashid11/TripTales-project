import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AuthRoute;


// const AuthRoute = ({ children }) => {
//   const { token } = useSelector((state) => state.auth);

//   useEffect(() => {
//     if (!token) {
//       toast.error('Sign in to your account.', {
//         position: "top-center",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         draggable: true,
//         progress: undefined,
//       });
//     }
//   }, [token]);

//   if (!token) {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

// export default AuthRoute;
