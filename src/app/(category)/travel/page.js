import DashboardAlt from "@/components/DashboardAlt";

export default async function Travel(){
    return (
        <DashboardAlt Url = {"filters[$and][0][category][$eq]=travel"}/>
    )
}