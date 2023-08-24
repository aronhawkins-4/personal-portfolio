import Image from 'next/image';
import aron_headshot from '../../../public/headshots/aron_headshot.png';

export const AboutContainer = () => {
	return (
		<div className='p-12 flex flex-col gap-2 relative w-full justify-center items-center rounded-2xl overflow-hidden  shadow-[-.5px_1px_2px_rgba(203,213,225,.3)] z-10  lg: max-w-6xl bg-gradient-to-tr from-transparent to-gray-400/50'>
			<div className='flex gap-8 justify-between items-center'>
				<div className='w-full'>
					<p className='text-white text-xl'>
						I'm Aron Hawkins, a software engineer and front-end developer based in central Texas. I have a degree in Computer Science from Arizona State University, and I've been the lead
						web developer at Sidekick Creative Agency since 2022. My specialties include TypeScript, Next.js, TailwindCSS, Shopify, and Webflow, and I am a certified expert in Webflow,
						Shopify, and Google Analytics.
					</p>
					<br />
					<p className='text-white text-xl'>
						I'm deeply passionate about creating digital experiences that seamlessly blend form and function. Whether it's building sophisticated e-commerce platforms or designing
						intuitive user interfaces, my work is rooted in a commitment to optimizing user experiences. Feel free to explore my projects and contact me through the options above.
					</p>
				</div>
				<div className=''>
					<div className='rounded-full w-64 h-64 relative'>
						<Image
							src={aron_headshot}
							alt='Aron Hawkins headshot'
							fill
							className='rounded-full object-cover'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
