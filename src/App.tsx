import About from "./components/About";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Process from "./components/Process";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Work from "./components/Work";

function App() {
	return (
		<div className="bg-bg text-ink font-sans">
			<Nav />
			<Hero />
			<Services />
			<Work />
			<Process />
			<About />
			<Testimonials />
			<FAQ />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
