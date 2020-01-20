import { COLOR_OPTIONS } from './../utils/constants';
export const web = [
	{
		header: 'Computapars',
		text: `A personal design system monorepo. Created with Storybook, 
		Styled Components and Styled System, Computapars makes it easy to scale out my personal projects.`,
		body: `
            <p>crap</p>
        `,
		hoverTag: 'View Project',
		slug: 'computapars',
		color: 'charcoal',
		bgImage: false,
		categories: ['react'],
		section: 'projects',
		svgFile: 'Computapars',
	},
	{
		header: 'Sound Reverie',
		text: `A blog exploring music, pop culture, and movies. `,
		hoverTag: 'View Project',
		slug: 'sound-reverie',
		color: 'teal',
		bgImage: false,
		categories: ['react', 'node'],
		section: 'projects',
		svgFile: 'SoundReverie',
	},
	{
		header: 'Yourturn.dev',
		text: `Task sharing made easier. Tasks can be assigned to users in a home and rotated between members.`,
		slug: 'yourturn-dev',
		hoverTag: 'View Project',
		color: 'grey',
		categories: ['react', 'node'],
		section: 'projects',
		svgFile: 'YourTurn',
	},
];

export const music = [
	{
		header: 'Dead Painters',
		text: `Influenced by 1970's kraut-rock compositions and angular melodic guitar weaving of 1980's NYC post-punk.`,
		href: 'https://open.spotify.com/artist/1KPVoJedU8X4Ep7iuxLaJZ',
		hoverTag: 'Listen on Spotify',
		bgImage: 'dead_painters.jpg',
		categories: ['bands'],
		section: 'music',
		color: 'black',
	},
	{
		header: 'Winning Friends',
		text: `Solo work`,
		href: 'https://soundcloud.com/winningfriends',
		hoverTag: 'Listen on Soundcloud',
		bgImage: 'winning_friends.JPG',
		categories: ['solo'],
		section: 'music',
		color: 'black',
	},
	{
		header: 'Fixtures',
		text: `Fuzzy, sardonic, and at times anthemic - music for people who are going through it.`,
		href: 'https://fixturesmusic.bandcamp.com/album/watch-your-head',
		hoverTag: 'Listen on Bandcamp',
		bgImage: 'fixtures.JPG',
		categories: ['bands'],
		section: 'music',
		color: 'black',
	},
];
