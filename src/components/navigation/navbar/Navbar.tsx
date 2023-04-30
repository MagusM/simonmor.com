import { Collapse, Drawer } from 'flowbite';
import { useEffect, useReducer, useRef, useState } from 'react';
import type {
    CollapseOptions,
    CollapseInterface,
    DrawerOptions,
    DrawerInterface,
} from 'flowbite';
import SideDrawer from '../SideDrawer';
import MainDrawer from '../MainDrawer';
import { Link } from 'react-router-dom';
import { logo, menu, close } from '@/assets';

// state type
type State = {
    isNavigationDrawerOpen: boolean;
    isSideDrawerOpen: boolean;
};

//initial state
const initialState: State = {
    isNavigationDrawerOpen: false,
    isSideDrawerOpen: false,
};

//action types
type openNavigationDrawerAction = {
    type: 'OPEN_NAVIGATION_DRAWER';
};
type closeNavigationDrawerAction = {
    type: 'CLOSE_NAVIGATION_DRAWER';
};
type openSideDrawerAction = {
    type: 'OPEN_SIDE_NAVIGATION';
};
type closeSideDrawerAction = {
    type: 'CLOSE_SIDE_NAVIGATION';
};
type resetAction = {
    type: 'reset';
};

type Action =
    | openNavigationDrawerAction
    | openSideDrawerAction
    | resetAction
    | closeNavigationDrawerAction
    | closeSideDrawerAction;

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'OPEN_NAVIGATION_DRAWER':
            return { ...initialState, isNavigationDrawerOpen: true };
        case 'CLOSE_NAVIGATION_DRAWER':
            return { ...initialState, isNavigationDrawerOpen: false };
        case 'OPEN_SIDE_NAVIGATION':
            return { ...initialState, isSideDrawerOpen: true };
        case 'CLOSE_SIDE_NAVIGATION':
            return { ...initialState, isSideDrawerOpen: false };
        case 'reset':
            return { ...initialState };
        default:
            throw new Error('Unsupported action type');
    }
};

const Navbar = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [isMainNavVisible, setIsMainNavVisible] = useState<boolean>(false);
    /**
     * main nav drawer
     */
    const mainTargetEl = useRef<HTMLDivElement>(null);
    const mainTriggerEl = useRef<HTMLButtonElement>(null);
    let mainNavigation: CollapseInterface;
    useEffect(() => {
        const mainOptions: CollapseOptions = {
            onCollapse: () => {
                setIsMainNavVisible(false);
                console.log('main element has been collapsed');
            },
            onExpand: () => {
                // sideDrawer.hide();
                console.log('main element has been expanded');
            },
            onToggle: () => {
                console.log('main element has been toggled');
                setIsMainNavVisible((prevState) => !prevState);
            },
        };

        mainNavigation = new Collapse(
            mainTargetEl.current!,
            mainTriggerEl.current,
            mainOptions
        );

        return () => {
            mainNavigation.collapse();
        };
    }, []);

    /**
     * side nav drawer
     */
    // let sideDrawer: DrawerInterface;
    // const sideDrawerTargetEl = useRef<HTMLDivElement>(null);
    // useEffect(() => {
    //     const sideDrawerOptions: DrawerOptions = {
    //         placement: 'left',
    //         backdrop: true,
    //         bodyScrolling: true,
    //         edge: false,
    //         edgeOffset: '',
    //         backdropClasses: 'bg-gray-900 bg-opacity-50 fixed inset-0 z-30',
    //         onHide: () => {
    //             console.log('side drawer is hidden');
    //         },
    //         onShow: () => {
    //             mainNavigation.collapse();
    //             console.log('side drawer is shown');
    //         },
    //         onToggle: () => {
    //             console.log('side drawer has been toggled');
    //         },
    //     };

    //     sideDrawer = new Drawer(sideDrawerTargetEl.current, sideDrawerOptions);

    //     return () => {
    //         sideDrawer.hide();
    //     };
    // }, []);

    // const handleSideDrawerClicked = () => {
    //     if (sideDrawer.isVisible()) {
    //         return sideDrawer.hide();
    //     } else {
    //         sideDrawer.show();
    //     }
    // };

    const handleClickOutsideMainDrawer = () => {
        console.log(`mainNavigation._visible: ${mainNavigation._visible}`);
        mainNavigation.collapse();
    };

    return (
        <nav className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* logo */}
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        window.scrollTo(0, 0);
                    }}
                >
                    <img
                        src={logo}
                        alt="logo"
                        className="w-9 h-9 object-contain"
                    />
                    <p className="text-white text-[18px] font-bold cursor-pointer flex">
                        Simon&nbsp;
                        <span className="sm:block hidden">| FullStack Dev</span>
                    </p>
                </Link>
                {/* will hold the avatar and the mobile navigation triggre */}
                <div className="flex items-center md:order-2 w-24 justify-end">
                    {/* avatar button */}
                    {/* <button
                        type="button"
                        className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-600"
                        id="user-menu-button"
                        data-drawer-target="drawer-navigation"
                        data-drawer-show="drawer-navigation"
                        aria-controls="drawer-navigation"
                        onClick={handleSideDrawerClicked}
                    >
                        <span className="sr-only">Open user menu</span>
                        <img
                            className="w-8 h-8 rounded-full"
                            src="https://randomuser.me/api/portraits/women/6.jpg"
                            alt="user"
                        />
                    </button> */}
                    {/* navigation button */}
                    <button
                        ref={mainTriggerEl}
                        data-collapse-toggle="mobile-menu"
                        type="button"
                        className="inline-flex items-center p-4 ml-1 text-sm
                        rounded-lg md:hidden focus:outline-none focus:ring-inset 
                         text-secondary focus:bg-inherit"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                        onClick={() =>
                            setIsMainNavVisible((prevState) => !prevState)
                        }
                    >
                        <span className="sr-only">Open main menu</span>
                        {/* <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg> */}
                        <img
                            src={isMainNavVisible ? close : menu}
                            alt="menu"
                            className="w-[22px] h-[22px] object-contain cursor-pointer"
                        />
                    </button>
                </div>

                {/* side drawer component */}
                {/* <SideDrawer
                    ref={sideDrawerTargetEl}
                    handleClose={handleSideDrawerClicked}
                /> */}

                {/* navigation drawer */}
                <MainDrawer
                    ref={mainTargetEl}
                    triggerCollapse={handleClickOutsideMainDrawer}
                />
            </div>
        </nav>
    );
};

export default Navbar;
