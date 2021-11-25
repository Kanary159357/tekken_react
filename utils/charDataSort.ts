import { TableOrder } from './TableOrder';

export const sortbyKey = (a: any, b: any) => {
    if (a.hasOwnProperty('frame') && b.hasOwnProperty('frame')) {
        if (a['frame'] === b['frame']) {
            return a['command'] < b['command'] ? -1 : 1;
        } else {
            return parseInt(a['frame']) < parseInt(b['frame']) ? -1 : 1;
        }
    } else {
        return a['command'] < b['command'] ? 1 : -1;
    }
};

export const sortbyCounter = (a: any, b: any) => {
    const av = a['command'].includes('(C)');
    const bv = b['command'].includes('(C)');
    if (av === bv) {
        return a['command'] < b['command'] ? -1 : 1;
    } else if (av === false) {
        return -1;
    } else {
        return 1;
    }
};
export const order = (arr: any[], category: string) => {
    const orderByContent = (category: string) => {
        const order = TableOrder[category];
        return function (a: any, b: any) {
            return order.indexOf(a) - order.indexOf(b);
        };
    };
    return arr.map((cur: { [key: string]: string }) =>
        Object.keys(cur)
            .sort(orderByContent(category))
            .reduce((obj: any, key: string) => {
                obj[key] = cur[key];
                return obj;
            }, {})
    );
};

export const getOrderedCharData = (data: any) =>
    Object.keys(data).reduce((acc: any, cur: any) => {
        if (cur === 'Info') {
            acc[cur] = data[cur];
            return acc;
        }
        if (
            [
                'Extrahit',
                'combo',
                'WallCombo',
                'Pattern',
                'MainMove',
                'Throw',
            ].includes(cur)
        ) {
            acc[cur] = order(data[cur], cur).sort(sortbyCounter); // 알파벳순 카운터순
        } else if (['standing', 'up'].includes(cur)) {
            acc[cur] = order(data[cur], cur).sort(sortbyKey); //프레임순
        }
        return acc;
    }, {});
