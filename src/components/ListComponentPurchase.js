import PropTypes from "prop-types";

const ListComponentPurchase = (props) => {
    return (
        <div style={
            {
                width: "100%"
            }
        }>
    <center>
            <h1>{props.head}</h1>
            <table style={
                {
                    textAlign:"center",
                    width: "80%"
                }
            }>
                <thead style={
                    {
                        background: "black"
                    }
                }>
                <tr>
                    <th>Nº</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Amount</th>
                </tr>
                </thead>
                <tbody style={
                    {
                        background: "#17BA09"
                    }
                }>
                {
                    props.items && props.items.map((el,idx) => (
                        <tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>{el.quantity}</td>
                            <td>{el.price}</td>
                            <td>{el.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </center>
        </div>
    )
}

ListComponentPurchase.propTypes = {
    title: PropTypes.string.isRequired,
    head: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
};
export default ListComponentPurchase;
