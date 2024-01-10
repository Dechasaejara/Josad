import Loading from "@/app/loading";
import { MDXProvider } from "@mdx-js/react";
import { Suspense } from "react";

interface Post {
  createdAt: string;
  id: number;
  views: number;
  message: string;
  forwards: number;
  reactions: {
    flags: number;
    chosenOrder: null;
    reaction: {
      emoticon: string;
      className: string;
    };
    count: number;
    className: string;
  }[];
  originalSource: string;
}

interface ChannelPosts {
  channel: string;
  posts: Post[];
}

const baseUrl = process.env.JOSAD_BASE_URL as string;
const apiKey = process.env.JOSAD_API_KEY as string;
export default async function Jobs() {
  const dynamicData = await fetch(`${baseUrl}/api/jobs`, {
    method: "GET",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
    },
  });
  const data = await dynamicData.json();
  const messages: string[] = data.flatMap((channel: { posts: any[] }) =>
    channel.posts.map((post: { message: any }) => post.message)
  );
  // console.log("messages", messages);
  return (
    <main>
      <h1>Jobs</h1>
      <Suspense fallback={<Loading />}>
        <ul className="flex flex-col gap-4 ">
          {messages &&
            messages.map((job: any, index) => (
              <div
                key={index}
                className="p-8 m-auto  h-auto bg-secondary w-2/3"
              >
                <div>{job}</div>
                {/* <div>{job.replace(/\n/g, '<br />')}</div> */}
                {/* <MDXProvider components={components}>
                <div>{job}</div>
              </MDXProvider> */}
              </div>
            ))}
        </ul>
      </Suspense>
    </main>
  );
}
