import { useScroll } from 'framer-motion';
import { motion as m } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

export function AboutMe() {
	const ref = useRef(null);
	const windows = useRef(400);
	const [_, render] = useState({});
	const forceUpdated = useCallback(() => render({}), []);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['end end', 'start start'],
	});

	useEffect(() => {
		windows.current = window.innerWidth;
		forceUpdated();
	}, []);

	console.log(windows.current);
	return (
		<m.div
			className="w-screen h-[100vh] flex flex-col items-center justify-center relative"
			ref={ref}
		>
			<m.h1
				className={`font-poppins tracking-widest text-3xl sm:text-7xl md:text-8xl 2xl:text-[160px] font-bold text-gray-100 absolute left-0 z-0`}
				layout
				initial={{ x: 0 }}
				whileInView={{
					y: windows.current < 600 ? -100 : -20,
					x:
						windows.current < 400
							? 20
							: windows.current < 600
							? 100
							: windows.current < 800
							? 150
							: 250,
					transition: { duration: 4 },
				}}
			>
				About me
			</m.h1>
			<m.h1 className="font-poppins font-light text-md md:text-xl lg:text-2xl text-center md:text-left w-4/5 max-w-5xl z-10 xl:ml-[450px]">
				Front-end developer who cares deeply about user experience and security.
				<br />
				Always concerned about data protection.
			</m.h1>
		</m.div>
	);
}
