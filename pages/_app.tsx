import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import ModalProvider from "context/ModalContext/ModalContext";
import MainTheme from "../styles/themes/Theme";

import { Poppins, Montserrat } from "@next/font/google";

export const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	display: "swap",
});

export const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["100", "400", "800"],
	display: "swap",
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};
// export const ModalContext = createContext({});
export default function App({ Component, pageProps }: AppPropsWithLayout) {
	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout ?? ((page) => page);
	let theme = MainTheme;
	theme = responsiveFontSizes(theme);
	return (
		<main className={poppins.className}>
			<ThemeProvider theme={theme}>
				<ModalProvider>
					{getLayout(<Component {...pageProps} />)}
				</ModalProvider>
			</ThemeProvider>
		</main>
	);
} //Closes App Wrapper
