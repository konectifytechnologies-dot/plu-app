'use server';
import links from "@/lib/links";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function createLandlord(data, path) {
    try {
        const session = await getServerSession(authOptions);
        const url = links.API_URL + 'landlord';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${session.token}`,
            },
            body: JSON.stringify(data)
        });
        const landlord = await response.json();
        if (landlord.code === 3) {
            return landlord;
        }
        revalidatePath(path);
        return landlord;
    } catch (error) {
        return { error: error.message, code: 3 }
    }
}