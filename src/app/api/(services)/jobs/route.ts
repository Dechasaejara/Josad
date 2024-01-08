import { prisma } from '@/lib/prisma'

export interface Job {
  title: string;
  description: string;
  applyLink: string;
  company: string;
  source: string;
  // inference?: JobCategory[];
  location: string;
  postedDate: Date;
  endDate: Date;
  isInHouse: boolean;
  salary: number;
  // type?: Type;
  country: string;
  // experienceLevel?: Experience;
  isNotReady: boolean;
  authorId: number;
  // author?: User;
  categoryId?: number;
}

// Get
export async function GET() {
  const jobs = await prisma.job.findMany({
    orderBy: {
      id: "asc",
    }
  });
  return new Response(JSON.stringify(jobs));
}

// Create
export async function POST(request: Request) {
  const body: Job = await request.json();
  const job = await prisma.job.create({ data: body });

  return new Response(JSON.stringify(job));
}

