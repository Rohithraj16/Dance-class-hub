"use client";

import React, { FormEvent, useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

function MusicSchoolContactUs() {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log("Submitted:", { email, message });
	};

	return (
		<div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
			<BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
			<div className="max-w-2xl mx-auto p-4 relative z-10">
				<h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
					Contact Us
				</h1>
				<p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
					We&apos;re here to help with any questions about our courses,
					programs, or events. Reach out and let us know how we can assist you
					in your dance journey.
				</p>
				<div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
					<h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
						Get in Touch
					</h2>
					<p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
						Fill out the form below, and our team will get back to you as soon
						as possible.
					</p>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<label
								className="block text-gray-700 dark:text-gray-300 mb-2"
								htmlFor="email"
							>
								Email Address
							</label>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Your email address"
								className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
								required
							/>
						</div>
						<div>
							<label
								className="block text-gray-700 dark:text-gray-300 mb-2"
								htmlFor="message"
							>
								Message
							</label>
							<textarea
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								placeholder="Your message"
								className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
								rows={5}
								required
							></textarea>
						</div>
						<button
							type="submit"
							className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
						>
							Send Message
						</button>
					</form>
				</div>
				<div className="mt-8 text-center">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
						Visit Us
					</h3>
					<p className="text-sm text-gray-600 dark:text-gray-300">
						123 Dance Lane, Melody City, 56789
					</p>
					<p className="text-sm text-gray-600 dark:text-gray-300">
						Phone: (+91) 987-999-0000
					</p>
				</div>
			</div>
		</div>
	);
}

export default MusicSchoolContactUs;
