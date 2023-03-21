import '../Css/Card.css'

const Card = (props) => {
    return (
       <div className="card">
            <h1 className="title">{props.title}</h1>
            <p>{props.body}</p>
            
       </div>
    )
}

export  default Card;