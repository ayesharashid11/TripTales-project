import React, { useState } from 'react';
import { Button, Label, Modal, TextInput, Textarea } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addReview } from '../slices/review/addReviewSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 export default function AddReview(){
  const { id: tourId } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(5); 
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error('Please sign in to add a review.');
      return;
    }

    try {
      await dispatch(addReview({ review, rating, tourId, userId: user._id })).unwrap();
      toast.success('Review added successfully!');
      setReview('');
      setRating(5);
      setOpenModal(false);
    } catch (error) {
      toast.error(error);
    }
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <ToastContainer />
      <p
        className='text-emerald-700 text-md font-medium cursor-pointer hover:text-emerald-300'
        onClick={() => setOpenModal(true)}
      >
        Add Review
      </p>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add Your Review</h3>
              <div>
                <Label htmlFor="review" value="Review" />
                <Textarea
                  id="review"
                  required
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <Label htmlFor="rating" value="Rating" />
                <TextInput
                  id="rating"
                  type="number"
                  required
                  value={rating}
                  min={1}
                  max={5}
                  onChange={(e) => setRating(Number(e.target.value))}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="w-full">
                <Button type="submit" className="w-full text-white bg-emerald-700 rounded-lg text-sm px-4 py-2">
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

// export default AddReview;
