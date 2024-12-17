import React from 'react';
import { Container } from '@/components/Container';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import Button from './Button';

export const Contact = () => {
	return (
		<Container>
			<div className='flex flex-col md:flex-row items-center justify-between w-full max-w-5xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl'>
				<div className='flex-1 text-center lg:text-left'>
					<h2 className='text-2xl font-medium lg:text-3xl'>
						Ready for a Cleaner Space?
					</h2>
					<p className='mt-2 font-medium max-w-[430px] text-white text-opacity-90 lg:text-xl'>
						Let us transform your workspace with our top-tier,
						eco-friendly cleaning solutions.
					</p>
				</div>
				<form
					className='flex-1 w-full flex flex-col gap-y-2 relative mt-6 md:mt-0 md:py-2 lg:py-0'
					action='https://api.web3forms.com/submit'
					method='POST'
				>
					<input
						type='hidden'
						name='access_key'
						value='260f1943-c6a3-4a66-9830-e2c0cbbe033b'
					></input>
					<div className='flex flex-col md:flex-row gap-y-2 md:gap-x-2'>
						<div className='relative flex-1'>
							<input
								name='form-name'
								type='text'
								required
								className='w-full bg-white text-indigo-500 h-[40px] p-2 focus:outline-none rounded-md peer/name'
							></input>
							<label
								htmlFor='form-name'
								className='pointer-events-none absolute flex items-center left-2 top-0 text-md opacity-50 text-indigo-500 h-[40px] transition-all duration-300 ease-in-out peer-focus/name:top-[-32px] peer-focus/name:opacity-100 peer-focus/name:text-white peer-focus/name:left-0 peer-valid/name:top-[-32px] peer-valid/name:opacity-100 peer-valid/name:text-white peer-valid/name:left-0'
							>
								Name
							</label>
						</div>
						<div className='relative flex-1'>
							<input
								name='form-email'
								type='email'
								required
								autoComplete='none'
								placeholder=' '
								className='w-full bg-white text-indigo-500 h-[40px] p-2 focus:outline-none rounded-md peer/email transition-all ease-in-out duration-300 focus:mt-5 [&:not(:placeholder-shown)]:mt-5 md:focus:mt-0 md:[&:not(:placeholder-shown)]:mt-0'
							></input>
							<label
								htmlFor='form-name'
								className='pointer-events-none absolute flex items-center left-2 top-0 text-md opacity-50 text-indigo-500 h-[40px] transition-all duration-300 ease-in-out peer-focus/email:top-[-12px] md:peer-focus/email:top-[-32px] peer-focus/email:opacity-100 peer-focus/email:text-white peer-focus/email:left-0 peer-[:not(:placeholder-shown)]/email:top-[-12px] md:peer-[:not(:placeholder-shown)]/email:top-[-32px] peer-[:not(:placeholder-shown)]/email:opacity-100 peer-[:not(:placeholder-shown)]/email:text-white peer-[:not(:placeholder-shown)]/email:left-0'
							>
								Email
							</label>
						</div>
					</div>
					<textarea
						name='form-content'
						placeholder='What services are you interested in?'
						className='bg-white text-indigo-500 p-2 focus:outline-none rounded-md resize-none min-h-[150px] placeholder-indigo-500 placeholder-opacity-50'
					></textarea>
					<input
						type='checkbox'
						name='botcheck'
						className='hidden'
					></input>
					<button
						type='submit'
						className='absolute bottom-1 right-1 flex items-center justify-center w-10 h-10 bg-indigo-700 text-white rounded-md'
					>
						<PaperAirplaneIcon className='w-6 h-6' />
					</button>
				</form>
			</div>
		</Container>
	);
};
