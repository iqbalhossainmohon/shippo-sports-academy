

const Instructors = ({ card }) => {
    return (
        <div className='col-span-1 cursor-pointer group'>
            <div className='flex flex-col gap-2 w-full md:w-full'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={card.image} alt="" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="font-bold text-2xl text-center">{card.instructors_name}</h2>
                        <p>{card.instructors}</p>
                        <p>Class: {card.sports_name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instructors;