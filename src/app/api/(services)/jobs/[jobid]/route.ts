import prisma from "@/lib/prisma";
import { Job } from "../route";

// Get by id

export async function GET(request: Request, { params }: { params: { jobid: string } }) {
    console.log('id', params);
    const job = await prisma.job.findUnique({
        where: {
            id: +params.jobid,
        }
    });
    return new Response(JSON.stringify(job));
}
// update
export async function PUT(request: Request, { params }: { params: { jobid: string } }) {
    const body: Job = await request.json();
    console.log("id", params);
    const updatejob = await prisma.job.update({
        where: {
            id: +params.jobid,
        },
        data: body
    })

    return new Response(JSON.stringify(updatejob));
}
// Delete
export async function DELETE(request: Request, { params }: { params: { jobid: string } }) {
    console.log("id", params);
    let deletedJob = await prisma.job.delete({
        where: {
            id: +params.jobid
        }
    })
    return new Response(JSON.stringify({
        success: true,
        message: "Job Deleted Succssfully.",
        data: deletedJob,
    }))
}