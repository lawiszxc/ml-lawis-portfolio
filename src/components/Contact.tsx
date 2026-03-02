import { motion } from "motion/react";
import { ImagesSlider } from "@/components/ui/images-slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IoIosSend } from "react-icons/io";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

const images = [
  "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please verify the reCAPTCHA");
      return;
    }

    if (!form.current) return;

    try {
      setLoading(true);

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      alert("Message sent successfully!");
    } catch (error) {
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-auto max-w-full mt-22" id="contact">
        <ImagesSlider
          className="h-50 hover:scale-102 cursor-default"
          images={images}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
            <motion.p className="font-bold text-xl md:text-6xl bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 py-4 px-30">
              <h2 className="text-accent">Get in touch.</h2>
              <h6 className="text-accent font-light text-justify mt-2 px-2">
                I am open to freelance work, team projects, or full-time jobs.
                You can message me anytime for questions or offers, and I will
                reply as soon as I can.
              </h6>
            </motion.p>
          </motion.div>
        </ImagesSlider>
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-2 px-30 py-13 gap-2">
            <Input
              className="h-12 w-full border-2 border-gray-300"
              id="input-field-full-name"
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />
            <Input
              className="h-12 w-full border-2 border-gray-300"
              id="input-field-email"
              type="text"
              placeholder="Email"
              name="email"
              required
            />

            <Input
              className="h-12 w-full col-span-2 border-2 border-gray-300"
              id="input-field-subject"
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />

            <Textarea
              className="col-span-2 h-60 border-2 border-gray-300"
              id="textarea-message"
              placeholder="Message"
              required
            />

            <ReCAPTCHA
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              onChange={(value: string | null) => setCaptchaValue(value)}
            />

            <Button className="col-span-2 hover:scale-105 gap-2" type="submit">
              <IoIosSend size={18} />
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
