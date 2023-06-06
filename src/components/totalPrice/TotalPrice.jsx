const TotalPrice = ({ precio }) => {
	const iva = (precio * 21) / 100;
	const total = precio + iva;
	return <p>El precio con iva es de {total}</p>;
};
export default TotalPrice;
