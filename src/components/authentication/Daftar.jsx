import React, { useState } from "react";
import Navigation from "../../parts/Navigation";
import ImageDaftar from "../../assets/images/authentication-daftar.svg";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const ENDPOINT = "http://localhost:5000";

export default function Daftar() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setError] = useState("");
	const history = useHistory();

	const createAccount = async () => {
		const registData = {
			username,
			email,
			password,
		};
		try {
			const response = await axios.post(`${ENDPOINT}/register`, registData);
			if (response.status === 200) {
				let users = "";
				for (const i in response.data) {
					if (i > 0) {
						users += ",";
					}
					users += `${response.data.data[i]}`;
				}
				history.push(`/login`);
			}
		} catch (error) {
			setError(error);
		}
	};

	const onSubmit = (e) => {
		e.preventDefault();
		createAccount();
	};

	const [userLogged] = useState(localStorage.getItem("token"));
	return (
		<>
			<Navigation isAuth={userLogged} />
			<div className="container mx-auto p-10">
				<div className="md:flex">
					<div className="md:w-3/5">
						<p className="text-center text-3xl font-bold">
							Think <span className="text-blue-500">it.</span>
						</p>
						<p className="text-center text-3xl font-bold">
							Crate <span className="text-blue-500">it.</span>
						</p>
						<p className="text-center text-3xl font-bold">
							Do <span className="text-blue-500">it.</span>
						</p>
						<p className="text-center text-gray-400 mt-3 text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
							doloribus quasi sunt, nesciunt ratione vitae vel harum voluptates
							ad enim.
						</p>
						<img
							src={ImageDaftar}
							alt="Signup Page"
							className="w-96 mx-auto justify-center mt-3"
						/>
					</div>
					<div className="md:w-2/5">
						{" "}
						<div className="md:flex">
							<div className="mx-auto">
								<h1 className="mt-10 font-bold text-blue-800 ">
									Daftar Sekarang Yu!
								</h1>
							</div>
						</div>
						<form onSubmit={onSubmit}>
							<div className="p-6 mx-10">
								<label htmlFor="username" className="text-blue-500">
									Username
								</label>
								<input
									type="text"
									name="username"
									id="username"
									className="w-full p-3 border-b-4 focus:outline-none border-blue-500"
									autoComplete="off"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
								{errors && (
									<span className="text-red-600">username wajib di isi!</span>
								)}

								<div className="mt-3">
									<label htmlFor="email" className="text-blue-500">
										Email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										className="w-full p-3 border-b-4 focus:outline-none border-blue-500"
										autoComplete="off"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
									{errors && (
										<span className="text-red-600">email wajib di isi!</span>
									)}
								</div>
								<div className="mt-3">
									<label htmlFor="password" className="text-blue-500">
										Password
									</label>
									<input
										type="password"
										name="password"
										id="password"
										className="w-full p-3 border-b-4 focus:outline-none border-blue-500"
										autoComplete="off"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
									{errors && (
										<span className="text-red-600">password wajib di isi!</span>
									)}
								</div>
								<div className="text-center mt-5 font text-blue-500">
									<Link to="/login">sudah punya akun?</Link>
								</div>
								<button
									type="submit"
									className="rounded-full py-3 px-7 bg-blue-500 uppercase text-white w-full mt-5 hover:bg-blue-600"
								>
									Daftar
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
