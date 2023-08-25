'use client';

import { useState } from 'react';
import { IconType } from 'react-icons';
import { BsChevronDown, BsChevronLeft, BsChevronRight, BsChevronUp } from 'react-icons/bs';
import cld from '../utils/Cloudinary';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link';
import { Url } from 'url';
import Image from 'next/image';
import { AppType } from '../types/types';

interface AppCardProps {
	Icon?: IconType;
	title?: string;
	description?: string;
	type?: AppType;
	link?: string;
	mediaLinks?: string[];
	techStack?: string[];
}

export const AppCard: React.FC<AppCardProps> = ({ Icon, title = 'Project', description = 'Lorem Ipsum dolor sit amet', type, link, mediaLinks, techStack }) => {
	const [isOpen, setIsOpen] = useState(false);
	let media;
	if (mediaLinks) {
		media = mediaLinks.map((url) => {
			return cld.image(url).resize(fill()).toURL();
		});
	}

	return (
		<div className='flex flex-col items-center'>
			<div
				className='py-4 px-8 flex flex-col gap-2 relative w-full lg:min-w-[600px] justify-center items-center rounded-2xl overflow-hidden shadow-[-.5px_1px_2px_rgba(203,213,225,.3)] z-10 cursor-pointer bg-gradient-to-tr from-transparent to-gray-400/50'
				onClick={() => {
					setIsOpen((current) => !current);
				}}
			>
				<div className='flex gap-4 w-full'>
					{type && Icon && (
						<div
							className={`w-16 h-16 rounded-full flex justify-center items-center 
								${type === AppType.Message && 'bg-gradient-to-tr from-green-700 to-green-400'} 
								${type === AppType.Airbnb && 'bg-gradient-to-tr from-rose-700 to-rose-400'} 
								${type === AppType.Vote && 'bg-gradient-to-tr from-sky-700 to-sky-400'} 
								${type === AppType._3D && 'bg-gradient-to-tr from-purple-700 to-purple-400'}`}
						>
							<Icon size={28} />
						</div>
					)}

					<div className='flex flex-col gap-2 justify-center'>
						<div className='w-full'>
							<h2 className='text-xl font-bold text-white'>{title}</h2>
							<p>{description}</p>
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
								{techStack &&
									techStack.map((tech) => (
										<li
											key={tech}
											className='text-white text-lg font-semibold'
										>
											{tech}
										</li>
									))}
							</ul>
						</div>
						{link && (
							<Link
								className='block mt-8'
								href={link as any as Url}
								target='_blank'
							>
								<button
									className={`text-white 
									${type === AppType.Message && 'bg-gradient-to-tr from-green-700 to-green-400'} 
									${type === AppType.Airbnb && 'bg-gradient-to-tr from-rose-700 to-rose-400'} 
									${type === AppType.Vote && 'bg-gradient-to-tr from-sky-700 to-sky-400'} 
									${type === AppType._3D && 'bg-gradient-to-tr from-purple-700 to-purple-400'} 
									hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-800 font-medium text-md rounded-lg px-5 py-2.5 text-center whitespace-nowrap`}
								>
									View live project
								</button>
							</Link>
						)}
					</div>
					{media && (
						<div className='flex-grow flex justify-center'>
							<Carousel
								infiniteLoop
								showIndicators={false}
								swipeable
								showStatus={false}
								className='relative w-2/3'
								renderArrowPrev={(clickHandler) => {
									return (
										<div
											className='absolute top-0 bottom-0 -left-16 flex justify-center items-center p-3 opacity-50 hover:opacity-100 cursor-pointer z-20'
											onClick={clickHandler}
										>
											<BsChevronLeft className='w-9 h-9 text-white' />
										</div>
									);
								}}
								renderArrowNext={(clickHandler) => {
									return (
										<div
											className='absolute top-0 bottom-0 -right-16 flex justify-center items-center p-3 opacity-50 hover:opacity-100 cursor-pointer z-20'
											onClick={clickHandler}
										>
											<BsChevronRight className='w-9 h-9 text-white' />
										</div>
									);
								}}
							>
								{media.map((item) => (
									<div
										key={item}
										className='relative w-full h-full overflow-hidden'
									>
										<Image
											src={item}
											alt={item}
											fill
											className='object-cover object-center'
											sizes='any'
										/>
									</div>
								))}
							</Carousel>
						</div>
					)}
				</div>
			)}
		</div>
	);
};
