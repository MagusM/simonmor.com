import React, { ForwardedRef } from 'react';

interface MainDrawerProps {
    ref: ForwardedRef<HTMLDivElement>;
}

const MainDrawer: React.FC<MainDrawerProps> = React.forwardRef<
    HTMLDivElement,
    Omit<MainDrawerProps, 'ref'>
>((props, ref) => {
    return (
        <div
            className="items-center justify-between z-10 hidden w-[90%] md:flex md:w-auto md:order-1 absolute md:static max-sm:inset-y-14 max-sm:left-1/2 max-sm:transform max-sm:-translate-x-1/2"
            id="mobile-menu"
            ref={ref}
        >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <a
                        href="#"
                        className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                        aria-current="page"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                        Services
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                        Pricing
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    );
});

export default MainDrawer;
