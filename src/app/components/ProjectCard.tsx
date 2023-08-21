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
