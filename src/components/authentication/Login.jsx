import React, { useState } from "react";
import Navigation from "../../parts/Navigation";
import ImageLogin from "../../assets/images/authentication-login.svg";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const BASEURL = "http://localhost:5000/login";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setError] = useState("");
	const [loading, setLoading] = useState("");
	const history = useHistory();

	const userLogged = async () => {
		const dataUser = {
			email,
			password,
		};
		try {
			const response = await axios.post(BASEURL, dataUser);
			if (response.status === 200) {
				let users = "";
				for (const i in response.data) {
					if (i > 0) {
						users += ",";
					}
					users += `${response.data.data[i]}`;
					localStorage.setItem("username", response.data.data.username);
					localStorage.setItem("token", response.data.token);
				}
				history.push(`/`);
			}
		} catch (error) {
			setError(error);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		userLogged();
	};

	const [authenticated] = useState(localStorage.getItem("token"));

	return (
		<>
			<Navigation isAuth={authenticated} />
			<div className="container mx-auto p-10">
				<div className="shadow-md rounded">
					<div className="md:flex">
						<div className="md:w-3/6">
							<div
								className="shadow-md bg-backgroundPrimary p-6  rounded"
								style={{ height: "60vh" }}
							>
								<img src={ImageLogin} alt="Login Page" className="w-full" />
							</div>
						</div>

						<div className="md:w-3/6">
							<div className="md:flex">
								<div className="mx-auto">
									<h1 className="mt-10 font-bold text-blue-800 text-base md:text-center">
										Login Dulu Yu!
									</h1>
								</div>
							</div>
							<form onSubmit={handleSubmit}>
								<div className="p-6 mx-10">
									<label htmlFor="email" className="text-blue-500">
										Email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="w-full p-3 border-b-4 focus:outline-none border-blue-500"
										autoComplete="off"
									/>
									{errors && (
										<span className="text-red-600">email harus di isi ya!</span>
									)}
									<div className="mt-5">
										<label htmlFor="password" className="text-blue-500">
											Password
										</label>
										<input
											type="password"
											name="password"
											id="password"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											className="w-full p-3 border-b-4 focus:outline-none border-blue-500"
											autoComplete="off"
										/>
										{errors && (
											<span className="text-red-600">
												password juga harus di isi ya!
											</span>
										)}
									</div>
									<div className="text-center mt-5 font text-blue-500">
										<Link to="/forgot-password">Lupa Password?</Link>
									</div>
									<button
										type="submit"
										className="rounded-full py-3 px-7 bg-blue-500 uppercase text-white w-full mt-5 hover:bg-blue-600"
									>
										Log in
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
