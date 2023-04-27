import { Link } from 'react-router-dom';

export type PureLinkProps = {
    href: string;
    name?: string;
    isExternal?: boolean;
    className?: string;
    children?: React.ReactNode;
};

const PureLink: React.FC<PureLinkProps> = ({
    href,
    name,
    isExternal,
    ...props
}) => {
    return (
        <a href={href} target={isExternal ? '_blank' : '_self'} {...props}>
            {name ? name : ''}
            {props.children ? props.children : ''}
        </a>
    );
};

export default PureLink;
