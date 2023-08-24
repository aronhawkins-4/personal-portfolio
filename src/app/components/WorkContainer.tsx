import { ProjectCard } from './ProjectCard';
import { BsPhone } from 'react-icons/bs';

import { MessageAppCard } from './MessageAppCard';
import { AirbnbAppCard } from './AirbnbAppCard';
import { RestaurantAppCard } from './RestaurantAppCard';
import { ThreeDCard } from './ThreeDCard';

export const WorkContainer = () => {
	return (
		<div className='flex flex-col gap-16 w-full lg:max-w-6xl items-center'>
			<div className='flex gap-16 justify-between items-center w-full'>
				<div className='flex flex-col gap-4 items-center justify-center'>
					<div className='w-[1px] h-16 bg-white/50 mb-8'></div>
					<h3
						className='text-4xl font-thin opacity-50 tracking-[2rem]'
						style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
					>
						APPS
					</h3>
					<div className='w-[1px] h-16 bg-white/50'></div>
				</div>
				<div className='flex flex-col gap-4 w-full lg:max-w-6xl'>
					<MessageAppCard />
					<AirbnbAppCard />
					<RestaurantAppCard />
					<ThreeDCard />
				</div>
			</div>
			<div className='flex gap-16 justify-between items-center w-full'>
				<div className='flex flex-col gap-4 items-center justify-center'>
					<div className='w-[1px] h-16 bg-white/50 mb-8'></div>
					<h3
						className='text-4xl font-thin opacity-50 tracking-[2rem]'
						style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
					>
						WEBSITES
					</h3>
					<div className='w-[1px] h-16 bg-white/50'></div>
				</div>

				<div className='flex flex-col gap-4 w-full lg:max-w-6xl'>
					<MessageAppCard />
					<AirbnbAppCard />
					<RestaurantAppCard />
					<ThreeDCard />
					<MessageAppCard />
					<AirbnbAppCard />
					<RestaurantAppCard />
					<ThreeDCard />
				</div>
			</div>
		</div>
	);
};
