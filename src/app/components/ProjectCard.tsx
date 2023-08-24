'use client';

import { useState } from 'react';
import { IconType } from 'react-icons';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

interface ProjectCardProps {
	Icon?: IconType;
	title?: string;
	description?: string;
	color1?: string;
	color2?: string;
	type?: ProjectType;
}
enum ProjectType {
	Message = 1,
	Airbnb,
	Vote,
	_3D,
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ Icon, title = 'Project', description = 'Lorem Ipsum dolor sit amet', type }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			className='py-4 px-8 flex flex-col gap-2 relative w-full min-w-[600px] justify-center items-center rounded-2xl overflow-hidden  shadow-sm shadow-slate-300/20 z-10'
			onClick={() => {
				setIsOpen((current) => !current);
			}}
		>
			<div className='w-full h-full absolute top-0 left-0 bg-gradient-to-tr from-transparent to-gray-400 opacity-50 -z-10 blur-xl '></div>
			<div className='flex gap-4 w-full'>
				{type && Icon && (
					<div
						className={`w-16 h-16 rounded-full flex justify-center items-center 
						${type === ProjectType.Message && 'bg-gradient-to-tr from-green-700 to-green-400'} 
						${type === ProjectType.Airbnb && 'bg-gradient-to-tr from-rose-700 to-rose-400'} 
						${type === ProjectType.Vote && 'bg-gradient-to-tr from-sky-700 to-sky-400'} 
						${type === ProjectType._3D && 'bg-gradient-to-tr from-purple-700 to-purple-400'}`}
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
	);
};
// 'use client';

// import { useState } from 'react';
// import { BsChevronDown, BsChevronUp, BsChevronRight, BsChevronLeft, BsPhone } from 'react-icons/bs';
// import Image from 'next/image';
// import Link from 'next/link';
// import cld from '../utils/Cloudinary';
// import { fill } from '@cloudinary/url-gen/actions/resize';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// export const MessageAppCard = () => {
// 	const [isOpen, setIsOpen] = useState(false);
// 	const chatScreen = cld.image('chat_screen').resize(fill()).toURL();
// 	const chatInfo = cld.image('chat_info').resize(fill()).toURL();
// 	const editInfo = cld.image('edit_info').resize(fill()).toURL();
// 	const groupChat = cld.image('group_chat').resize(fill()).toURL();

// 	return (
// 		<div className='flex flex-col items-center'>
// 			<div
// 				className='py-4 px-8 flex flex-col gap-2 relative w-full lg:min-w-[600px] justify-center items-center rounded-2xl overflow-hidden shadow-[-.5px_1px_2px_rgba(203,213,225,.3)] z-10 cursor-pointer bg-gradient-to-tr from-transparent to-gray-400/50'
// 				onClick={() => {
// 					setIsOpen((current) => !current);
// 				}}
// 			>
// 				<div className='flex gap-4 w-full'>
// 					<div
// 						className='w-16 h-16 rounded-full flex justify-center items-center
// 						bg-gradient-to-tr from-green-700 to-green-400'
// 					>
// 						<BsPhone size={28} />
// 					</div>

// 					<div className='flex flex-col gap-2 justify-center'>
// 						<div className='w-full'>
// 							<h2 className='text-xl font-bold text-white'>Messenger App</h2>
// 							<p>Send and receive messages to other users, either individually or in group chats.</p>
// 						</div>
// 					</div>
// 					<div className='ml-auto flex items-center'>
// 						{!isOpen && <BsChevronDown size={24} />}
// 						{isOpen && <BsChevronUp size={24} />}
// 					</div>
// 				</div>
// 			</div>
// 			{isOpen && (
// 				<div className='p-8 w-[calc(100%-4px)] h-full border border-gray-700 border-t-0 rounded-b-xl flex gap-16'>
// 					<div className='flex flex-col'>
// 						<div>
// 							<h3 className='text-white text-2xl font-bold'>Tech Stack</h3>
// 							<ul className='flex flex-col list-disc pl-5'>
// 								<li className='text-white text-lg font-semibold'>Next.js</li>
// 								<li className='text-white text-lg font-semibold'>NextAuth</li>
// 								<li className='text-white text-lg font-semibold'>TypeScript</li>
// 								<li className='text-white text-lg font-semibold'>TailwindCSS</li>
// 								<li className='text-white text-lg font-semibold'>Pusher.js</li>
// 								<li className='text-white text-lg font-semibold'>Prisma</li>
// 								<li className='text-white text-lg font-semibold'>MongoDB</li>
// 							</ul>
// 						</div>
// 						<Link
// 							className='block mt-8'
// 							href='https://messenger-clone-ebon.vercel.app'
// 							target='_blank'
// 						>
// 							<button className='text-white bg-gradient-to-r from-green-700 to-green-400 hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium text-md rounded-lg px-5 py-2.5 text-center whitespace-nowrap'>
// 								View live project
// 							</button>
// 						</Link>
// 					</div>
// 					<div className='flex-grow flex justify-center'>
// 						<Carousel
// 							infiniteLoop
// 							showIndicators={false}
// 							swipeable
// 							showStatus={false}
// 							className='relative w-2/3'
// 							renderArrowPrev={(clickHandler) => {
// 								return (
// 									<div
// 										className='absolute top-0 bottom-0 -left-16 flex justify-center items-center p-3 opacity-50 hover:opacity-100 cursor-pointer z-20'
// 										onClick={clickHandler}
// 									>
// 										<BsChevronLeft className='w-9 h-9 text-white' />
// 									</div>
// 								);
// 							}}
// 							renderArrowNext={(clickHandler) => {
// 								return (
// 									<div
// 										className='absolute top-0 bottom-0 -right-16 flex justify-center items-center p-3 opacity-50 hover:opacity-100 cursor-pointer z-20'
// 										onClick={clickHandler}
// 									>
// 										<BsChevronRight className='w-9 h-9 text-white' />
// 									</div>
// 								);
// 							}}
// 						>
// 							<div className='relative w-full h-full overflow-hidden'>
// 								{!chatScreen && (
// 									<div className='flex items-center justify-center w-full h-full bg-gray-300 rounded sm:w-96 dark:bg-gray-700 absolute'>
// 										<svg
// 											className='w-10 h-10 text-gray-200 dark:text-gray-600'
// 											aria-hidden='true'
// 											xmlns='http://www.w3.org/2000/svg'
// 											fill='currentColor'
// 											viewBox='0 0 20 18'
// 										>
// 											<path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
// 										</svg>
// 										<span className='sr-only'>Loading...</span>
// 									</div>
// 								)}
// 								{chatScreen && (
// 									<Image
// 										src={chatScreen}
// 										alt='Home screen of Airbnb clone app'
// 										fill
// 										className='object-cover object-center'
// 										sizes='any'
// 									/>
// 								)}
// 							</div>
// 							<div className='relative w-full h-full overflow-hidden'>
// 								{!groupChat && (
// 									<div className='flex items-center justify-center w-full h-full bg-gray-300 rounded sm:w-96 dark:bg-gray-700 absolute'>
// 										<svg
// 											className='w-10 h-10 text-gray-200 dark:text-gray-600'
// 											aria-hidden='true'
// 											xmlns='http://www.w3.org/2000/svg'
// 											fill='currentColor'
// 											viewBox='0 0 20 18'
// 										>
// 											<path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
// 										</svg>
// 										<span className='sr-only'>Loading...</span>
// 									</div>
// 								)}
// 								{groupChat && (
// 									<Image
// 										src={groupChat}
// 										alt='Home screen of Airbnb clone app'
// 										fill
// 										className='object-cover object-center'
// 										sizes='any'
// 									/>
// 								)}
// 							</div>
// 							<div className='relative w-full h-full overflow-hidden'>
// 								{!editInfo && (
// 									<div className='flex items-center justify-center w-full h-full bg-gray-300 rounded sm:w-96 dark:bg-gray-700 absolute'>
// 										<svg
// 											className='w-10 h-10 text-gray-200 dark:text-gray-600'
// 											aria-hidden='true'
// 											xmlns='http://www.w3.org/2000/svg'
// 											fill='currentColor'
// 											viewBox='0 0 20 18'
// 										>
// 											<path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
// 										</svg>
// 										<span className='sr-only'>Loading...</span>
// 									</div>
// 								)}
// 								{editInfo && (
// 									<Image
// 										src={editInfo}
// 										alt='Home screen of Airbnb clone app'
// 										fill
// 										className='object-cover object-center'
// 										sizes='any'
// 									/>
// 								)}
// 							</div>
// 							<div className='relative w-full h-full overflow-hidden'>
// 								{!chatInfo && (
// 									<div className='flex items-center justify-center w-full h-full bg-gray-300 rounded sm:w-96 dark:bg-gray-700 absolute'>
// 										<svg
// 											className='w-10 h-10 text-gray-200 dark:text-gray-600'
// 											aria-hidden='true'
// 											xmlns='http://www.w3.org/2000/svg'
// 											fill='currentColor'
// 											viewBox='0 0 20 18'
// 										>
// 											<path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
// 										</svg>
// 										<span className='sr-only'>Loading...</span>
// 									</div>
// 								)}
// 								{chatInfo && (
// 									<Image
// 										src={chatInfo}
// 										alt='Home screen of Airbnb clone app'
// 										fill
// 										className='object-cover object-center'
// 										sizes='any'
// 									/>
// 								)}
// 							</div>
// 						</Carousel>
// 					</div>
// 				</div>
// 			)}
// 		</div>
// 	);
// };
