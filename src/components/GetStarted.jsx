import { easeInOut, motion } from "framer-motion";


const wrapperVariant = {
    hidden: {
        opacity: 0,
        y: "-10%"
    },
    visible: {
        opacity: 1,
        y:0,
        transition: {
            ease: "easeInOut",
            delay: 0.5,
            duration: 1.5
        }
    }
}

const GetStarted = () => {
    return (
        <motion.div className="get-started-section" variants={wrapperVariant} initial="hidden" whileInView="visible">
            <motion.div  whileHover={{ scale: 1.02, y: -10 }} transition={{ease:"easeInOut", duration:0.3}} className="intro-img-wrapper">
                <img src="./images/illustration-intro.png" />
            </motion.div>
            <h1>
                All your files in one secure location, accessible anywhere.
            </h1>
            <p>
                Fylo stores all your most important files in one secure location. Access them wherever
                you need, share and collaborate with friends family, and co-workers.
            </p>
            <motion.div whileHover={{  scale: 1.05 }} transition={{ease:"easeInOut", duration:0.5}} className="btn-wrapper">
                <motion.button whileHover={{ opacity: 0.6 }} transition={{ease:"easeInOut", duration:0.5}}>
                    Get Started
                </motion.button>
            </motion.div>

        </motion.div>
    )
}

export default GetStarted;