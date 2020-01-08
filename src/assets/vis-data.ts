const commonSize = 24;
const commonBorder = 2;
const commonShape = 'circularImage';
const clusterImage = '/assets/images/cluster.svg';
const instanceImage = '/assets/images/instance.svg';
const descriptorImage = '/assets/images/descriptor.svg';
const commonPadding = 38;
const clusterColor = {
    border: '#fff',
    background: '#000',
    highlight: {
        border: '#5800FF',
        background: '#000'
    }
};
const instanceColor = {border: '#000', background: '#f6f6f6'};
const descriptorColor = {border: '#000', background: '#969595'};
export const graphNodes = [
    {
        id: 1,
        font: {
            color: '#fff',
            size: 20,
            strokeWidth: 1,
            strokeColor: '#000'
        },
        level: 1,
        shape: commonShape,
        shapeProperties: {},
        image: clusterImage,
        imagePadding: commonPadding,
        size: commonSize,
        borderWidth: commonBorder,
        borderWidthSelected: commonBorder,
        color: clusterColor
    },
    {
        id: 2,
        font: {
            color: '#fff',
            size: 20,
            strokeWidth: 1,
            strokeColor: '#000'
        },
        level: 2,
        shape: commonShape,
        shapeProperties: {},
        image: instanceImage,
        imagePadding: commonPadding,
        size: commonSize,
        borderWidth: commonBorder,
        borderWidthSelected: commonBorder,
        color: instanceColor
    },
    {
        id: 3,
        font: {
            color: '#fff',
            size: 20,
            strokeWidth: 1,
            strokeColor: '#000'
        },
        level: 2.5,
        shape: commonShape,
        shapeProperties: {},
        image: instanceImage,
        imagePadding: commonPadding,
        size: commonSize,
        borderWidth: commonBorder,
        borderWidthSelected: commonBorder,
        color: instanceColor
    },
    {
        id: 4,
        font: {
            color: '#fff',
            size: 20,
            strokeWidth: 1,
            strokeColor: '#000'
        },
        level: 2,
        shape: commonShape,
        shapeProperties: {},
        image: instanceImage,
        imagePadding: commonPadding,
        size: commonSize,
        borderWidth: commonBorder,
        borderWidthSelected: commonBorder,
        color: instanceColor
    },
    {
        id: 5,
        font: {
            color: '#fff',
            size: 20,
            strokeWidth: 1,
            strokeColor: '#000'
        },
        level: 3.6,
        shape: commonShape,
        shapeProperties: {},
        image: descriptorImage,
        imagePadding: commonPadding,
        size: commonSize,
        borderWidth: commonBorder,
        borderWidthSelected: commonBorder,
        color: descriptorColor
    }
];

export const graphEdges = [
    {from: 1, to: 2, dashes: true, title: 'MySQL in Cluster 1'},
    {from: 1, to: 4, dashes: true},
    {from: 1, to: 3, dashes: true},
    {from: 4, to: 5, color: {color: '#f7f7f7'}},
    {from: 3, to: 5, color: {color: '#f7f7f7'}},
    {from: 2, to: 5, color: {color: '#f7f7f7'}},
    {from: 3,
    to: 4,
    color: {color: '#f7f7f7'},
    width: 10,
    arrows: {
        middle: {
            enabled: true,
            imageHeight: 16,
            imageWidth: 16,
            scaleFactor: 1,
            src: '/assets/images/link.svg',
            type: 'image'
        }
    }},
    {from: 3,
    to: 2,
    color: {color: '#f7f7f7'},
    width: 10,
    arrows: {
        middle: {
            enabled: true,
            imageHeight: 16,
            imageWidth: 16,
            scaleFactor: 1,
            src: '/assets/images/link.svg',
            type: 'image'
        }
    }}
];
