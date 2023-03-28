import { easeInOut, motion } from "framer-motion";
const ProductiveSection = () => {
    return (
        <div className="productive-section" >
            <motion.div className="productive-img">
                <motion.img  initial={{opacity:0, x:"-50%"}} whileInView={{opacity:1, x:0}} transition={{ duration: 1, ease: 'easeInOut'}}  src="./images/illustration-stay-productive.png" />
            </motion.div>
            <motion.div className="productive-desc" initial={{ opacity:0}} whileInView={{ opacity:1}} transition={{delay: 0.5, duration: 1}}>
                <motion.h1  initial={{y: -100, x:100, rotate: 90}} whileInView={{y:0, x: 0, rotate:0}} transition={{delay: 0.5, duration: 1.2}}>
                    Stay productive, wherever you are
                </motion.h1>
                <p>  Never let location be an issue when accessing your files. Fylo has you covered for all of your file
                    storage needs.
                </p>
                <p>
                    Securely share files and folders with friends, family and colleagues for live collaboration. No email
                    attachments required.
                </p>
                <motion.a>See how Fylo works
                    <motion.div   initial={{y:-2}} animate={{y:2}} transition={{repeat:Infinity, repeatType:"mirror", duration:1}} className="arrow-circle" >
                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <circle id="b" cx="6" cy="6" r="6" />
                                <filter x="-25%" y="-25%" width="150%" height="150%" filterUnits="objectBoundingBox" id="a"><feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
                                    <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1" /><feColorMatrix values="0 0 0 0 0.384313725 0 0 0 0 0.878431373 0 0 0 0 0.850980392 0 0 0 0.811141304 0" in="shadowBlurOuter1" />
                                </filter>
                            </defs>
                            <g fill="none" fill-rule="evenodd"><g transform="translate(2 2)">
                                <use fill="#000" filter="url(#a)" xlinkhref="#b" />
                                <use fill="#62E0D9" xlinkhref="#b" />
                            </g>
                                <path d="M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z" fill="#1B2330" />
                            </g>
                        </svg>
                    </motion.div>

                </motion.a>

            </motion.div>

        </div>
    )
}

export default ProductiveSection;