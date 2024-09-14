import './Button.css'

export function Button({ text }) {
    return (
        <button className="button">
            {text}
        </button>
    )
}