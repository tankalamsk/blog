import DashboardAlt from "@/components/DashboardAlt";

export default async function Health(){
    return (
        <DashboardAlt Url = {"filters[$and][0][category][$eq]=health"}/>
    )
}