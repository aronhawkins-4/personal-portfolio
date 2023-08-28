import { HeaderCard } from './components/HeaderCard';
import { ContentCard } from './components/ContentCard';
import { Footer } from './components/Footer';

export default function Home() {
	return (
		<main className='min-h-screen overflow-hidden'>
			<div className='flex flex-col items-center justify-start p-16 relative gap-8'>
				<div className='absolute top-[-200px] right-[-10%] bg-gradient-radial from-pink-600 to-transparent w-96 h-96 rounded-full blur-2xl -z-20 opacity-50'></div>
				<div className='absolute bottom-[-200px] left-[-10%] bg-gradient-radial from-sky-600 to-transparent w-96 h-96 rounded-full blur-2xl -z-20 opacity-50'></div>
				<HeaderCard />
				<ContentCard />
			</div>
			<Footer />
		</main>
	);
}
