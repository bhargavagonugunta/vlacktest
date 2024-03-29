import { zodResolver } from "@hookform/resolvers/zod";
import inquiryimage from "../../../assets/images/inquiryimage.jpeg";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { motion } from "framer-motion";
import { cardVariants } from "../../../utils/scrolls/Scroll";

const schema = z.object({
  Name: z.string().min(3),
  email: z.string().email(),
  url: z.string().url(),
});

type FormFields = z.infer<typeof schema>;

function SendInquiryPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };
  const { t } = useTranslation();
  return (
    <motion.div className="p-28 text-white" 
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.3 }}>
      <div
        className="h-screen w-full flex items-center justify-center"
        style={{ backgroundImage: `url(${inquiryimage})` }}
      >
        <div className="imgb bg-blue-800 bg-opacity-30 hidden lg:flex lg:flex-col lg:justify-center lg:items-center md:w-3/6 h-full lg:px-24  gap-6  md:text-left" >
          <motion.div variants={cardVariants}>
          <h1 className="text-5xl font-semibold leading-[66px] ">
            home-form-ttl {t("home-form-ttl")}
          </h1>
          <p className="text-base font-medium leading-[26px] ">
            {t("home-form-desc")}
          </p>
          </motion.div>
        </div>

        <div className="md:w-full lg:w-3/6 h-full bg-[#1C1E53] flex flex-col justify-center items-center gap-2 md:p-2 md:w-[432px]" >
          
          <motion.div className="lg:text-left flex flex-col gap-4 p-4 lg:p-0" variants={cardVariants}>
            <h1 className="text-3xl font-large ">{t("home-form-enq")}</h1>
          </motion.div>
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="p-2 w-full md:w-full flex flex-col gap-8 lg:px-16 md:w-[432px]"
            variants={cardVariants}
          >
            <div className="flex flex-col gap-8 mt-4">
              <div className="relative">
                <input
                  {...register("Name")}
                  type="text"
                  placeholder={t("home-form-name-plchold")}
                  className="rounded-lg bg-transparent p-4 border border-white border-opacity-5 outline-none w-full"
                />
                {errors.Name && (
                  <p className="text-red-500 absolute">
                    {errors.Name?.message}
                  </p>
                )}
              </div>
              <div className="relative">
                <input
                  {...register("email")}
                  type="email"
                  placeholder={t("home-form-email-plchold")}
                  className="rounded-lg bg-transparent p-4 border border-white border-opacity-5 outline-none w-full"
                />
                {errors.email && (
                  <p className="text-red-500 absolute">
                    {errors.email?.message}
                  </p>
                )}
              </div>
              <div className="relative">
                <input
                  {...register("url")}
                  type="text"
                  placeholder={t("home-form-url-plchold")}
                  className="rounded-lg bg-transparent p-4 border border-white border-opacity-5 outline-none w-full"
                />
                {errors.url && (
                  <p className="text-red-500 absolute">{errors.url?.message}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col items-center gap-6 mt-2">
              <button
                type="submit"
                className="bg-[#FCD980] text-black p-2 rounded-full w-full md:px-16 md:p-4 lg:w-full"
              >
                {t("home-form-btn")}
              </button>
              <a href="#" className="text-white">
                {t("home-form-link")} &#8594;
              </a>
            </div>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
}

export default SendInquiryPage;
