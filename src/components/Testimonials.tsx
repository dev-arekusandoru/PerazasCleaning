import React from 'react';
import { Container } from '@/components/Container';

export const Testimonials = () => {
	let set = Math.round(Math.random() * 2) + 1;
	return (
		<Container>
			<div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-10 overflow-scroll'>
				{set === 1 && (
					<>
						<Testimonial name='Chris Sams'>
							I have been a customer for over five years. This
							service is very reliable and does{' '}
							<Mark>excellent work.</Mark>
							They work with my needs, and I trust my home in the
							care of Peraza&apos;s services. I can highly
							recommend this service for
							<Mark>dependability</Mark> and{' '}
							<Mark>trustworthiness.</Mark>
						</Testimonial>
						<Testimonial name='Dylan Ambrose'>
							I have used Peraza Cleaning Services since 2017 and
							only have positive things to say. They are
							<Mark>professional,</Mark> <Mark>efficient,</Mark>{' '}
							<Mark>thorough</Mark> and flexible with scheduling.
							I have recommended the company to friends with{' '}
							<Mark>zero reservations.</Mark>
						</Testimonial>
					</>
				)}
				{set === 2 && (
					<>
						<Testimonial name='Eugenia Mays' title='Olney, MD'>
							On behalf of the Board of Directors and the members
							of the Thomas Choice Gardens Community, I would like
							to express the Association&apos;s satisfaction and
							pleasure the company&apos;s{' '}
							<Mark>excellent service.</Mark> The staff is
							thorough, pleasant, on time and{' '}
							<Mark>diligent in their work.</Mark>
							The Thomas Choice Gardens Community looks forward to
							working with your company for many years to come.
						</Testimonial>
						<Testimonial name='Monica D.'>
							I love supporting small businesses like this one! I
							ordered Peraza&apos;s services because I was in need
							of deep cleaning after a roomate left. The service
							was <Mark>fast,</Mark>
							<Mark>friendly,</Mark>{' '}
							<Mark>appropriately priced,</Mark> and as my friend
							said, you could eat off the floor it was so clean! I
							generally do most of my own housekeeping, but when
							my life gets hectic I always think of Peraza&apos;s
							Cleaning company first. I have recommended this
							business to a number of friends and everyone that
							has hired this company has given{' '}
							<Mark>nothing but positive responses.</Mark>
						</Testimonial>
						<Testimonial name='Herbert D.' title='WMCCAI MEMBER'>
							I have had a <Mark>great experience</Mark> with
							Peraza&apos;s Cleaning Services. As a community
							association manager for several years, they have
							been the most
							<Mark>attentive and dependable</Mark> cleaning
							service ever. Not only do they provide excellent
							quality of professional services but they are also
							able to handle any size commercial or residential
							clients with reliability. I highly encourage anyone
							to do business with Peraza&apos;s Cleaning Services
							for their home or business.
						</Testimonial>
					</>
				)}
				{set === 3 && (
					<>
						<Testimonial name='Belle Scheibner'>
							Peraza&apos;s Cleaning Services is{' '}
							<Mark>very thorough.</Mark>
							Whether working alone or with a partner, Lurvin (the
							owner) is so conscientious that she cleans areas
							that other services (or I myself) might overlook.
							This service is great because of the{' '}
							<Mark>personal attention</Mark> and thoroughness
							your home gets with Peraza&apos;s Cleaning Service.
						</Testimonial>
						<Testimonial name='Paul Wiesenfield'>
							Lurvin Peraza has worked for me for more than 5
							years. In this period of time she has demonstrated a
							<Mark>careful attitude</Mark> towards things of
							value and dedication to doing her job thoroughly. I
							trust her to do a cleaning job{' '}
							<Mark>for anyone</Mark> whether in the office or the
							home.
						</Testimonial>
					</>
				)}
				{(set === 1 || set === 3) && (
					<>
						<Testimonial name='Craig Whitt'>
							Peraza&apos;s Cleaning Services has been serving my
							condominium for several years. I{' '}
							<Mark>highly recommend</Mark> this company.
						</Testimonial>
					</>
				)}
			</div>
		</Container>
	);
};

interface TestimonialProps {
	name: string;
	title?: string;
	children: React.ReactNode;
	extraWide?: boolean;
}
interface AvatarProps {
	name: string;
	title?: string;
}

function Testimonial(props: TestimonialProps) {
	return (
		<div className='flex flex-col lg:col-span-2 xl:col-auto justify-between w-full h-full bg-gray-100 p-5 md:py-9 md:px-10 rounded-2xl dark:bg-trueGray-800'>
			<p className='text-md md:text-xl leading-normal '>
				{props.children ? props.children : props.children}
			</p>

			<Avatar name={props.name} title={props.title} />
		</div>
	);
}

function Avatar(props: Readonly<AvatarProps>) {
	return (
		<div className='flex items-center mt-8 space-x-3'>
			{/* <div className='flex-shrink-0 overflow-hidden rounded-full w-14 h-14'>
				<Image
					src={props.image}
					width='40'
					height='40'
					alt='Avatar'
					placeholder='blur'
				/>
			</div> */}
			<div>
				<div className='text-lg font-medium'>- {props.name}</div>
				{props.title && (
					<div className='text-gray-600 dark:text-gray-400'>
						{props.title}
					</div>
				)}
			</div>
		</div>
	);
}

function Mark(props: { readonly children: React.ReactNode }) {
	return (
		<>
			{' '}
			<mark className='text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-2 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200'>
				{props.children}
			</mark>{' '}
		</>
	);
}
