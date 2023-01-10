export async function getWn8Data(): Promise<IResponseDataXvm> {
    const requestUrl: string = 'https://static.modxvm.com/wn8-data-exp/json/wn8exp.json';

    try {
        const response = await fetch(requestUrl);
        const data = await response.json();

        if (!response.ok) {
            console.log(response.statusText);
        }

        return data as IResponseDataXvm;
    } catch (error) {
        throw new Error(`Something went wrong with the request url ${requestUrl}`);
    }
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
getWn8Data();
