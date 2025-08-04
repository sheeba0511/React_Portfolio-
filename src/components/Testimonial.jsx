import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>
      <section>
        <TestimonialCard
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzJ2JLgVibfEgXZYoTzNAECI0QJ4vg2jtN5ZnuAb7VNLKr8AfdcF6ErzhozQ74U4wBfg&usqp=CAU"
          name={"Er. Abu Hanzala Rehan Ansari"}
          feedback={
            "Your logical thinking, positive attitude and strong work ethic makes you an asset to a team. You are excellent coder with a great personality and a valuable contributor to a project."
          }
          designation={"Software Development Engineer at KYC Hub"}
        />
        <TestimonialCard
          img="https://www.shutterstock.com/image-photo/modern-office-portrait-stylish-hispanic-260nw-2101929370.jpg"
          name={"Abhishekh Kumar Yadav"}
          feedback={
            "You are skillfull coder with a strong understanding of a range of programming languages. You have a friendly, approachable nature, and team player who values the input of others and actively contributes to the success of projects."
          }
          designation={"Junior SDE at KYC Hub"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ img, name, feedback, designation }) => (
  <article>
    <img src={img} alt="User" />
    <h4>{name}</h4>
    <p>{feedback}</p>
    <h5>{designation}</h5>
  </article>
);

export default Testimonial;
