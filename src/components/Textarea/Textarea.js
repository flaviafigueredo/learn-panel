import './Textarea.css'

export function Textarea({ placeholder }) {
    return (
        <div className="textarea-container">            
            <textarea placeholder={placeholder} />
        </div>
    )
}