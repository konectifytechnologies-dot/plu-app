import { getAgentLandlords } from "@/data-access-layer/agent"
export default async function LandlordsDropdown() {
    const landlords = await getAgentLandlords();
    console.log(landlords);
    return (
        <>

        </>
    )
}