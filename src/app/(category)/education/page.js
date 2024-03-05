import DashboardAlt from "@/components/DashboardAlt";

export default async function Education(){
    return (
        <DashboardAlt Url = {"filters[$and][0][category][$eq]=education"}/>
    )
}