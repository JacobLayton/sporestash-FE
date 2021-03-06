import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
	palette: {
		mode: 'dark',
		common: {
			black: '#000000',
		},
		primary: {
			main: '#C7D9D7',
		},
		secondary: {
			main: '#e09b46',
		},
		error: {
			main: red.A400,
		},
		text: {
			primary: '#C7D9D7',
			secondary: '#C7D9D7',
			disabled: '#000000',
		},
		background: {
			paper: '#000000',
			default: '#000000',
		},
		action: {
			active: '#C7D9D7',
			// hover: "red",
			// hoverOpacity: 0.08,
			// selected: "rgba(255, 255, 0, 0.16)", // Doesnt do anything
			// selectedOpacity: 0.5,
		},
	},
	typography: {
		// fontFamily: "NTR",
		h1: {
			fontFamily: 'NTR',
		},
		h2: {
			fontFamily: 'NTR',
		},
		h3: {
			fontFamily: 'NTR',
		},
		h4: {
			fontFamily: 'NTR',
		},
		h5: {
			fontFamily: 'NTR',
		},
		button: {
			fontFamily: 'Signika Negative',
		},
		caption: {
			fontFamily: 'Signika Negative',
		},
		body1: {
			fontFamily: 'Signika Negative',
		},
		body2: {
			fontFamily: 'Signika Negative',
		},
		overline: {
			fontFamily: 'Signika Negative',
		},
		subtitle1: {
			fontFamily: 'Signika Negative',
		},
		subtitle2: {
			fontFamily: 'Signika Negative',
		},
	},
	shape: {
		borderRadius: 'var(--border-radius)',
	},
	overrides: {
		MuiPaper: {
			root: {
				backgroundImage: 'none',
			},
		},
	},
});

export default theme;
