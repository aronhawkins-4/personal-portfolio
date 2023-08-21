'use client';

import { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { PiHouse } from 'react-icons/pi';
import home_screen from '../../../public/airbnb/home_screen.png';
import login from '../../../public/airbnb/login.png';
import dates from '../../../public/airbnb/dates.png';
import property from '../../../public/airbnb/property.png';
import Image from 'next/image';
import Link from 'next/link';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';

export const AirbnbAppCard = () => {
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
						bg-gradient-to-tr from-rose-700 to-rose-400'
					>
						<PiHouse size={28} />
					</div>

					<div className='flex flex-col gap-2 justify-center'>
						<div className='w-full'>
							<h2 className='text-xl font-bold text-white'>Airbnb Clone</h2>
							<p>Working clone of the popular web app</p>
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
								<li className='text-white text-lg font-semibold'>NextAuth</li>
								<li className='text-white text-lg font-semibold'>TypeScript</li>
								<li className='text-white text-lg font-semibold'>TailwindCSS</li>
								<li className='text-white text-lg font-semibold'>Prisma</li>
								<li className='text-white text-lg font-semibold'>MongoDB</li>
							</ul>
						</div>
						<Link
							className='block mt-8'
							href='https://next13-airbnb-clone-psi.vercel.app'
							target='_blank'
						>
							<button className='text-white bg-gradient-to-r from-rose-700 to-rose-400 hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-rose-200 dark:focus:ring-rose-800 font-medium text-md rounded-lg px-5 py-2.5 text-center whitespace-nowrap'>
								View live project
							</button>
						</Link>
					</div>
					<div className='grid grid-cols-2 gap-4 w-full'>
						<div className='relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden'>
							<Image
								src={home_screen}
								alt='Home screen of Airbnb clone app'
								fill
								className='object-cover object-center'
							/>
						</div>
						<div className='relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden'>
							<Image
								src={property}
								alt='Home screen of Airbnb clone app'
								fill
								className='object-cover object-center'
							/>
						</div>
						<div className='relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden'>
							<Image
								src={dates}
								alt='Home screen of Airbnb clone app'
								fill
								className='object-cover object-center'
							/>
						</div>
						<div className='relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden'>
							<Image
								src={login}
								alt='Home screen of Airbnb clone app'
								fill
								className='object-cover object-center'
							/>
						</div>
					</div>
				</div>
			)}
			{/* <LightGallery speed={300}> */}
			<div className='relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden'>
				<Image
					src={home_screen}
					alt='Home screen of Airbnb clone app'
					fill
					className='object-cover object-center'
				/>
			</div>
			<div className='relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden'>
				<Image
					src={property}
					alt='Home screen of Airbnb clone app'
					fill
					className='object-cover object-center'
				/>
			</div>
			<div className='relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden'>
				<Image
					src={dates}
					alt='Home screen of Airbnb clone app'
					fill
					className='object-cover object-center'
				/>
			</div>
			<div className='relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden'>
				<Image
					src={login}
					alt='Home screen of Airbnb clone app'
					fill
					className='object-cover object-center'
				/>
			</div>
			{/* </LightGallery> */}
		</div>
	);
};
