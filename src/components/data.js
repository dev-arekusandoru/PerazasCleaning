import {
	DevicePhoneMobileIcon,
	AdjustmentsHorizontalIcon,
	SunIcon,
	GlobeAmericasIcon,
	UserGroupIcon,
	TruckIcon
} from '@heroicons/react/24/solid';

import abtImg from '../../public/img/benefit-one.png';

const about = {
	title: 'Our Commitment to Excellence',
	desc: "We go beyond cleaning to ensure your business shines. Here's what sets us apart:",
	image: abtImg,
	bullets: [
		{
			title: 'Eco-Friendly Solutions',
			desc: 'We prioritize the environment by using safe, sustainable cleaning products that are tough on dirt but gentle on the planet.',
			icon: <GlobeAmericasIcon />
		},
		{
			title: 'Customer-Centric Approach',
			desc: 'Building trust and fostering long-term relationships with our clients is at the heart of our business. Your satisfaction drives everything we do.',
			icon: <UserGroupIcon />
		},
		{
			title: 'Wide Service Area',
			desc: 'Serving the entire Washington, D.C. region, including Maryland, Virginia, and the District of Columbia, we are always nearby to assist you.',
			icon: <TruckIcon />
		}
	]
};

const services = [
	{ title: 'Dusting', sub: 'Wiping counter tops and all surfaces' },
	{ title: 'Polishing', sub: 'Glass, mirrors, and stainless steel' },
	{ title: 'Vacuuming', sub: 'Carpets, rugs, and upholstery' },
	{ title: 'Mopping', sub: 'Hardwood, tile, and linoleum floors' },
	{
		title: 'Cleaning & Sanitizing',
		sub: 'Bathrooms, Kitchens, Dining Areas and more'
	},
	{ title: 'Trash Removal', sub: 'Emptying and replacing liners' },
	{
		title: 'Tidying Up',
		sub: 'Offices, lobbies, and common areas'
	},
	{ title: 'Window Cleaning', sub: 'Interior and exterior windows' },
	{ title: 'Carpet Cleaning', sub: 'Deep cleaning and stain removal' },
	{ title: 'Before and After', sub: 'Events, Parties, and Meetings' },
	{ title: 'Deep Cleaning', sub: 'Turn over services for rental properties' }
];

const businesses = [
	'Offices',
	'Schools',
	'Medical Centers',
	'Elderly Care Centers',
	'Shopping Centers',
	'Banks',
	'Daycares',
	'Fire Stations',
	'Apartment Complexes',
	'Real Estate Properties',
	'Car Dealerships',
	'Airbnb',
	'Restaurants',
	'Fitness Centers'
];

export { about, services, businesses };
