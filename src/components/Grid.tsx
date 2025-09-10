import { StoryblokServerComponent, SbBlokData } from '@storyblok/react/rsc'

interface NestedBlok {
    _uid: string;
    component: string;
    [key: string]: unknown; // other dynamic fields
  }
  
  interface GridBlok extends SbBlokData {
    name: string;
    columns?: NestedBlok[]; // properly typed as array // other dynamic fields
  }

export default function Grid({ blok } : {blok: GridBlok}){
return (
	<div className="grid">
		{blok.columns?.map((nestedBlok) => (
			<StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
		))}
	</div>
);
};