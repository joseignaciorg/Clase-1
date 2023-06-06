const CalculateSpeed = ({ speed }) => {
	const meters = (speed * 1000) / 3600;
	return (
		<p>
			{speed} Km/h son {meters} m/s.
		</p>
	);
};
export default CalculateSpeed;
