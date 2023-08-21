'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { IoFastFoodOutline } from 'react-icons/io5';
import change_vote from '../../../public/restaurants/change_vote.png';
import choose_location from '../../../public/restaurants/choose_location.png';
import location_default from '../../../public/restaurants/location_default.png';
import vote from '../../../public/restaurants/vote.png';

export const RestaurantAppCard = () => {
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
						bg-gradient-to-tr from-sky-700 to-sky-400'
					>
						<IoFastFoodOutline size={28} />
					</div>

					<div className='flex flex-col gap-2 justify-center'>
						<div className='w-full'>
							<h2 className='text-xl font-bold text-white'>Restaurant Voting App</h2>
							<p>Vote with friends about where to go to eat</p>
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
								<li className='text-white text-lg font-semibold'>Next.js</li>
								<li className='text-white text-lg font-semibold'>Clerk</li>
								<li className='text-white text-lg font-semibold'>TypeScript</li>
								<li className='text-white text-lg font-semibold'>TailwindCSS</li>
								<li className='text-white text-lg font-semibold'>Pusher.js</li>
								<li className='text-white text-lg font-semibold'>Google Maps API</li>
								<li className='text-white text-lg font-semibold'>Prisma</li>
								<li className='text-white text-lg font-semibold'>PostgreSQL</li>
								<li className='text-white text-lg font-semibold'>Supabase</li>
							</ul>
						</div>
						<Link
							className='block mt-8'
							href='https://sidekick-decide-app.vercel.app/'
							target='_blank'
						>
							<button className='text-white bg-gradient-to-r from-sky-700 to-sky-400 hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-sky-200 dark:focus:ring-sky-800 font-medium text-md rounded-lg px-5 py-2.5 text-center whitespace-nowrap'>
								View live project
							</button>
						</Link>
					</div>
					<div className='grid grid-cols-2 gap-4 w-full'>
						<div className='relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden'>
							<Image
								src={choose_location}
								alt='Home screen of Airbnb clone app'
								fill
								className='object-cover object-center'
							/>
						</div>
						<div className='relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden'>
							<Image
								src={location_default}
								alt='Home screen of Airbnb clone app'
								fill
								className='object-cover object-center'
							/>
						</div>
						<div className='relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden'>
							<Image
								src={vote}
								alt='Home screen of Airbnb clone app'
								fill
								className='object-cover object-center'
							/>
						</div>
						<div className='relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden'>
							<Image
								src={change_vote}
								alt='Home screen of Airbnb clone app'
								fill
								className='object-cover object-center'
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
