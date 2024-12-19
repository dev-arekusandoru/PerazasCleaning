'use client';
import React from 'react';

interface Service {
	title: string;
	sub: string;
}

interface ServiceProps {
	services: Service[];
	businesses: string[];
}

export const Services = (props: ServiceProps) => {
	const [view, setView] = React.useState('services');
	return (
		<div className='flex flex-col justify-center items-center'>
			<div className='flex flex-row w-[80%] max-w-[400px] h-10 border border-indigo-500 mb-6 rounded-lg overflow-hidden'>
				<button
					onClick={() => setView('services')}
					className={`${
						view === 'services'
							? 'bg-indigo-500 text-white'
							: 'bg-white dark:bg-trueGray-900 text-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-700 dark:hover:bg-opacity-20 hover:bg-opacity-20'
					} transition-colors duration-300 ease-in-out flex-1 text-lg flex justify-center items-center cursor-pointer`}
				>
					Services
				</button>
				<button
					onClick={() => setView('businesses')}
					className={`${
						view === 'businesses'
							? 'bg-indigo-500 text-white'
							: 'bg-white dark:bg-trueGray-900 text-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-700 dark:hover:bg-opacity-20 hover:bg-opacity-20'
					} transition-colors duration-300 ease-in-out flex-1 text-lg flex justify-center items-center cursor-pointer`}
				>
					Businesses
				</button>
			</div>
			{/* <!-- Boxes --> */}
			<div
				className={`flex flex-row flex-wrap justify-center items-start w-full gap-2 md:gap-3 ${
					view === 'businesses' ? 'lg:max-w-6xl' : ''
				}`}
			>
				{view === 'services' &&
					props.services.map((service, index) => (
						<div
							key={index}
							className='px-3 py-[6px] group transition-all duration-300 overflow-hidden flex flex-col items-start justify-start text-indigo-500 bg-indigo-500 bg-opacity-15 lg:flex-nowrap rounded-xl'
						>
							<h2 className='text-lg md:text-xl font-[600] lg:text-2xl lg:mb-[-3px]'>
								{service.title}
							</h2>
							<p className='text-sm hidden group-hover:block md:block md:text-lg font-normal md:max-w-[430px] text-opacity-90 lg:text-lg'>
								{service.sub}
							</p>
						</div>
					))}
				{view === 'businesses' &&
					props.businesses.map((business, index) => (
						<div
							key={index}
							className='px-3 py-[6px] group transition-all duration-300 overflow-hidden flex flex-col items-start justify-start text-indigo-500 bg-indigo-500 bg-opacity-15 lg:flex-nowrap rounded-xl'
						>
							<h2 className='text-lg md:text-xl font-[600] lg:text-2xl'>
								{business}
							</h2>
						</div>
					))}
			</div>
		</div>
	);
};
