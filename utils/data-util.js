export const replaceMongoIdInArray = (array) => {
    const mappedArray = array.map(item => {
        const plainItem = JSON.parse(JSON.stringify(item));

        return {
            id: plainItem._id?.toString() || plainItem._id,
            ...plainItem
        }
    }).map(({ _id, ...rest }) => rest)
    return mappedArray;
}

export const replaceMongoIdInObject = (obj) => {
    const { _id, ...updatedObj } = { ...obj, id: obj._id.toString() }
    return updatedObj
}