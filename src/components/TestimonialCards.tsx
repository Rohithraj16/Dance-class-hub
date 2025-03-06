"use client";
import { div } from "motion/react-client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
	{
		quote:
			"Joining this dance academy transformed my movement and confidence. The instructors bring out the best in every dancer!",
		name: "Sophia Martinez",
		title: "Ballet Student",
	},
	{
		quote:
			"The supportive environment and expert guidance helped me grow not just as a dancer, but as a performer. I feel more expressive than ever!",
		name: "Daniel Kim",
		title: "Contemporary Dance Student",
	},
	{
		quote:
			"This academy gave me the confidence and technique to take my hip-hop skills to the next level. The training here is top-notch!",
		name: "Jasmine Carter",
		title: "Hip-Hop Dance Student",
	},
	{
		quote:
			"Finding the right mentor in dance can be tough, but this academy paired me with an instructor who truly understands my style and ambitions.",
		name: "Ethan Williams",
		title: "Latin Dance Student",
	},
	{
		quote:
			"The choreography and training here pushed me beyond my limits. I’ve grown so much as a dancer and performer!",
		name: "Liam Rodriguez",
		title: "Jazz Dance Student",
	},
];

function MusicSchoolTestimonials() {
	return (
		<div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
			<h2 className="text-white text-3xl font-bold text-center mb-8 z-10">
				Step into Rhythm: Moves of Triumph
			</h2>
			<div className="w-full max-w-7xl">
				<InfiniteMovingCards
					items={musicSchoolTestimonials}
					direction="right"
					speed="slow"
				/>
			</div>
		</div>
	);
}

export default MusicSchoolTestimonials;
