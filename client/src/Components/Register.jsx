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

const Register = () => {
	const toast = useToast();
	const history = useHistory();

	const emailRef = useRef();
	const passwordRef = useRef();
	const nameRef = useRef();

	const handleSubmit = e => {
		e.preventDefault();

		const email = emailRef.current.value;
		if (!checkEmail(email))
			return toast({
				title: "Incorrect Email",
				description: "Please enter a valid email",
				isClosable: true,
				status: "error",
			});

		const password = passwordRef.current.value;
		const name = nameRef.current.value;

		if (password.length < 5)
			return toast({
				title: "Password Too Weak",
				description: "Please enter a longer password",
				isClosable: true,
				status: "error",
			});

		if (name.length < 2)
			return toast({
				title: "Name too short",
				description: "Names have to have at least 2 characters.",
				isClosable: true,
				status: "error",
			});

		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(() => {
				firebase.auth().currentUser.updateProfile({ displayName: name });

				toast({
					title: "Account Created!",
					description: "You've signed up!",
					status: "success",
					isClosable: true,
				});
				history.push("/main");
			})
			.catch(error => {
				console.log(error);
				toast({
					title: "Duplicate Email",
					description: "An account with that email already exists",
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
					Register
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
						<FormControl id="name" mb="10">
							<FormLabel fontWeight="bold">Name</FormLabel>
							<Input
								placeholder="Jimi Hendrix"
								focusBorderColor={theme.colours.hexAccent + "55"}
								py={6}
								type="text"
								autoFocus
								ref={nameRef}
							/>
						</FormControl>
						<FormControl id="email" mb="10">
							<FormLabel fontWeight="bold">Email</FormLabel>
							<Input
								placeholder="olaola@example.com"
								focusBorderColor={theme.colours.hexAccent + "55"}
								py={6}
								type="email"
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
							Already have an account?{" "}
							<Link
								color={theme.colours.hexAccent}
								as={RouterLink}
								to="/login"
								mb={3}
							>
								Log In
							</Link>
						</Text>
						<Button
							colorScheme={theme.colours.accent}
							bgGradient={theme.gradients.default}
							px={10}
							py={6}
							type="submit"
							bgGradient="linear(to-r, red.400,purple.500, blue.400)"
							_hover={{ bgGradient: "linear(to-r, red.500,purple.600, blue.500)" }}
						>
							Register
						</Button>
					</form>
				</Box>
			</Box>
		</Layout>
	);
};

export default Register;