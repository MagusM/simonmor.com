import React, { ForwardedRef } from 'react';
import PureLink from '../PureLink';
import { getAllActiveLinks } from '@/utils/contants/constants';

interface MainDrawerProps {
    ref: ForwardedRef<HTMLDivElement>;
}

const MainDrawer: React.FC<MainDrawerProps> = React.forwardRef<
    HTMLDivElement,
    Omit<MainDrawerProps, 'ref'>
>((props, ref) => {
    return (
        <div
            className="items-center justify-between z-10 hidden w-[90%] md:flex md:w-auto md:order-1 
            absolute md:static max-sm:inset-y-14 max-sm:left-1/2 max-sm:transform max-sm:-translate-x-1/2"
            id="mobile-menu"
            ref={ref}
        >
            <ul
                className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg 
                md:flex-row md:space-x-8 md:mt-0 md:border-0
                bg-gray-800 md:bg-gray-900 border-gray-700"
            >
                {getAllActiveLinks()
                    .filter((obj) => obj.active === true)
                    .map((obj) => (
                        <li>
                            <PureLink
                                href={obj.href}
                                className="block py-2 pl-3 pr-4 rounded
                                md:p-0 text-white md:hover:text-primary-purple hover:bg-primary-purple
                                md:hover:bg-transparent border-gray-700 capitalize"
                                aria-current="page"
                            >
                                {obj.title}
                            </PureLink>
                        </li>
                    ))}
            </ul>
        </div>
    );
});

export default MainDrawer;
