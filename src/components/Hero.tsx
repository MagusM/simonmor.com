import { motion } from 'framer-motion';
import { styles } from '@/styles';
import { HeroCanvas } from './canvas';
import ScrollAnimation from './ScrollAnimation';

const Hero = (props: any) => {
    const handleDownloadClick = () => {
        const url = '/files/resume.pdf';
        const link = document.createElement('a');
        link.href = url;
        link.download = `simon_mor_resume_${new Date().getFullYear()}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="relative w-full h-screen mx-auto">
            <div
                className={`${styles.paddingX} absolute inset-0 top-8  max-w-7xl mx-auto flex flex-row items-start gap-4`}
            >
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-primary-purple" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>
                <div className="flex flex-col gap-y-4 md:gap-y-6 justify-between items-start">
                    {/* short desc about me */}
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm{' '}
                        <span className="text-primary-purple">Simon</span>
                    </h1>
                    <p className={`${styles.heroSubText}  text-white-100 z-10`}>
                        I develop 3D visuals, user{' '}
                        <br className="sm:block hidden" /> interfaces, servers
                        and web applications.
                    </p>
                    {/* download cv */}
                    <button
                        onClick={handleDownloadClick}
                        className="dark relative inline-flex items-center justify-center p-0.5 cursor-pointer z-10
                                        overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br 
                                        from-cyan-500 to-primary-purple 
                                        group-hover:from-cyan-500 group-hover:to-primary-purple hover:text-white text-white 
                                        focus:ring-4 focus:outline-none focus:ring-primary-purple bg-transparent"
                    >
                        <span
                            className="relative px-4 py-2 flex flex-row justify-around items-center space-x-4
                                            transition-all ease-in duration-75 
                                            bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                        >
                            <svg
                                data-name="Layer 3"
                                className="w-6 h-6"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 128 128"
                            >
                                <path d="M75.978 24.711H52.026a2.11 2.11 0 0 0-2.111 2.111V55h-9.33a2.111 2.111 0 0 0-1.658 3.418l23.42 29.694a2.111 2.111 0 0 0 3.315 0l23.411-29.695A2.111 2.111 0 0 0 87.415 55h-9.326V26.822a2.11 2.11 0 0 0-2.111-2.111zm7.086 34.51L64 83.4 44.939 59.221h7.088a2.11 2.11 0 0 0 2.111-2.111V28.933h19.728V57.11a2.11 2.11 0 0 0 2.111 2.111zM34.52 101.178a2.11 2.11 0 0 0 2.111 2.111h54.738a2.111 2.111 0 0 0 0-4.222H36.631a2.11 2.11 0 0 0-2.111 2.111z" />
                            </svg>
                            <span className="">
                                Download{' '}
                                <span className="hover:text-red-500">CV</span>
                            </span>
                        </span>
                    </button>
                </div>
            </div>

            <HeroCanvas {...props} />

            {/* scroll animation */}
            <div className="absolute bottom-24 w-full flex justify-center items-center">
                <a href="#about">
                    <ScrollAnimation />
                </a>
            </div>
        </section>
    );
};

export default Hero;
