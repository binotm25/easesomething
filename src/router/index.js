import Home from '@/components/main/home';
import Login from '@/components/auth/login';
import Register from '@/components/auth/register';
import ActivateUser from '@/components/auth/activateUser';
import Dashboard from '@/components/main/dashboard';
import distributorAdd from '@/components/main/distributor/add';
import totalTable from '@/components/main/totalTable';
import single from '@/components/main/distributor/single';

import clientAdd from '@/components/main/client/add';
import totalTableClient from '@/components/main/client/total';
import singleClient from '@/components/main/client/single';

import retailerAdd from '@/components/main/retailer/add';
import totalTableretailer from '@/components/main/retailer/total';
import singleRetailer from '@/components/main/retailer/single';
import feePaymentRetailer from '@/components/main/retailer/recharge';

import paymentInvoice from '@/components/partials/invoice/feePayment';

export default[
    { path: '/', name: 'Home', component: Home, meta: {title: 'Home', dashboard: false} },
    { path: '/login', name: 'Login', component: Login, meta: {title: 'Login', dashboard: false} },
    { path: '/register', name: 'Register', component: Register, meta: {title: 'Register', dashboard: false} },
    { path: '/user-activate/:email/:code', name: 'ActivateUser', component: ActivateUser, meta: {title: 'Activate User', dashboard: false} },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard, meta: {title: 'Dashboard', requiresAuth: true} },

    { path: '/manage/distributor/add', name: 'distributor.add', component: distributorAdd, meta: {title: 'Add Distributor', requiresAuth: true, requiresAdmin: true} },
    { path: '/manage/distributor/total', name: 'distributor.total', component: totalTable, meta: {title: 'Total Distributor', requiresAuth: true, requiresAdmin: true} },
    { path: '/manage/distributor/single/:userId', name: 'distributor.single', component: single, meta: {title: 'Distributor ', requiresAuth: true, requiresAdmin: true} },

    { path: '/manage/client/add', name: 'client.add', component: clientAdd, meta: {title: 'Add Clients', requiresAuth: true} },
    { path: '/manage/client/total', name: 'client.total', component: totalTableClient, meta: {title: 'Total Clients', requiresAuth: true} },
    { path: '/manage/client/single/:userId', name: 'client.single', component: singleClient, meta: {title: 'Client ', requiresAuth: true} },

    // Retailers Pages

    { path: '/manage/retailer/add', name: 'retailer.add', component: retailerAdd, meta: {title: 'Add Retailer', requiresAuth: true} },
    { path: '/manage/retailer/total', name: 'retailer.total', component: totalTableretailer, meta: {title: 'Total Retailers', requiresAuth: true} },
    { path: '/manage/retailer/single/:userId', name: 'retailer.single', component: singleRetailer, meta: {title: 'Retailer ', requiresAuth: true} },

    { path: '/fee/payment', name: 'recharge.retailer', component: feePaymentRetailer, meta: {title: 'Fee Payment', requiresAuth: true, requiresRetailer: true} },


    { path: '/fee/payment/invoice', name: 'payment.invoice', component: paymentInvoice, meta: {title:'Payment Invoice', requiresAuth: true} }

];
