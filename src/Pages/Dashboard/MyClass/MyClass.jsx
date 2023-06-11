import { FaTrashAlt } from "react-icons/fa";
import useManageClass from "../../../hooks/useManageClass";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyClass = () => {
    const [manageClass, , refetch] = useManageClass();
    const [axiosSecure] = useAxiosSecure();
    
    const handleDelete =(row) =>{
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
             
            axiosSecure.delete(`/classes/${row._id}`)
            .then(data =>{
                console.log(data.data);
                if(data.data.deletedCount > 0){
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
            <h2 className="text-3xl font-bold text-center mt-8 mb-4">Manage All Classes: {manageClass.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Sports Name</th>
                            <th>Instructors Name</th>
                            <th>Price</th>
                            <th>Seats</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageClass.map((row, index)=> <tr key={row._id}>
                                <td>{index + 1}</td>
                                <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={row.image}alt="Avatar" />
                                            </div>
                                        </div>
                                </td>
                                <td>{row.name}</td>
                                <td>{row.instructors_name}</td>
                                <td>{row.price}</td>
                                <td>{row.seats}</td>
                                <th>
                                <button onClick={()=> handleDelete(row)} className="btn btn-ghost btn-lg">
                                        <FaTrashAlt />
                                    </button>
                                </th>
                            </tr>)
                        }
                        
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyClass;