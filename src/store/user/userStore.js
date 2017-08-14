const state = {
    authUser: {
        username : "",
        id: "",
        type: "",
        access_token: "",
        refresh_token: ""
    },

    notification:{
        messageNotification: true,
        otherNotification: true
    }
};

const mutations = {
    SET_AUTH_USER (state, userObj){
        state.authUser = userObj;
    },

    CLEAR_AUTH_USER (state, userObj){
        state.authUser = null;
    },

    storeAuthUser(state, data){
        state.authUser.access_token     = data[0].access_token;
        state.authUser.refresh_token    = data[0].refresh_token;
        state.authUser.id               = data[1].id;
        state.authUser.username         = data[1].name;
        state.authUser.type             = data[1].type;
    }
};

const getters = {

    getAuthUser(state)
    {
        return state.authUser;
    },

    getHeader(state){

        if(state.authUser !== null){
            const headers = {
                'Accept'        :   'application/json',
                'Authorization' :   'Bearer '+ state.authUser.access_token
            }

            return headers;
        }else{
            return null;
        }
    }

};

const actions = {
    setUserObject : ( {commit}, userObj) => {
        commit('SET_AUTH_USER', userObj);
    },

    setUserObjectFinal : ( {commit}, userObj) => {
        commit('storeAuthUser', userObj);
    },

    clearAuthUser: ( {commit} ) => {
        commit('CLEAR_AUTH_USER');
    }
};

export default {
    state, mutations, getters, actions
}
