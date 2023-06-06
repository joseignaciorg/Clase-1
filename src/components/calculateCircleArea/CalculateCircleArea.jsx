const CalculateCircleArea = ({radio}) => {
	const area = Math.PI * Math.pow(radio, 2);
	return <p>El área del círculo es {area}</p>;
};
export default CalculateCircleArea;
