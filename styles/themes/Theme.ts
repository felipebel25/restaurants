import "@fontsource/inter";
import "@fontsource/poppins";
import { createTheme, PaletteOptions } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

const Typography: TypographyOptions = {
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
	primary: {
		main: "#EC6533",
		light: "#EC6533",
		dark: "#111827",
	},
	secondary: {
		main: "#ffffff",
		light: "111827",
		dark: "#EC6533",
		contrastText: "#EC6533",
	},
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
