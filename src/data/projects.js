import { COLOR_OPTIONS } from './../utils/constants';
export const web = [
	{
		slug: 'computapars',
		header: 'Computapars',
		intro:
			'After writing the same Button component across different project you realize that you could be coding smarter.',
		body: `
            <p>
            The trend of shared design systems, became very timely in my company and we decided to pursue a monorepo published through lerna and npm.
            </p>
            <p>In order to kick the tires on concepts and methodologies, I decided to roll my own shared design system with Storybook and styled-components and styled-system. These libraries have made writing css in js extremely easy and have allowed for modular design and coding to creep in to every aspect of a new project.</p>
            <p>Coding with components from Computapars feels like using a less cruftier bootstrap. There is a fine grain control offered from styled-system that is declarative and enforces react's best feature.</p>
            <p>As with all projects, naming this shared design system was at times pretentious and at times very goofy. I settled on the term Computapars after realizing what a joy it was to not have to re-code all of the components I was using. </p>
            <p>Computapars is latin for Computer Party and it definitely feels like this when I'm able to integrate this design system into a new project.</p>
        `,
		color: 'charcoal',
		links: [
			{
				type: 0,
				name: 'Github',
				link: 'https://github.com/marlenebowles/computapars',
			},
			{
				type: 1,
				name: 'Url',
				link: 'https://computapars.marlenebowles.now.sh/',
			},
		],
		bgImage: false,
		lessonsLearned:
			'<p>Next.js is continuosly rolling out new features and having new api routing helped immensely.</p>',
		tech: ['react', 'storybook', 'styled components', 'next.js'],
		svgFile: 'Computapars',
	},
	{
		slug: 'sound-reverie',
		header: 'Sound Reverie',
		intro:
			'Exploring music and its origins has been a lifelong curiosity for me. I created Sound Reverie as a safe space to take deep dives into albums, artists, and genres. I consider it my continued education in ethnomusicology, pop culture and history.',
		body: `
            <p>Having built MERN and Server Side Rendered apps, I wanted to marry the two concepts and experiment with a full stack SSR.</p>
            <p>Working with Next.js lets me have the perfect amount of control and performance optimizations compared to other static site frameworks like Gatsby.
            Even though their tooling out of the box is impressive, I've always found it to be too magical, which can lead to feeling outside of your element if things go wrong.
            </p>
            <p>Of course, with web development, things always go wrong. Packages get out of date, api's change, CDN's go down. Not having access to routing, configs and the internals of an app is paramount.</p>
            <p>In the future of this project I would love to integrate Spotify's API to create a unique listening and visual experience for my readers. I would also lke to expand the content to be driven by others in the group of musicians I've found myself lucky to be a part of.</p>
        `,
		color: 'teal',
		links: [
			{
				type: 0,
				name: 'Github',
				link: 'https://github.com/marlenebowles/soundreverie',
			},
		],
		lessonsLearned: `<p>Next.js is continuosly rolling out new features and having their new api routing helped immensely.</p>`,
		tech: ['mongoDb', 'express', 'react', 'node', 'next.js'],
		svgFile: 'SoundReverie',
	},
	{
		slug: 'yourturn-dev',
		header: 'YourTurn.dev',
		intro:
			'I’m a firm believer that a cluttered house leads to a cluttered mind.',
		body: `
            <p>Having a housemate can sometimes get in the way of a house being a refuge.</p>
            <p>Moreover, living with someone complicates the simplicity of completing tasks because of task sharing. After trying a few options of task sharing apps with my wife I decided to make my own simpler interface.</p>
            <p>In order to start this project, I landed on the basic concepts needed for a housemate dynamic to be succesful. </p>
            <ul>
            <li>Being Able To Add Housemates</li>
            <li>Sharing Tasks</li>
            <li>Rotating Tasks Automatically</li>
            <li>Notifying Users When Tasks Are Assigned</li>
            
            </ul>
            <p>With that in mind, I knew that Information architecture would play a key role in housemates being able to assign themselves and each other tasks and also make new housemates.
            I chose the MERN stack to take advantage of MongoDb's non-relational structure.
            </p>
            <p>Currently this project is still in development as I put together the front end. Ideally I'd like to refactor this project so that it can be deployed outside of heroku.</p>
            <p>For now the project provides clear documentation on how to make the API run to get the appropriate responses in order to start creating and sharing tasks.</p>
        `,
		links: [
			{
				type: 0,
				name: 'Github',
				link: 'https://github.com/marlenebowles/yourturn.dev',
			},
			{
				type: 1,
				name: 'Url',
				link: 'https://yourturn-dev.herokuapp.com/',
			},
		],
		lessonsLearned:
			'<p>Coming from a Django/Python background, getting used to Express took a little bit of mental overhead but the ease of writing models in Javascript was worth it.</p>',
		tech: ['mongoDb', 'express', 'react', 'node', 'heroku'],
		svgFile: 'YourTurn',
		color: 'grey',
	},
];
