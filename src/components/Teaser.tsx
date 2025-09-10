import { storyblokEditable, SbBlokData  } from "@storyblok/react/rsc";

export default function Teaser({ blok }: {blok: SbBlokData}) {
	return (
		<div className="teaser">
			<h2>{String(blok.headline)}</h2>
		</div>
	);
}