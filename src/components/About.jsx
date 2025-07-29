import '../styles/About.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function About() {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.2, // Adjust sensitivity
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [controls, inView]);

    return (
        <motion.section
            id='about'
            className='about-container'
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="about-quote">
                <p>“Where logic meets aesthetics — I craft every pixel with purpose <br />
                    and every line of code with care to build experiences <br />
                    that feel as effortless <br /> as they look.”</p>
            </div>

            <div className='about-me'>
                <h3>About Me</h3>
                <p>
                    Hi, I’m Dipika — an undergraduate student and aspiring front-end developer with a passion for UI/UX design.
                    I believe great design should feel effortless.
                </p>
                <br />
                <p>
                    I come from a curious and detail-oriented mindset, always striving to create clean, responsive, and user-first interfaces.
                    I focus on building real projects that combine functionality with beauty.
                    I value simplicity, empathy, and good design that speaks without shouting.
                </p>
                <br />
                <h4>My goals?</h4>
                <p>To grow into a developer who not only writes clean code but also understands people behind the screen.</p>
            </div>
        </motion.section>
    );
}
