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
	return (
		<div className=''>
			{/* <!-- Services --> */}
			<div className='flex flex-row flex-wrap justify-center items-start w-full gap-2 md:gap-3'>
				{props.services.map((service, index) => (
					<div
						key={index}
						className='px-3 py-[6px] group md:min-w-[200px] transition-all duration-300 overflow-hidden flex flex-col items-start justify-start text-indigo-500 bg-indigo-500 bg-opacity-15 lg:flex-nowrap rounded-xl'
					>
						<h2 className='text-lg md:text-xl font-[600] lg:text-2xl'>
							{service.title}
						</h2>
						<p className='text-sm hidden group-hover:block md:block md:text-lg font-normal md:max-w-[430px] text-opacity-90 lg:text-lg'>
							{service.sub}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};
