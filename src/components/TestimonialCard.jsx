import { motion } from "framer-motion";


const TestimonialCard = ({data, index}) => {
    return(
        <motion.div className="testimonial-card" initial={{opacity:0, x:"-50%"}} whileInView={{opacity:1, x:0}} transition={{ delay: index+0.5 ,duration: 1, ease: 'easeInOut'}} viewport={{ once: true }}>
            <p>
                {data.content}
            </p>
            <div className="test-btm-wrapper">
                <div className="profile-img">
                    <img src={data.img}/>
                </div>
                <div className="profilenames">
                    <h5>
                    {data.name}
                    </h5>
                    <p>
                    {data.title}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default TestimonialCard;