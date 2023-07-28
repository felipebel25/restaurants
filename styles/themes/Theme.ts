import "@fontsource/inter";
import "@fontsource/poppins";
import { createTheme, PaletteOptions } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { montserrat, poppins } from "pages/_app";

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

const Typography: TypographyOptions = {
	fontFamily: poppins.style.fontFamily,
	allVariants: {
		color: '#111827'
	},
	h1: {
		fontFamily: montserrat.style.fontFamily, fontWeight: 800,
		fontSize: '3.5rem',
		lineHeight: 1,
	},
	h2: { fontFamily: montserrat.style.fontFamily, fontWeight: 800, fontSize: '3rem' },
	h3: { fontFamily: montserrat.style.fontFamily, fontWeight: 700, fontSize: '2.25rem' },
	h4: { fontWeight: 700, fontSize: '2rem' },
	h5: { fontWeight: 600, fontSize: '1.5rem' },
	h6: { fontWeight: 600, fontSize: '1.125rem' },
	subtitle1: { fontWeight: 500, fontSize: '1rem' },
	subtitle2: { fontWeight: 500, fontSize: '0.875rem' },
	body1: { fontWeight: 400, fontSize: '1rem' },
	body2: { fontWeight: 400, fontSize: '0.875rem' },
	caption: { fontWeight: 400, fontSize: '0.75rem' },
	overline: {
		fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.03125rem',
		textTransform: 'uppercase'
	},




}; //Closes Typography config

const Pallete: PaletteOptions = {
	mode: "light",
	white: { main: "#FFFFFF", light: "#FFFFFF", contrastText: '#EC6533' },
	text: { primary: '#111827' },
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
		MuiDialog: {
			styleOverrides: {
				paper: {
					borderRadius: 12,
				},
			},
		},
		MuiTypography: {
			variants: [
				{
					props: { color: 'white' },
					style: { color: 'white' }
				}
			]

		},


		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: 12,
				},
			},
		},
		MuiButton: {
			variants: [
				{
					props: { variant: "outlined" },
					style: { border: "2px solid", "&:hover": { border: "2px solid" } },
				},
				{
					props: { size: "large" },
					style: { fontSize: '1.24rem', },
				},
			],
			styleOverrides: {
				root: { fontSize: '1.125rem', borderRadius: '0.5rem', paddingInline: '1.75rem', paddingBlock: '0.88rem', textTransform: 'none', fontFamily: poppins.style.fontFamily },
			},
		},
	},
}); //Closes Theme

export default MainTheme;
