import './Input.css'

export function Input({ name, placeholder, value, onChange, error }) {
    return (
        <div className="input-container">
            <input
                name={name}
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {error && <p className="error">{error}</p>} {/* exibe o erro se houver */}
        </div>
    )
}