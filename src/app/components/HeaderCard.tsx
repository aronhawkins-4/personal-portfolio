import Image from 'next/image';
import aron_at_desk from '../../../public/headshots/aron_at_desk.jpeg';
import { AiOutlineInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { VscMail } from 'react-icons/vsc';
import Link from 'next/link';

export const HeaderCard = () => {
	return (
		<div className='p-8 flex flex-col gap-2 relative w-full justify-center items-center rounded-2xl overflow-hidden shadow-[-.5px_1px_2px_rgba(203,213,225,.3)] z-10 bg-gradient-to-tr from-black to-gray-400/50'>
			<div className='flex flex-col md:flex-row justify-between items-center w-full'>
				<div className='w-16'></div>
				<div className='flex flex-col gap-2 items-center justify-center'>
					<div className='rounded-full w-48 h-48 relative'>
						<Image
							src={aron_at_desk}
							alt='Aron sitting at his desk'
							fill
							className='rounded-full object-cover'
							sizes='any'
						/>
					</div>
					<h1 className='text-4xl text-white font-bold mt-4 text-center'>Aron Hawkins</h1>
					<span className='text-xl text-gray-200 text-center'>Software Engineer & Front-End Developer</span>
				</div>

				<div className='flex md:flex-col gap-6 mt-4 md:mt-0 h-16 w-max md:h-full md:w-16 p-4 bg-gradient-to-b from-gray-500 to-gray-700 rounded-full justify-center'>
					<Link
						href='mailto:hawkins.aron@gmail.com'
						target='_blank'
					>
						<VscMail
							size={32}
							className='transition hover:scale-110'
						/>
					</Link>
					<Link
						href='https://github.com/aronhawkins-4'
						target='_blank'
					>
						<AiFillGithub
							size={32}
							className='transition hover:scale-110'
						/>
					</Link>
					<Link
						href='https://linkedin.com/in/aron-hawkins'
						target='_blank'
					>
						<AiFillLinkedin
							size={32}
							className='transition hover:scale-110'
						/>
					</Link>
					<Link
						href='https://instagram.com/aronhawkins'
						target='_blank'
					>
						<AiOutlineInstagram
							size={32}
							className='transition hover:scale-110'
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};
