import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Link,
	Text,
	useToast,
} from "@chakra-ui/react";
import { useRef } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { Layout } from "../Components/Layout";
import firebase from "../firebase";
import theme from "../theme";

const checkEmail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

const Login = () => {
	const toast = useToast();
	const history = useHistory();

	const emailRef = useRef();
	const passwordRef = useRef();

	const handleSubmit = e => {
		e.preventDefault();

		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		if (!checkEmail(email))
			return toast({
				title: "Bad Email",
				description: "Enter a valid email",
				isClosable: true,
				status: "error",
			});

		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				toast({
					title: "Logged In!",
					description: "oiii, good job!",
					status: "success",
					isClosable: true,
				});

				setTimeout(() => history.push("/dashboard"), 600);
			})
			.catch(error => {
				console.log(error);
				toast({
					title: "Bad Credentials",
					description: "Try again or sign up",
					status: "error",
					isClosable: true,
				});
			});
	};

	return (
		<Layout>
			<Box
				w="100%"
				d="flex"
				flexDir="column"
				justifyContent="center"
				alignItems="center"
				h="80vh"
			>
				<Heading mb={10} >
					Log in
				</Heading>
				<Box width={["80%", "80%", "60%", "30%"]}>
					<form
						onSubmit={handleSubmit}
						style={{
							width: "100%",
							display: "flex",
							justifyContent: "center",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<FormControl id="email" mb="10">
							<FormLabel fontWeight="bold">Email</FormLabel>
							<Input
								placeholder="olaola@example.com"
								focusBorderColor={theme.colours.hexAccent + "55"}
								py={6}
								type="email"
								autoFocus
								ref={emailRef}
							/>
						</FormControl>
						<FormControl id="password" mb="4">
							<FormLabel fontWeight="bold">Password</FormLabel>
							<Input
								focusBorderColor={theme.colours.hexAccent + "55"}
								placeholder="heytherepeopl"
								py={6}
								type="password"
								ref={passwordRef}
							/>
						</FormControl>
						<Text mb="3">
							Don't have an account?{" "}
							<Link
								bgClip="text"
								bgGradient="linear(to-r, red.400,purple.500, blue.400)"

								as={RouterLink}
								to="/register"
								mb={3}
								
							>
								Sign Up
							</Link>
						</Text>
						<Button
							
							color="white"
							px={10}
							py={6}
							type="submit"
							bgGradient="linear(to-r, red.400,purple.500, blue.400)"
							_hover={{ bgGradient: "linear(to-r, red.500,purple.600, blue.500)" }}
						>
							Log in
						</Button>
					</form>
				</Box>
			</Box>
		</Layout>
	);
};

export default Login;