import { easeInOut, motion } from "framer-motion";




const MiddleCards = ({data, left}) =>{
    return(
        <motion.div className="middle-card" initial={{scale:0, x:left?'-50%':'50%'}} whileInView={{scale:1 , x:0}} transition={{duration:0.7, ease: 'easeInOut'}}>
            <motion.div  className="card-img">
                {data.icon}
            </motion.div>
            <motion.div >
                <h3>{data.title}</h3>
                <p>{data.content}</p>
            </motion.div>
        </motion.div>
    )
}

export default MiddleCards;