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
            const advice = await getAdvice()
            setAdvice(advice)
        }
        fetchAdvice()
    }, []) // o array vazio faz o useEffect rodar apenas na montagem do componente
    
    return (
        <div className="advice">
            <p>{advice}</p> {/* renderiza o conselho da API */}
        </div>
    )
}