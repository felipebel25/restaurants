import { SxProps } from "@mui/material";

interface FeatureStyleProps {
	card: SxProps,
	cardOrnament: SxProps,
	stack: SxProps,
}

const STYLE: FeatureStyleProps = {
	card: {
		flex: 1,
		boxShadow: "0px 6px 32px 4px rgba(0, 0, 0, 0.05)",
		overflow: 'visible',
		maxWidth: '40ch',
		p: '2.5rem',
		position: 'relative',
		minWidth: '30ch',
	},
	cardOrnament: {
		aspectRatio: 1,
		width: '2rem',
		top: '-2rem',
		left: '-1rem',
		position: 'absolute',
	}, stack: {
		alignItems: 'center',
		gap: '2.25rem'

	},
};

export default STYLE;
