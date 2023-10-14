'use client'
import { motion } from "framer-motion";
import SocialMediaIcons from "../../components/ui/SocialMediaIcons";

const Soon = () => {
  return (
    <section id="soon" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl mb-5">
            Comming Soon
          </p>
          <div className="flex justify-center mt-5">
          </div>
        </div>
      </motion.div>

        <div className="bg-blue  p-4 mb-150 rounded-[20px] text-left">
          <h1 className="font-playfair font-semibold text-xl mb-5">Our team is still working hard with love to deliver you the best app</h1>
          <p className="font-playfair font-semibold text-xl mb-5">We're super excited about our upcoming app and we don't want you to miss out on all the awesomeness. 
          Write us an email, and we'll make sure to get in touch with you the moment it's ready to rock and roll. Get ready for an incredible experience!</p>
          <SocialMediaIcons/>
        </div>
        

    </section>
  );
};

export default Soon;
