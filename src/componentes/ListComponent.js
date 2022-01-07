import PropTypes from "prop-types";

const ListComponent = (props) => {
    return(
        <div style={
            {
                width:"100%"
            }
        }>

            <h1>{props.title}</h1>
            <table style={
                {
                    width:"80%"
                }
            }>
                <thead style={
                    {
                        background: "black"
                    }
                }>
                <tr>
                    <th>#</th>
                    <th>Nome do carro</th>
                    <th>Ano do carro</th>
                    <th>Preço</th>
                </tr>
                </thead>
                <tbody style={
                    {
                        background: "#B0E0E6"
                    }
                }>
                {
                props.list.map((el,idx) =>(
                <tr key={idx}>
                    <td>{idx+1}</td>
                    <td>{el.name}</td>
                    <td>{el.year}</td>
                    <td>{el.price}</td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}



ListComponent.propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
};
export default ListComponent;
