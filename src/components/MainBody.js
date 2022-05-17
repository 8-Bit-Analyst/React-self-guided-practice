import "./MainBodyStyle.css";
// remember this is just a template you want to be able to reuse
const MainBody = (props) => {
	return (
		<div className="main-body">
			<div>{props.type}</div>
		</div>
	);
};

export default MainBody;
