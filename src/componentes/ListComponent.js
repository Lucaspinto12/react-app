import PropTypes from "prop-types";
import {Button, Table} from "react-bootstrap";

const ListComponent = (props) => {
    return (
            <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Nome do Carro</th>
                <th>Modelo</th>
                <th>Ano</th>
            </tr>
            </thead>
            <tbody>
            {
                props.items.map((el, idx) => (
                    <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>{el.name}</td>
                        <td>{el.model}</td>
                        <td>{el.year}</td>
                    </tr>
                ))}
            <Button variant="primary" href={'/CrierCar'}>Cadastrar um novo carro</Button>{' '}
            </tbody>
        </Table>

    )
}
ListComponent.propTypes = {
    title: PropTypes.string.isRequired,
    head: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
};
export default ListComponent;
