import { motion as m, useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface Props {
	stack: string;
	index: number;
}

export function Text({ stack, index }: Props) {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
	});
	const [x, setX] = useState(0);

	useEffect(() => {
		return scrollYProgress.onChange(latest => {
			setX(latest);
		});
	}, []);

	return (
		<m.div className="w-full flex flex-col" ref={containerRef}>
			<m.h1
				className={`text-6xl xl:text-7xl 2xl:text-[130px] mr-[${
					x * 1000
				}px] text-gray-400`}
				initial={{ x: 0 }}
				animate={{ x: x * 100 }}
				key={stack}
				viewport={{ once: true }}
			>
				{stack}
			</m.h1>
		</m.div>
	);
}
