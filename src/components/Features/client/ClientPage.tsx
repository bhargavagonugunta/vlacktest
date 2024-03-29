import { ClientData } from "./ClientData";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { cardVariants } from "../../../utils/scrolls/Scroll";
function ClientPage() {
    const {t}=useTranslation()
    return (
        <motion.div className="flex flex-col items-center justify-center p-10 gap-y-14 " 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}>
            {ClientData.map(item => {
                return (
                    <motion.div key={item.id} className={` lg:flex items-center justify-center gap-24 w-screen ${
                        item.id % 2 === 0 ? "flex-row-reverse bg-[#F4F6FC]" : "flex-row"
                      }`}  variants={cardVariants}>
                        <div className="text-center md:text-left flex flex-col md:flex md:flex-col gap-4 p-6 md:w-2/6 justify-center ">
                            <h5 className="font-semibold">{ t(`${item.label}`)}</h5>
                            <h1 className=" text-3xl font-semibold ">{ t(`${item.title}`)}</h1>
                            <p className="text-base ">{ t(`${item.content}`)}</p>
                        </div>

                        <div className="p-4 md:w-2/6 md:h-2/6">
                            <img src={item.img} className=" h-4/6 object-cover p-12 md:p-8" />
                        </div>
                    </motion.div>
                ) 
            })}

        </motion.div>

    )
}

export default ClientPage;



