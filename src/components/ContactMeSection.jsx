import { useState } from "react"
import { motion } from "motion/react"
import { useForm } from 'react-hook-form';
import axios from "../../axios"
import { useStagger } from "../../Hooks/useStagger"
import ToastMszBox from "./ToastMszBox"

const ContactMeSection = () => {

    const [isEmailSent, setIsEmailSent] = useState(false);
    const { staggerContainer, staggerItem } = useStagger();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const sendData = async (formData) => {
        try {
            console.log(formData);
            const res = await axios.post("/api/submit", formData);
            if (res.status === 200) {
                setIsEmailSent(true);
                reset();
                setTimeout(() => {
                    setIsEmailSent(false);
                }, 3000);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <ToastMszBox show={isEmailSent} message="Email Sent Successfully!" variant="success" />
            <div id="contactme" className="mx-10 md:mx-20 lg:mx-40 h-70 rounded-xl" >
                <motion.div className="flex flex-col items-center select-none" {...staggerContainer}>
                    <motion.span className="mt-2 text-5xl font-bold text-center" {...staggerItem}>Let's Work Together</motion.span>
                    <motion.span className="mt-6 text-center" {...staggerItem}>Thanks for stopping by! Always open to discussing exciting opportunities, collaborating on meaningful projects, or exploring roles where my skills can create value. If you think we'd be a great fit, feel free to reach me ✌️</motion.span>
                </motion.div>
                <motion.div className="mt-15 md:mx-20 lg:mx-30 rounded-2xl flex bg-[#111527]" {...staggerContainer}>
                    {isSubmitting &&
                        <ToastMszBox show={true} message="Waiting..." variant="waiting"/>  // have to pass the show prop true for displaying
                    }
                    <motion.form
                        className="w-full px-7 pt-4 pb-7"
                        onSubmit={handleSubmit(sendData)}
                        {...staggerItem}
                    >
                        <div className="flex flex-col p-4">
                            <label htmlFor="name" className="text-lg select-none">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="h-9 p-3 border border-white/60 outline-none hover:border-blue-500 focus:border-blue-500 rounded-md"
                                placeholder="Your Name"
                                {...register("name", { required: "Please enter your good name" })}
                            />
                            {errors.name && <span className="mt-1 text-red-500 select-none">{errors.name.message}</span>}
                            <label htmlFor="email" className="mt-4 text-lg select-none">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="h-9 p-3 border border-white/60 outline-none hover:border-blue-500 focus:border-blue-500 rounded-md"
                                placeholder="your@gmail.com"
                                {...register("email", { required: "Please enter your email" })}
                            />
                            {errors.email && <span className="mt-1 text-red-500 select-none">{errors.email.message}</span>}
                            <label htmlFor="message" className="mt-4 text-lg select-none">Message</label>
                            <textarea
                                name="message"
                                className="h-30 p-3 resize-none border border-white/60 outline-none hover:border-blue-500 focus:border-blue-500 rounded-md"
                                placeholder="Your Message...."
                                {...register("message", { required: "Please enter your message" })}
                            />
                            {errors.message && <span className="mt-1 text-red-500 select-none">{errors.message.message}</span>}
                            <button
                                type="submit"
                                className="mt-5 bg-[#f54900] hover:bg-[#f54a00b9] text-white font-bold py-2 px-4 rounded-lg"
                                disabled={isSubmitting}
                            >
                                Send
                            </button>
                        </div>
                    </motion.form>
                </motion.div>
                <div className="h-20"></div>
            </div>
        </>
    )
}

export default ContactMeSection