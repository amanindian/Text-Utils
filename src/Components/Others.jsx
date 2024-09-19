import React from "react";
import Project from "./Project";
import ShopNow from "../Images/Aman Indian ShopNow.png";

export default function Others({ Mode }) {
    const ProjectsData = [
        {
            Title: "Aman Indian",
            URL: "https://amanindian.netlify.app/",
            Image: ShopNow,
            GitHub: "https://github.com/amanindian",
            Description: " This is E-commerce website ShopNow.com which I have make individually in one week.I used HTML, CSS and JavaScript technology in this project."
        },
        {
            Title: "Aman Indian",
            URL: "https://amanindian.netlify.app/",
            Image: ShopNow,
            GitHub: "https://github.com/amanindian",
            Description: " This is E-commerce website ShopNow.com which I have make individually in one week.I used HTML, CSS and JavaScript technology in this project."
        }
    ]

    return (
        <section
            className={`container my-5 py-2 text-${Mode === "dark" ? "light" : "dark"
                }`}
        >
            <div className="row">                {
                ProjectsData.map((project, index) => {
                    return <Project project={project} key={index} />
                })
            }</div>
        </section>
    );
}
