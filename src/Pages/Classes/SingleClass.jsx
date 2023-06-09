import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useSelectClass from "../../hooks/useSelectClass";


const SingleCard = ({ card }) => {
  const {image, name, instructors_name, price, seats, _id}= card;

  const { user } = useContext(AuthContext);
  const [, refetch] = useSelectClass();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelectClass = (card) => {
    console.log(card);
    if (user && user.email) {
      const selectClass = {classId: _id, name, image,instructors_name, price, email: user.email}
      fetch('http://localhost:5000/select',{
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(selectClass)
      })
        .then(res=> res.json())
        .then(data => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'Class Selected has been Successful.',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
    }
    else {
      Swal.fire({
        title: 'Please Login to Selected the Class',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Please Login now!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/LogIn', {state: {from: location}});
        }
      })
    }
  }
  return (
    <div className='col-span-1 cursor-pointer group'>
      <div className='flex flex-col gap-2 w-full'>
        <div
          className='
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            '
        >
          <img
            className='
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              '
            src={image}
            alt='Class'
          />
        </div>
        <div className='font-semibold text-lg'>{name}</div>
        <div>
          <p>Instructor: {instructors_name}</p>
        </div>
        <hr />
        <div className="flex justify-between items-center">
          <p>Price: ${price}</p>
          <p>Seats: {seats}</p>
        </div>
        <div className="mx-auto my-4">
          <button onClick={() => handleSelectClass(card)} className="btn btn-outline text-center">Selected Class</button>
        </div>
      </div>
    </div>
  )
}

export default SingleCard;