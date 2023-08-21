'use client';

import { useState } from 'react';
import { AboutContainer } from './AboutContainer';
import { WorkContainer } from './WorkContainer';
import { BgGradient } from './BgGradient';

export const ContentCard = () => {
	const [buttonToggle, setButtonToggle] = useState(false);
	return (
		<div className='flex flex-col gap-4 w-full items-center'>
			<div className='p-2 w-96 relative flex justify-between items-center rounded-2xl overflow-hidden  shadow-sm shadow-slate-300/20 z-10 bg-gradient-to-tr from-transparent to-gray-400/50'>
				<div
					className={`w-[50%] absolute top-1/2 ${!buttonToggle && 'left-1'} ${
						buttonToggle && 'left-[11.75rem]'
					} h-5/6 -translate-y-1/2 bg-white rounded-xl mix-blend-difference pointer-events-none transition-all`}
				></div>
				<div className='w-full'>
					<button
						className='text-white text-lg w-full text-center'
						onClick={() => setButtonToggle(false)}
					>
						About Me
					</button>
				</div>
				<div className='w-full'>
					<button
						className='text-white text-lg w-full text-center'
						onClick={() => setButtonToggle(true)}
					>
						My Work
					</button>
				</div>
			</div>

			{!buttonToggle && <AboutContainer />}
			{buttonToggle && <WorkContainer />}
		</div>
	);
};
