import './Header.css'

export function Header({ userName }) {
    return (
        <header className="header">
            <h2>Meu painel</h2>
            <p>Olá, {userName || 'usuário(a)'}</p>
        </header>
    )
}