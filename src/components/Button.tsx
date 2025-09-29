import React from 'react';

interface ButtonProps {
	children: string;
	onPress?: () => void;
	className?: string;
	href?: string;
}

function Button(props: ButtonProps) {
	const scrollTo = (target: string) => {
		const element = document.getElementById(target);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};
	return (
		<button
			onClick={() => {
				if (props.href) {
					if (props.href.slice(0, 1) === '#') {
						scrollTo(props.href.slice(1));
					} else {
						window.location.href = props.href;
					}
				} else if (props.onPress) {
					props.onPress();
				}
			}}
			className={`text-white bg-ogblue border-ogblue border-2 hover:bg-transparent hover:text-ogblue transition-colors rounded-md hover:cursor-pointer ${
				props.className || 'px-5 py-[6px]'
			}`}
		>
			{props.children}
		</button>
	);
}

export default Button;
