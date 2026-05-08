import { Plus, Minus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";

const faqs = [
	{
		q: "Do you work with non-technical founders?",
		a: "Absolutely! I'll translate engineering tradeoffs into plain language, and won't push decisions back on you that I should be making.",
	},
	{
		q: "What's your rate?",
		a: "Fixed-scope projects start at $10k. Fractional lead work is $200/hr or $5k/mo retainer. Free intro call to scope.",
	},
	{
		q: "Will you sign an NDA?",
		a: "Yes, mutual NDA before any technical conversation, no problem. Send me yours or I'll send mine.",
	},
	{
		q: "Can you work with my existing team?",
		a: "Yes, that's what my System Training and Fractional Lead services are for. I'll read the codebase, get up to speed fast, then either lead the team or train them to own it without me.",
	},
	{
		q: "Do you do design work?",
		a: "No. I build from existing designs. If you need a designer first, I can point you toward good ones, but I choose to stick to what I'm best at.",
	},
	{
		q: "How small is too small?",
		a: "Fixed-scope projects start at $10k. Below that, hourly fits better. Quick automations, bug fixes, and short consulting engagements are all fair game.",
	},
];

export default function FAQ() {
	const headingId = useId();

	return (
		<section id="faq" aria-labelledby={headingId} className="relative overflow-hidden">
			<img src="/images/dagger_tattoo.svg" alt="" aria-hidden="true" className="absolute top-1/2 -translate-y-1/2 right-4 w-48 opacity-[0.11] pointer-events-none select-none mix-blend-multiply" />
			<img src="/images/star_filler_tattoo.svg" alt="" aria-hidden="true" className="absolute top-24 left-8 w-8 opacity-[0.11] pointer-events-none select-none mix-blend-multiply" />
			<img src="/images/star_filler_tattoo.svg" alt="" aria-hidden="true" className="absolute top-2/5 left-64 w-6 opacity-[0.08] pointer-events-none select-none mix-blend-multiply" />
			<img src="/images/star_filler_tattoo.svg" alt="" aria-hidden="true" className="absolute bottom-40 left-10 w-6 opacity-[0.09] pointer-events-none select-none mix-blend-multiply" />
			<div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-24 relative z-10">
				<div className="text-center mb-10">
					<div className="text-xs tracking-[0.2em] text-ink/50 mb-2">
						+ FAQ +
					</div>
					<h2
						id={headingId}
						className="font-serif text-4xl sm:text-5xl font-normal"
					>
						Common questions
					</h2>
				</div>

				<div className="max-w-150 mx-auto">
					{faqs.map((faq) => (
						<FAQItem key={faq.q} question={faq.q} answer={faq.a} open={true} />
					))}
				</div>
			</div>
		</section>
	);
}

const FAQItem = ({
	question,
	answer,
	open: initialOpen = true,
}: {
	question: string;
	answer: string;
	open?: boolean;
}) => {
	const id = useId();
	const buttonId = `${id}-btn`;
	const panelId = `${id}-panel`;
	const [open, setOpen] = useState(initialOpen);
	const toggle = () => setOpen((current) => !current);

	return (
		<div className="border-b border-ink/25">
			<button
				id={buttonId}
				type="button"
				aria-expanded={open}
				aria-controls={panelId}
				className="w-full py-4 flex justify-between items-start text-left gap-4"
				onClick={toggle}
			>
				<span className="text-sm font-medium">{question}</span>
				<span
					className="text-ink/50 text-base shrink-0 leading-none"
					aria-hidden="true"
				>
					{open ? <Minus size={14} /> : <Plus size={14} />}
				</span>
			</button>
			<AnimatePresence initial={false}>
				{open && (
					<motion.div
						id={panelId}
						role="region"
						aria-labelledby={buttonId}
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.25, ease: "easeInOut" }}
						style={{ overflow: "hidden" }}
					>
						<p className="text-sm leading-relaxed text-ink/75 pb-4">{answer}</p>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
