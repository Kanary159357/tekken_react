export const TableOrder: { [key: string]: string[] } = {
    standing: ['frame', 'command', 'damage', 'range', 'hitframe', 'state'],
    up: ['frame', 'command', 'damage', 'range', 'hitframe', 'state'],
    Throw: ['command', 'damage', 'frame', 'state', 'way'],
    combo: ['command', 'state'],
    Extrahit: ['command', 'state'],
    WallCombo: ['command', 'state'],
    MainMove: [
        'command',
        'nickname',
        'damage',
        'frame',
        'guardframe',
        'hitframe',
        'range',
        'state',
    ],
    Pattern: ['command', 'state', 'win'],
};

export const Category = [
    'MainMove',
    'standing',
    'up',
    'Throw',
    'combo',
    'WallCombo',
    'Extrahit',
    'Pattern',
    'Info',
];
