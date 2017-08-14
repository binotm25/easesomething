const state = {
    client: {
        school: "" ,username : "", email: "", mobile: "", address: "", aaddhar: "", bankName: "", accountNo: ""
    }
};

const mutations = {
    SET_CLIENT_USER (state, userObj){
        state.client = userObj;
    },

    CLEAR_CLIENT_USER (state, userObj){
        state.client = null;
    }
}

const getters = {
    getClientUser(state)
    {
        return state.userId;
    }
}

const actions = {
    setClientObject : ( {commit}, userObj) => {
        commit('SET_CLIENT_USER', userObj);
    },

    clearClientUser: ( {commit} ) => {
        commit('CLEAR_CLIENT_USER');
    }
}

export default {
    state, mutations, getters, actions
}
