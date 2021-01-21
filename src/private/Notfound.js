import React from "react";
import { Link } from "react-router-dom";

export default function Notfound() {
	return (
		<div>
			<div className="flex h-screen">
				<div className="m-auto">
					<h1 className="text-3xl font-bold">
						Page not found <br />
						<div className="text-center">🥺</div>
					</h1>
					<div className="mt-10">
						<Link
							to="/"
							className="py-2 px-6 bg-blue-700 mx-16  text-white rounded"
						>
							Go back
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
