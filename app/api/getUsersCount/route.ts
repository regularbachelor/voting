import prisma from "../../lib/prisma";

export async function GET() {
    try {
        const usersCount = await prisma.user.count();
        return new Response(JSON.stringify({ count: usersCount }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error("Error fetching users count:", error);
        return new Response(JSON.stringify({ error: "Internal server error" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
