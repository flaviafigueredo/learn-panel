import './Advice.css'
import { useEffect, useState } from "react"

async function getAdvice() {
    const URL = 'https://api.adviceslip.com/advice'
    const response = await fetch(URL)
    const data = await response.json()
    return data.slip.advice
}

export function Advice() {
    const [advice, setAdvice] = useState('') // estado para armazenar o conselho

    useEffect(() => {
        // chama a função de pegar conselho quando o componente monta
        async function fetchAdvice() {
            try {
                const advice = await getAdvice() // chama a API e armazena o conselho
                setAdvice(advice) // atualiza o estado com o conselho obtido
            } catch (error) {
                setAdvice('Erro ao carregar o conselho') // lida com erros na chamada da API
            }
        }
        fetchAdvice()
    }, []) // o array vazio faz o useEffect rodar apenas na montagem do componente

    return (
        <div className="advice">
            <p>{advice || 'Carregando...'}</p> {/* exibe "Carregando..." enquanto não há conselho */}
        </div>
    )
}