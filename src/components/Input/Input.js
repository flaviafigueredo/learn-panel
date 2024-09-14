import './Input.css'

export function Input({ placeholder }) {
    return (
        <div className="input-container">            
            <input type="text" placeholder={placeholder} />
        </div>
    )
}