'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { IoFastFoodOutline } from 'react-icons/io5';
import cld from '../utils/Cloudinary';
import { fill } from '@cloudinary/url-gen/actions/resize';

export const RestaurantAppCard = () => {
	const [isOpen, setIsOpen] = useState(false);
	const changeVote = cld.image('change_vote').resize(fill()).toURL();
	const chooseLocation = cld.image('choose_location').resize(fill()).toURL();
	const vote = cld.image('vote').resize(fill()).toURL();
	const locationDefault = cld.image('location_default').resize(fill()).toURL();

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
							{!chooseLocation && (
								<div className='flex items-center justify-center w-full h-full bg-gray-300 rounded sm:w-96 dark:bg-gray-700 absolute'>
									<svg
										className='w-10 h-10 text-gray-200 dark:text-gray-600'
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='currentColor'
										viewBox='0 0 20 18'
									>
										<path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
									</svg>
									<span className='sr-only'>Loading...</span>
								</div>
							)}
							{chooseLocation && (
								<Image
									src={chooseLocation}
									alt='Home screen of Airbnb clone app'
									fill
									className='object-cover object-center'
									sizes='any'
								/>
							)}
						</div>
						<div className='relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden'>
							{!locationDefault && (
								<div className='flex items-center justify-center w-full h-full bg-gray-300 rounded sm:w-96 dark:bg-gray-700 absolute'>
									<svg
										className='w-10 h-10 text-gray-200 dark:text-gray-600'
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='currentColor'
										viewBox='0 0 20 18'
									>
										<path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
									</svg>
									<span className='sr-only'>Loading...</span>
								</div>
							)}
							{locationDefault && (
								<Image
									src={locationDefault}
									alt='Home screen of Airbnb clone app'
									fill
									className='object-cover object-center'
									sizes='any'
								/>
							)}
						</div>

						<div className='relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden'>
							{!vote && (
								<div className='flex items-center justify-center w-full h-full bg-gray-300 rounded sm:w-96 dark:bg-gray-700 absolute'>
									<svg
										className='w-10 h-10 text-gray-200 dark:text-gray-600'
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='currentColor'
										viewBox='0 0 20 18'
									>
										<path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
									</svg>
									<span className='sr-only'>Loading...</span>
								</div>
							)}
							{vote && (
								<Image
									src={vote}
									alt='Home screen of Airbnb clone app'
									fill
									className='object-cover object-center'
									sizes='any'
								/>
							)}
						</div>
						<div className='relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden'>
							{!changeVote && (
								<div className='flex items-center justify-center w-full h-full bg-gray-300 rounded sm:w-96 dark:bg-gray-700 absolute'>
									<svg
										className='w-10 h-10 text-gray-200 dark:text-gray-600'
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='currentColor'
										viewBox='0 0 20 18'
									>
										<path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
									</svg>
									<span className='sr-only'>Loading...</span>
								</div>
							)}
							{changeVote && (
								<Image
									src={changeVote}
									alt='Home screen of Airbnb clone app'
									fill
									className='object-cover object-center'
									sizes='any'
								/>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
