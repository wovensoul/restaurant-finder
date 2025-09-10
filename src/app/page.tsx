import { getStoryblokApi } from '@/lib/storyblok';
import { StoryblokServerComponent } from '@storyblok/react/rsc';

export default async function Home() {
const { data } = await fetchData();

return (
	<div className="page">
		<StoryblokServerComponent story={data.story} />
	</div>
);
}

export async function fetchData() {
const storyblokApi = getStoryblokApi();
return await storyblokApi.get(`cdn/stories/home`, { version: 'draft' });
}