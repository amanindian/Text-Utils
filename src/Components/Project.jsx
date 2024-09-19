import React from 'react'

export default function Project({ project }) {
    return (
        <div className="project col-4 m-2">

            <div className="project-img">

                <img src={project.Image} className='w-100' alt="Aman Indian ShopNow Aman Kumar" />
            </div>

            <div className="layer">
                <h3>E-Commerce website</h3>
                <p>
                    This is E-commerce website "ShopNow.com" which I have make
                    individually in one week. I used HTML, CSS and JavaScript technology
                    in this project.
                </p>
                <a
                    title="Visit Site"
                    target="_blank"
                    rel="noreferrer"
                    href="https://amanshopnow.netlify.app/"
                >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
                <a
                    title="Source Code"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/amanindian/ShopNow"
                >
                    <i className="fa-brands fa-github"></i>
                </a>
            </div>
        </div>
    )
}
