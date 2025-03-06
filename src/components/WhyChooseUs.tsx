"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
	{
		title: "Find Your Rhythm: A Personal Journey in Dance",
		description:
			"Step into a world where movement meets passion. Our personalized dance instruction adapts to your style, helping you grow with confidence and creativity. At our dance school, your aspirations take center stage as we guide you on your journey to mastery.",
	},
	{
		title: "Express Yourself Through Dance",
		description:
			"Unlock the power of movement and express yourself like never before. Our expert-led dance courses cater to all skill levels, helping you build technique, confidence, and artistry in every step.",
	},
	{
		title: "Unleash Your Inner Dancer",
		description:
			"No matter your experience level, our dance programs help you explore your passion, refine your skills, and develop a deeper connection to movement, music, and performance.",
	},
	{
		title: "Live Feedback & Engagement",
		description:
			"Immerse yourself in an interactive dance experience where real-time feedback refines your technique. Just like a live dance class, our approach ensures you improve with every step, turn, and movement.",
	},
	{
		title: "Innovative Dance Curriculum",
		description:
			"Our curriculum stays ahead of the curve, incorporating the latest dance styles, techniques, and trends. Stay inspired and evolve as a dancer with a program designed for modern movers.",
	},
	{
		title: "Endless Opportunities to Grow",
		description:
			"With a wide variety of dance styles and skill-based courses, your learning never stops. Whether you're perfecting fundamentals or mastering advanced choreography, our platform offers endless ways to grow as a dancer.",
	},
];

function WhyChooseUs() {
	return (
		<div>
			<StickyScroll content={musicSchoolContent} />
		</div>
	);
}

export default WhyChooseUs;
