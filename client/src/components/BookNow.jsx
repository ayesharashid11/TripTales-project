import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

export default function BookNow() {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }

  return (
    <>
      <p className='text-emerald-700 text-md font-medium cursor-pointer hover:text-emerald-300'
        onClick={() => setOpenModal(true)}>Book Now</p>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Pay with JazzCash</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phoneno" value="Your PhoneNo." />
              </div>
              <TextInput id="phoneno" type="number" required />
            </div>
            <div className="w-full">
              <Button>Pay Now</Button>
            </div>
         
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
