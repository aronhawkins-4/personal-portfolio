import { BookOpen, Rocket, UserStar, Workflow } from "lucide-react";
import { motion } from "motion/react";

const services = [
	{
		icon: Rocket,
		number: "01",
		title: "New builds",
		description:
			"I'll make your ideas a reality. Startup concepts, internal tools, and custom integrations. ",
	},
	{
		icon: UserStar,
		number: "02",
		title: "Fractional lead",
		description:
			"Contract tech lead for seed-stage teams. Reviews, hiring, architecture.",
	},
	{
		icon: Workflow,
		number: "03",
		title: "Automation",
		description:
			"Connect disjointed systems, automate common tasks, and free up time for more important work.",
	},
	{
		icon: BookOpen,
		number: "04",
		title: "System training",
		description:
			"I'll learn your existing codebase and tools, then train your team to maintain and extend it independently.",
	},


];

export default function Services() {
	return (
		<section id="services" className="bg-subtle border-y-[1.5px] border-ink relative overflow-hidden">
			<img src="/images/snake_tattoo.svg" alt="" aria-hidden="true" className="absolute -right-16 top-48 sm:-right-8 sm:top-1/2 -translate-y-1/2 w-64 sm:w-80 opacity-[0.12] pointer-events-none select-none mix-blend-multiply" />
			<img src="/images/star_filler_tattoo.svg" alt="" aria-hidden="true" className="absolute top-8 left-64 w-8 opacity-[0.11] pointer-events-none select-none mix-blend-multiply" />
			<img src="/images/star_filler_tattoo.svg" alt="" aria-hidden="true" className="absolute bottom-10 left-1/4 w-9 opacity-[0.10] pointer-events-none select-none mix-blend-multiply" />
			<div className="max-w-5xl mx-auto px-6 sm:px-8 py-16 sm:py-24 relative z-10">
				<div className="text-center mb-10">
					<div className="text-xs tracking-[0.2em] text-ink/50 mb-2">
						+ SERVICES +
					</div>
					<h2 className="font-serif text-4xl sm:text-5xl font-normal">
						What I build
					</h2>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{services.map((s, i) => (
						<motion.div
							key={s.title}
							className="bg-bg border-[1.5px] border-ink p-6"
							initial={{ opacity: 0, y: 12 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.35, delay: i * 0.07 }}
						>
							<div className="flex justify-between items-start mb-4">
								<s.icon size={24} className="text-red" />
								<span className="font-serif text-3xl text-red">{s.number}</span>
							</div>
							<h3 className="font-serif text-xl font-normal mb-2">{s.title}</h3>
							<p className="text-sm leading-relaxed text-ink/75">
								{s.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
