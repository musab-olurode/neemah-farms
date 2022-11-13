import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

export interface ServiceCardProps {
	name: string;
	description: string;
	image: StaticImageData;
	textFirst?: boolean;
}

const ServiceCard = ({
	name,
	description,
	image,
	textFirst,
}: ServiceCardProps) => {
	return (
		<div
			id={`${name.toLowerCase()}`}
			className='grid lg:grid-cols-2 mb-8 lg:mb-20 gap-x-[5.13rem]'
		>
			<div
				className={clsx(
					'grow relative h-[22rem] lg:h-auto',
					textFirst && 'lg:order-2'
				)}
			>
				<Image
					className='object-cover'
					src={image}
					alt={`Picture of ${name}`}
					placeholder='blur'
					fill
				/>
			</div>
			<div
				className={clsx('grow py-6 lg:py-[5.16rem]', textFirst && 'order-1')}
			>
				<p className='font-medium text-2xl lg:text-[2.5rem] mb-6'>{name}</p>
				<p className='text-text font-normal text-base lg:text-[1.51rem] lg:leading-10 font-aeonik'>
					{description}
				</p>
			</div>
		</div>
	);
};

export default ServiceCard;
