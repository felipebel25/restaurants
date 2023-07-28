import MainTheme from "styles/themes/Theme";

const STYLE = {
	card: {
		width: "100%",
		height: "220px",
		padding: "1rem",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		borderRadius: "20px",
		backgroundColor: "#fff",
		boxShadow: "0px 6px 32px 4px rgba(0, 0, 0, 0.05)",
	},

	container: {
		width: "max-content",
		height: "max-content",
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		gap: "1rem",
	},

	head: {
		display: "flex",
	},

	container_name: {
		display: "flex",
		flexDirection: "column",
		margin: "auto",
	},

	img_user: {
		marginTop: "-2rem",
	},

	name: {
		fontSize: "1.5rem",
		fontWeight: 600,
		color: "#EC6533",
	},
	position: {
		fontWeight: 600,
		fontSize: ".9rem",
		color: "#000",
	},

	textDescription: {
		display: "flex",
		width: "350px",
		height: "100px",
		color: "#000",
	},

	decription: {
		fontSize: "12px",
		marginLeft: "30px",
		color: "#717171",
	},
};

export default STYLE;
