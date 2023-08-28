'use client';

import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { BsChevronDown, BsChevronLeft, BsChevronRight, BsChevronUp } from 'react-icons/bs';
import { LiaTimesSolid } from 'react-icons/lia';
import cld from '../utils/Cloudinary';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link';
import { Url } from 'url';
import Image from 'next/image';
import { AppType } from '../types/types';
import Lightbox, { SlideImage } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

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
	const [showLightbox, setShowLightbox] = useState(false);
	let media;

	if (mediaLinks) {
		media = mediaLinks.map((url) => {
			return cld.image(url).resize(fill()).toURL();
		});
	}
	useEffect(() => {
		console.log(showLightbox);
	}, [showLightbox]);
	return (
		<div className='flex flex-col items-center'>
			<div
				className='py-4 px-8 flex flex-col gap-2 relative w-full lg:min-w-[600px] justify-center items-center rounded-2xl overflow-hidden shadow-[-.5px_1px_2px_rgba(203,213,225,.3)] z-10 cursor-pointer bg-gradient-to-tr from-black to-gray-400/50'
				onClick={() => {
					setIsOpen((current) => !current);
				}}
			>
				<div className='flex flex-col md:flex-row gap-4 w-full items-center'>
					{type && Icon && (
						<div
							className={`w-16 h-16 rounded-full flex justify-center items-center min-w-[64px]
								${type === AppType.Message && 'bg-gradient-to-tr from-green-700 to-green-400'} 
								${type === AppType.Airbnb && 'bg-gradient-to-tr from-rose-700 to-rose-400'} 
								${type === AppType.Vote && 'bg-gradient-to-tr from-sky-700 to-sky-400'} 
								${type === AppType.Ipsum && 'bg-gradient-to-tr from-purple-700 to-purple-400'}`}
						>
							<Icon size={28} />
						</div>
					)}

					<div className='flex flex-col gap-2 justify-center'>
						<div className='w-full'>
							<h2 className='text-xl font-bold text-white text-center md:text-left leading-6'>{title}</h2>
							<p className='text-center md:text-left leading-5 mt-2'>{description}</p>
						</div>
					</div>
					<div className='md:ml-auto flex items-center'>
						{!isOpen && <BsChevronDown size={24} />}
						{isOpen && <BsChevronUp size={24} />}
					</div>
				</div>
			</div>
			{isOpen && (
				<div className='p-8 w-[calc(100%-4px)] h-full border border-gray-700 border-t-0 rounded-b-xl flex  flex-col gap-8 lg:flex-row'>
					<div className='flex flex-col md:items-center gap-8'>
						<div>
							<h3 className='text-white text-2xl font-bold md:text-center lg:text-left'>Tech Stack</h3>
							<ul className='grid md:grid-cols-2 lg:flex lg:flex-col w-maxitems:center gap-2 mt-2'>
								{techStack &&
									techStack.map((tech) => (
										<li
											key={tech}
											className={`text-white text-sm font-light py-2 px-4 text-center rounded-full ${
												type === AppType.Message && 'bg-gradient-to-tr from-green-700/75 to-green-400/75'
											} 
									${type === AppType.Airbnb && 'bg-gradient-to-tr from-rose-700/75 to-rose-400/75'} 
									${type === AppType.Vote && 'bg-gradient-to-tr from-sky-700/75 to-sky-400/75'} 
									${type === AppType.Ipsum && 'bg-gradient-to-tr from-purple-700/75 to-purple-400/75'} `}
										>
											{tech}
										</li>
									))}
							</ul>
						</div>
						{link && (
							<Link
								className='text-center hidden lg:block'
								href={link as any as Url}
								target='_blank'
							>
								<button
									className={`text-white 
									${type === AppType.Message && 'bg-gradient-to-tr from-green-700 to-green-400'} 
									${type === AppType.Airbnb && 'bg-gradient-to-tr from-rose-700 to-rose-400'} 
									${type === AppType.Vote && 'bg-gradient-to-tr from-sky-700 to-sky-400'} 
									${type === AppType.Ipsum && 'bg-gradient-to-tr from-purple-700 to-purple-400'} 
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
								showThumbs={false}
								showStatus={false}
								className='relative w-4/5'
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
										onClick={() => setShowLightbox(true)}
									>
										<div className='relative w-full overflow-hidden h-0 pb-[56.25%] cursor-pointer'>
											<Image
												src={item}
												alt={item}
												fill
												className='object-cover object-center'
												sizes='any'
												loading='eager'
											/>
										</div>
									</div>
								))}
							</Carousel>
							<Lightbox
								close={() => setShowLightbox(false)}
								open={showLightbox}
								slides={media.map((item) => ({ src: item }))}
								render={{
									iconPrev: () => <BsChevronLeft size={24} />,
									iconNext: () => <BsChevronRight size={24} />,
									iconClose: () => <LiaTimesSolid size={24} />,
								}}
							/>
						</div>
					)}
					{link && (
						<Link
							className='block text-center lg:hidden'
							href={link as any as Url}
							target='_blank'
						>
							<button
								className={`text-white 
									${type === AppType.Message && 'bg-gradient-to-tr from-green-700 to-green-400'} 
									${type === AppType.Airbnb && 'bg-gradient-to-tr from-rose-700 to-rose-400'} 
									${type === AppType.Vote && 'bg-gradient-to-tr from-sky-700 to-sky-400'} 
									${type === AppType.Ipsum && 'bg-gradient-to-tr from-purple-700 to-purple-400'} 
									hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-800 font-medium text-md rounded-lg px-5 py-2.5 text-center whitespace-nowrap`}
							>
								View live project
							</button>
						</Link>
					)}
				</div>
			)}
		</div>
	);
};
