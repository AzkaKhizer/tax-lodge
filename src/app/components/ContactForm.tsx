"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import { motion } from "framer-motion";

interface FormInputs {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();

  const [status, setStatus] = useState<string>("");

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setStatus("Submitting...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        reset();
      } else {
        setStatus("❌ Error sending message. Try again.");
      }
    } catch (error) {
      console.error("❌ Network error:", error);
      setStatus("⚠️ Network error. Try again.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mx-auto px-6 md:px-4 py-12 flex flex-col lg:flex-row items-center gap-10 mt-4"
    >
      {/* Left - Map */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="w-full flex justify-center"
      >
        <Image
          src="/map1.png"
          alt="Map"
          width={517}
          height={600}
          className="rounded-lg shadow-lg md:h-[600px]"
        />
      </motion.div>

      {/* Right - Form */}
      <div className="w-full 2xl:m-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-[#FF8B66] text-white text-sm md:text-lg 2xl:text-xl px-3 py-1 md:px-4 md:py-2 2xl:px-6 2xl:py-4 rounded-[10px] font-semibold"
        >
          CONTACT US
        </motion.button>
        <h2 className="text-[32px] md:text-[38px] 2xl:text-[42px] font-bold mt-1 md:w-[578px]">
          Let&apos;s Talk About Your Taxes
        </h2>
        <p className="text-gray-700 mt-2 text-sm md:text-lg 2xl:text-2xl">
          Your success starts with a conversation! We believe informed decisions lead to better financial outcomes. Our team is here to guide you through tax lodgment, accounting, and business advisory with clarity and confidence.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {["firstName", "lastName", "email", "phone", "subject", "message"].map((field, index) => (
            <motion.div
              key={field}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col ${field === "message" ? "col-span-1 sm:col-span-2" : "col-span-1"}`}
            >
              {field !== "message" ? (
                <input
                  {...register(field as keyof FormInputs, { required: true })}
                  type={field === "email" ? "email" : "text"}
                  placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)} *`}
                  className="border p-3 md:p-3 2xl:p-5 text-sm md:text-lg 2xl:text-2xl rounded-[10px] w-full"
                />
              ) : (
                <textarea
                  {...register("message", { required: true })}
                  placeholder="How can we help you? *"
                  rows={4}
                  className="border p-3 md:p-3 2xl:p-5 text-sm md:text-lg 2xl:text-2xl rounded-[10px] w-full"
                ></textarea>
              )}
              {errors[field as keyof FormInputs] && (
                <p className="text-red-500 text-xs">{`${field.charAt(0).toUpperCase() + field.slice(1)} is required.`}</p>
              )}
            </motion.div>
          ))}

          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#FF6600" }}
            type="submit"
            className="bg-[#FF8B66] text-white px-2 py-3 rounded-[10px] font-semibold col-span-1"
          >
            SEND NOW
          </motion.button>
        </form>

        {/* Status Message */}
        {status && <p className="mt-2 text-sm text-gray-700">{status}</p>}
      </div>
    </motion.section>
  );
};

export default ContactForm;
