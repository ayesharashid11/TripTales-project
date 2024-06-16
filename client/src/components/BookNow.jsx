import React, { useState, useEffect } from 'react';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTourById } from '../slices/tour/tourSlice';
import { pay } from '../slices/paymnet/paymentSlice';

export default function BookNow() {
  const [openModal, setOpenModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
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
      console.error('User not logged in');
      return;
    }

    dispatch(pay({ userId: user._id, tourId, mobileNumber: phoneNumber }));
    onCloseModal();
  };

  const onCloseModal = () => {
    setOpenModal(false);
    setPhoneNumber('');
  };

  return (
    <>
      <p
        className='text-emerald-700 text-md font-medium cursor-pointer hover:text-emerald-300'
        onClick={() => setOpenModal(true)}
      >
        Book Now
      </p>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Pay with JazzCash</h3>
            {status === 'loading' && <p>Loading tour details...</p>}
            {status === 'failed' && <p className="text-red-500">{error}</p>}
            {tour && (
              <>
                <div>
                  <p>Tour: {tour.tourName}</p>
                  <p>Price: {tour.price}</p>
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
                {response && (
                  <div>
                    <p>Payment Successful</p>
                    <p>User Email: {response.userEmail}</p>
                    <p>Tour Name: {response.tourName}</p>
                    <p>Tour Price: {response.tourPrice}</p>
                  </div>
                )}
              </>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
