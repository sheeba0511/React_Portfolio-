import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
            <div>
                <img
                    src={"https://media.licdn.com/dms/image/D4E35AQG94oYbLPqOlw/profile-framedphoto-shrink_400_400/0/1696314618629?e=1699160400&v=beta&t=2rtz8S9o5pzpz_en0SQByfyHJTyZCHJwsVob4vsfFXs"}
                    alt="Founder"
                />
                <h2>Er. Sheeba Nasreen</h2>
                <p>Motivation is temporary, but discipline last forever.</p>
            </div>
            <aside>
                <h2>Social Media</h2>
                <article>
                    <a href="https://www.linkedin.com/in/sheeba-nasreen-a67420288/" target={"blank"} >
                        <AiFillLinkedin />
                    </a>
                    <a href="https://github.com/sheeba0511" target={"blank"} >
                        <AiFillGithub />
                    </a>
                </article>
            </aside>
            <a href="#home"> <AiOutlineArrowUp />  </a>
        </footer>
    )
}

export default Footer