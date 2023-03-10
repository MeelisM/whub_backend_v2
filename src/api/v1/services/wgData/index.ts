export async function getWargamingData(): Promise<IResponseDataWargaming> {
    const API_KEY_WG = process.env.API_KEY_WG as string;
    const requestUrl: string = `https://api.worldoftanks.eu/wot/encyclopedia/vehicles/?application_id=${API_KEY_WG}&fields=-radios%2C-tag%2C-suspensions%2C-provisions%2C-engines%2C-crew%2C-guns%2C-multination%2C-description%2C-is_premium_igr%2C-next_tanks%2C-modules_tree%2C-prices_xp%2C-price_gold%2C-price_credit%2C-default_profile%2C-turrets%2C-name%2C-images.small_icon%2C-images.big_icon`;
    try {
        const response = await fetch(requestUrl);
        const data = await response.json();

        if (data.status == 'error') {
            console.log(data.error.message);
        }
        return data as IResponseDataWargaming;
    } catch (error) {
        throw new Error(`Something went wrong with the request url: ${requestUrl}`);
    }
}

interface IResponseDataWargaming {
    error?: {
        field: string;
        message: string;
        code: number;
        value: string;
    };
    status: string;
    meta: {
        count: number;
        page_total: number;
        total: number;
        limit: number;
        page: number;
    };
    data: {
        is_gift: boolean;
        is_wheeled: boolean;
        short_name: string;
        nation: string;
        is_premium: boolean;
        tier: number;
        images: {
            contour_icon: string;
        };
        type: string;
        tank_id: number;
    }[];
}
