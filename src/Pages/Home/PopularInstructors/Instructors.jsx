

const Instructors = ({ card }) => {
    return (
        <div className='col-span-1 cursor-pointer group'>
            <div className='flex flex-col gap-2 w-full md:w-full'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={card.image} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{card.instructors_name}</h2>
                        <p>{card.instructors}</p>
                        <p>Class: {card.sports_name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instructors;