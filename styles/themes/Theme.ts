import "@fontsource/inter";
import "@fontsource/poppins";
import { createTheme, PaletteOptions } from "@mui/material";

declare module "@mui/material/styles" {
	interface Palette {
		white: Palette["primary"];
	}

	// allow configuration using `createTheme`
	interface PaletteOptions {
		white?: PaletteOptions["primary"];
	}
}

// Update the Button's color prop options
declare module "@mui/material/Button" {
	export interface ButtonPropsColorOverrides {
		white: true;
	}
}

const Typography = {
	fontFamily: ["poppins"].join(","),
	h2: { fontWeight: 700, fontSize: 48 },
	h5: { fontWeight: 600, fontSize: 24 },
	h6: { fontWeight: 600, fontSize: 18 },
	overline: {
		fontFamily: ["inter"].join(","),
		fontSize: 12,
		fontWeight: 600,
	},
	body2: { fontWeight: 400, fontSize: 12 },
	caption: { fontWeight: 400, fontSize: 12 },
}; //Closes Typography config

const Pallete: PaletteOptions = {
	mode: "light",
	white: { main: "#FFFFFF" },

	primary: {
		main: "#EC6533",
		light: "#F0845C",
		dark: "#D75C2E",
		contrastText: "white",
	},
	secondary: {
		main: "#1F2937",
		light: "111827",
		dark: "#090E18",
		contrastText: "white",
	},

	contrastThreshold: 4.5,
}; //Closes Pallete config

const MainTheme = createTheme({
	typography: Typography,
	palette: Pallete,
	components: {
		MuiInputBase: {
			styleOverrides: {
				root: {
					[`& fieldset`]: {
						borderRadius: 8,
					},
				},
			},
		},

		MuiButton: {
			variants: [
				{
					props: { variant: "outlined" },
					style: { border: "2px solid", "&:hover": { border: "2px solid" } },
				},
			],
			styleOverrides: {
				root: { borderRadius: 8, paddingInline: 20, paddingBlock: 12 },
			},
		},
	},
}); //Closes Theme

export default MainTheme;
