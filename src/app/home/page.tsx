import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokServerComponent, SbBlokData } from "@storyblok/react/rsc";

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div className="page">
      This is the home page.
      {data.story.content.body?.map((blok: SbBlokData) => (
        <StoryblokServerComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  );
}

export async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get(`cdn/stories/home`, { version: "draft" });
}
