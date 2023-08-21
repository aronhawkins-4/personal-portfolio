import { HeaderCard } from './components/HeaderCard';
import { ContentCard } from './components/ContentCard';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-start p-16 relative gap-8 overflow-hidden'>
			<div className='absolute top-[-20%] right-[-10%] bg-gradient-radial from-pink-600 to-transparent w-96 h-96 rounded-full blur-2xl -z-20 opacity-50'></div>
			<div className='absolute bottom-[-20%] left-[-10%] bg-gradient-radial from-sky-600 to-transparent w-96 h-96 rounded-full blur-2xl -z-20 opacity-50'></div>
			<HeaderCard />
			<ContentCard />
		</main>
	);
}
