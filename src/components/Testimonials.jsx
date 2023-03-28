import TestimonialCard from "./TestimonialCard";

const dataTestimonials = [{
    img : "./images/profile-1.jpg",
    name: "Satish Patel",
    title : "Founder & CEO, Huddle",
    content :"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
},{
    img : "./images/profile-2.jpg",
    name: "Bruce McKenzie",
    title : "Founder & CEO, Huddle",
    content :"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
},{
    img : "./images/profile-3.jpg",
    name: "Iva Boyd",
    title : "Founder & CEO, Huddle",
    content :"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
}]



const Testimonials= () => {
    return (
        <div className="testimonials">
            <img className="quote-img" src="./images/bg-quotes.png"/>
            {dataTestimonials.map((data, i)=>{
                return <TestimonialCard data={data} index = {i}/>
            })}
        </div>
    )
}

export default Testimonials;