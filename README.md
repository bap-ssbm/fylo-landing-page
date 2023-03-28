# Frontend Mentor - Fylo dark theme landing page solution

This is a solution to the [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 



### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](https://prnt.sc/A4knzqWgN5cg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://bap-ssbm.github.io/fylo-landing-page/]

## My process

desktop- first html css first then add framer-motion

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- framer-motion


### What I learned

a simpler way of using framer-motion. with whileInView.

also used grid instead of flex for the first time in a project.

using gap instead of margin. for flex and grid components


```html
        <motion.div className="testimonial-card" initial={{opacity:0, x:"-50%"}} whileInView={{opacity:1, x:0}} transition={{ delay: index+0.5 ,duration: 1, ease: 'easeInOut'}} viewport={{ once: true }}>
```
im proud of this one, adding delay based on this index of the card, this is for the testimonials.
```css
.middle-section{
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 100px;
    row-gap: 50px;
    width: 850px;
    margin: 100px 0px;
}
```
first grid usage in a while. made it look nice without grid. this is shown in the middle portion of the page.
```js
{dataTestimonials.map((data, i)=>{
                return <TestimonialCard data={data} index = {i}/>
            })}
}
```

basically from earlier, using the index of the array of each item, to delay the animation based on each index
