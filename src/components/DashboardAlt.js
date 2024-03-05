import Card from "./Card"
import "./Dashboard.css"

const getBlogs = async (Url) => {
    const baseUrl = process.env.BASE_URL;
    console.log(Url);
    const res = await fetch((baseUrl + 'blogs?populate=thumbnail&'+Url),{cache:"no-store"});
    const str = (baseUrl + 'blogs?populate=thumbnail&'+Url);
    console.log(str);
    return res.json();
}

export default async function DashboardAlt({Url}) {
    let blogs;
    
        blogs = await getBlogs(Url);
       

    return (
        <div className="grid-container">
            {blogs && blogs.data.map(blog => (
                <Card 
                    className ="grid-item"
                    id={blog.id}
                    key={blog.id} 
                    topic={blog.attributes.topic} 
                    date={blog.attributes.date} 
                    content={blog.attributes.content} 
                    category={blog.attributes.category} 
                    description={blog.attributes.description} 
                    thumbnail={ blog.attributes.thumbnail.data.attributes.url}
                />
            ))}
        </div>
    )
}
