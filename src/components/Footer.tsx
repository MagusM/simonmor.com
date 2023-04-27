import { logo } from '@/assets';
import { innerNavigation, outerNavigation } from '@/constants';
import {
    getHrefFromConstants,
    getTitleFromConstants,
} from '@/utils/contants/constants';

const Footer = () => {
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
        <footer className="bg-primary dark">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="flex max-xs:flex-col justify-between max-xs:items-center w-full">
                    <div className="mb-6 md:mb-0 space-y-4 flex flex-col items-center md:items-start md:justify-between w-full">
                        <a
                            href="https://flowbite.com/"
                            className="flex items-center"
                        >
                            <img src={logo} alt="logo" className="h-8 mr-3" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                                Simon&nbsp;| FullStack Dev
                            </span>
                        </a>
                        {/* this div holds the download button and the whtaapp link */}
                        <div className="flex flex-row px-12 md:px-4 justify-between items-center space-x-5 max-xs:w-full">
                            <a
                                href="whatsapp://send?phone=+972542055028&text=Hello,%20I'd%20like%20to%20chat%20with%20you%20on%20WhatsApp!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer w-10 h-10"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 64 64"
                                    xmlSpace="preserve"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        fill="#25D366"
                                        d="m45.132 40.499-6.47-1.217c-1.102-.206-1.836-1.326-1.642-2.499.194-1.174 1.243-1.956 2.345-1.75l7.074 1.33a4.438 4.438 0 0 1 3.488 5.145c-.01.054-.027.102-.037.155-.327 1.173-.875 2.247-1.678 3.171-4.615 5.305-15.559 3.777-24.443-3.416-8.885-7.19-12.347-17.321-7.73-22.625 1.098-1.264 2.56-2.131 4.264-2.631.143-.036.281-.087.424-.108 0 0 .002-.003.005-.003a4.3 4.3 0 0 1 4.614 2.616l2.519 6.749c.373.998-.155 2.102-1.181 2.465-1.023.364-2.155-.15-2.528-1.148l-2.315-6.204a.89.89 0 0 0-1.091-.475 4.952 4.952 0 0 0-1.646 1.219c-3.195 3.673.043 11.37 7.236 17.19s15.615 7.563 18.809 3.891c.197-.228.361-.473.508-.729a.757.757 0 0 0 .084-.232.793.793 0 0 0-.609-.894zM6 42a2 2 0 1 1-3.999.001A2 2 0 0 1 6 42zm26 22a31.812 31.812 0 0 1-14.002-3.239c-.065-.028-.128-.058-.189-.087s-.124-.056-.185-.087a5.488 5.488 0 0 0-3.915-.393l-.08.019-5.804 1.612c-.021.005-.046.005-.068.013a4.53 4.53 0 0 1-2.415 0 4.545 4.545 0 0 1-3.18-5.588c.014-.056.019-.098.031-.148L3.889 50H4a2 2 0 1 1 4 0h.041l-.065.235c-.024.216-.08.419-.169.608L6.012 57.31c0 .004.007-.003.007.002a.544.544 0 0 0 .639.677c.005 0-.002.01 0 .01l5.952-1.654.032-.004a9.456 9.456 0 0 1 6.737.651c.02.01.043.013.065.02A27.835 27.835 0 0 0 32 60c15.465 0 28-12.536 28-28S47.465 4 32 4C16.536 4 4 16.536 4 32c0 .587.029 1.169.065 1.745l-.09.008c.01.08.025.162.025.247a2 2 0 1 1-3.947-.441A29.912 29.912 0 0 1 0 32C0 14.327 14.327 0 32 0s32 14.327 32 32-14.327 32-32 32z"
                                    />
                                </svg>
                            </a>

                            <button
                                onClick={handleDownloadClick}
                                className="relative inline-flex items-center justify-center p-0.5
                                        overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br 
                                        from-cyan-500 to-primary-purple 
                                        group-hover:from-cyan-500 group-hover:to-primary-purple hover:text-white text-white 
                                        focus:ring-4 focus:outline-none dark:focus:ring-primary-purple"
                            >
                                <span
                                    className="relative px-4 py-2 flex flex-row justify-around items-center space-x-1 md:space-x-4
                                            transition-all ease-in duration-75 
                                            bg-gray-900 rounded-md group-hover:bg-opacity-0"
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
                                    <span>Download CV</span>
                                </span>
                            </button>
                        </div>
                    </div>
                    {/* links section */}
                    <div className="relative flex justify-end items-center w-full">
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                                    Resources
                                </h2>
                                <ul className="text-text-secondary font-medium text-secondary">
                                    <li className="mb-4">
                                        <a
                                            href={getHrefFromConstants(
                                                'read.cv',
                                                false
                                            )}
                                            className="hover:underline no-underline capitalize"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {getTitleFromConstants(
                                                'read.cv',
                                                false
                                            )}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={getTitleFromConstants(
                                                'medium',
                                                false
                                            )}
                                            className="hover:underline capitalize"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {getTitleFromConstants(
                                                'medium',
                                                false
                                            )}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                                    Follow Me
                                </h2>
                                <ul className="text-secondary font-medium">
                                    <li className="mb-4">
                                        <a
                                            href={getHrefFromConstants(
                                                'gitHub',
                                                false
                                            )}
                                            className="hover:underline capitalize"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {getTitleFromConstants(
                                                'gitHub',
                                                false
                                            )}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={getHrefFromConstants(
                                                'css-battle',
                                                false
                                            )}
                                            className="hover:underline capitalize"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {getTitleFromConstants(
                                                'css-battle',
                                                false
                                            )}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                                    Legal
                                </h2>
                                <ul className="text-secondary font-medium">
                                    <li className="mb-4">
                                        <a
                                            href={getHrefFromConstants(
                                                'privacy policy'
                                            )}
                                            className="hover:underline capitalize"
                                        >
                                            {getTitleFromConstants(
                                                'privacy policy'
                                            )}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={getHrefFromConstants(
                                                'terms & conditions'
                                            )}
                                            className="hover:underline capitalize"
                                        >
                                            {getTitleFromConstants(
                                                'terms & conditions'
                                            )}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer last section */}
                <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm sm:text-center text-gray-400">
                        © {new Date().getFullYear()} &nbsp;
                        <span className="text-red-400">Simon Mor</span> All
                        Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <a
                            href={getHrefFromConstants('gitHub')}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-500 hover:text-white"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
