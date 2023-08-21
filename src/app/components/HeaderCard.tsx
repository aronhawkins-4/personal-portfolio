import Image from 'next/image';
import aron_at_desk from '../../../public/headshots/aron_at_desk.jpeg';

export const HeaderCard = () => {
	return (
		<div className='p-8 flex flex-col gap-2 relative w-full justify-center items-center rounded-2xl overflow-hidden shadow-[-.5px_1px_2px_rgba(203,213,225,.3)] z-10 bg-gradient-to-tr from-transparent to-gray-400/50'>
			<div className='rounded-full w-48 h-48 relative'>
				<Image
					src={aron_at_desk}
					alt='Aron sitting at his desk'
					fill
					className='rounded-full object-cover'
				/>
			</div>
			<h1 className='text-4xl text-white font-bold mt-4'>Aron Hawkins</h1>
			<span className='text-xl text-gray-400'>Software Engineer</span>
		</div>
	);
};
