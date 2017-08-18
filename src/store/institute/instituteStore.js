const state = {
    institute: {}
};

const mutations = {
    SET_INSTITUTE (state, userObj){
        state.institute = userObj;
    },

    CLEAR_INSTITUTE (state, userObj){
        state.institute = null;
    }
};

const getters = {

    getInstitute(state)
    {
        return state.institute;
    }

};

const actions = {
    setInstituteObject : ( {commit}, userObj) => {
        commit('SET_INSTITUTE', userObj);
    },

    clearInstituteUser: ( {commit} ) => {
        commit('CLEAR_INSTITUTE');
    }
};

export default {
    state, mutations, getters, actions
}
