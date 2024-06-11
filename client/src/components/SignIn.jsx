import React from 'react'

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import OAuth from './OAuth';

const Signin = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <p className="text-emerald-700  rounded-lg text-md font-medium cursor-pointer hover:text-emerald-300  text-center"
      onClick={() => setOpenModal(true)}>Sign In</p>
      <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900">Sign in to our platform</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput id="email"  placeholder="name@company.com" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
            <div className="flex justify-between">
              <a href="#" className="text-sm text-cyan-700 hover:underline">
                Lost Password?
              </a>
              <p className='text-emerald-700 cursor-pointer underline'>Log in</p>
            </div>
            <div className="">
              <OAuth />
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500">
              Not registered?&nbsp;
             <Link to="/signup"className="text-cyan-700 hover:underline"
             onClick={() => setOpenModal(false)}>
                Create account
                </Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Signin

