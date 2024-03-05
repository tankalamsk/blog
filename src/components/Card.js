import "/src/components/Card.css"
import Image from 'next/image'
import Link from "next/link"


const formattedDate = (date)=>{
    const dateString = date;
    const dateParts = dateString.split("-");

    const year = dateParts[0];
    const month = new Date(dateParts[1] + "/01/2000").toLocaleDateString('en-US', { month: 'long' });
    const day = dateParts[2];

    return ` ${month} ${day}, ${year}`;
    
}
export default function Card ({id,topic, date, content, category, description,thumbnail}){
    
      
    return (
       <Link style={{ textDecoration: 'none' }} href={"/blogs/"+id}>
        <div className="card">
            <wrapper >

            <div className="image" >
            <img src={thumbnail}></img>
            </div>
            
            <div className="writeup">
            <div className="topic">
                <h>{topic}</h>
            </div>
            <div className="description">
                <h>{description}</h>
            </div>
            </div>
            </wrapper>

           
                <div className="profile">
                    <div  className="round">
                        <img className="pic" src="https://assets.dub.co/author/steventey.jpg"></img>
                    </div>
                    <div className="date">
                        <h>{formattedDate(date)}</h>
                    </div>
                </div>
        </div>

       </Link>
     
    )
}
