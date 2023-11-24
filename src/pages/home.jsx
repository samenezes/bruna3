import { useLocalStorage } from "@uidotdev/usehooks"
import { useState } from "react"
import Temperatura from "../components/temperatura"

export default function Home() {
    const [lista, setLista] = useLocalStorage("lista", [])
    const [novaTemperatura, setNovaTemperatura] = useState("")

    function adicionarTemperatura() {
        if (novaTemperatura == "") return 
        setLista([...lista, {
            id: lista.length + 1,
            nome: novaTemperatura,
            completa: false
        }])
        setNovaTemperatura("")
    }

    return (
    <div className="min-h-screen p-4 flex flex-col gap-4 p-4">
        <div className="form-control mx-auto">
            <label>
                <span class="label-text">Digite uma nova temperatura</span>
            </label>
            <input
                className="input input-bordered"
                type="text" 
                value={novaTemperatura}
                onChange={(e) => setNovaTemperatura(e.target.value)}
            />
            <button className="btn mt-4" onClick={adicionarTemperatura}>Adicionar</button>
        </div>
    </div>
)}