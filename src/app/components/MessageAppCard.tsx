'use client';

import { useState } from 'react';
import { BsChevronDown, BsChevronUp, BsPhone } from 'react-icons/bs';
import chat_info from '../../../public/messenger/chat_info.png';
import chat_screen from '../../../public/messenger/chat_screen.png';
import edit_info from '../../../public/messenger/edit_info.png';
import group_chat from '../../../public/messenger/group_chat.png';
import Image from 'next/image';
import Link from 'next/link';

export const MessageAppCard = () => {
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
						bg-gradient-to-tr from-green-700 to-green-400'
					>
						<BsPhone size={28} />
					</div>

					<div className='flex flex-col gap-2 justify-center'>
						<div className='w-full'>
							<h2 className='text-xl font-bold text-white'>Messenger App</h2>
							<p>Send and receive messages to other users, either individually or in group chats.</p>
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
								<li className='text-white text-lg font-semibold'>Pusher.js</li>
								<li className='text-white text-lg font-semibold'>Prisma</li>
								<li className='text-white text-lg font-semibold'>MongoDB</li>
							</ul>
						</div>
						<Link
							className='block mt-8'
							href='https://messenger-clone-ebon.vercel.app'
							target='_blank'
						>
							<button className='text-white bg-gradient-to-r from-green-700 to-green-400 hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium text-md rounded-lg px-5 py-2.5 text-center whitespace-nowrap'>
								View live project
							</button>
						</Link>
					</div>
					<div className='grid grid-cols-2 gap-4 w-full'>
						<div className='relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden'>
							<Image
								src={chat_screen}
								alt='Home screen of Airbnb clone app'
								fill
								className='object-cover object-center'
							/>
						</div>
						<div className='relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden'>
							<Image
								src={group_chat}
								alt='Home screen of Airbnb clone app'
								fill
								className='object-cover object-center'
							/>
						</div>
						<div className='relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden'>
							<Image
								src={edit_info}
								alt='Home screen of Airbnb clone app'
								fill
								className='object-cover object-center'
							/>
						</div>
						<div className='relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden'>
							<Image
								src={chat_info}
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
