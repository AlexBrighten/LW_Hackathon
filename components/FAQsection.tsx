import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define the structure of each FAQ item
interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  // Define the FAQ data array
  const faqData: FAQItem[] = [
    {
      question: "When is Hackfinity being held?",
      answer:
        "Hackfinity 2024 will be held on December 3-4, 2024, at SRM Institute of Science and Technology, Chennai.",
    },
    {
      question: "Who can participate in Hackfinity?",
      answer:
        "Hackfinity is open to students from all academic backgrounds. Participants can join individually or in teams of 1 to 4 members.",
    },
    {
      question: "When does the hackathon registration close?",
      answer:
        "Registration for Hackfinity opens on November 10, 2024, and closes on December 2, 2024, at 11:59 PM (GMT+5:30).",
    },
    {
      question: "Will I need a team to participate?",
      answer:
        "You’re absolutely welcome to participate solo! However, it’s important to note that only teams can submit hackathon projects. A team can consist of 1 to 4 members. If you’re looking for a team or additional team members, we’ve allocated time on Day 1 of the hackathon specifically for team formation. We strongly encourage participants to collaborate with others and form teams during this period. Teaming up allows you to incorporate diverse skillsets and perspectives into your project, enhancing your overall experience!",
    },
    {
      question: "Do all of my team members have to register for hackfinity?",
      answer:
        "Yes! Anyone who wish to participate in hackbangalore must register individually.",
    },
    {
      question:
        "How many challenge statements can a team submit their project under?",
      answer:
        "A team can submit their project under 1 challenge statement only during each hackathon.",
    },
    {
      question:
        "What happens to the projects developed during the hackathon after the event?",
      answer:
        "Participants will wholly own the intellectual property rights to the projects they develop during the hackathon. There are no obligations for participants to share, license, or commercialize their projects. Your creations are yours to explore and develop as you see fit.",
    },
    {
      question: "What are the judging criteria for the hackathon?",
      answer:
        "Projects will be judged based on the following criteria: creativity, technical complexity, design, and impact. We encourage participants to think creatively and develop projects that are innovative, technically sound, and have a positive impact on society.",
    },
    {
      question: "Who can I contact if I have any questions?",
      answer:
        "Contact the Hackfinty team on the official Event Discord or at livewires@srmist.edu.in for further clarifications!",
    },
  ];

  // expandedIndex can either be a number (for an open question) or null (no question is open)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Toggle the FAQ item by its index
  const toggleFAQ = (index: number): void => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      className="text-white p-8 rounded-lg w-full max-w-3xl mx-auto"
      style={{ backgroundColor: "#04071d", border: "1px solid #433a61" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold text-center mb-6"
      >
        Frequently Asked Questions
      </motion.h2>

      {faqData.map((item, index) => (
        <motion.div
          key={index}
          onClick={() => toggleFAQ(index)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer border border-gray-700 rounded-lg p-4 mb-4 transition-all duration-300"
        >
          <motion.h3 layout className="text-lg font-medium">
            {item.question}
          </motion.h3>

          <AnimatePresence initial={false}>
            {expandedIndex === index && (
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-gray-400 mt-2 overflow-hidden"
              >
                {item.answer}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default FAQSection;
