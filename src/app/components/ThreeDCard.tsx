'use client';

import { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { GiDonut } from 'react-icons/gi';
import cld from '../utils/Cloudinary';
import { useLoader } from '@react-three/fiber';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const ThreeDCard = () => {
	const [isOpen, setIsOpen] = useState(false);
	const cableFly = cld.video('cable_fly_render').toURL();
	const drGregory = cld.video('dr_gregory_product_animation').toURL();
	const sidekickCards = cld.video('sidekick_cards_falling').toURL();

	return (
		<div className='flex flex-col items-center'>
			<div
				className='py-4 px-8 flex flex-col gap-2 relative w-full lg:min-w-[600px] justify-center items-center rounded-2xl overflow-hidden shadow-[-.5px_1px_2px_rgba(203,213,225,.3)] z-10 cursor-pointer bg-gradient-to-tr from-transparent to-gray-600'
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
							<h3 className='text-white text-2xl font-bold whitespace-nowrap'>Tech Stack</h3>
							<ul className='flex flex-col list-disc pl-5'>
								<li className='text-white text-lg font-semibold'>Blender3D</li>
							</ul>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-4 w-full'>
						<div className='relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden'>
							{!cableFly && (
								<div
									role='status'
									className='flex items-center justify-center h-full w-full bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700 absolute'
								>
									<svg
										className='w-10 h-10 text-gray-200 dark:text-gray-600'
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='currentColor'
										viewBox='0 0 16 20'
									>
										<path d='M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z' />
										<path d='M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z' />
									</svg>
									<span className='sr-only'>Loading...</span>
								</div>
							)}
							{cableFly && (
								<video
									autoPlay
									loop
									className='w-full h-full absolute'
									src={cableFly}
									controls
								></video>
							)}
						</div>
						<div className='relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden'>
							{!drGregory && (
								<div
									role='status'
									className='flex items-center justify-center h-full w-full bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700 absolute'
								>
									<svg
										className='w-10 h-10 text-gray-200 dark:text-gray-600'
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='currentColor'
										viewBox='0 0 16 20'
									>
										<path d='M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z' />
										<path d='M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z' />
									</svg>
									<span className='sr-only'>Loading...</span>
								</div>
							)}
							{drGregory && (
								<video
									autoPlay
									loop
									className='w-full h-full absolute'
									src={drGregory}
									controls
								></video>
							)}
						</div>
						<div className='relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden'>
							{!sidekickCards && (
								<div
									role='status'
									className='flex items-center justify-center h-full w-full bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700 absolute'
								>
									<svg
										className='w-10 h-10 text-gray-200 dark:text-gray-600'
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='currentColor'
										viewBox='0 0 16 20'
									>
										<path d='M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z' />
										<path d='M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z' />
									</svg>
									<span className='sr-only'>Loading...</span>
								</div>
							)}
							{sidekickCards && (
								<video
									autoPlay
									loop
									className='w-full h-full absolute'
									src={sidekickCards}
									controls
								></video>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
