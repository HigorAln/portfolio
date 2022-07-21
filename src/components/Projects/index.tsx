import { motion as m } from 'framer-motion';
import { GitFork, LinkedinLogo } from 'phosphor-react';

export function Projects() {
	return (
		<m.div className="flex flex-col  w-full">
			<m.h1
				className="text-5xl md:text-7xl sm:ml-10 md:ml-14 xl:ml-32 mb-8 md:mb-24 text-gray-900 tracking-widest"
				initial={{ opacity: 0, x: -200 }}
				whileInView={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
				viewport={{ once: true }}
				layout
			>
				Some Projects:
			</m.h1>

			{projects.map((project, index) => (
				<m.div className="w-4/5 rounded-md relative self-center mb-20 bg-red-400">
					<m.div
						className="absolute h-full bg-white z-30"
						initial={{ width: '100%' }}
						whileInView={{ width: '0', transition: { delay: 0.7 } }}
					/>
					<m.div
						className="absolute h-full bg-yellow-50 z-20"
						initial={{ width: '100%' }}
						whileInView={{ width: '0', transition: { delay: 0.9 } }}
					/>
					<m.div
						className="absolute h-full bg-gray-100 z-10"
						initial={{ width: '100%' }}
						whileInView={{ width: '0', transition: { delay: 1.1 } }}
					/>
					<m.div
						className="w-full rounded-md h-full flex-col sm:flex-row flex p-3"
						initial={{ borderWidth: '0px' }}
						whileInView={{
							borderWidth: '1px',
							transition: { delay: 1.1 },
						}}
						layout
					>
						<div className="w-11/12 rounded-md">
							<h1 className="text-2xl mb-2 font-poppins text-white">
								{project.title}
							</h1>
							<p className="text-sm font-poppins text-white">
								{project.description}
							</p>
						</div>

						<div className="flex flex-1 justify-center items-center flex-row sm:flex-col mt-5 sm:mt-0 gap-2">
							<LinkedinLogo
								size={32}
								className="active:opacity-20 hover:opacity-60 transition-opacity cursor-pointer text-white"
							/>
							<GitFork
								size={32}
								weight="light"
								className="active:opacity-20 hover:opacity-60 transition-opacity cursor-pointer text-white"
							/>
						</div>
					</m.div>
				</m.div>
			))}
		</m.div>
	);
}

const projects = [
	{
		id: 1,
		title: 'Project 1',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		image: 'https://source.unsplash.com/random/800x600',
		link: 'https://www.google.com',
	},
	{
		id: 1,
		title: 'Project 1',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		image: 'https://source.unsplash.com/random/800x600',
		link: 'https://www.google.com',
	},
	{
		id: 1,
		title: 'Project 1',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		image: 'https://source.unsplash.com/random/800x600',
		link: 'https://www.google.com',
	},
	{
		id: 1,
		title: 'Project 1',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		image: 'https://source.unsplash.com/random/800x600',
		link: 'https://www.google.com',
	},
	{
		id: 1,
		title: 'Project 1',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		image: 'https://source.unsplash.com/random/800x600',
		link: 'https://www.google.com',
	},
];
