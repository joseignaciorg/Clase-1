const CelsiusToFahrenheit = ({celsius}) => {
	const fahrenheit = celsius * 1.8 + 32;
	return (
		<p>
			{celsius} grados celsius son {fahrenheit} grados fahrenheit
		</p>
	);
};
export default CelsiusToFahrenheit;
