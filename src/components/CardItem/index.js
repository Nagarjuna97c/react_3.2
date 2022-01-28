// Write your code here.
import './index.css'

const Card = props => {
  const {title, imgUrl, className, description} = props
  return (
    <li className={`card ${className}`}>
      <h1 className="heading1">{title}</h1>
      <p className="para1">{description}</p>
      <img className="image" src={imgUrl} alt={title} />
    </li>
  )
}

export default Card
