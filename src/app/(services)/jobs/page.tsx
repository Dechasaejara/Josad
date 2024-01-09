import { MDXProvider } from "@mdx-js/react";
import { JSX, ClassAttributes, HTMLAttributes } from "react";
import { JSX, ClassAttributes, HTMLAttributes } from "react";

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
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    },
  });
  const data = await dynamicData.json();
  const messages: string[] = data.flatMap((channel: { posts: any[]; }) => channel.posts.map((post: { message: any; }) => post.message));
  console.log("messages", messages);
  const components = {
    // Define any custom components you want to use in the MDX file here
    // For example:
    h1: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => <h1 style={{ color: 'red' }} {...props} />,
    p: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLParagraphElement> & HTMLAttributes<HTMLParagraphElement>) => <p style={{ fontSize: '16px' }} {...props} />,
  };
  return (
    <main>
      <h1>Jobs</h1>
      <ul className="flex flex-col gap-4 h-screen ">
        {
          messages && messages.map((job: any, index) => (
            <div
              key={index}
              className="p-8 m-auto container bg-secondary w-2/3"
            >
              <div>{job}</div>
              {/* <div>{job.replace(/\n/g, '<br />')}</div> */}
              {/* <MDXProvider components={components}>
                <div>{job}</div>
              </MDXProvider> */}
            </div>
          ))
        }
      </ul>
    </main>
  );

}
