
const baseUrl = 'https://josad-service.onrender.com';
const baseUrll = 'http://localhost:3000/';
const apiKey = 'd0205fb4-oihh-0282-npth-e36a6498039c';
export default async function Jobs() {
  console.log("apiKey", apiKey);
  const dynamicData = await fetch(`${baseUrl}/api/jobs`, {
    method: "GET",
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    },
  });
  const Key = dynamicData.headers.get('apiKey');
  console.log("key", Key);
  console.log('dynamicData', dynamicData);
  const data = await dynamicData.json();
  // console.log('message', message);
  console.log('data', data);
  return (
    <main>
      <h1>Jobs</h1>
      <ul className="flex flex-col gap-4 h-screen ">
        {/* {data.map((job: Job) => (
          <div
            key={job.title}
            className="p-8 m-auto container bg-secondary w-2/3"
          >
            <h2>{job.title}</h2>
            <p>{job.description}</p>
  
          </div>
        ))} */}
      </ul>
    </main>
  );

}
