import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from "./contexts/authContext";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	fonts: {
		heading: "Inter, sans-serif",
		body: "Inter, sans-serif",
	},
	colors: {
		teal: {
			default: "#9B6A6C",
			50: "#dac8c9",
			100: "#ceb6b7",
			200: "#c4a6a8",
			300: "#b69193",
			400: "##a97e80",
			450: "##a97e80",
			500: "#9B6A6C",
			550: "#9B6A6C",
			600: "#815657",
			650: "#815657",
			700: "#815657",
			800: "#6e494a",
			900: "#6e494a",
		},
	},
});

ReactDOM.render(
  <ChakraProvider resetCSS theme={theme}>
    <AuthProvider>
				<App />
			</AuthProvider>
  </ChakraProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals