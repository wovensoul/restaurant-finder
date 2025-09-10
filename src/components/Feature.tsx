import { storyblokEditable, SbBlokData  } from "@storyblok/react/rsc";

export default function Feature({ blok }: {blok: SbBlokData}) {
    return (
        <div className="feature" {...storyblokEditable(blok)}>
            <span>{String(blok.headline)}</span>
        </div>
    );
    }