import { useForm } from "@tanstack/react-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Sparkle } from "lucide-react";

type ContactValues = {
	name: string;
	email: string;
	projectType: string;
	budget: string;
	timeline: string;
	message: string;
};

const fieldClass =
	"bg-bg text-ink placeholder:text-ink/50 border-transparent rounded-none h-auto py-2.5 text-sm focus-visible:border-transparent focus-visible:ring-0 w-full";

export default function Contact() {
	const form = useForm({
		defaultValues: {
			name: "",
			email: "",
			projectType: "new-build",
			budget: "$10–25k",
			timeline: "flexible",
			message: "",
		} as ContactValues,
		onSubmit: async ({ value }) => {
			console.log("Contact form submitted:", value);
		},
	});

	return (
		<section id="contact" className="bg-ink text-bg relative overflow-hidden">
			<img src="/images/skull_tattoo.svg" alt="" aria-hidden="true" className="absolute left-4 sm:left-12 -top-12 sm:top-12 w-52 opacity-[0.10] pointer-events-none select-none" />
			{/* <img src="/images/tiger_tattoo.svg" alt="" aria-hidden="true" className="absolute right-12 bottom-12 w-48 opacity-[0.10] pointer-events-none select-none" /> */}
			<div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
				<div className="text-center mb-10">
					<div className="text-lg mb-3 text-center"><Sparkle className=" mx-auto" /></div>
					<h2 className="font-serif text-4xl sm:text-5xl font-normal mb-3 text-bg">
						Let's build something cool.
					</h2>
					<p className="text-sm text-bg/70 max-w-105 mx-auto leading-relaxed">
						Tell me what you're working on. I usually reply within a day. If
						it's not a fit, I'll point you toward someone better suited.
					</p>
				</div>

				<form
					className="max-w-130 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3"
					onSubmit={(e) => {
						e.preventDefault();
						form.handleSubmit();
					}}
				>
					<form.Field name="name">
						{(field) => (
							<div className="flex flex-col gap-1.5">
								<Label htmlFor={field.name} className="text-bg/70 text-xs">
									Name
								</Label>
								<Input
									id={field.name}
									className={fieldClass}
									placeholder="Your name"
									value={field.state.value}
									onChange={(e) => field.handleChange(e.target.value)}
								/>
							</div>
						)}
					</form.Field>

					<form.Field name="email">
						{(field) => (
							<div className="flex flex-col gap-1.5">
								<Label htmlFor={field.name} className="text-bg/70 text-xs">
									Email
								</Label>
								<Input
									id={field.name}
									className={fieldClass}
									placeholder="you@example.com"
									type="email"
									value={field.state.value}
									onChange={(e) => field.handleChange(e.target.value)}
								/>
							</div>
						)}
					</form.Field>

					<form.Field name="projectType">
						{(field) => (
							<div className="flex flex-col gap-1.5">
								<Label htmlFor={field.name} className="text-bg/70 text-xs">
									Project type
								</Label>
								<Select
									value={field.state.value}
									onValueChange={field.handleChange}
								>
									<SelectTrigger id={field.name} className={fieldClass}>
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="new-build">
											New build
										</SelectItem>
										<SelectItem value="system-training">
											System training
										</SelectItem>
										<SelectItem value="automation">
											Automation
										</SelectItem>
										<SelectItem value="fractional-lead">
											Fractional lead
										</SelectItem>
									</SelectContent>
								</Select>
							</div>
						)}
					</form.Field>

					<form.Field name="budget">
						{(field) => (
							<div className="flex flex-col gap-1.5">
								<Label htmlFor={field.name} className="text-bg/70 text-xs">
									Budget
								</Label>
								<Select
									value={field.state.value}
									onValueChange={field.handleChange}
								>
									<SelectTrigger id={field.name} className={fieldClass}>
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="$10–25k">$10–25k</SelectItem>
										<SelectItem value="$25–50k">$25–50k</SelectItem>
										<SelectItem value="$50–100k">$50–100k</SelectItem>
										<SelectItem value="$100k+">$100k+</SelectItem>
										<SelectItem value="Hourly / retainer">
											Hourly / retainer
										</SelectItem>
									</SelectContent>
								</Select>
							</div>
						)}
					</form.Field>

					<form.Field name="timeline">
						{(field) => (
							<div className="flex flex-col gap-1.5 sm:col-span-2">
								<Label htmlFor={field.name} className="text-bg/70 text-xs">
									Timeline
								</Label>
								<Select
									value={field.state.value}
									onValueChange={field.handleChange}
								>
									<SelectTrigger id={field.name} className={fieldClass}>
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="less-than-a-month">Less than a month</SelectItem>
										<SelectItem value="1-3-months">1-3 months</SelectItem>
										<SelectItem value="3-6-months">3-6 months</SelectItem>
										<SelectItem value="6+-months">6+ months</SelectItem>
										<SelectItem value="flexible">Flexible</SelectItem>
									</SelectContent>
								</Select>
							</div>
						)}
					</form.Field>

					<form.Field name="message">
						{(field) => (
							<div className="flex flex-col gap-1.5 sm:col-span-2">
								<Label htmlFor={field.name} className="text-bg/70 text-xs">
									Message
								</Label>
								<Textarea
									id={field.name}
									className={`${fieldClass} min-h-20 resize-none`}
									placeholder="What are you building?"
									value={field.state.value}
									onChange={(e) => field.handleChange(e.target.value)}
								/>
							</div>
						)}
					</form.Field>

					<button
						type="submit"
						className="sm:col-span-2 flex justify-center items-center gap-1 bg-red text-bg py-3 text-sm tracking-widest hover:opacity-90 transition-opacity"
					>
						SEND <ArrowRight size={14} />
					</button>
				</form>
			</div>
		</section>
	);
}
