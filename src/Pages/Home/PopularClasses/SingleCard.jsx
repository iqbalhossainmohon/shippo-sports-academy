
const SingleCard = ({ card }) => {
  return (

    <div className="card card-side shadow-xl bg-gray-300">
      <figure>
        <img src={card.image} alt="Class" className="w-64 h-64" />
      </figure>
      <div className="card-body  my-auto">
        <h2 className="card-title">{card.name}</h2>
        <p>Site: {card.sit}</p>
      </div>
    </div>
  )
}

export default SingleCard;