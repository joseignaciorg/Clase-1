import Button from './components/button/Button';
import CalculateCircleArea from './components/calculateCircleArea/CalculateCircleArea';
import CalculateMedia from './components/calculateMedia/CalculateMedia';
import CalculateSpeed from './components/calculateSpeed/CalculateSpeed';
import CalculateSquareArea from './components/calculateSquareArea/CalculateSquareArea';
import CalculateTriangleArea from './components/calculateTriangleArea/CalculateTriangleArea';
import CelsiusToFahrenheit from './components/celsiusToFahrenheit/CelsiusToFahrenheit';
import FahrenheitToCelsius from './components/fahrenheitToCelsius/FahrenheitToCelsius';
import SayHello from './components/sayHello/SayHello';
import TotalPrice from './components/totalPrice/TotalPrice';
import WriteMessage from './components/writeMessage/WriteMessage';

const App = () => {
	return (
		<>
			<Button name='Pedro' age={23} />
			<SayHello name='Carolina' />
			<CalculateSquareArea lado={4} />
			<CalculateTriangleArea base={2} altura={3} />
			<CalculateCircleArea radio={2} />
			<CelsiusToFahrenheit celsius={23} />
			<FahrenheitToCelsius fahrenheit={73.4} />
			<TotalPrice precio={100} />
			<WriteMessage
				name='Nacho'
				material='sandias'
				size={5}
				note='Marchando!'
			/>
			<CalculateMedia numberA={14} numberB={23} numberC={38} />
			<CalculateSpeed speed={120}/>
		</>
	);
};

export default App;
