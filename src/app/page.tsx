import Featured from "@/components/Featured";
import Footer from "@/components/Footer";

import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import { div } from "motion/react-client";
import Image from "next/image";

export default function Home() {
	return (
		<main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
			<HeroSection />
			<Featured />
			<WhyChooseUs />
			<MusicSchoolTestimonials />
			<UpcomingWebinars />
			<Instructors />
			<Footer />
		</main>
	);
}
