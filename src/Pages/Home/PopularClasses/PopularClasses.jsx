import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

const PopularClasses = () => {

    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/popularClasses')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setClasses(data);
            })
    }, [])

    return (
        <div>
            <h2 className='text-center font-bold text-4xl py-8 text-purple-500 hover:underline'>Popular Classes</h2>

            <div className="pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

export default PopularClasses;