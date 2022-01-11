import PropTypes from "prop-types";

const ListComponent = (props) => {
    return (
        <div style={
            {
                width: "100%"
            }
        }>
            <center>
            <h1>{props.title}</h1>
            <table style={
                {
                    textAlign:"center",
                    width: "80%"
                }
            }>
                <thead style={
                    {
                        background: "#002663",
                        color: "#ffffff",
                    }
                }>
                <tr>
                    <th>Nº</th>
                    <th>Nome do carro</th>
                    <th>Modelo</th>
                    <th>Ano</th>
                </tr>
                </thead>
                <tbody style={
                    {
                        background: "#0256db",
                        color: "#ffffff"
                    }
                }>
                {
                    props.items.map((el,idx) => (
                        <tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>{el.name}</td>
                            <td>{el.model}</td>
                            <td>{el.year}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </center>
        </div>

    )
}

ListComponent.propTypes = {
    title: PropTypes.string.isRequired,
    head: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
};
export default ListComponent;
