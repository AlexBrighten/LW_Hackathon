import { motion } from "framer-motion";
import TagLine from "./Tagline";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {tag && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }} // Start smaller and transparent
          whileInView={{ scale: 1, opacity: 1 }} // Animate to full size and opacity on view
          transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
          viewport={{ once: true, amount: 0.5 }} // Trigger once when 50% in view
        >
          <TagLine className="mb-4 md:justify-center">{tag}</TagLine>
        </motion.div>
      )}
      {title && (
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="h2"
        >
          {title}
        </motion.h2>
      )}
      {text && (
        <motion.p
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="body-2 mt-4 text-n-4"
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

export default Heading;
