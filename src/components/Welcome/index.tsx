import { motion as m } from 'framer-motion';
import { CaretDown } from 'phosphor-react';

export function Welcome() {
	return (
		<m.div className="w-screen h-screen flex flex-col items-center justify-center">
			<m.h1
				className="text-6xl md:text-7xl 2xl:text-9xl font-title"
				initial={{ opacity: 0, y: 20 }}
				layout
				animate={{
					opacity: 1,
					y: 0,
					transition: { delay: 0.2 },
				}}
			>
				Higor Allan
			</m.h1>
			<m.h2
				className="font-poppins text-xl md:text-2xl mt-4 text-center w-[80%]"
				layout
				initial={{ opacity: 0, x: 20 }}
				animate={{
					opacity: 1,
					x: 0,
					transition: { delay: 0.5 },
				}}
			>
				Front-end Developer & Ethical Hacking ❤️
			</m.h2>

			{/* <m.button
				className="absolute top-[90%]"
				initial={{ opacity: 0, x: '30vw' }}
				layout
				animate={{
					opacity: 1,
					x: 0,
					transition: { delay: 0.8 },
				}}
			>
				<m.div
					initial={{ scale: 0.9 }}
					layout
					animate={{
						scale: 1,
						transition: {
							delay: 1,
							duration: 1,
							ease: 'ease',
							repeat: Infinity,
						},
					}}
				>
					<CaretDown size={32} />
				</m.div>
			</m.button> */}
		</m.div>
	);
}
