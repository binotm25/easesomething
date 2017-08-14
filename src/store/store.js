import Vue from 'vue';
import Vuex from 'vuex';
import userStore from './user/userStore';
import distributorStore from './distributor/distributorStore';
import clientStore from './clients/clientsStore';
import retailerStore from './retailers/retailerStore';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

// export const store = new Vuex.Store({
//
//     // modules: {
//     //     userStore
//     // },
//
//     state: {
//         authUser: {
//             username : "",
//             id: "",
//             access_token: "",
//             refresh_token: ""
//         },
//
//         month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
//
//         notification:{
//             messageNotification: true,
//             otherNotification: true
//         }
//     },
//
//     strict: debug
//
// });

export default new Vuex.Store({

    modules: {
        userStore,
        distributorStore,
        clientStore,
        retailerStore
    },

    state: {
        month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    },

    strict: debug

});
