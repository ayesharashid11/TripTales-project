import React, { useState, useEffect } from 'react';
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../slices/auth/authSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, error, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!openModal) {
      setEmail('');
      setPassword('');
    }
  }, [openModal]);

  const handleLogin = () => {
    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        setOpenModal(false);
        toast.success('Login successful!');
        navigate('/');
      })
      .catch((error) => {
       console.log(error);
      });
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <ToastContainer />
      {token ? (
        <p
          className="text-emerald-700 rounded-lg text-md font-medium cursor-pointer hover:text-emerald-300 text-center"
          onClick={handleLogout}
        >
          Log Out
        </p>
      ) : (
        <p
          className="text-emerald-700 rounded-lg text-md font-medium cursor-pointer hover:text-emerald-300 text-center"
          onClick={() => setOpenModal(true)}
        >
          Sign In
        </p>
      )}
      <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900">Sign in to our platform</h3>
            {error && <p className="text-red-600">{error}</p>}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-between">
              <a href="#" className="text-sm text-cyan-700 hover:underline">
                Lost Password?
              </a>
              <p
                className="text-emerald-700 cursor-pointer underline"
                onClick={handleLogin}
                disabled={loading}
              >
                Log in
              </p>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500">
              Not registered?&nbsp;
              <Link
                to="/signup"
                className="text-cyan-700 hover:underline"
                onClick={() => setOpenModal(false)}
              >
                Create account
              </Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Signin;
