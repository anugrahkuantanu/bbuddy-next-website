'use client'
import { SubmitHandler, useForm } from "react-hook-form";
import SocialMediaIcons from "../../components/ui/SocialMediaIcons";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const {
    register,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);
  };

  return (
    <section id="contact" className="contact py-48 h-[calc(100vh-160px)]">

      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <div className="basis-1/3 justify-center">
          <p className="font-playfair font-semibold text-4xl text-blue mb-10">
          CONTACT US
          </p>
          <div className="hidden md:block">
          <SocialMediaIcons/>
          </div>
          
        </div>

        <div className="basis-2/3 mt-10 md:mt-0">
          <form
            target="_blank"
            onSubmit={handleSubmit(onSubmit)}
            action="https://formsubmit.co/info@bbuddy.ai"
            method="POST"
          >
            <input
              className="w-full dark:bg-white bg-gray-700 dark:text-black text-white font-semibold placeholder-opaque-black p-3 rounded-[10px] font-playfair"
              type="text"
              placeholder="NAME"
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
              className="w-full dark:bg-white bg-gray-700 dark:text-black text-white font-semibold placeholder-opaque-black p-3 mt-5 rounded-[10px] font-playfair"
              type="text"
              placeholder="EMAIL"
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
              className="w-full dark:bg-white bg-gray-700 dark:text-black text-white font-semibold placeholder-opaque-black p-3 mt-5 rounded-[10px] font-playfair"
              placeholder="MESSAGE"
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
              className="p-5 bg-tael font-semibold dark:text-white mt-5 hover:bg-red hover:text-deep-blue transition duration-500 rounded-[10px] font-playfair"
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
