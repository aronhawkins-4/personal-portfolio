import { motion } from "motion/react";

const testimonials = [
	{
		quote:
			"Aron shipped what three of our previous contractors couldn't. Half the time, no drama, code we can actually maintain.",
		name: "Maya Chen",
		role: "FOUNDER, HARVESTER LOGISTICS",
	},
	{
		quote:
			"Best technical hire we made all year. Read the codebase, found three bugs we didn't know we had, then fixed them.",
		name: "Theo Rodriguez",
		role: "CTO, LEDGER.FM",
	},
	{
		quote:
			"He treated our budget like his own money. Came in $4k under the estimate and threw in a migration we needed.",
		name: "Sasha Voigt",
		role: "EDITOR, COMMON ALMANAC",
	},
];

export default function Testimonials() {
	return (
		<section className="bg-subtle border-y-[1.5px] border-ink relative overflow-hidden">
			<img src="/images/heart_tattoo.svg" alt="" aria-hidden="true" className="absolute top-1/2 -translate-y-1/2 -right-6 w-64 opacity-[0.13] pointer-events-none select-none mix-blend-multiply" />
			<img src="/images/star_filler_tattoo.svg" alt="" aria-hidden="true" className="absolute top-12 left-24 w-7 opacity-[0.11] pointer-events-none select-none mix-blend-multiply" />
			<img src="/images/star_filler_tattoo.svg" alt="" aria-hidden="true" className="absolute bottom-10 left-40 w-6 opacity-[0.10] pointer-events-none select-none mix-blend-multiply" />
			<div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-24 relative z-10">
				<div className="text-center mb-10">
					<div className="text-xs tracking-[0.2em] text-ink/50 mb-2">
						+ TESTIMONIALS +
					</div>
					<h2 className="font-serif text-4xl sm:text-5xl font-normal">
						Kind words
					</h2>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
					{testimonials.map((t, i) => (
						<motion.div
							key={t.name}
							className="bg-bg border-[1.5px] border-ink p-6"
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.35, delay: i * 0.1 }}
						>
							<div className="font-serif text-4xl text-red leading-[0.7] mb-3">
								"
							</div>
							<p className="text-base leading-relaxed font-serif italic mb-4 text-ink/90">
								{t.quote}
							</p>
							<div className="border-t border-dashed border-ink/25 pt-3">
								<div className="text-sm font-medium">{t.name}</div>
								<div className="text-xs text-ink/65 mt-0.5">{t.role}</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
