import Image, { StaticImageData } from 'next/image';
import React from 'react';

export interface TestimonialCardProps {
	avatar: StaticImageData;
	name: string;
	description: string;
}

const TestimonialCard = ({
	avatar,
	name,
	description,
}: TestimonialCardProps) => {
	return (
		<div className='rounded-2xl border-[0.038rem] [box-shadow:0px_8px_15px_rgba(0,0,0,0.08)] p-6 lg:p-[2.13rem] snap-center'>
			<div className='relative w-[5.25rem] h-[5.25rem]'>
				<Image
					className='object-cover'
					src={avatar}
					alt='Picture of jar of coins with a plant growing out of it'
					placeholder='blur'
					fill
				/>
			</div>
			<div className='font-normal text-sm lg:text-2xl my-6'>{name}</div>
			<div className='text-text font-normal text-sm lg:text-2xl lg:leading-[2.13rem] mb-6 lg:mb-[4.65rem]'>
				{description}
			</div>
		</div>
	);
};

export default TestimonialCard;
