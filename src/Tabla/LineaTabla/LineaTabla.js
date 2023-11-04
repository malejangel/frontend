function LineaTabla({ acta }) {
    return (
            <tr>
                <th scope="row">{acta.id} </th>
                <td>{acta.proyecto} </td>
                <td>{acta.acta} </td>
                <td>{acta.encuestador} </td>
            </tr>
    );
}
export { LineaTabla };