import { LineaTabla } from "./LineaTabla/LineaTabla";

function Tabla( {actas}) {
    console.log('dentro de tabla')
    console.log(actas)
    return (
        <div className="mx-5">
        <div className="mt-3 mx-3">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Proyecto</th>
                        <th scope="col">No de Acta</th>
                        <th scope="col">Encuestador</th>
                    </tr>
                </thead>
                <tbody> 
                    {actas.map(acta =>(
                       <LineaTabla acta={acta} /> 
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
}

export { Tabla };