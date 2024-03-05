import DashboardAlt from "@/components/DashboardAlt";

export default  function Food(){
    return (
        <DashboardAlt Url = {"filters[$and][0][category][$eq]=food"}/>
    )
}