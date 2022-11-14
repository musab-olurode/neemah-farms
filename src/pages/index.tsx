import { CSSProperties, useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Nav from '../components/Nav';
import aboutUs1Img from '../../public/about-us-1.png';
import aboutUs2Img from '../../public/about-us-2.png';
import SoyaImg from '../../public/soya.png';
import RiceImg from '../../public/rice.png';
import SorghumImg from '../../public/sorghum.png';
import MaizeImg from '../../public/maize.png';
import CatFishImg from '../../public/cat-fish.png';
import ServiceCard from '../components/ServiceCard';
import InvestmentImg from '../../public/investment.png';
import WhyInvestImg from '../../public/why-invest.png';
import TestimonialAvatarImg from '../../public/testimonial-avatar.png';
import TestimonialCard from '../components/TestimonialCard';
import clsx from 'clsx';
import Footer from '../components/Footer';
import { InView } from 'react-intersection-observer';

const SERVICES = [
	{
		name: 'Soya',
		description:
			'Soya Is a grain legume that can either be used directly for food or processed into milk, cooking oil, infant weaning food and other range of products because of its high protein content. The global demand for this protein rich crop nears 11 million tons while Africa’s annual expenditure is just about 619 thousand tons. Neemah Integrated Farms plans 100 hectares with an averagely estimated 150 metric tons annually.',
		image: SoyaImg,
	},
	{
		name: 'Rice',
		description:
			'Rice Is a cereal crop consumed in virtually every part of the country and world-wide. Nigeria is the highest rice-producing country in West Africa with around 3 million tons per annum but also the highest rice importing country globally due to her population. Neemah Integrated Farms plans 20 hectares with an averagely estimated 100 metric tons annually.',
		image: RiceImg,
	},
	{
		name: 'Sorghum',
		description:
			'Sorghum Is the most widely cultivated cereal crop, popularly called guinea corn. It has a lot health benefits owing to its high iron and magnesium levels and with increasing demand by breweries, bakeries, livestock farmers and manufacturing companies, great opportunities abound for investors in sorghum farming. Neemah Integrated Farms plans 40 hectares with an averagely estimated 80 metric tons annually.',
		image: SorghumImg,
	},
	{
		name: 'Maize',
		description:
			'Maize Is an essential diet consumed in Nigeria at least once every day, either directly or through its multiple derivatives. In 2018, Africa produced around 75 million tons, accounting for 7.5% of global maize production. And with 33 million tons, Nigeria is the largest African producer. However, due to exponential increase in the number of Nigerian poultry farming, 60% of maize produced in Nigeria are used for poultry feed, making it more expensive and scarce. Neemah Integrated Farms plans 40 hectares with an averagely estimated 160 metric tons annually.',
		image: MaizeImg,
	},
	{
		name: 'Cat Fish',
		description:
			'Cat Fish, fish farming is the fastest-growing animal husbandry industry in Nigeria and many parts of the world. In Nigeria, the demand for fish is 2.66 million metric tons and only 1.4 million tons is available of which the country imports over 500 thousand metric tons annually. Neemah Integrated Farms plans 6 massive ponds with an averagely estimated 150 metric tons twice annually.',
		image: CatFishImg,
	},
];

const TESTIMONIALS = [
	{
		avatar: TestimonialAvatarImg,
		name: 'Fatima Elmagnifico',
		description:
			'Neemah is an amazing organization, they are the best when it comes to this kinda job ',
	},
	{
		avatar: TestimonialAvatarImg,
		name: 'Fatima Elmagnifico',
		description:
			'Neemah is an amazing organization, they are the best when it comes to this kinda job ',
	},
	{
		avatar: TestimonialAvatarImg,
		name: 'Fatima Elmagnifico',
		description:
			'Neemah is an amazing organization, they are the best when it comes to this kinda job ',
	},
	{
		avatar: TestimonialAvatarImg,
		name: 'Fatima Elmagnifico',
		description:
			'Neemah is an amazing organization, they are the best when it comes to this kinda job ',
	},
	{
		avatar: TestimonialAvatarImg,
		name: 'Fatima Elmagnifico',
		description:
			'Neemah is an amazing organization, they are the best when it comes to this kinda job ',
	},
];

export default function Home() {
	const [services, setServices] = useState(SERVICES.slice(0, 3));
	const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [navInView, setNavInView] = useState(true);
	const maxScrollWidth = useRef(0);
	const carousel = useRef<HTMLDivElement>(null);

	const moveToPreviousTestimonialItem = () => {
		if (currentTestimonialIndex > 0) {
			setCurrentTestimonialIndex((prevState) => prevState - 1);
		}
	};

	const moveToNextTestimonialItem = () => {
		if (
			carousel.current !== null &&
			carousel.current.offsetWidth * currentTestimonialIndex <=
				maxScrollWidth.current
		) {
			setCurrentTestimonialIndex((prevState) => prevState + 1);
		}
	};

	const isDisabled = (direction: 'prev' | 'next') => {
		if (direction === 'prev') {
			return currentTestimonialIndex <= 0;
		}

		if (direction === 'next' && carousel.current !== null) {
			return (
				carousel.current.offsetWidth * currentTestimonialIndex >=
				maxScrollWidth.current
			);
		}

		return false;
	};

	useEffect(() => {
		if (carousel !== null && carousel.current !== null) {
			carousel.current.scrollLeft =
				carousel.current.offsetWidth * currentTestimonialIndex;
		}
	}, [currentTestimonialIndex]);

	useEffect(() => {
		maxScrollWidth.current = carousel.current
			? carousel.current.scrollWidth - carousel.current.offsetWidth
			: 0;
	}, []);

	return (
		<>
			<Head>
				<title>Neemah Farms - Operation feed the Nation</title>
				<meta
					name='description'
					content='Registered Nigerian Limited
								liability company domiciled in Kwara state with operations of
								fish and crop farming for Nigerian consumption and export
								purposes'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div
				className={clsx(
					'fixed h-screen w-screen z-10 bg-white flex items-center justify-center transition-all scale-0 rounded-full rounded-tr-none origin-[calc(100%-2.25rem)_4.75rem]',
					mobileMenuOpen && ' scale-100 rounded-none'
				)}
			>
				<button
					className={clsx(
						'absolute p-4 top-[3.25rem] right-3',
						!navInView && 'top-4'
					)}
					onClick={() => setMobileMenuOpen(false)}
				>
					<svg
						width='30'
						height='30'
						viewBox='0 0 16 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M11.9375 3.35951L8.00002 7.29701L4.06252 3.35951C3.95818 3.26584 3.84102 3.21901 3.71102 3.21901C3.58102 3.21901 3.46635 3.26851 3.36702 3.36751C3.26768 3.46651 3.21818 3.58117 3.21852 3.71151C3.21885 3.84184 3.26568 3.95901 3.35902 4.06301L7.29652 8.00051L3.35902 11.938C3.22368 12.0733 3.17935 12.2348 3.22602 12.4225C3.27268 12.6102 3.38735 12.7273 3.57002 12.774C3.75268 12.8207 3.91668 12.7763 4.06202 12.641L7.99952 8.70351L11.937 12.641C12.0413 12.7347 12.1585 12.7815 12.2885 12.7815C12.4185 12.7815 12.5332 12.732 12.6325 12.633C12.7318 12.534 12.7813 12.4193 12.781 12.289C12.7807 12.1587 12.7338 12.0415 12.6405 11.9375L8.70302 8.00001L12.6405 4.06251C12.7758 3.92717 12.8202 3.76567 12.7735 3.57801C12.7268 3.39034 12.6097 3.27317 12.422 3.22651C12.2343 3.17984 12.0728 3.22417 11.9375 3.35951Z'
							fill='#000'
							fillOpacity='0.96'
						/>
					</svg>
				</button>
				<ul className='flex flex-col gap-y-8 font-normal text-[1.38rem] text-center text-black'>
					<li className='transition-all hover:-translate-y-2 hover:scale-105'>
						<a href='#hero' onClick={() => setMobileMenuOpen(false)}>
							Home
						</a>
					</li>
					<li className='transition-all hover:-translate-y-2 hover:scale-105'>
						<a href='#about-us' onClick={() => setMobileMenuOpen(false)}>
							About Us
						</a>
					</li>
					<li className='transition-all hover:-translate-y-2 hover:scale-105'>
						<a href='#services' onClick={() => setMobileMenuOpen(false)}>
							Services
						</a>
					</li>
					<li className='transition-all hover:-translate-y-2 hover:scale-105'>
						<a href='#testimonial' onClick={() => setMobileMenuOpen(false)}>
							Testimonials
						</a>
					</li>
				</ul>
			</div>

			<div
				id='hero'
				className='[background-image:url("/hero-bg.png")] bg-no-repeat bg-cover bg-center'
			>
				<InView onChange={(inView) => setNavInView(inView)}>
					<Nav
						mobileMenuOpen={mobileMenuOpen}
						navInView={navInView}
						onClickMobileMenu={() => setMobileMenuOpen(true)}
					/>
				</InView>
				<div className='container mx-auto text-center mt-[7.75rem] lg:mt-[13.44rem] pb-[19.15rem] text-white px-4 lg:px-0'>
					<div className='flex flex-col gap-y-10 lg:w-1/2 mx-auto items-center'>
						<h1 className='text-[1.7rem] lg:text-[4.25rem] lg:leading-[5.25rem] font-bold animate-reveal'>
							Start to contribute with a reliable farmer
						</h1>
						<h6 className='text-base lg:text-3xl font-normal animate-reveal-1 font-aeonik'>
							Operation feed the Nation
						</h6>
						<a
							href='#about-us'
							className='py-4 px-[1.63rem] border border-white bg-white text-black rounded-[6.3rem] w-fit font-normal text-[0.88rem] lg:text-[1.38rem] hover:bg-transparent hover:text-white animate-reveal-2 font-aeonik'
						>
							Learn more
						</a>
					</div>
				</div>
			</div>

			<div className='pt-24'>
				<section id='about-us' className='container mx-auto px-4 lg:px-0'>
					<p className='text-black font-medium text-[1.565rem] lg:text-[3.5rem]'>
						About us
					</p>
					<div className='grid lg:grid-cols-2 gap-x-[4.38rem] mt-6'>
						<div>
							<p className='text-text font-normal text-base lg:text-[1.57rem] lg:leading-10 font-aeonik'>
								Neemah & Co Integrated Farms Ltd is a registered Nigeria Limited
								liability company domiciled in Kwara state with operations of
								fish and crop farming for Nigerian consumption and export
								purposes.
							</p>
							<div className='w-full relative  h-[16.8rem] lg:h-[29.45rem] mt-6 lg:mt-[4.5rem]'>
								<Image
									className='object-cover'
									src={aboutUs1Img}
									alt='Picture of a woman in a swing'
									placeholder='blur'
									fill
								/>
							</div>
						</div>
						<div className='hidden lg:block'>
							<div className='w-full relative h-[16.8rem] lg:h-[36.82rem] mt-5'>
								<Image
									className='object-cover'
									src={aboutUs2Img}
									alt='Picture of 2 people holding hands while on skateboards'
									placeholder='blur'
									fill
								/>
							</div>
						</div>
					</div>
				</section>

				<section
					id='services'
					className='container mx-auto mt-16 lg:mt-24 px-4 lg:px-0'
				>
					<p className='text-black font-medium text-[1.565rem] lg:text-[3.5rem] text-center mb-4 lg:mb-[4.5rem]'>
						Our services
					</p>

					<div className='transition-all'>
						{services.map((service, index) => (
							<ServiceCard
								key={`service-${index}`}
								{...service}
								textFirst={index % 2 !== 0}
							/>
						))}
					</div>

					<div className='text-center'>
						{services.length === 3 ? (
							<button
								className='bg-primary text-white py-4 px-[1.63rem] rounded-[6.3rem] font-normal text-[0.88rem] lg:text-[1.38rem] hover:border hover:border-primary hover:bg-transparent hover:text-primary font-aeonik'
								onClick={() => setServices(SERVICES)}
							>
								Show all
							</button>
						) : (
							<button
								className='bg-primary text-white py-4 px-[1.63rem] rounded-[6.3rem] font-normal text-[0.88rem] lg:text-[1.38rem] hover:border hover:border-primary hover:bg-transparent hover:text-primary font-aeonik'
								onClick={() => setServices(SERVICES.slice(0, 3))}
							>
								Show less
							</button>
						)}
					</div>
				</section>

				<section className='container mx-auto mt-10 lg:mt-[5.5rem] grid lg:grid-cols-2 px-4 lg:px-0'>
					<div className='lg:my-[3.41rem]'>
						<p className='font-medium text-[1.565rem] lg:text-[3.5rem]'>
							Investment offerings
						</p>
						<div className='text-text font-normal text-base lg:text-[2rem] lg:leading-[3rem] mt-6 font-aeonik'>
							200 million naira investment opportunity with over 70% annual ROI.
							(Minimum investment 1 Million naira)
						</div>
					</div>
					<div className='relative h-[20rem] lg:h-auto'>
						<Image
							className='object-contain lg:object-fill'
							src={InvestmentImg}
							alt='Picture of multiple stacks of coins'
							placeholder='blur'
							fill
						/>
					</div>
				</section>

				<section className='mt-24 bg-tundora'>
					<div className='container mx-auto text-white py-14 px-4 lg:px-0'>
						<p className='text-center text-[1.565rem] lg:text-[3.5rem] font-medium'>
							Why should you invest?
						</p>
						<div className='grid lg:grid-cols-2 lg:gap-x-[7.57rem] mt-20 px-4 lg:px-0'>
							<ol className='list-decimal flex flex-col gap-y-6 font-normal text-base lg:text-2xl lg:leading-8 font-aeonik'>
								<li>
									It&apos;s an ethical investment with very high Return On
									Investment (ROI). Let&apos;s your savings work for you and not
									the Banks.
								</li>
								<li>
									With about 8 years of farming experience, we are good at what
									we do. Generating over 70% ROI through Fish and Grain farming.
								</li>
								<li>
									Possibility of invested capital plus total profits recovery
									after 1 year (T&C apply).
								</li>
								<li>
									Increasing Nigeria&apos;s food security and further boosting
									of the GDP.
								</li>
								<li>
									Job creation for hundreds of Nigerians in the localities.
								</li>
							</ol>
							<div className='relative h-[20rem] lg:h-auto mt-8 lg:mt-0'>
								<Image
									className='object-cover'
									src={WhyInvestImg}
									alt='Picture of jar of coins with a plant growing out of it'
									placeholder='blur'
									fill
								/>
							</div>
						</div>
					</div>
				</section>

				<section
					id='how-to-invest'
					className='container mx-auto py-10 lg:py-24 px-4 lg:px-0'
				>
					<p className='text-center text-[1.565rem] lg:text-[3.5rem] font-medium'>
						How do you invest ?
					</p>
					<p className='text-center text-text font-normal text-base lg:text-[1.57rem] mt-4 lg:mt-6 font-aeonik'>
						Payments should be made to Neemah & Co Integrated Farms Ltd. <br />{' '}
						Account as shown below:
					</p>

					<div className='grid lg:grid-cols-2 mt-20'>
						<div className='flex mx-auto lg:mx-0'>
							<span className='bg-primary rounded-full text-white text-[1.1rem] lg:text-[1.75rem] w-[2.3rem] h-[2.3rem] lg:w-[3.625rem] lg:h-[3.625rem] flex justify-center items-center mr-[1.38rem] lg:mr-[3.875rem]'>
								1
							</span>
							<ul className='flex flex-col gap-y-[1.88rem]'>
								<li className='flex flex-col gap-y-[0.375rem]'>
									<span className='text-black font-medium text-base lg:text-[1.75rem]'>
										Account number:
									</span>
									<span className='text-text font-normal text-[0.95rem] lg:text-[1.57rem] font-aeonik'>
										0009511763
									</span>
								</li>
								<li className='flex flex-col gap-y-[0.375rem]'>
									<span className='text-black font-medium text-base lg:text-[1.75rem]'>
										Bank name:
									</span>
									<span className='text-text font-normal text-[0.95rem] lg:text-[1.57rem] font-aeonik'>
										Jaiz bank
									</span>
								</li>
								<li className='flex flex-col gap-y-[0.375rem]'>
									<span className='text-black font-medium text-base lg:text-[1.75rem]'>
										Account name:
									</span>
									<span className='text-text font-normal text-[0.95rem] lg:text-[1.57rem] font-aeonik'>
										Neemah&Co. Integrated farms Ltd.
									</span>
								</li>
							</ul>
						</div>
						<div className='flex mt-10 lg:mt-0 mx-auto lg:mx-0'>
							<span className='bg-primary rounded-full text-white text-[1.1rem] lg:text-[1.75rem] w-[2.3rem] h-[2.3rem] lg:w-[3.625rem] lg:h-[3.625rem] flex justify-center items-center mr-[1.38rem] lg:mr-[3.875rem]'>
								2
							</span>
							<ul className='flex flex-col gap-y-[1.88rem]'>
								<li className='flex flex-col gap-y-[0.375rem]'>
									<span className='text-black font-medium text-base lg:text-[1.75rem]'>
										Account number:
									</span>
									<span className='text-text font-normal text-[0.95rem] lg:text-[1.57rem] font-aeonik'>
										1000411658
									</span>
								</li>
								<li className='flex flex-col gap-y-[0.375rem]'>
									<span className='text-black font-medium text-base lg:text-[1.75rem]'>
										Bank name:
									</span>
									<span className='text-text font-normal text-[0.95rem] lg:text-[1.57rem] font-aeonik'>
										Lotus Bank
									</span>
								</li>
								<li className='flex flex-col gap-y-[0.375rem]'>
									<span className='text-black font-medium text-base lg:text-[1.75rem]'>
										Account name:
									</span>
									<span className='text-text font-normal text-[0.95rem] lg:text-[1.57rem] font-aeonik'>
										Neemah&Co. Integrated farms Ltd.
									</span>
								</li>
							</ul>
						</div>
					</div>

					<div className='text-center mt-[4.5rem] font-normal text-base lg:text-[1.57rem]'>
						<p className='text-text font-aeonik leading-9'>
							Evidence of payments should be forwarded to Neemah Integrated
							farms <br /> Whatsapp contact{' '}
							<a
								className='text-black font-medium  font-space-grotesk'
								href='tel:07036663329'
							>
								07036663329
							</a>
						</p>
					</div>
				</section>

				<section
					id='testimonial'
					className='container mx-auto pb-16 lg:pb-[10.15rem] px-4 lg:px-0'
				>
					<div className='flex justify-between'>
						<div className='text-[1.565rem] lg:text-[3.5rem] font-medium'>
							Our past experience
						</div>
						<div className='hidden lg:flex'>
							<button
								className='bg-primary rounded-full text-white text-[1.75rem] w-[3.625rem] h-[3.625rem] flex justify-center items-center mr-8 disabled:bg-text'
								disabled={isDisabled('prev')}
								onClick={moveToPreviousTestimonialItem}
							>
								<svg
									width='25'
									height='25'
									viewBox='0 0 16 16'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M9.5155 2.32802L4.3435 7.65602C4.24984 7.74969 4.203 7.86169 4.203 7.99202C4.203 8.12235 4.24984 8.23952 4.3435 8.34352L9.5155 13.6715C9.60917 13.7549 9.7185 13.7965 9.8435 13.7965C9.9685 13.7965 10.0778 13.7497 10.1715 13.656C10.2652 13.5624 10.312 13.453 10.312 13.328C10.312 13.203 10.2652 13.0937 10.1715 13L5.2965 8.00002L10.1715 3.00002C10.2652 2.90636 10.312 2.79702 10.312 2.67202C10.312 2.54702 10.2652 2.43769 10.1715 2.34402C10.0778 2.25036 9.9685 2.20352 9.8435 2.20352C9.7185 2.20352 9.60917 2.24519 9.5155 2.32852V2.32802Z'
										fill='#fff'
										fillOpacity='0.96'
									/>
								</svg>
								<div className='sr-only'>Previous</div>
							</button>
							<button
								className='bg-primary rounded-full text-white text-[1.75rem] w-[3.625rem] h-[3.625rem] flex justify-center items-center disabled:bg-text'
								disabled={isDisabled('next')}
								onClick={moveToNextTestimonialItem}
							>
								<svg
									width='25'
									height='25'
									viewBox='0 0 16 16'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M5.328 2.32798C5.23433 2.43232 5.1875 2.54698 5.1875 2.67198C5.1875 2.79698 5.23433 2.90632 5.328 2.99998L10.203 7.99998L5.328 13C5.23433 13.0937 5.1875 13.203 5.1875 13.328C5.1875 13.453 5.23433 13.5623 5.328 13.656C5.42167 13.7497 5.531 13.7965 5.656 13.7965C5.781 13.7965 5.89033 13.7548 5.984 13.6715L11.156 8.34348C11.2497 8.24982 11.2965 8.13515 11.2965 7.99948C11.2965 7.86382 11.2497 7.74915 11.156 7.65548L5.984 2.32748C5.89033 2.24415 5.781 2.20248 5.656 2.20248C5.531 2.20248 5.42167 2.24415 5.328 2.32748V2.32798Z'
										fill='#fff'
										fillOpacity='0.96'
									/>
								</svg>
								<div className='sr-only'>Next</div>
							</button>
						</div>
					</div>

					<div
						ref={carousel}
						style={{ ['--total' as string]: TESTIMONIALS.length }}
						className='mt-6 lg:mt-[4.5rem] overflow-x-hidden snap-x snap-mandatory touch-pan-x grid gap-x-[4.75rem] [grid-template-columns:repeat(var(--total),calc(100%))] lg:[grid-template-columns:repeat(var(--total),calc(50%-4.75rem/2))] pb-5'
					>
						{TESTIMONIALS.map((testimonial, index) => (
							<TestimonialCard key={`testimonial-${index}`} {...testimonial} />
						))}
					</div>

					<div className='flex lg:hidden justify-center'>
						<button
							className='bg-primary rounded-full text-white w-[1.65rem] h-[1.65rem] lg:w-[3.625rem] lg:h-[3.625rem] flex justify-center items-center mr-8 disabled:bg-text'
							disabled={isDisabled('prev')}
							onClick={moveToPreviousTestimonialItem}
						>
							<svg
								width='16'
								height='16'
								viewBox='0 0 16 16'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M9.5155 2.32802L4.3435 7.65602C4.24984 7.74969 4.203 7.86169 4.203 7.99202C4.203 8.12235 4.24984 8.23952 4.3435 8.34352L9.5155 13.6715C9.60917 13.7549 9.7185 13.7965 9.8435 13.7965C9.9685 13.7965 10.0778 13.7497 10.1715 13.656C10.2652 13.5624 10.312 13.453 10.312 13.328C10.312 13.203 10.2652 13.0937 10.1715 13L5.2965 8.00002L10.1715 3.00002C10.2652 2.90636 10.312 2.79702 10.312 2.67202C10.312 2.54702 10.2652 2.43769 10.1715 2.34402C10.0778 2.25036 9.9685 2.20352 9.8435 2.20352C9.7185 2.20352 9.60917 2.24519 9.5155 2.32852V2.32802Z'
									fill='#fff'
									fillOpacity='0.96'
								/>
							</svg>
							<div className='sr-only'>Previous</div>
						</button>
						<button
							className='bg-primary rounded-full text-white w-[1.65rem] h-[1.65rem] lg:w-[3.625rem] lg:h-[3.625rem] flex justify-center items-center disabled:bg-text'
							disabled={isDisabled('next')}
							onClick={moveToNextTestimonialItem}
						>
							<svg
								width='16'
								height='16'
								viewBox='0 0 16 16'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M5.328 2.32798C5.23433 2.43232 5.1875 2.54698 5.1875 2.67198C5.1875 2.79698 5.23433 2.90632 5.328 2.99998L10.203 7.99998L5.328 13C5.23433 13.0937 5.1875 13.203 5.1875 13.328C5.1875 13.453 5.23433 13.5623 5.328 13.656C5.42167 13.7497 5.531 13.7965 5.656 13.7965C5.781 13.7965 5.89033 13.7548 5.984 13.6715L11.156 8.34348C11.2497 8.24982 11.2965 8.13515 11.2965 7.99948C11.2965 7.86382 11.2497 7.74915 11.156 7.65548L5.984 2.32748C5.89033 2.24415 5.781 2.20248 5.656 2.20248C5.531 2.20248 5.42167 2.24415 5.328 2.32748V2.32798Z'
									fill='#fff'
									fillOpacity='0.96'
								/>
							</svg>
							<div className='sr-only'>Next</div>
						</button>
					</div>
				</section>
			</div>

			<Footer services={SERVICES} setServices={setServices} />
		</>
	);
}
