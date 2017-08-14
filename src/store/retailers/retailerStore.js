const state = {
    retailer: {
        username : "", email: "", mobile: "", address: "", aaddhar: "", shopName: "", bankName: "", accountNo: ""
    }
};

const mutations = {
    SET_RETAILER_USER (state, userObj){
        state.retailer = userObj;
    },

    CLEAR_RETAILER_USER (state, userObj){
        state.retailer = null;
    }
};

const getters = {

    getRetailerUser(state)
    {
        return state.userId;
    }

};

const actions = {
    setRetailerObject : ( {commit}, userObj) => {
        commit('SET_RETAILER_USER', userObj);
    },

    clearRetailerUser: ( {commit} ) => {
        commit('CLEAR_RETAILER_USER');
    }
};

export default {
    state, mutations, getters, actions
}
