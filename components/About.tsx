import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <div>
      <section id="about">
        <BentoGrid className="w-full py-10">
          <BentoGridItem
            id={6}
            title="Overview"
            description={
              <>
                <p style={{ marginBottom: "1rem", marginTop: "1rem" }}>
                  Welcome to Hackfinity – the next big stop on our journey
                  toward quality education for all!
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  Prepare for an electrifying 24-hour hackathon experience as we
                  gather bright minds from around the world at SRMIST. Hosted by
                  SRM Institute and Team Livewires, this event is set to ignite
                  innovation, collaboration, and impact on a global scale.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  Join us for a whirlwind of activity, featuring inspiring
                  keynote speeches, hands-on mentor hours, and friendly but
                  intense competition. With tracks focused on making education
                  more accessible, engaging, and powered by AI, Hackfinity
                  promises a showcase of groundbreaking projects aimed at
                  reshaping how we learn and teach.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  Get ready to team up, think big, and tackle some of the most
                  pressing challenges in education. Whether you’re here to win
                  part of the 25 thousand INR prize pool or to connect with
                  like-minded innovators, Hackfinity is the place to share ideas
                  and create something extraordinary.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  So gather your tools, bring your brightest ideas, and let’s
                  build a future where education is truly for everyone!
                </p>
              </>
            }
            className="lg:col-span-6 md:col-span-3 md:row-span-1"
            titleClassName="justify-center md:max-w-full max-w-full text-center"
          />
        </BentoGrid>
      </section>
      <section id="">
        <BentoGrid className="w-full py-10">
          <BentoGridItem
            id={7}
            title="Perks of Registering in SDG-4 (Quality Education)"
            description={
              <>
                {/* <h1 className="text-center text-2xl font-bold py-5">Perks of Registering in SDG-4 (Quality Education)</h1> */}

                <ul className="mt-10">
                  <li>
                    <strong>Access to All 17 SDG Events</strong>: Participate in
                    all SDG events, gaining a comprehensive understanding of
                    global challenges and solutions.
                  </li>
                  <li>
                    <strong>Certifications and Recognitions</strong>: Earn
                    globally acknowledged certificates that enhance your
                    personal and professional profile.
                  </li>
                  <li>
                    <strong>Cultural Events Participation</strong>: Experience
                    diverse cultural events celebrating art, music, and
                    traditions.
                  </li>
                  <li>
                    <strong>Networking Opportunities</strong>: Connect with
                    changemakers and leaders, fostering collaboration and
                    expanding your network.
                  </li>
                  <li>
                    <strong>Art and IoT Expo</strong>: Explore innovative
                    exhibitions showcasing the blend of technology and
                    creativity.
                  </li>
                  <li>
                    <strong>Skill-Building Workshops</strong>: Join workshops
                    covering technical, creative, and leadership skills led by
                    industry experts.
                  </li>
                  <li>
                    <strong>Global Exposure and Learning</strong>: Gain insights
                    into international strategies and practices for quality
                    education.
                  </li>
                </ul>
              </>
            }
            className="lg:col-span-6 md:col-span-3 md:row-span-1"
            titleClassName="justify-center md:max-w-full max-w-full text-center"
          />
        </BentoGrid>
      </section>
      <section id="">
        <BentoGrid className="w-full py-10">
          <BentoGridItem
            id={8}
            title="Hackathon Schedule"
            description={
              <>
                <ul className="mt-6 text-center ">
                  <li className="text-xl mb-5">
                    <strong>Day 1:</strong>
                  </li>
                  <ul className="gap-5  mb-10">
                    <li>
                      <strong>Start Time:</strong> December 3rd, 11:00 AM
                    </li>
                    <li>
                      <strong>End Time:</strong> December 3rd, 5:00 PM
                      (Hackathon Pause)
                    </li>
                    <br />
                    <br />
                    <li className="font-extrabold text-xl">
                      Participants can leave and return the next day.
                    </li>
                  </ul>
                  <li className="text-xl mb-5">
                    <strong>Day 2:</strong>
                  </li>
                  <ul className="gap-5 mb-10">
                    <li>
                      <strong>Resume Time:</strong> December 4th, 8:30 AM
                    </li>
                    <li>
                      <strong>End Time:</strong> December 4th, 11:00 AM
                    </li>
                  </ul>
                </ul>
              </>
            }
            className="lg:col-span-6 md:col-span-3 md:row-span-1"
            titleClassName="justify-center md:max-w-full max-w-full text-center"
          />
        </BentoGrid>
      </section>
      <section id="">
        <BentoGrid className="w-full py-10">
          <BentoGridItem
            id={9}
            title="Venue"
            description={
              <>
                <ul className="text-center gap-10">
                  <li> Lab No. 402</li>
                  <li>4th Floor</li>
                  <li>FSH Block-1</li>
                  <li>SRM Institute of Science and Technology</li>
                  <li>Kattankulathur Campus</li>
                </ul>
              </>
            }
            className="lg:col-span-6 md:col-span-3 md:row-span-1"
            titleClassName="justify-center md:max-w-full max-w-full text-center"
          />
        </BentoGrid>
      </section>
      <section id="">
        <BentoGrid className="w-full py-10">
          <BentoGridItem
            id={10}
            title=" Winners and runners-up will be revealed on "
            description={
              <>
                <ul className=" text-center mt-10">
                  <li>
                    <strong>Date:</strong> December 5th
                  </li>
                  <li>
                    <strong>Time:</strong> 5:00 PM
                  </li>
                  <li>
                    <strong>Venue:</strong> TPG Main Auditorium
                  </li>
                  <li>SRM Institute of Science and Technology</li>
                  <li>Kattankulathur Campus</li>
                </ul>
              </>
            }
            className="lg:col-span-6 md:col-span-3 md:row-span-1"
            titleClassName="justify-center md:max-w-full max-w-full text-center"
          />
        </BentoGrid>
      </section>
      <section id="">
        <BentoGrid className="w-full py-10">
          <BentoGridItem
            id={11}
            title="Registration details "
            description={
              <>
                <ul className=" text-center mt-10">
                  <li>Each participant should register individually.</li>
                  <li>
                    You can form a team with a minimum of 2 members and a
                    maximum of 4 participants.
                  </li>
                  <li>
                    You can form your team on the spot at the hackathon venue.
                  </li>
                </ul>
              </>
            }
            className="lg:col-span-6 md:col-span-3 md:row-span-1"
            titleClassName="justify-center md:max-w-full max-w-full text-center"
          />
        </BentoGrid>
      </section>
    </div>
  );
};


export default Grid;
