import Swal from "sweetalert2";
import useSelectClass from "../../../hooks/useSelectClass";
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MySelectedClass = () => {
    const [select, refetch] = useSelectClass();
    console.log(select);
    const total = select.reduce((sum, selected) => selected.price + sum, 0)

    const handleDelete = row => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/select/${row._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div>
            <Helmet>
                <title>Selected Class - Shippo Sports Academy</title>
            </Helmet>
            <div className="flex justify-between items-center my-6">
                <h2 className="text-2xl font-bold ">My Selected Class: {select.length}</h2>
                <h2 className="text-2xl font-bold ">Total Price: ${total}</h2>
                <Link to='/dashboard/payment'><button className="btn bg-rose-300 btn-sm">Payment</button></Link>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Instructors Name</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            select.map((row, index) => <tr
                                key={row._id}
                            >
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={row.image} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{row.instructors_name}</td>
                                <td>{row.name}</td>
                                <td>{row.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(row)} className="btn btn-ghost btn-lg">
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClass;