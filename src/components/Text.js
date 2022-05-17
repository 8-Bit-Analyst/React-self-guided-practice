import MainBody from "./MainBody";

const Text = (props) => {
	return (
		<div className="main-body-container">
			<MainBody type={props.item[0].text} />
			<MainBody type={props.item[1].text} />
		</div>
	);
};
export default Text;
