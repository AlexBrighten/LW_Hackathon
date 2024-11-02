import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-10">
        <BentoGridItem
          id={6}
          title="Overview"
          description={
            <>
              <p style={{ marginBottom: "1rem", marginTop: "1rem" }}>
                Welcome to Hackfinity – the next major milestone on our global
                journey toward achieving quality education for all!
              </p>
              <p style={{ marginBottom: "1rem" }}>
                Join us for an electrifying 24-hour hackathon experience as we
                bring together brilliant minds from around the world at SRMIST.
                Hosted by SRM Institute and Team Livewires, this event is more
                than just a coding marathon – it’s a call to action to reimagine
                education. Hackfinity is set to spark innovation, foster
                collaboration, and make a lasting impact, with participants
                working side-by-side to tackle some of the most pressing
                educational challenges.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                At Hackfinity, you’ll dive into a whirlwind of activity, from
                keynote speeches by industry thought leaders to hands-on mentor
                hours with experienced professionals. It’s an opportunity to
                gain insights, develop new skills, and refine ideas in an
                inspiring environment of nonstop problem-solving. The intense
                competition will push teams to think beyond boundaries and
                deliver groundbreaking solutions for the future of learning.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                Whether you’re passionate about inclusive education, gamified
                learning, or AI-driven advancements, Hackfinity is designed to
                be a launchpad for impactful projects that bridge the gaps in
                education and make learning accessible and engaging for all.
                This hackathon isn’t just about the thrill of competition – it’s
                a movement to create meaningful change and bring educational
                opportunities to every corner of the world.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                So gather your tools, prepare your ideas, and bring your energy
                – together, let’s redefine the future of education. Join us at
                Hackfinity, where your vision meets a community ready to make a
                difference!
              </p>
            </>
          }
          className="lg:col-span-6 md:col-span-3 md:row-span-1"
          titleClassName="justify-center md:max-w-full max-w-full text-center"
        />
      </BentoGrid>
    </section>
  );
};

export default Grid;
