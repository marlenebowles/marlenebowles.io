import React, { Fragment } from 'react';
import { FlexBox } from '@computapars/flex';
import {
	Text,
	IntroText,
	FineText,
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
} from '@computapars/typography';
export default () => (
	<Fragment>
		<div>
			<IntroText>
				Quasar Euclid dispassionate extraterrestrial observer from which
				we spring rich in heavy atoms worldlets. A mote of dust
				suspended in a sunbeam are creatures of the cosmos corpus
				callosum shores of the cosmic ocean brain is the seed of
				intelligence great turbulent clouds? Radio telescope rings of
				Uranus invent the universe rings of Uranus dream of the mind's
				eye star stuff harvesting star light.
			</IntroText>

			<Text>
				Star stuff harvesting star light vanquish the impossible not a
				sunrise but a galaxyrise the only home we've ever known hearts
				of the stars tingling of the spine and billions upon billions
				upon billions upon billions upon billions upon billions upon
				billions.
			</Text>
			<FineText>
				Hearts of the stars globular star cluster light years rings of
				Uranus science network of wormholes. A very small stage in a
				vast cosmic arena worldlets great turbulent clouds kindling the
				energy hidden in matter vanquish the impossible corpus callosum.
			</FineText>
			<Text>testing</Text>
			<H1 p={3} as={'h2'} color="primary">
				Cats
			</H1>
			<FlexBox mt="lg" color="secondary" bg="primary">
				<div>Hello</div>
				<div>World</div>
			</FlexBox>
			<div
				direction="column"
				justify="center"
				align="center"
				background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
			>
				<div>
					<div color="white" level={1} margin="none">
						Marlene Bowles
					</div>
				</div>
				<div>
					<FlexBox
						fontSize={4}
						fontWeight="bold"
						p={3}
						mb={[4, 5]}
						color="white"
						bg="secondary"
					>
						Coming Soon...
					</FlexBox>
				</div>
			</div>
		</div>
	</Fragment>
);
