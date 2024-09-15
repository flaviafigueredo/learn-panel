import './Textarea.css'

export function Textarea({ name, placeholder, value, onChange, error }) {
  return (
    <div className="textarea-container">
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <p className="error">{error}</p>} {/* Exibe o erro se houver */}
    </div>
  )
}