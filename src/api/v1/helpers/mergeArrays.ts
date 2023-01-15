const mergeArrays = (wn8Data: any, wgData: any, mergeKey: string) => {
    const mergedArray: any[] = [];

    for (const obj1 of wn8Data) {
        for (const obj2 of wgData) {
            if (obj1[mergeKey] === obj2[mergeKey]) {
                mergedArray.push({ ...obj1, ...obj2 });
            }
        }
    }

    return mergedArray;
};
