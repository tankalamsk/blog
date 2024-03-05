import "./Display.css"
import Image from 'next/image'
import Link from "next/link"
export default function Display ({date, category,imageurl , topic , content,description}) {
    console.log(imageurl);
    return (
        <div className="display-container">
            <div className="category">
                <div>
                
                <div className="cate"> 
                {category}
                    </div>
                </div>
                <div className="date">
                   {date}
                </div>
            </div>
            <div className="topic">
               {topic}
            </div>
            <div className="description">
                {description}
            </div>
            <div className="down-container">
            <div className="Image-container">
                <img src={imageurl} ></img>
                
            </div>
            <div className="display-content">
                <p> 
                {content}
                 </p>
            </div>

            </div>
            
        </div>
    )
}