import Image from 'next/image';
import aron_headshot from '../../../public/headshots/aron_headshot.png';

export const AboutContainer = () => {
	return (
		<div className='p-12 flex flex-col gap-2 relative w-full justify-center items-center rounded-2xl overflow-hidden  shadow-[-.5px_1px_2px_rgba(203,213,225,.3)] z-10  lg: max-w-6xl bg-gradient-to-tr from-transparent to-gray-400/50'>
			<div className='flex gap-8 justify-between items-center'>
				<div className='w-full'>
					<p className='text-white'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit volutpat maecenas volutpat blandit aliquam
						etiam erat velit. Nisi scelerisque eu ultrices vitae auctor. Convallis convallis tellus id interdum velit laoreet id. Aliquet bibendum enim facilisis gravida.
					</p>
					<br />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit volutpat maecenas volutpat blandit aliquam
						etiam erat velit. Nisi scelerisque eu ultrices vitae auctor. Convallis convallis tellus id interdum velit laoreet id. Aliquet bibendum enim facilisis gravida.
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
