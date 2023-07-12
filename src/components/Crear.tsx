import { useState } from "react";
import { GuardarEnStorage } from "../helpers/GuardarEnStorage";

const Crear = ({setListState}:any) => {

    const tituloComponente:string = "Añadir pelicula";
    
    const [ peliState, setPeliState ] = useState({
        titulo: "",
        descripcion: ""
    });

    const { titulo, descripcion } = peliState;

    const getDatosForm = (e:any) => {
        e.preventDefault();

        let target:any = e.target;
        let titulo:string = target.titulo.value;
        let descripcion:string = target.descripcion.value;

        let peli:any = {
            id: new Date().getTime(),
            titulo,
            descripcion
        }

        setPeliState(peli)

        setListState((elementos: any) => {
            return [...elementos, peli]
        })
        
        GuardarEnStorage("pelis",peli)
    }

    return (
        <div className="add">
            <h3 className="title">{tituloComponente}</h3>

            <p>{(titulo && descripcion) && "Has creado la pelicula: " + titulo}</p>

            <form onSubmit={getDatosForm}>
                <input 
                    type="text" 
                    id="titulo" 
                    name="titulo"
                    placeholder="Titulo" 
                />
                
                <textarea 
                    id="descripcion" 
                    name="descripcion"
                    placeholder="Descripción"
                ></textarea>
                
                <input 
                    type="submit" 
                    id="save" 
                    value="Guardar" 
                />
            </form>
        </div>
    )
}

export default Crear