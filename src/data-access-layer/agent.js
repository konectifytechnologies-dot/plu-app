


import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { fetcher } from "@/lib/fetcher";
import links from "@/lib/links";

export async function getAgent() {
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect('/auth/login');
    }

    const agent = await fetcher(`agent/${session.id}`, 'GET', session.token);
    return agent;

}

export async function getAgentLandlords() {
    const session = await getServerSession(authOptions);
    /*if (!session) {
        redirect('/auth/login');
    }*/
    const landlords = await fetcher(`landlords`, 'GET', session.token);
    return landlords;

}
