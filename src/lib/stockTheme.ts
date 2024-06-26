export type ComponentColor = {
    backgroundColor?: string;
    opacity?: number;
    color?: string;
};

export type ResizerColor = {
    backgroundColor?: string;
    borderColor?: string;
};

export type Theme = {
    table?: ComponentColor;
    stripes?: ComponentColor;
    rowHighlight?: ComponentColor;
    rowSelection?: ComponentColor;
    pinnedColumnsDivider?: {
        width?: string;
        style?: 'dashed' | 'dotted' | 'double' | 'groove' | 'inset' | 'outset' | 'ridge' | 'solid' | 'unset';
        color?: string;
    },
    resizer?: {
        width?: string;
        overlay?: {
            opacity?: number;
            item?: ResizerColor;
            positiveDelta?: ResizerColor;
            negativeDelta?: ResizerColor;
        }
    };
};

export const stockLight: Theme = {
    table: {
        backgroundColor: '255, 255, 255',
        opacity: 1,
        color: 'inherit'
    },
    stripes: {
        backgroundColor: '0, 0, 0',
        opacity: 0.04,
        color: 'inherit'
    },
    rowHighlight: {
        backgroundColor: '0, 0, 0',
        opacity: 0.07,
        color: 'inherit'
    },
    rowSelection: {
        backgroundColor: '227, 240, 254',
        opacity: 1,
        color: 'inherit'
    },
    pinnedColumnsDivider: {
        width: '0.1em',
        style: 'solid',
        color: 'darkgray'
    },
    resizer: {
        width: '0.4em',
        overlay: {
            opacity: 0.7,
            item: {
                backgroundColor: 'lightblue',
                borderColor: 'blue'
            },
            positiveDelta: {
                backgroundColor: 'lightgreen',
                borderColor: 'green'
            },
            negativeDelta: {
                backgroundColor: 'pink',
                borderColor: 'red'
            }
        }
    }
};

export const stockDark: Theme = {
    table: {
        backgroundColor: '0, 0, 0',
        opacity: 1,
        color: 'inherit'
    },
    stripes: {
        backgroundColor: '255, 255, 255',
        opacity: 0.07,
        color: 'inherit'
    },
    rowHighlight: {
        backgroundColor: '255, 255, 255',
        opacity: 0.15,
        color: 'inherit'
    },
    rowSelection: {
        backgroundColor: '15, 25, 74',
        opacity: 1,
        color: 'inherit'
    },
    pinnedColumnsDivider: {
        width: '0.1em',
        style: 'solid',
        color: 'lightgray'
    },
    resizer: {
        width: '0.4em',
        overlay: {
            opacity: 0.7,
            item: {
                backgroundColor: '#0578ea',
                borderColor: '#13aeff'
            },
            positiveDelta: {
                backgroundColor: 'lightgreen',
                borderColor: 'green'
            },
            negativeDelta: {
                backgroundColor: 'pink',
                borderColor: 'red'
            }
        }
    }
};
