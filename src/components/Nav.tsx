import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import LogoImg from '../../public/logo.png';

const Nav = ({
	mobileMenuOpen,
	navInView,
	onClickMobileMenu,
}: {
	onClickMobileMenu: () => void;
	mobileMenuOpen: boolean;
	navInView: boolean;
}) => {
	return (
		<nav className='container mx-auto flex py-[3.25rem] items-center px-4 text-white'>
			<div className='relative w-[6.47rem] h-[6.65rem]'>
				<Image
					className='object-contain'
					src={LogoImg}
					alt='Picture of 2 people holding hands while on skateboards'
					placeholder='blur'
					fill
				/>
			</div>
			<div className='mx-auto hidden lg:block'>
				<ul className='flex gap-x-8 font-normal text-[1.38rem] font-aeonik'>
					<li>
						<a href='#hero'>Home</a>
					</li>
					<li>
						<a href='#about-us'>About Us</a>
					</li>
					<li>
						<a href='#services'>Services</a>
					</li>
					<li>
						<a href='#testimonial'>Testimonials</a>
					</li>
				</ul>
			</div>
			<a
				href='#how-to-invest'
				className='py-4 px-[1.63rem] border border-white rounded-[6.3rem] font-normal text-[1.38rem] hover:bg-white hover:text-black hidden lg:block font-aeonik'
			>
				Contact us
			</a>
			<div
				className={clsx(
					'ml-auto lg:hidden fixed right-4 z-20',
					mobileMenuOpen && 'hidden',
					!navInView && 'top-4'
				)}
			>
				<button
					className={clsx('p-4', !navInView && 'bg-text')}
					onClick={onClickMobileMenu}
				>
					<svg
						width='20'
						height='16'
						viewBox='0 0 18 14'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<line
							x1='0.75'
							y1='1.25'
							x2='17.25'
							y2='1.25'
							stroke='white'
							strokeWidth='1.5'
							strokeLinecap='round'
						/>
						<line
							x1='0.75'
							y1='7.25'
							x2='17.25'
							y2='7.25'
							stroke='white'
							strokeWidth='1.5'
							strokeLinecap='round'
						/>
						<line
							x1='0.75'
							y1='13.25'
							x2='17.25'
							y2='13.25'
							stroke='white'
							strokeWidth='1.5'
							strokeLinecap='round'
						/>
					</svg>
					<div className='sr-only'>Menu</div>
				</button>
			</div>
		</nav>
	);
};

export default Nav;
