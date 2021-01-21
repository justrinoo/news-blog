import React from "react";
import { Link, useHistory } from "react-router-dom";

function Navigation(props) {
	const history = useHistory();
	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("username");
		localStorage.removeItem("id");
		localStorage.removeItem("email");
		history.push(`/login`);
	};

	if (props.isAuth !== null) {
		return (
			<>
				<div className="container mx-auto p-10">
					<nav className="flex justify-between items-center">
						<div>
							<Link to="/">
								<h1 className="text-gray-500 hover:text-gray-600 text-xl font-bold">
									Logo Coming Soon
								</h1>
							</Link>
						</div>
						<div>
							<ul className="flex font-medium items-center">
								<li className="mx-5">
									<Link to="/create/posts" className="text-blue-700">
										{" "}
										Create Posts
									</Link>
								</li>
								<li className="mx-5">
									<Link to="/saved" className="text-blue-700">
										Save Posts
									</Link>
								</li>
								<li className="mx-5">
									<span className="text-blue-700">
										<div className="flex">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												width="20"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
												/>
											</svg>
											{localStorage.getItem("username")}
										</div>
									</span>
								</li>
								<li className="mx-5 ">
									<button
										onClick={handleLogout}
										className="bg-blue-700 py-3 px-6 rounded text-white font-bold hover:bg-blue-600	"
									>
										<div className="flex">
											<span className="mx-2">Logout</span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												width="20"
											>
												<path
													fillRule="evenodd"
													d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
									</button>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</>
		);
	} else {
		return (
			<>
				<div className="container mx-auto p-10">
					<nav className="flex justify-between items-center">
						<div>
							<Link to="/">
								<h1 className="text-gray-500 hover:text-gray-600 text-xl font-bold">
									Logo Coming Soon
								</h1>
							</Link>
						</div>
						<div>
							<ul className="flex font-medium">
								<li className="mx-5 ">
									<Link to="/login" className="text-blue-700">
										Login
									</Link>
								</li>
								<li className="mx-5 ">
									<Link
										to="/daftar"
										className="bg-blue-700 py-3 px-6 rounded text-white font-bold hover:bg-blue-600	"
									>
										Buat Akun
									</Link>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</>
		);
	}
}

export default Navigation;
