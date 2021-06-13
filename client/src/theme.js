const colours = {
	white: "#FFFFFF",
	offWhite: "#FFFBFF",
	black: "black",
	hexBlack: "#000500",

	accent: "purple",
	hexAccent: "red.400",

	highlight1: "#7F534B",
	highlight2: "#9B6A6C",
};

const gradients = {
	default: `linear(to-r, ${colours.accent}.400, ${colours.accent}.200)`,
	pretty: `linear(to-r, pink.300, ${colours.accent}.400,)`,
};

const theme = { colours, gradients };

export default theme;