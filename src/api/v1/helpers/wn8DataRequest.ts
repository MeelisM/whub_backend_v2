export async function getWn8Data(): Promise<IResponseDataXvm> {
    const requestUrl: string = 'https://static.modxvm.com/wn8-data-exp/json/wn8exp.json';
    const response = await fetch(requestUrl);

    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const data: IResponseDataXvm = await response.json();
    return data;
}

interface IResponseDataXvm {
    data: {
        IDNum: number;
        expDef: number;
        expFrag: number;
        expSpot: number;
        expDamage: number;
        expWinRate: number;
    }[];
    header: {
        url: string;
        source: string;
        version: string;
    };
}
