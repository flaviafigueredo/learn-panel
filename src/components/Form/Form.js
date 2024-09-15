import './Form.css'
import { useState } from 'react'
import { Button } from '../Button/Button'

export function Form({ children }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        question: ''
    })

    const [errors, setErrors] = useState({}) // estado pra armazenar erros de validação

    // função pra atualizar o estado do form
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    // validação pra verificar se os campos estão preenchidos
    const validateForm = () => {
        const newErrors = {}
        if (!formData.name) newErrors.name = 'Nome é obrigatório'
        if (!formData.email) newErrors.email = 'E-mail é obrigatório'
        if (!formData.question) newErrors.question = 'Dúvida é obrigatório'
        return newErrors
    }

    // função pra envio do form
    const handleSubmit = (event) => {
        event.preventDefault()
        const validationErrors = validateForm()
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors) // define os erros de validação
        } else {
            alert('Formulário enviado com sucesso!')
            setErrors({}) // limpa os erros

            // limpa os dados do form
            setFormData({
                name: '',
                email: '',
                question: ''
            })
        }
    }

    return (
        <div className="form-container">
            <h2>Envie suas dúvidas</h2>
            <form onSubmit={handleSubmit}>
                {children(formData, handleChange, errors)} {/* passa formData, handleChange e erros */}
                <Button type="submit" text="Enviar" />
            </form>
        </div>
    )
}