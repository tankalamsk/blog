import DashboardAlt from "@/components/DashboardAlt";

export default async function Personal(){
    return (
        <DashboardAlt Url = {"filters[$and][0][category][$eq]=personal"}/>
    )
}