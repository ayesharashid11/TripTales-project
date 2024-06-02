import React from 'react'

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Signin = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button className="text-white bg-emerald-700  rounded-lg text-sm px-1 py-1 text-center"
      onClick={() => setOpenModal(true)}>Sign In</Button>
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
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a href="#" className="text-sm text-cyan-700 hover:underline">
                Lost Password?
              </a>
            </div>
            <div className="w-full">
              <Button className='bg-emerald-700 '>Log in to your account</Button>
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

