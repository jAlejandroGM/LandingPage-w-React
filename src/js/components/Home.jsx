import React from "react";
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Card from './Card';
import Footer from './Footer';


const Home = () => {
	const cards = [
		{
			title: "Card Title 1",
			text: "This is the first card's content. This is the first card's content. This is the first card's content.This is the first card's content. This is the first card's content. This is the first card's content.",
		},
		{
			title: "Card Title 2",
			text: "This is the second card's content. This is the second card's content. This is the second card's content.This is the second card's content. This is the second card's content. This is the second card's content.",
		},
		{
			title: "Card Title 3",
			text: "This is the third card's content. This is the third card's content. This is the third card's content.This is the third card's content. This is the third card's content. This is the third card's content.",
		},
		{
			title: "Card Title 4",
			text: "This is the fourth card's content. This is the fourth card's content. This is the fourth card's content.This is the fourth card's content. This is the fourth card's content. This is the fourth card's content.",
		}
	];

	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row g-4">
					{cards.map((card, index) => (
						<div key={index} className="col-sm-6 col-md-4 col-lg-3">
							<Card title={card.title} text={card.text} />
						</div>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
