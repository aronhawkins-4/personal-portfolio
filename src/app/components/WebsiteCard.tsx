'use client';

import { useState } from 'react';
import { BsChevronDown, BsChevronLeft, BsChevronRight, BsChevronUp } from 'react-icons/bs';
import { LiaTimesSolid } from 'react-icons/lia';

import cld from '../utils/Cloudinary';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link';
import { Url } from 'url';
import Image from 'next/image';
import { WebsiteType } from '../types/types';
import Lightbox, { SlideImage } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface WebsiteCardProps {
	title?: string;
	description?: string;
	type?: WebsiteType;
	link?: string;
	mediaLinks?: string[];
}

export const WebsiteCard: React.FC<WebsiteCardProps> = ({ title = 'Project', description = 'Lorem Ipsum dolor sit amet', type, link, mediaLinks }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [showLightbox, setShowLightbox] = useState(false);
	let media;
	if (mediaLinks) {
		media = mediaLinks.map((url) => {
			return cld.image(url).resize(fill()).toURL();
		});
	}

	return (
		<div className='flex flex-col items-center'>
			<div
				className='py-4 px-8 flex flex-col gap-2 relative w-full lg:min-w-[600px] justify-center items-center rounded-2xl overflow-hidden shadow-[-.5px_1px_2px_rgba(203,213,225,.3)] z-10 cursor-pointer bg-gradient-to-tr from-black to-gray-600'
				onClick={() => {
					setIsOpen((current) => !current);
				}}
			>
				<div className='flex gap-4 w-full items-center'>
					{/* {type && (
						<div
							className={`w-4 h-4 rounded-full flex justify-center items-center 
								${type === WebsiteType.ecommerce && 'bg-gradient-to-tr from-green-700 to-green-400'} 
								${type === WebsiteType.business && 'bg-gradient-to-tr from-rose-700 to-rose-400'} 
								${type === WebsiteType.blog && 'bg-gradient-to-tr from-sky-700 to-sky-400'} 
								${type === WebsiteType.nonprofit && 'bg-gradient-to-tr from-purple-700 to-purple-400'}`}
						></div>
					)} */}

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
				<div className='p-8 w-full h-full border border-gray-800 border-t-0 rounded-b-xl flex flex-col-reverse gap-8 -mt-4'>
					<div className='flex justify-center'>
						{link && (
							<Link
								className='block'
								href={link as any as Url}
								target='_blank'
							>
								<button
									className={`text-white bg-gradient-to-r
									from-gray-400/25 to-gray-600 
									hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-800 font-medium text-md rounded-lg px-5 py-2.5 text-center whitespace-nowrap`}
								>
									View live site
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
										className='relative w-full h-0 pb-[56.25%] overflow-hidden cursor-pointer'
										onClick={() => setShowLightbox(true)}
									>
										<Image
											src={item}
											alt={item}
											fill
											className='object-cover object-center absolute w-full h-full'
											sizes='any'
											loading='eager'
										/>
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
				</div>
			)}
		</div>
	);
};
