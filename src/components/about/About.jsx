import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/founder.webp";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Food for life</h4>
          <p>
            We are company of the people who love to serve the most delicious
            food. The place for most tasty burgers on the enitre earth.
          </p>

          <p>
            Explore the various type of food and burgers. Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Anonymous</h3>
            </div>

            <p>
              Anonymous,the founder of "Food for life". Affiliated to Good
              Taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
