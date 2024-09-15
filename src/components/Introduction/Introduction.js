import { useState } from 'react'
import './Introduction.css'

export function Introduction({ onNameSubmit }) {
  const [name, setName] = useState('')

  const handleChange = (event) => {
    setName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (name.trim()) {
      onNameSubmit(name)
    }
  }

  return (
    <div className="introduction">
      <h1>Bem-vindo! Por favor, insira seu nome:</h1>
      <form onSubmit={handleSubmit} className='form'>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Seu nome"
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}