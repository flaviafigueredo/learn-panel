import './Footer.css'

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 Learn Panel. Todos os direitos reservados.</p>
                <ul className="footer-links">
                    <li><a href="/">Sobre</a></li>
                    <li><a href="/">Contato</a></li>
                    <li><a href="/">Política de Privacidade</a></li>
                </ul>
            </div>
        </footer>
    )
}