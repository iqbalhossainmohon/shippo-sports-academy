import { useEffect, useState } from "react";
import Instructors from "./Instructors";


const PopularInstructors = () => {

    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('https://shippo-sports-server-iqbalhossainmohon.vercel.app/popularInstructors')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setInstructors(data);
            })
    }, [])

    return (
        <div className="mt-8">
            <h2 className='text-center font-bold text-4xl py-8 text-purple-500 hover:underline'>Popular Instructors</h2>

            <div className="pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    instructors.map((card, index) => <Instructors
                    key={index}
                    card={card}
                    />)
                }
            </div>
            
        </div>
    );
};

export default PopularInstructors;