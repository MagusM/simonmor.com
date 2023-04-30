declare module 'react-tilt' {
    import * as React from 'react';

    export interface TiltProps {
        tiltReverse?: boolean;
        tiltAngleXInitial?: number;
        tiltAngleYInitial?: number;
        tiltMaxAngleX?: number;
        tiltMaxAngleY?: number;
        tiltAxis?: 'x' | 'y' | 'xy';
        perspective?: number;
        scale?: number;
        transitionSpeed?: number;
        children?: React.ReactNode;
        className?: any;
    }

    export default class Tilt extends React.Component<TiltProps> {}
}
