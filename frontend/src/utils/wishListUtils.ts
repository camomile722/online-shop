export const updateWisList = (state: any) => {
    state.numberOfItems = state.items.length;
    localStorage.setItem("wishList", JSON.stringify(state));
    return state;
};
