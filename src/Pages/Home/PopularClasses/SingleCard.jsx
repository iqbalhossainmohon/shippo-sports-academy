

const SingleCard = ({card}) => {
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
            src={card.image}
            alt='Class'
          />
        </div>
        <div className='font-semibold text-lg'>{card.name}</div>
        <div className='font-bold text-xl text-neutral-500'>
          Site: {card.sit}
        </div>
      </div>
    </div>
  )
}

export default SingleCard;