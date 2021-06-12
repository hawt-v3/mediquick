import { Box } from "@chakra-ui/layout";
import { Navbar } from "./Navbar";

export const Layout = ({ children }) => {
	return (
		<Box pt="4.5rem">
			<Navbar />
			<Box>{children}</Box>
		</Box>
	);
};