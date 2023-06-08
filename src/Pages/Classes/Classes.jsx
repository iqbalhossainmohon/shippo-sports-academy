import { useEffect, useState } from "react";
import SingleCard from "./SingleClass";

const Classes = () => {

    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setClasses(data);
            })
    }, [])

    return (
        <div>
            <h2 className="text-center font-bold text-5xl my-6">Classes</h2>

            <div className="pt-12 pb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

                {
                    classes.map((card, index) => <SingleCard
                        key={index}
                        card={card}
                    />)
                }

            </div>
        </div>
    );
};

export default Classes;