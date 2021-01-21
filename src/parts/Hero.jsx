import React from "react";
import { Link } from "react-router-dom";

export default function Hero(props) {
	return (
		<>
			<div className="container mx-auto p-10 items-center">
				<div className="flex justify-between">
					<div className="w-1/3  mx-2">
						<Link to="/">
							<img
								src="https://placeimg.com/400/300/people"
								className="w-full"
							/>
							<div className="shadow-md p-3">
								<h3 className="font-medium mt-2">{props.titleCardPertama}</h3>
								<p className="mt-2">{props.descriptionCardpertama}</p>
								<div className="flex mt-2">
									<img
										src={props.imageUrlCardPertama}
										width="50"
										height="50"
										alt=""
										className="rounded-full"
									/>
									<h3 className="mx-2 mt-3">{props.authorCardPertama}</h3>
								</div>
							</div>
						</Link>
					</div>
					<div className="w-1/3 mx-2">
						<div className="flex flex-col">
							<Link to="/">
								<div className="shadow-md p-5">
									<div>
										<div className="flex">
											<img
												src={props.imageUrlCardKedua}
												width="30"
												height="30"
												className="rounded-lg"
												alt="Tech"
											/>
											<h5 className="text-md mx-3">Jhon Doe</h5>
										</div>
										<img
											src={props.imageUrlCardKedua}
											width="100"
											height="100"
											className="rounded float-right"
											alt="Tech"
										/>

										<h3 className="text-md font-bold mt-2">
											{props.titleCardKedua}
										</h3>
										<small className="text-gray-400 mt-2">Jan 20,2020</small>
									</div>
								</div>
							</Link>
							<Link to="/">
								<div className="shadow-md p-5">
									<div>
										<div className="flex">
											<img
												src={props.imageUrlCardKedua}
												width="30"
												height="30"
												className="rounded-lg"
												alt="Tech"
											/>
											<h5 className="text-md mx-3">Jhon Doe</h5>
										</div>
										<img
											src={props.imageUrlCardKedua}
											width="100"
											height="100"
											className="rounded float-right"
											alt="Tech"
										/>

										<h3 className="text-md font-bold mt-2">
											{props.titleCardKedua}
										</h3>
										<small className="text-gray-400 mt-2">Jan 20,2020</small>
									</div>
								</div>
							</Link>
							<Link to="/">
								{" "}
								<div className="shadow-md p-5">
									<div>
										<div className="flex">
											<img
												src={props.imageUrlCardKedua}
												width="30"
												height="30"
												className="rounded-lg"
												alt="Tech"
											/>
											<h5 className="text-md mx-3">Jhon Doe</h5>
										</div>
										<img
											src={props.imageUrlCardKedua}
											width="100"
											height="100"
											className="rounded float-right"
											alt="Tech"
										/>

										<h3 className="text-md font-bold mt-2">
											{props.titleCardKedua}
										</h3>
										<small className="text-gray-400 mt-2">Jan 20,2020</small>
									</div>
								</div>
							</Link>
						</div>
					</div>
					<div className="w-1/3 mx-2">
						<div className="shadow-md p-5">
							<div className="flex">
								<img
									src="https://placeimg.com/250/250/nature"
									className="rounded"
									alt=""
									width="100"
									height="100"
								/>
								<p className="text-sm mx-2 font-medium">
									Attack of titan 2021 <br />
									<small>
										This week: "Trump De-platformed, Parler Dropped, & more!"
									</small>
								</p>
							</div>
							<Link to="/" className="text-sm font-bold text-blue-700">
								Read More {`>>`}{" "}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
