import { motion as m } from 'framer-motion';
import { Text } from './Text';

export function MyStack() {
	return (
		<m.div className="flex flex-col w-full px-5 md:px-28 overflow-hidden">
			<m.h1
				className="text-5xl md:text-7xl mb-8 mt-32 md:mb-24 text-gray-900 tracking-widest"
				initial={{ opacity: 0, x: -200 }}
				whileInView={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
				viewport={{ once: true }}
				layout
			>
				my stack`s:
			</m.h1>

			{stacksFrontend.map((stack, index) => (
				<Text stack={stack} index={index} key={stack} />
			))}

			<div className="h-screen"></div>
		</m.div>
	);
}

const stacksFrontend = [
	'ReactJs',
	'React Native',
	'NextJS',
	'Typescript',
	'Javascript',
	'NodeJs',
	'Css',
	'Sass',
	'Html',
	'Styled-components',
	'Jest',
	'MirageJS',
];
