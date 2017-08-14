const state = {
    distributor: {
        username : "", email: "", mobile: "", address: "", aaddhar: "", shopName: "", bankName: "", accountNo: ""
    }
};

const mutations = {
    SET_DISTRIBUTOR_USER (state, userObj){
        state.distributor = userObj;
    },

    CLEAR_DISTRIBUTOR_USER (state, userObj){
        state.distributor = null;
    }
};

const getters = {

    getDistributorUser(state)
    {
        return state.userId;
    }

};

const actions = {
    setDistributorObject : ( {commit}, userObj) => {
        commit('SET_DISTRIBUTOR_USER', userObj);
    },

    clearDistributorUser: ( {commit} ) => {
        commit('CLEAR_DISTRIBUTOR_USER');
    }
};

export default {
    state, mutations, getters, actions
}
