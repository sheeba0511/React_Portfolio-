import React from 'react'

const Testimonial = () => {
    return (
        <div id='testimonial' >
            <h2>Testimonial</h2>
            <section>
                <TestimonialCard
                    img="https://media.licdn.com/dms/image/D4D03AQG7d_xVwh0CmA/profile-displayphoto-shrink_400_400/0/1673624930155?e=1704326400&v=beta&t=U4JQh7K4Mkd86sA3tcyZBnQPyqvrBNIInRIqjH21xCk"
                    name={"Er. Abu Hanzala Rehan Ansari"}
                    feedback={"Your logical thinking, positive attitude and strong work ethic makes you an asset to a team. You are excellent coder with a great personality and a valuable contributor to a project."}
                    designation={"Software Development Engineer at KYC Hub"}
                />
                <TestimonialCard
                    img="https://media.licdn.com/dms/image/D4D03AQEWg_Bk8-2nJA/profile-displayphoto-shrink_400_400/0/1672115938356?e=1704326400&v=beta&t=7XQ1eUNq_SdEV4rF4fLTF4q8Cb6YIf5eNh2FZdYgv60"
                    name={"Abhishekh Kumar Yadav"}
                    feedback={"You are skillfull coder with a strong understanding of a range of programming languages. You have a friendly, approachable nature, and team player who values the input of others and actively contributes to the success of projects."}
                    designation ={"Junior SDE at KYC Hub"}
                />
            </section>
        </div>
    )
};

const TestimonialCard = ({ img, name, feedback, designation }) => (
    <article>
        <img
            src={img}
            alt="User"
        />
        <h4>{name}</h4>
        <p>{feedback}</p>
        <h5>{designation}</h5>
    </article>
)

export default Testimonial