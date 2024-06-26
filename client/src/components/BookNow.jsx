import React, { useState, useEffect } from 'react';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTourById } from '../slices/tour/tourSlice';
import { pay } from '../slices/paymnet/paymentSlice';
import { toast } from 'react-toastify';
import { FaUserAlt } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { MdPayments } from "react-icons/md";

const BookNow = () => {
  const [openModal, setOpenModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [responseModal, setResponseModal] = useState(false);
  const dispatch = useDispatch();
  const { id: tourId } = useParams();
  const { tour, status, error } = useSelector((state) => state.tours);
  const { user } = useSelector((state) => state.auth);
  const { response, loading } = useSelector((state) => state.payment);

  useEffect(() => {
    if (tourId && !tour) {
      dispatch(fetchTourById(tourId));
    }
  }, [dispatch, tourId, tour]);

  const handlePayNow = () => {
    if (!user) {
      toast.error('You must be logged in to book a tour!');
      return;
    }
    dispatch(pay({ userId: user._id, tourId, mobileNumber: phoneNumber })).then(() => {
      setResponseModal(true);
      onCloseModal();
    });
  };

  const onCloseModal = () => {
    setOpenModal(false);
    setPhoneNumber('');
  };

  const onCloseResponseModal = () => {
    setResponseModal(false);
  };

  return (
    <>
      <p className='text-emerald-700 text-md font-medium cursor-pointer hover:text-emerald-300'
        onClick={() => setOpenModal(true)}>
        Book Now
      </p>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Pay with JazzCash</h3>
            {status === 'loading' && <p className='text-emerald-700 text-xl'>Loading tour details...</p>}
            {status === 'failed' && <p className="text-red-500">{error}</p>}
            {tour && (
              <>
                <div >
                  <p className='text-emerald-700 text-xl'><span className='text-yellow-500'>{tour.tourName}</span> </p>
                  <p className='text-emerald-700 text-xl'>Total Price: <span className='text-yellow-500'> $ {tour.price}</span> </p>
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="phoneNumber" value="Your Phone Number" />
                  </div>
                  <TextInput
                    id="phoneNumber"
                    type="number"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="w-full">
                  <Button onClick={handlePayNow} disabled={loading}>
                    {loading ? 'Processing...' : 'Pay Now'}
                  </Button>
                </div>
              </>
            )}
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={responseModal} size="md" onClose={onCloseResponseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className=" p-3 ">
            <h3 className="text-xl font-medium text-yellow-700 ">Payment Successful</h3>
            {response && (
              <>
                <p className='flex'>
                  <FaUserAlt className=' mr-2  text-emerald-700 font-medium text-xl' /> 
                  {response.userEmail}
                  </p>
                <p className='flex'>
                  <GrMapLocation className=' mr-2  text-emerald-700 font-medium text-xl' /> {response.tourName}
                  </p>
                <p className='flex'>
                  <MdPayments className=' mr-2  text-emerald-700 font-medium text-xl'/>$ {response.tourPrice}  </p>              
              </>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default BookNow;