export interface CharProps {
    standing: Standing[];
    up: Up[];
    combo: Combo[];
    WallCombo: WallCombo[];
    Throw: Throw[];
    Extrahit: Extrahit[];
    Info: InfoProps[];
    Pattern: Pattern[];
    MainMove: MainMove[];
    [key: string]:
        | Standing[]
        | Up[]
        | Combo[]
        | Throw[]
        | Extrahit[]
        | InfoProps[];
}

export interface Standing {
    frame: any;
    damage: any;
    command: string;
    range: string;
    hitframe: any;
    state: string;
}

export interface Up {
    frame: any;
    damage: any;
    command: string;
    range: string;
    hitframe: any;
    state: string;
}

export interface Combo {
    command: string;
    state: string;
    [key: string]: boolean | number | string;
}

export interface WallCombo {
    command: string;
    state: string;
    [key: string]: boolean | number | string;
}

export interface Pattern {
    command: string;
    state: string;
    [key: string]: boolean | number | string;
}

export interface MainMove {
    command: string;
    damage: string;
    frame: string;
    guardframe: string;
    hitframe: string;
    range: string;
    nickname: string;
    state: string;
}

export interface Throw {
    command: string;
    frame: any;
    way: string;
    damage: any;
    state: string;
}

export interface Extrahit {
    command: string;
    state: string;
    win: string;
}

export interface InfoProps {
    punish: string;
    combo: string;
    dc: string;
    name: string;
}

export type Ops = {
    [key: string]: Object;
};
