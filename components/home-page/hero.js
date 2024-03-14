import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/vivek1.jpg"
          alt="Vivek Sharma"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Vivek </h1>
      <p>
        I blog about the web development - especially frontend frameworks like
        React or Angular
      </p>
    </section>
  );
}

export default Hero;
