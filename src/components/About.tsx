const primary = ["TypeScript", "React", "Node.js", "Postgres"];
const secondary = [
	"Next.js",
	"TanStack",
	"Supabase",
	"CF Workers",
	"D1",
	"R2",
	"Drizzle",
	"Tailwind",
];

export default function About() {
	return (
		<section id="about" className="relative overflow-hidden">
			<img src="/images/anchor_tattoo.svg" alt="" aria-hidden="true" className="absolute top-1/2 -translate-y-1/2 -left-6 w-64 opacity-[0.11] pointer-events-none select-none mix-blend-multiply" />
			<img src="/images/star_filler_tattoo.svg" alt="" aria-hidden="true" className="absolute top-8 right-64 w-6 opacity-[0.10] pointer-events-none select-none mix-blend-multiply" />
			<img src="/images/star_filler_tattoo.svg" alt="" aria-hidden="true" className="absolute bottom-8 right-10 w-9 opacity-[0.09] pointer-events-none select-none mix-blend-multiply" />
			<div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-24 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16">
					<div>
						<div className="text-xs tracking-[0.2em] text-ink/50 mb-2">
							+ ABOUT +
						</div>
						<h2 className="font-serif text-4xl sm:text-5xl font-normal mb-5">
							The hand
						</h2>
						<p className="text-base leading-relaxed mb-4">
							I've been writing software for the web for 5 years, working as a
							freelancer, an agency team lead, and with seed-stage startups.
						</p>
						<p className="text-base leading-relaxed mb-4">
							Most of my work falls into one of four buckets: standing up a new
							product from an existing design, temporarily leading an existing
							team to architect a project or fix a gnarly bug, setting up
							automations to remove tedious busywork, or training a nontechnical
							team on their existing system.
						</p>
						<p className="text-base leading-relaxed mb-6">
							I work alone or as a contract lead. I write the code with my
							actual hands.
						</p>
					</div>

					<div>
						<div className="text-xs tracking-[0.2em] text-ink/50 mb-2">
							+ THE TOOLS +
						</div>
						<h2 className="font-serif text-4xl sm:text-5xl font-normal mb-5">
							Stack
						</h2>

						<div className="text-xs tracking-widest text-ink/50 mb-2">
							PRIMARY
						</div>
						<div className="flex gap-2 flex-wrap mb-5">
							{primary.map((t) => (
								<span key={t} className="bg-ink text-bg text-xs px-3 py-1.5">
									{t}
								</span>
							))}
						</div>

						<div className="text-xs tracking-widest text-ink/50 mb-2">
							ALSO FLUENT IN
						</div>
						<div className="flex gap-1.5 flex-wrap mb-5">
							{secondary.map((t) => (
								<span
									key={t}
									className="border border-ink/25 text-ink/75 text-xs px-2.5 py-1"
								>
									{t}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
