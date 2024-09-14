import './Header.css'
import { Advice } from '../Advice/Advice'

export function Header() {
    return (
        <header className="header">
            <h2>Meu painel</h2>
            <Advice />
            <p>Olá, usuário(a)</p>
        </header>
    )
}