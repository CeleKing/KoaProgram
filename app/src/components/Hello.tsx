import * as React from 'react';

export interface HelloProps {
    compiler: string, 
    framework: string
}

// export const Hello = (props: HelloProps) => {
//     <h1>Hello from {props.compiler} and {props.framework}!</h1>
// }

export default class Hello extends React.Component<HelloProps, {}> {
    render() {
        const { compiler, framework} = this.props;
        return <h1>Hello from {compiler} and {framework}!</h1>
    }
}

