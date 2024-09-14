import './Form.css'

export function Form({ children }) {
    return (
        <div className="form-container">
            <h2>Envie suas dúvidas</h2>
            {children}
        </div>
    )
}