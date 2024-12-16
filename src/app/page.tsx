import { Container } from '@/components/Container';
import { Hero } from '@/components/Hero';
import { SectionTitle } from '@/components/SectionTitle';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { Faq } from '@/components/Faq';
import { Contact } from '@/components/Contact';
import { Services } from '@/components/Services';

import { about, services, businesses } from '@/components/data';
export default function Home() {
	return (
		<Container>
			<Hero />
			<SectionTitle
				preTitle='About Us'
				title='Learn more about the company'
				id='about'
			>
				Peraza&apos;s Cleaning Services provides top-tier commercial
				cleaning across the DMV area. With eco-friendly practices and
				exceptional customer care, we ensure spotless results that
				elevate your workspace.
			</SectionTitle>

			<About data={about} />
			{/* <About imgPos='right' data={benefitTwo} /> */}

			<SectionTitle
				preTitle='Our Services'
				title='Explore the different services we offer'
				id='services'
			>
				Peraza&apos;s Cleaning Services provides you with an extensive
				range of cleaning solutions at an affordable price. Our staff is
				fully trained to carry out cleaning work with no disruptions in
				routine business operations.
			</SectionTitle>

			<Services services={services} businesses={businesses} />

			<SectionTitle
				preTitle='Testimonials'
				title="Here's what our customers say"
				id='testimonials'
			></SectionTitle>

			<Testimonials />

			{/*<SectionTitle preTitle='FAQ' title='Frequently Asked Questions'>
				Answer your customers possible questions here, it will increase
				the conversion rate as well as support or chat requests.
			</SectionTitle>

			 <Faq /> */}
			<Contact />
		</Container>
	);
}
