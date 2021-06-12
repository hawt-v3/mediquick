import { Box } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import theme from "../theme";

export const LoaderModule = () => (
	<Box
		d="flex"
		h="90vh"
		w="100%"
		backgroundColor={theme.colours.offWhite}
		alignItems="center"
		justifyContent="center"
	>
		<Spinner size="xl" w="2rem" h="2rem" />
	</Box>
);