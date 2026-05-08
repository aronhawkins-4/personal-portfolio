import { ArrowRight } from "lucide-react";

export default function Nav() {
	return (
		<nav className="border-b border-dashed border-ink/25">
			<div className="max-w-7xl mx-auto px-6 sm:px-8 py-3.5 flex justify-between items-center text-ink/50">
				<div className="flex items-center gap-3">
					<div className="w-9 h-9 border-[1.5px] border-ink flex items-center justify-center font-serif text-base text-ink shrink-0">
						A
					</div>
					<div className="leading-tight">
						<div className="font-medium text-sm text-ink">Aron Hawkins</div>
						<div className="text-xs text-ink/75 tracking-wider">
							EST. 2020 · TEXAS
						</div>
					</div>
				</div>

				<div className="hidden md:flex gap-5 text-xs tracking-widest">
					{["WORK", "SERVICES", "PROCESS", "ABOUT", "FAQ"].map((item) => (
						<a
							key={item}
							href={`#${item.toLowerCase()}`}
							className="text-ink/75 hover:text-ink transition-colors"
						>
							{item}
						</a>
					))}
				</div>

				<a
					href="#contact"
					className="bg-red border border-red hover:opacity-90 uppercase flex justify-center items-center gap-1 text-bg px-4 py-2.5 text-xs tracking-[0.08em] transition-opacity"
				>
					Reach Out <ArrowRight size={12} />
				</a>
			</div>
		</nav>
	);
}
