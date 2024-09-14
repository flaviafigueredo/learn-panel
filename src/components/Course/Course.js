import './Course.css'

export function Course({ title, description, image }) {
    return (
        <div className="course">
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}