import React from "react";

function Acta({actas, setActas}) {
    const onSubmit= (e)=> {
        e.preventDefault();
        console.log('en el metodo onSubmit');
        console.log(formulario);
        let nuevasActas = actas;
        nuevasActas.push(
            {id:8, proyecto:formulario.proyecto, acta:formulario.acta, encuestador:formulario.nombre+' '+formulario.apellido},
        );
        setActas (nuevasActas);
        console.log(actas);
    }
    
    const [formulario, setFormulario]=React.useState(
        {proyecto:'', acta:'', nombre:'', apellido:''}
    );
    return (
        <div className="mx-5">
            <form className="row g-3" onSubmit={onSubmit}>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="inputEmail4" onChange={(e) => {setFormulario(
                        {...formulario, ['nombre']:e.target.value}
                    )}} value={formulario.nombre}/>
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">Apellidos</label>
                    <input type="text" className="form-control" id="inputPassword4" onChange={(e) => {setFormulario(
                        {...formulario, ['apellido']:e.target.value}
                    )}} value={formulario.apellido}/>
                </div>
                <div className="col-1">
                    <label for="inputAddress" className="form-label">No de casa</label>
                    <input type="text" className="form-control " id="inputAddress" placeholder="" onChange={(e) => {setFormulario(
                        {...formulario, ['acta']:e.target.value}
                    )}} value={formulario.acta}/> 
                </div>
                <div className="col-5 ">
                    <label for="inputAddress" className="form-label">Direccion</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder=""  />
                </div>
                <div className="col-md-4">
                    <label for="inputState" className="form-label">Proyectos</label>
                    <select id="inputState" className="form-select"onChange={(e) => {setFormulario(
                        {...formulario, ['proyecto']:e.target.value}
                    )}} value={formulario.proyecto}>
                        <option></option>
                        <option>Ciudad Hayuelos</option>
                        <option>Ciudad Timiza</option>
                        <option>Terra Castilla</option>
                        <option>Molinos Caracas</option>
                        <option>Atardeceres de Madelena </option>
                    </select>
                </div>
                <div className="col-2">
                    <label for="inputAddress" className="form-label">Fecha</label>
                    <input type="date" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="col-md-6">
                    <label for="inputCity" className="form-label">Ciudad</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4">
                    <label for="inputState" className="form-label">Tipo de predio</label>
                    <select id="inputState" className="form-select">
                        <option></option>
                        <option>Casa</option>
                        <option>Conjunto</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label for="inputZip" className="form-label">No de Acta</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="col-md-3">
                    <label for="inputState" className="form-label">Lugar</label>
                    <select id="inputState" className="form-select">
                        <option></option>
                        <option>Habitacion</option>
                        <option>Baño</option>
                        <option>Cocina</option>
                        <option>Sala</option>
                        <option>Terraza</option>
                        <option>parqueadero</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label for="inputState" className="form-label">Muros</label>
                    <select id="inputState" className="form-select">
                        <option></option>
                        <option>Concreto</option>
                        <option>Prefabricado</option>
                        <option>Madera</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label for="inputState" className="form-label">Pisos</label>
                    <select id="inputState" className="form-select">
                        <option></option>
                        <option>Concreto</option>
                        <option>Baldosa</option>
                        <option>Madera</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label for="inputState" className="form-label">Techos</label>
                    <select id="inputState" className="form-select">
                        <option></option>
                        <option>Teja</option>
                        <option>Concreto</option>
                        <option>prefabricado</option>
                    </select>
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label">Descripcion</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div className="col-md-3">
                    <label for="inputState" className="form-label">Lugar</label>
                    <select id="inputState" className="form-select">
                        <option></option>
                        <option>Habitacion</option>
                        <option>Baño</option>
                        <option>Cocina</option>
                        <option>Sala</option>
                        <option>Terraza</option>
                        <option>parqueadero</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label for="inputState" className="form-label">Muros</label>
                    <select id="inputState" className="form-select">
                        <option></option>
                        <option>Concreto</option>
                        <option>Prefabricado</option>
                        <option>Madera</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label for="inputState" className="form-label">Pisos</label>
                    <select id="inputState" className="form-select">
                        <option></option>
                        <option>Concreto</option>
                        <option>Baldosa</option>
                        <option>Madera</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label for="inputState" className="form-label">Techos</label>
                    <select id="inputState" className="form-select">
                        <option></option>
                        <option>Teja</option>
                        <option>Concreto</option>
                        <option>prefabricado</option>
                    </select>
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label">Descripcion</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div className="col-md-3">
                    <label for="inputState" className="form-label">Lugar</label>
                    <select id="inputState" className="form-select">
                        <option></option>
                        <option>Habitacion</option>
                        <option>Baño</option>
                        <option>Cocina</option>
                        <option>Sala</option>
                        <option>Terraza</option>
                        <option>parqueadero</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label for="inputState" className="form-label">Muros</label>
                    <select id="inputState" className="form-select">
                        <option></option>
                        <option>Concreto</option>
                        <option>Prefabricado</option>
                        <option>Madera</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label for="inputState" className="form-label">Pisos</label>
                    <select id="inputState" className="form-select">
                        <option></option>
                        <option>Concreto</option>
                        <option>Baldosa</option>
                        <option>Madera</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label for="inputState" className="form-label">Techos</label>
                    <select id="inputState" className="form-select">
                        <option></option>
                        <option>Teja</option>
                        <option>Concreto</option>
                        <option>prefabricado</option>
                    </select>
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label">Descripcion</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div className="col-md-3">
                    <label for="inputState" className="form-label">Lugar</label>
                    <select id="inputState" className="form-select">
                        <option></option>
                        <option>Habitaciones</option>
                        <option>Baño</option>
                        <option>Cocina</option>
                        <option>Sala</option>
                        <option>Terraza</option>
                        <option>parqueadero</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label for="inputState" className="form-label">Muros</label>
                    <select id="inputState" className="form-select">
                        <option></option>
                        <option>Concreto</option>
                        <option>Prefabricado</option>
                        <option>Madera</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label for="inputState" className="form-label">Pisos</label>
                    <select id="inputState" className="form-select">
                        <option></option>
                        <option>Concreto</option>
                        <option>Baldosa</option>
                        <option>Madera</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label for="inputState" className="form-label">Techos</label>
                    <select id="inputState" className="form-select">
                        <option></option>
                        <option>Teja</option>
                        <option>Concreto</option>
                        <option>prefabricado</option>
                    </select>
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label">Descripcion</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div className="col-md-3">
                    <label for="inputState" className="form-label">Lugar</label>
                    <select id="inputState" className="form-select">
                        <option></option>
                        <option>Habitacion</option>
                        <option>Baño</option>
                        <option>Cocina</option>
                        <option>Sala</option>
                        <option>Terraza</option>
                        <option>parqueadero</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label for="inputState" className="form-label">Muros</label>
                    <select id="inputState" className="form-select">
                        <option></option>
                        <option>Concreto</option>
                        <option>Prefabricado</option>
                        <option>Madera</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label for="inputState" className="form-label">Pisos</label>
                    <select id="inputState" className="form-select">
                        <option></option>
                        <option>Concreto</option>
                        <option>Baldosa</option>
                        <option>Madera</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label for="inputState" className="form-label">Techos</label>
                    <select id="inputState" className="form-select">
                        <option></option>
                        <option>Teja</option>
                        <option>Concreto</option>
                        <option>prefabricado</option>
                    </select>
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label">Descripcion</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary" >Guardar</button>
                </div>
            </form>
        </div>


    )

}

export { Acta };