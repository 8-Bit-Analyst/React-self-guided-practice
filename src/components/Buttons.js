import "./ButtonStyle.css";

// go through and remove each instance but the first of button (because its not dynamic)
const Buttons = () => {
	return (
		<div className="button-style">
			<button className="button-style__first">Home</button>
			<button className="button-style__second">Services</button>
			<button className="button-style__third">Contact Us</button>
			<button className="button-style__fourth">FAQ</button>
		</div>
	);
};

export default Buttons;
