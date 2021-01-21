import React, { useState } from "react";
import Navigation from "../parts/Navigation";
import Hero from "../parts/Hero";
function Landing() {
	const [userLogged] = useState(localStorage.getItem("token"));
	return (
		<>
			<Navigation isAuth={userLogged} />
			<Hero
				titleCardPertama="Bagaimana cara menjadi web developer di tahun 2021"
				descriptionCardpertama="Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Blanditiis quo illum voluptatum voluptas atque veritatis
				dolorum iste iure amet repellat sit totam ex qui, sapiente
				aspernatur molestiae, magni rem earum?"
				imageUrlCardPertama="https://placeimg.com/200/200/people"
				authorCardPertama="Jhonatan Pristel"
				titleCardKedua="Bagaimana cara menjadi mobile developer di tahun 2021 era
				sekarang"
				imageUrlCardKedua="https://placeimg.com/200/200/tech"
			/>
		</>
	);
}

export default Landing;
