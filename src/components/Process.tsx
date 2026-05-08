import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const steps = [
	{
		n: "1",
		color: "var(--red)",
		title: "Talk",
		desc: "30-min call. What you're building, what success looks like. Free.",
	},
	{
		n: "2",
		color: "var(--yellow)",
		title: "Scope",
		desc: "Written proposal: deliverables, timeline, fixed price or hourly.",
	},
	{
		n: "3",
		color: "var(--blue)",
		title: "Build",
		desc: "The fun begins. Regular updates, thorough testing, open communication.",
	},
	{
		n: "4",
		color: "var(--green)",
		title: "Ship",
		desc: "Deploy, hand off, document. 30 days of bug fixes included.",
	},
];

export default function Process() {
	return (
		<section id="process" className="bg-subtle border-y-[1.5px] border-ink relative overflow-hidden">
			<img src="/images/eagle_tattoo.svg" alt="" aria-hidden="true" className="absolute -top-4 -right-6 w-80 opacity-[0.11] pointer-events-none select-none mix-blend-multiply" />
			<img src="/images/star_filler_tattoo.svg" alt="" aria-hidden="true" className="absolute bottom-6 left-1/4 w-9 opacity-[0.09] pointer-events-none select-none mix-blend-multiply" />
			<img src="/images/star_filler_tattoo.svg" alt="" aria-hidden="true" className="absolute top-24 left-40 w-8 opacity-[0.08] pointer-events-none select-none mix-blend-multiply" />
			<div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-24 relative z-10">
				<div className="text-center mb-10">
					<div className="text-ink/50 text-xs tracking-[0.2em] mb-2">
						+ PROCESS +
					</div>
					<h2 className="font-serif text-4xl sm:text-5xl font-normal">
						How it goes
					</h2>
				</div>

				<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
					{steps.map((step, i) => (
						<motion.div
							key={step.n}
							className="bg-bg border-[1.5px] border-ink p-5 text-center"
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.3, delay: i * 0.08 }}
						>
							<div
								className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 font-serif text-2xl text-bg leading-none"
								style={{ background: step.color }}
							>
								{step.n}
							</div>
							<h4 className="font-serif text-2xl font-normal mb-2">
								{step.title}
							</h4>
							<p className="text-sm leading-relaxed text-ink/75">{step.desc}</p>
						</motion.div>
					))}
				</div>
				<a
					href="#contact"
					className="flex justify-center items-center gap-1 bg-transparent text-ink border-[1.5px] border-ink px-4 py-2.5 text-xs tracking-[0.08em] hover:bg-ink hover:text-bg transition-colors mx-auto w-fit"
				>
					BOOK A CALL <ArrowRight size={12} />
				</a>
			</div>
		</section>
	);
}
