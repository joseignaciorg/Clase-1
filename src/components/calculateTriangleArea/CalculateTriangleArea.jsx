const CalculateTriangleArea = ({ base, altura }) => {
	const area = (base * altura) / 2;
	return <p>El área del triángulo es {area}</p>;
};
export default CalculateTriangleArea;
