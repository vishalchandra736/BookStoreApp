export const addToBag = (data) => {
    return {
        type: 'Add_To_Bag',
        payload: data,
    };
};