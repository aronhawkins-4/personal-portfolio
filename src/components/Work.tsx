import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const projects = [
	{
		preview: "/images/services_image-optimize.webp",
		previewPosition: 'top',
		tag: "01 · SAAS Platform",
		year: "2026",
		title: "Image Optimize",
		description: "Web application for fast, secure image optimization. Format conversion, granular compression control, and resizing all in one. Includes user authentication, usage tracking, and billing.",
		link: 'https://image-optimize.io'
	},
	{
		preview: "/images/services_higgins.png",
		previewPosition: 'top',
		tag: "02 · AI Startup",
		year: "2024",
		title: "Higgins.AI",
		description:
			"Architected, developed, and lead engineering for an AI customer service startup. Deployed products included a customer service chatbot, a mobile app for IOS and Android, and a CMS for internal teams. Over 100k monthly active users.",
		link: 'https://higgins.ai'
	},
	{
		preview: '/images/services_onward.webp',
		previewPosition: 'top',
		tag: "03 · Real Estate Platform",
		year: "2025",
		title: "Onward Real Estate Team",
		description:
			"Full-stack web platform for a real estate brokerage. Complex map and search functionality, custom MLS integrations, and a robust CMS for marketers. Designed by Sidekick Creative Agency. Developed by me.",
		link: 'https://onwardrealestateteam.com'
	},
	{
		preview: '/images/services_sendero.webp',
		previewPosition: 'center',
		tag: "04 · E-Commerce Site",
		year: "2023",
		title: "Sendero Provisions Co.",
		description:
			"Custom e-commerce storefront for a national retail brand doing millions in sales. Designed by Sidekick Creative Agency. Developed by me.",
		link: 'https://senderopc.com'
	},
	{
		preview: '/images/services_automation_2.webp',
		previewPosition: 'center',
		tag: "05 · Automation",
		year: "2026",
		title: "Business Automations",
		description: "Over 50 automations built for various companies. Examples include automated billing, website status tracking, and slack & project management software integrations.",
	},
	{
		preview: '/images/services_coming_soon_1.webp',
		previewPosition: 'center',
		tag: "06 · Coming Soon",
		year: "TBD",
		title: "Cooking Up Your Next Project",
		description: "Let's add something to this list. Reach out to connect with me and discuss how I can help bring your idea to life.",
		link: '#contact'
	},
];

export default function Work() {
	return (
		<section id="work" className="relative overflow-hidden">
			<img src="/images/cards_tattoo.svg" alt="" aria-hidden="true" className="absolute -bottom-6 -left-6 w-60 opacity-[0.10] pointer-events-none select-none mix-blend-multiply" />
			<img src="/images/tiger_tattoo.svg" alt="" aria-hidden="true" className="absolute -top-14 -right-12 sm:top-1/2 sm:-translate-y-1/2 sm:right-24 w-48 sm:w-60 opacity-[0.10] pointer-events-none select-none mix-blend-multiply" />
			<img src="/images/star_filler_tattoo.svg" alt="" aria-hidden="true" className="absolute top-8 left-8 w-10 opacity-[0.10] pointer-events-none select-none mix-blend-multiply" />
			<img src="/images/star_filler_tattoo.svg" alt="" aria-hidden="true" className="absolute top-1/3 right-6 w-9 opacity-[0.09] pointer-events-none select-none mix-blend-multiply" />
			<img src="/images/star_filler_tattoo.svg" alt="" aria-hidden="true" className="absolute bottom-1/4 right-40 w-10 opacity-[0.08] pointer-events-none select-none mix-blend-multiply" />
			<div className="max-w-5xl mx-auto px-6 sm:px-8 py-16 sm:py-24 relative z-10">
				<div className="text-center mb-10">
					<div className="text-xs tracking-[0.2em] text-ink/50 mb-2">
						+ RECENT PROJECTS +
					</div>
					<h2 className="font-serif text-4xl sm:text-5xl font-normal">
						Selected work
					</h2>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{projects.map((p, i) => (
						<motion.div
							key={p.title}
							className="bg-bg border-[1.5px] border-ink flex flex-col overflow-hidden"
							initial={{ opacity: 0, y: 12 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.35, delay: i * 0.08 }}
						>
							<div className="relative aspect-video overflow-hidden">
								<img
									src={p.preview}
									alt={p.title}
									className={`absolute inset-0 w-full h-full object-cover ${p.previewPosition === 'top' ? 'object-top' : p.previewPosition === 'bottom' ? 'object-bottom' : 'object-center'}`}
								/>
							</div>
							<div className="flex flex-col items-start flex-1 p-4 sm:p-5">
								<div className="flex justify-between w-full text-xs text-ink/75 tracking-widest mb-2">
									<span>{p.tag}</span>
									<span>{p.year}</span>
								</div>
								<h3 className="font-serif text-xl font-normal mb-2">
									{p.title}
								</h3>
								<p className="text-sm leading-relaxed text-ink/75 mb-6">
									{p.description}
								</p>
								{p.link ? p.link !== '#contact' ? (
									<a href={p.link} target="_blank" rel="noopener noreferrer"
										className="bg-transparent text-ink flex gap-2 items-center justify-center uppercase text-xs tracking-[0.08em] pb-1 border-b border-ink mt-auto"
									>
										View live project <ArrowRight size={10} />
									</a>
								) : (
									<a href={p.link}
										className="bg-transparent text-ink flex gap-2 items-center justify-center uppercase text-xs tracking-[0.08em] pb-1 border-b border-ink mt-auto"
									>
										Let's Connect <ArrowRight size={10} />
									</a>
								) : null}
							</div>
						</motion.div>
					))}
				</div>


			</div>
		</section>
	);
}
