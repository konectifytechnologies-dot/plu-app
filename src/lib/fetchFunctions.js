import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { fetcher } from "./fetcher";

export async function getAgentLandlords() {
    const session = await getServerSession(authOptions);
    /*if (!session) {
        redirect('/auth/login');
    }*/
    const landlords = await fetcher(`landlords`, 'GET', session.token);
    return landlords;

}