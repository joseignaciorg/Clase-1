const CalculateMedia = ({ numberA, numberB, numberC }) => {
	const media = (numberA + numberB + numberC) / 3;
	return (
		<p>
			La media entre {numberA}, {numberB} y {numberC} es {media}
		</p>
	);
};
export default CalculateMedia;
