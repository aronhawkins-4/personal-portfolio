'use client';

import { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { GiDonut } from 'react-icons/gi';

export const ThreeDCard = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='flex flex-col items-center'>
			<div
				className='py-4 px-8 flex flex-col gap-2 relative w-full lg:min-w-[600px] justify-center items-center rounded-2xl overflow-hidden shadow-[-.5px_1px_2px_rgba(203,213,225,.3)] z-10 cursor-pointer bg-gradient-to-tr from-transparent to-gray-400/50'
				onClick={() => {
					setIsOpen((current) => !current);
				}}
			>
				<div className='flex gap-4 w-full'>
					<div
						className='w-16 h-16 rounded-full flex justify-center items-center 
						bg-gradient-to-tr from-purple-700 to-purple-400'
					>
						<GiDonut size={28} />
					</div>

					<div className='flex flex-col gap-2 justify-center'>
						<div className='w-full'>
							<h2 className='text-xl font-bold text-white'>3D Modeling</h2>
							<p>Examples of 3D models and animations I have made</p>
						</div>
					</div>
					<div className='ml-auto flex items-center'>
						{!isOpen && <BsChevronDown size={24} />}
						{isOpen && <BsChevronUp size={24} />}
					</div>
				</div>
			</div>
			{isOpen && (
				<div className='p-8 w-[calc(100%-4px)] h-full border border-gray-700 border-t-0 rounded-b-xl flex gap-16'>
					<div className='flex flex-col'>
						<div>
							<h3 className='text-white text-2xl font-bold'>Tech Stack</h3>
							<ul className='flex flex-col list-disc pl-5'>
								<li className='text-white text-lg font-semibold'>Blender3D</li>
							</ul>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-4 w-full'>
						<div className='relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden'>
							<video
								autoPlay
								loop
								className='w-full h-full absolute'
								src={require('./public/_3D/cable_fly_render.mov')}
							></video>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
