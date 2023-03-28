import { easeInOut, motion } from "framer-motion";
import { useState } from "react";


const GetAccess = () => {
    const [error, setError] = useState(false);
    const [textChange, setTextChange] = useState("");

    let handleOnChange = ( e ) => {
        setTextChange(e.target.value);
    }
    let handleClick = () =>{   
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        !re.test(textChange)?setError(true):setError(false);
       
    }

    return (
        <motion.div className="get-access-card"
            initial={{ opacity: 0, y: "50%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}>
            <h1>
                Get early access today
            </h1>
            <p>
                It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
                questions, our support team would be happy to help you.
            </p>
            <div className="access-input-wrapper">
                <input onChange={handleOnChange} placeholder="email@example.com" type="email" name="" id="" />
                <div className="second-btn-wrapper">
                    <motion.button onClick={handleClick} whileHover={{ opacity: 0.6 }} transition={{ ease: "easeInOut", duration: 0.5 }} >Get Started For Free</motion.button>
                </div>
                

            </div>
           { error&&(<p className="valid-email">
                Please enter a valid email address
            </p>)}
        </motion.div>
    )
}

export default GetAccess;