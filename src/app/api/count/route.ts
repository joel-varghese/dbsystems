import { db } from "@/db";
import { counts } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
    const countRow = await db.query.counts.findFirst({
        where: eq(counts.id, 1),
    });

    await db.update(counts).set({
        count: countRow!.count + 1,
    });

    return Response.json({
        message: `success`,
    })
}