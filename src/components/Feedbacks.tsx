import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';

interface Testimonial {
    testimonial: string;
    name: string;
    designation: string;
    company: string;
    image: string;
    index?: number;
}

const FeedbackCard = (feedback: Testimonial) => {
    return (
        <motion.div
            variants={fadeIn('', 'spring', feedback.index! * 0.5, 0.75)}
            className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
        >
            <p className="text-white font-black text-[48px]">"</p>
            {/* testimonial */}
            <div className="mt-1">
                <p className="text-white tracking-wider text-[18px]">
                    {' '}
                    {feedback.testimonial}{' '}
                </p>
                <div className="mt-7 flex justify-between items-center gap-1">
                    <div className="flex-1 flex flex-col">
                        <p className="text-white font-medium text-[16px]">
                            <span className="blue-text-gradient">@</span>{' '}
                            {feedback.name}
                        </p>
                        <p className="mt-1 text-secondary text-[12px]">
                            {feedback.designation} of {feedback.company}
                        </p>
                    </div>

                    <img
                        src={feedback.image}
                        alt={`feedback-by-${feedback.name}`}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                </div>
            </div>
        </motion.div>
    );
};

const Feedbacks = () => {
    return (
        <div className="mt-12 bg-black-100 rounded-[20px]">
            <div
                className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
            >
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>What others say</p>
                    <h2 className={styles.sectionHeadText}>Testimonials.</h2>
                </motion.div>
            </div>
            <div
                className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}
            >
                {testimonials.map((testimonial: Testimonial, index: number) => (
                    <FeedbackCard
                        key={`feedback-${testimonial.name}`}
                        index={index}
                        {...testimonial}
                    />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Feedbacks, 'feedback');
