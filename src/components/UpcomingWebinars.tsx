"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
	const featuredWebinars = [
		{
			title: "Understanding Dance Techniques",
			description:
				"Explore the fundamentals of dance techniques and enhance your movement skills.",
			slug: "understanding-dance-techniques",
			isFeatured: true,
		},
		{
			title: "The Art of Choreography",
			description:
				"Learn the craft of creating compelling dance routines from experienced choreographers.",
			slug: "the-art-of-choreography",
			isFeatured: true,
		},
		{
			title: "Mastering Dance Styles",
			description:
				"Advanced techniques to master your favorite dance styles, from ballet to hip-hop.",
			slug: "mastering-dance-styles",
			isFeatured: true,
		},
		{
			title: "Dance Performance Essentials",
			description:
				"Get started with live dance performance techniques through this comprehensive overview.",
			slug: "dance-performance-essentials",
			isFeatured: true,
		},
		{
			title: "Live Dance Performance Techniques",
			description:
				"Enhance your stage presence and live performance skills with expert tips and strategies.",
			slug: "live-dance-performance-techniques",
			isFeatured: true,
		},
		{
			title: "Dance Promotion in the Digital Age",
			description:
				"Learn how to effectively promote your dance performances and brand in the digital world.",
			slug: "dance-promotion-in-digital-age",
			isFeatured: true,
		},
	];

	return (
		<div className="p-12 bg-gray-900">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<div className="text-center">
					<h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
						FEATURED WEBINARS
					</h2>
					<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
						Enhance Your Dance Journey
					</p>
				</div>

				<div className="mt-10">
					<HoverEffect
						items={featuredWebinars.map((webinar) => ({
							title: webinar.title,
							description: webinar.description,
							link: "/",
						}))}
					/>
				</div>

				<div className="mt-10 text-center">
					<Link
						href={"/"}
						className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
					>
						View All webinars
					</Link>
				</div>
			</div>
		</div>
	);
}

export default UpcomingWebinars;
