export default function Footer() {
	return (
		<footer className="bg-[#1A0F08] text-bg relative overflow-hidden">
			<div className="max-w-7xl mx-auto px-6 sm:px-8 py-6 text-center text-xs tracking-[0.12em] uppercase">
				<div className="mb-3">
					<a href="https://aronhawkins.com" target="_blank" rel="noopener noreferrer">aronhawkins.com</a> · <a href="https://github.com/aronhawkins-4" target="_blank" rel="noopener noreferrer">github.com/aronhawkins-4</a> · Waco, TX
				</div>
				<div className="flex flex-col sm:flex-row justify-center items-center gap-2 pt-3 border-t border-dashed border-[#3D2817]">
					<span>© {new Date().getFullYear()} Aron Hawkins</span>
				</div>
			</div>
		</footer>
	);
}
