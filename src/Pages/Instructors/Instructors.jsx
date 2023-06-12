import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";


const Instructors = () => {

    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setInstructors(data);
            })
    }, [])
    return (
        <div>
             <Helmet>
                <title>Instructors - Shippo Sports Academy</title>
            </Helmet>
            <h3 className="text-5xl font-bold text-center mt-4">Instructors</h3>


            <div className="overflow-x-auto my-12">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Class</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            instructors.map((data, index) => <tr
                                key={index}
                            >
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={data.image} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <th>{data.instructors_name}</th>
                                <td>{data.instructors}</td>
                                <td>{data.sports_name}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Instructors;

