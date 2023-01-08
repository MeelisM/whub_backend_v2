import dotenv from 'dotenv';
dotenv.config();

export async function getWargamingData() {
    const API_KEY = process.env.API_KEY as string;
    const requestUrl: string = `https://api.worldoftanks.eu/wot/encyclopedia/vehicles/?application_id=${API_KEY}&fields=-radios%2C-tag%2C-suspensions%2C-provisions%2C-engines%2C-crew%2C-guns%2C-multination%2C-description%2C-is_premium_igr%2C-next_tanks%2C-modules_tree%2C-prices_xp%2C-price_gold%2C-price_credit%2C-default_profile%2C-turrets%2C-name%2C-images.small_icon%2C-images.big_icon`;
    const response = await fetch(requestUrl);

    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const data: IResponseDataWargaming = await response.json();
    console.log('[RESPONSE]: Success! Tanks list recieved');
    return data;
}

interface IResponseDataWargaming {
    status: string;
    meta: {
        count: number;
        page_total: number;
        total: number;
        limit: number;
        page: number;
    };
    data: Array<ISingleTankWargaming>;
}

interface ISingleTankWargaming {
    is_gift: boolean;
    is_wheeled: boolean;
    short_name: string;
    nation: string;
    is_premium: boolean;
    tier: number;
    images: ISingleTankImage;
    type: string;
    tank_id: number;
}

interface ISingleTankImage {
    contour_icon: string;
}
