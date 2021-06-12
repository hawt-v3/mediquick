import { Box, Heading } from "@chakra-ui/layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "./Components/Layout";
import Login from "./Components/Login";
import { PrivateRoute } from "./Components/PrivateRoute";
import Register from "./Components/Register";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import theme from "./theme";
import React from 'react'

const NotFound = () => (
  <Layout>
    <Box
      w="100%"
      h="100%"
      d="flex"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      p="3rem"
    >
      <Heading color={theme.colours.hexAccent}>
        This page was not found, check again later!
      </Heading>
    </Box>
  </Layout>
);

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  )
}
