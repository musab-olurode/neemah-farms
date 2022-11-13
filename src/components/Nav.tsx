import React from 'react';

const Nav = ({ onClickMobileMenu }: { onClickMobileMenu: () => void }) => {
	return (
		<nav className='container mx-auto flex py-[3.25rem] items-center px-4 text-white'>
			<div className='font-medium text-[2.5rem]'>N & Co</div>
			<div className='mx-auto hidden lg:block'>
				<ul className='flex gap-x-8 font-normal text-[1.38rem]'>
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
				className='py-4 px-[1.63rem] border border-white rounded-[6.3rem] font-normal text-[1.38rem] hover:bg-white hover:text-black hidden lg:block'
			>
				Contact us
			</a>
			<div className='ml-auto lg:hidden relative'>
				<button className='p-4 z-[999]' onClick={onClickMobileMenu}>
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
							stroke-width='1.5'
							stroke-linecap='round'
						/>
						<line
							x1='0.75'
							y1='7.25'
							x2='17.25'
							y2='7.25'
							stroke='white'
							stroke-width='1.5'
							stroke-linecap='round'
						/>
						<line
							x1='0.75'
							y1='13.25'
							x2='17.25'
							y2='13.25'
							stroke='white'
							stroke-width='1.5'
							stroke-linecap='round'
						/>
						<div className='sr-only'>Menu</div>
					</svg>
				</button>
			</div>
		</nav>
	);
};

export default Nav;
