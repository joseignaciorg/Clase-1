const name = 'Pepito';
const number = 23;
const boolean = true;
const isUndefined = undefined;
const isNull = null;
const array = [1, 2, 3, 4, 5];
const object = { a: 1, b: 3 };

const App = () => {
	return (
		<div>
			<p>Name:{name}</p>
			<p>Number:{number}</p>
			<p>Boolean:{boolean}</p>
			<p>Undefined:{isUndefined}</p>
			<p>Null:{isNull}</p>
			<p>Array:{array}</p>
			<p>Object:{object.a}</p>
		</div>
	);
};

export default App;
