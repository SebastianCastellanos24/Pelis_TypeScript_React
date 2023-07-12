import { useEffect, useState } from "react"
import Editar from "./Editar";

const Listado = ({setListState, listState}:any) => {
    const [editar, setEditar] = useState(0)

    useEffect(() => {
        getPelis();
    }, [])

    const getPelis = () => {
        let peliculas:any = JSON.parse(localStorage.getItem("pelis") || "")
        setListState(peliculas)
        return peliculas;
    }

    const borrarPeli = (id : any) => {
        let pelis_almacenadas = getPelis();

        let nuevo_array_peliculas = pelis_almacenadas.filter((peli: { id: number; }) => peli.id !== parseInt(id))

        setListState(nuevo_array_peliculas)

        localStorage.setItem("pelis", JSON.stringify(nuevo_array_peliculas));
    }   

    return (
        <>
            {listState !== null ? listState.map ((peli: { id: any; titulo: any; descripcion: any; }) => {
                const {id, titulo, descripcion} = peli;
                return (
                    <article key={id} className="peli-item">
                        <h3 className="title">{titulo}</h3>
                        <p className="description">{descripcion}</p>
                    
                        <button className="edit" onClick={ () => {setEditar(id)}}>Editar</button>
                        <button className="delete" onClick={() => {borrarPeli(id)}}>Borrar</button>

                        {editar === id && (
                            <Editar 
                                peli={peli} 
                                getPelis={getPelis} 
                                setEditar={setEditar}
                                setListState={setListState}
                            />
                        )}
                    </article>
                );
            }): <h2>No hay peliculas que mostrar</h2>
        }
        </>
    )
}

export default Listado