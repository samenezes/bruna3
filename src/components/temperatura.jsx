import { useLocalStorage } from "@uidotdev/usehooks"

export default function Temperatura({ id, nome }) {
    const [lista, setLista] = useLocalStorage("lista")

    function remove() {
        const tmpLista = lista.filter((temperatura) => temperatura.id != id)
        setLista(tmpLista)
    }

    return (
        <li className="flex gap-4 p-4 items-center">
            <h1 className="text-xl"> {nome} </h1>
            <button className="btn btn-sm btn-error" onClick={remove}>Remover</button>
        </li>
    )
}