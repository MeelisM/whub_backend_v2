export async function getWn8Data() {
    const requestUrl: string = 'https://static.modxvm.com/wn8-data-exp/json/wn8exp.json';
    const response = await fetch(requestUrl);

    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const data: IResponseDataXvm = await response.json();
    return data;
}

interface IResponseDataXvm {
    data: Array<ISingleTankXvm>;
    header: {
        url: string;
        source: string;
        version: string;
    };
}

interface ISingleTankXvm {
    IDNum: number;
    expDef: number;
    expFrag: number;
    expSpot: number;
    expDamage: number;
    expWinRate: number;
}
