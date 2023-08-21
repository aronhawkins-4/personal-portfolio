import { ProjectCard } from './ProjectCard';
import { BsPhone } from 'react-icons/bs';

import { MessageAppCard } from './MessageAppCard';
import { AirbnbAppCard } from './AirbnbAppCard';
import { RestaurantAppCard } from './RestaurantAppCard';
import { ThreeDCard } from './ThreeDCard';

export const WorkContainer = () => {
	return (
		<div className='flex flex-col gap-4 w-full lg:max-w-6xl'>
			<MessageAppCard />
			<AirbnbAppCard />
			<RestaurantAppCard />
			<ThreeDCard />
		</div>
	);
};
