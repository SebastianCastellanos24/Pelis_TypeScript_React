
const Editar = ({peli, getPelis, setListState, setEditar}: any) => {
    const {id, titulo, descripcion} = peli;

    const titulo_componente:string = "Editar pelicula";

    const guardarEdicion = (e:any, id:number) => {
        e.preventDefault();

        let target:any = e.target;

        const pelis_almacenadas = getPelis()

        const indice = pelis_almacenadas.findIndex((peli: { id: number; }) => peli.id == id)
    
        let peli_actualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        }

        pelis_almacenadas[indice] = peli_actualizada;

        localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));

        setListState(pelis_almacenadas)
        setEditar(0)
    }

    return (
        <div className='edit_form'>
            <h3 className='title'>{titulo_componente}: {titulo}</h3>
            <form onSubmit={e => guardarEdicion(e, id)}>
                <input 
                    type='text'
                    name='titulo'
                    className='titulo_editado'
                    defaultValue={titulo}
                />
                <textarea
                    name='descripcion'
                    defaultValue={descripcion}
                    className='descripcion_editada'
                />
                <input
                    type='submit'
                    className='editar'
                    value="Actualizar"
                />
            </form>
        </div>
    )
}

export default Editar