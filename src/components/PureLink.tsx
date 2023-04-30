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
    className,
    ...props
}) => {
    console.log();
    return (
        <a
            href={href}
            target={isExternal ? '_blank' : '_self'}
            className={className}
            {...props}
        >
            {name ? name : ''}
            {props.children ? props.children : ''}
        </a>
    );
};

export default PureLink;
