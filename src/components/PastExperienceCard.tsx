import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

export interface PastExperienceCardProps {
	source: string | StaticImageData;
	wide?: boolean;
	description: string;
}

const PastExperienceCard = ({ source, wide }: PastExperienceCardProps) => {
	return (
		<div className='snap-center'>
			<div className='relative aspect-[20/27] overflow-hidden'>
				{typeof source !== 'string' ? (
					<Image
						className={clsx(
							'object-contain transition-transform hover:scale-100',
							wide ? 'scale-[1.75]' : 'scale-150'
						)}
						src={source}
						alt='Picture of jar of coins with a plant growing out of it'
						placeholder='blur'
						fill
					/>
				) : (
					<video
						className={clsx(
							'w-full h-full transition-transform hover:scale-100',
							wide ? 'scale-[3]' : 'scale-150'
						)}
						autoPlay
						loop
						muted
						controls
					>
						<source src={source} type='video/mp4' />
						Video not supported
					</video>
				)}
			</div>
		</div>
	);
};

export default PastExperienceCard;
