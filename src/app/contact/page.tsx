'use client'
import { SubmitHandler, useForm } from "react-hook-form";
import SocialMediaIcons from "../../components/ui/SocialMediaIcons";


const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };


  return (
    <section id="contact" className="contact md:py-48 py-4 h-[calc(100vh-160px)]">

      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <div className="basis-1/3 justify-center">
          <p className=" font-semibold text-4xl mb-10">
          CONTACT US
          </p>
          <div className="hidden md:block justify-center">
            <SocialMediaIcons/>
          </div>
        </div>

        <div className="basis-2/3 mt-10 md:mt-0">
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/anugrah.kuantanu@bbuddy.ai"
            method="POST"
          >
            <input
              className="w-full dark:bg-white bg-gray-700 dark:text-black text-white font-semibold placeholder-opaque-black p-3 rounded-[10px] "
              type="text"
              placeholder="Name"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              className="w-full dark:bg-white bg-gray-700 dark:text-black text-white font-semibold placeholder-opaque-black p-3 mt-5 rounded-[10px] "
              type="text"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full dark:bg-white bg-gray-700 dark:text-black text-white font-semibold placeholder-opaque-black p-3 mt-5 rounded-[10px] "
              placeholder="Message"
              rows={4}
              cols={50}
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

            <button
              className="p-5 font-semibold dark:bg-white bg-slate-500 dark:text-black text-white mt-5 hover:bg-red hover:text-deep-blue transition duration-500 rounded-[10px] "
              type="submit"
            >
              SEND US A MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
