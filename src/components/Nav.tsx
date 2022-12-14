import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import LogoImg from '../../public/logo.png';
import LogoSMImg from '../../public/logo-sm.png';

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
		<nav className='container mx-auto flex pt-[3.25rem] items-center px-4 text-white'>
			<div className='relative lg:hidden w-[2.935rem] h-[3rem]'>
				<Image
					className='object-contain'
					src={LogoSMImg}
					alt='Logo'
					placeholder='blur'
					fill
				/>
			</div>
			<div className='hidden lg:block relative w-[6.47rem] h-[6.65rem]'>
				<Image
					className='object-contain'
					src={LogoImg}
					alt='Logo'
					placeholder='blur'
					fill
				/>
			</div>
			<div className='mx-auto hidden lg:block px-2'>
				<ul className='flex gap-x-8 font-normal text-[1.38rem] font-aeonik whitespace-nowrap'>
					<li>
						<a href='#hero' title='Home'>
							Home
						</a>
					</li>
					<li>
						<a href='#about-us' title='About us'>
							About us
						</a>
					</li>
					<li>
						<a href='#services' title='Services'>
							Services
						</a>
					</li>
					<li>
						<a href='#how-to-invest' title='Investment Opportunity'>
							Investment Opportunity
						</a>
					</li>
					<li>
						<a href='#past-experience' title='Past Experience'>
							Past Experience
						</a>
					</li>
				</ul>
			</div>
			<a
				href='#how-to-invest'
				className='py-4 px-[1.63rem] border border-white rounded-[6.3rem] font-normal text-[1.38rem] hover:bg-white hover:text-black hidden lg:block font-aeonik whitespace-nowrap'
			>
				Contact us
			</a>
			<div
				className={clsx(
					'ml-auto lg:hidden right-4 z-20',
					mobileMenuOpen && 'hidden',
					!navInView && 'fixed top-4'
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
