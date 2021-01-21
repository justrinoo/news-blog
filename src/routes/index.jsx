import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Daftar from "../components/authentication/Daftar";
import Login from "../components/authentication/Login";
import Landing from "../pages/Landing";
import Notfound from "../private/Notfound";
export default function index() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route exact path="/login" component={Login} />
					<Route
						exact
						path="/daftar"
						render={(props) => <Daftar {...props} />}
					/>
					<Route exact component={Notfound} />
				</Switch>
			</Router>
		</>
	);
}
