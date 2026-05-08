import {
	ArrowRight,
	Coffee,
	Guitar,
	Heart,
	Keyboard,
	MapPinHouse,

} from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
	return (
		<section className="relative overflow-hidden">
			<img src="/images/swallow_tattoo.svg" alt="" aria-hidden="true" className="absolute -top-2 -right-2 w-48 sm:w-64 opacity-[0.12] pointer-events-none select-none mix-blend-multiply" />
			<img src="/images/rose_tattoo.svg" alt="" aria-hidden="true" className="absolute -bottom-4 -left-4 w-40 sm:w-52 opacity-[0.11] pointer-events-none select-none mix-blend-multiply" />
			<img src="/images/star_filler_tattoo.svg" alt="" aria-hidden="true" className="absolute top-10 left-10 w-8 opacity-[0.10] pointer-events-none select-none mix-blend-multiply" />
			<img src="/images/star_filler_tattoo.svg" alt="" aria-hidden="true" className="absolute -bottom-2 right-1/3 w-8 opacity-[0.09] pointer-events-none select-none mix-blend-multiply" />
			<div className="max-w-7xl mx-auto px-6 sm:px-8 pt-14 sm:pt-20 pb-10">
				<div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 items-center">
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="max-w-xl"
					>
						<div className="text-xs tracking-[0.2em] text-ink/50 mb-4">
							+ FREELANCE · FULL-STACK · FOR HIRE +
						</div>
						<h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-none mb-5 font-normal">
							Aron Hawkins.
						</h1>
						<p className="text-base leading-relaxed mb-2">
							I build fast, secure web & mobile applications for founders and
							small teams.
						</p>
						<p className="text-sm leading-relaxed text-ink/70 mb-7">
							A real human writing good code. Solo or as contract lead.
						</p>
						<div className="flex flex-wrap gap-3 items-center mb-5">
							<a
								href="#contact"
								className="flex justify-center items-center gap-1 bg-ink text-bg border border-ink px-4 py-2.5 text-xs tracking-[0.08em] hover:opacity-90 transition-opacity"
							>
								BOOK A PROJECT <ArrowRight size={12} />
							</a>
							<a
								href="#work"
								className="flex justify-center items-center gap-1 bg-transparent text-ink border-[1.5px] border-ink px-4 py-2.5 text-xs tracking-[0.08em] hover:bg-ink hover:text-bg transition-colors"
							>
								SEE THE WORK <ArrowRight size={12} />
							</a>
						</div>
						<div className="flex gap-2 items-center text-xs text-ink/75">
							<span className="w-1.5 h-1.5 bg-green rounded-full inline-block shrink-0" />
							Replies in &lt; 24h
						</div>
					</motion.div>

					<motion.div
						className="relative"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<div className="aspect-4/5 border-[1.5px] border-ink relative overflow-hidden flex items-center justify-center">
							<img
								src="/images/HAWKINS-250.webp"
								alt="Aron Hawkins"
								className="absolute inset-0 w-full h-full object-cover"
							/>
						</div>
					</motion.div>
				</div>

				<div className="flex flex-wrap justify-start min-[24rem]:justify-between gap-x-4 gap-y-2 pt-6 mt-10 border-t border-dashed border-ink/25 text-xs tracking-[0.08em] text-ink/75 uppercase">
					<span className="flex gap-2 items-center">
						<MapPinHouse size={14} /> Waco, TX
					</span>
					<span className="flex gap-2 items-center">
						<Heart size={14} /> 1 Kiddo
					</span>
					<span className="flex gap-2 items-center">
						<Coffee size={14} /> Natural Ethiopia
					</span>
					<span className="flex gap-2 items-center">
						<Keyboard size={14} /> 100 WPM
					</span>
					<span className="flex gap-2 items-center">
						<Guitar size={14} /> Telecaster
					</span>
				</div>
			</div>
		</section>
	);
}
