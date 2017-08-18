const state = {
    info: {},
    payment:{}
};

const mutations = {
    SET_POP_INFO (state, userObj){
        state.info = userObj;
    },

    CLEAR_POP_INFO (state, userObj){
        state.info = null;
    },

    SET_POP_PAYMENT (state, userObj){
        state.payment = userObj;
    },

    CLEAR_POP_PAYMENT (state, userObj){
        state.payment = null;
    }
};

const getters = {

    getPopInfo(state)
    {
        return state.info;
    },

    getPopPayment(state)
    {
        return state.payment;
    }

};

const actions = {
    setPopInfoObject : ( {commit}, userObj) => {
        commit('SET_POP_INFO', userObj);
    },

    clearPopInfo: ( {commit} ) => {
        commit('CLEAR_POP_INFO');
    },

    setPopPaymentObject : ( {commit}, userObj) => {
        commit('SET_POP_PAYMENT', userObj);
    },

    clearPopPayment: ( {commit} ) => {
        commit('CLEAR_POP_PAYMENT');
    }
};

export default {
    state, mutations, getters, actions
}
