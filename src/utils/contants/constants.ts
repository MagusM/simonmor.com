import { innerNavigation, outerNavigation } from '@/constants';

const getHrefFromConstants = (key: string, inner: boolean = true) => {
    const array = inner ? [...innerNavigation] : [...outerNavigation];
    return array
        .filter((obj) => obj.title === key)
        .map((obj) => obj.href)
        .pop();
};

const getTitleFromConstants = (key: string, inner: boolean = true) => {
    const array = inner ? [...innerNavigation] : [...outerNavigation];
    return array
        .filter((obj) => obj.title === key)
        .map((obj) => obj.title)
        .pop();
};

const getAllActiveLinks = (inner: boolean = true) => {
    const array = inner ? [...innerNavigation] : [...outerNavigation];
    return array.filter((obj) => obj.active === true);
};

export { getHrefFromConstants, getTitleFromConstants, getAllActiveLinks };
