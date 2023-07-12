import { useState } from "react"

const Buscador = ({listState, setListState}:any) => {
    const [busqueda, setBusqueda] = useState("");
    const [noEncontrado, setNoEncontrado] = useState(false);

    const buscarPeli = (e: any) => {
        setBusqueda(e.target.value);
        
        let pelis_encontradas = listState.filter((peli: any) => {
            return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
        })      

        if(busqueda.length <= 1 || pelis_encontradas <= 0) {
            pelis_encontradas = JSON.parse(localStorage.getItem("pelis") || "")
            setNoEncontrado(true)
        } else{
            setNoEncontrado(false)
        }

        setListState(pelis_encontradas)
    }

    return (
        <div className="search">
            <h3 className="title">Buscador: {busqueda}</h3>
            {(noEncontrado == true && busqueda.length > 1) && (<span>No se ha encontrado ninguna coincidencia</span>)}
            <form>
                <input 
                    type="text" 
                    id="search_field" 
                    name="busqueda"
                    autoComplete="off"
                    value={busqueda}
                    onChange={buscarPeli}
                />
                <button id="search">Buscar</button>
            </form>
        </div>
    )
}

export default Buscador