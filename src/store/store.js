import Vue from 'vue';
import Vuex from 'vuex';
import userStore from './user/userStore';
import distributorStore from './distributor/distributorStore';
import clientStore from './clients/clientsStore';
import retailerStore from './retailers/retailerStore';
import instituteStore from './institute/instituteStore';
import popInfoStore from './popInfo/popInfoStore';

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
        retailerStore,
        instituteStore,
        popInfoStore
    },

    state: {
        month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],

        banks : ['State Bank of India', 'ICICI', 'Axis', 'HDFC', 'Bank Of India', 'Bank Of Baroda', 'United Bank of India', 'Allahabad Bank', 'ING Vyashaya', 'Punjab and Sind Bank']
    },

    getters:{
        getBanks(state)
        {
            return state.banks;
        },

        getMonths(state){
            return state.month;
        }
    },

    strict: debug

});
