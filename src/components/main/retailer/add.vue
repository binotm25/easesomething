<template lang="html">
    <!-- /.row -->
    <div id="page-wrapper">
        <div class="container-fluid">
            <header-top></header-top>
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <div class="white-box">
                        <h3 class="box-title m-b-0">Add A New Retailer</h3>
                        <p class="text-muted m-b-30 font-13"> All the fields marked with * are compulsory!</p>
                        <form class="form-horizontal">

                            <div class="form-group row">
                                <label for="inputEmail3" class="col-sm-3 control-label col-form-label">
                                    Retailer Username<sup>*</sup>
                                </label>
                                <div class="col-sm-9">
                                    <input class="form-control" v-validate="{ rules: { required: true } }" type="text" name="username" placeholder="Username" v-model="retailer.username">
                                    <span v-show="errors.has('username')">{{ errors.first('username') }}</span>
                                    <!-- <input type="text" class="form-control" id="inputEmail3" placeholder="Username"> -->
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="inputEmail3" class="col-sm-3 control-label col-form-label">
                                    Mobile No<sup>*</sup>
                                </label>
                                <div class="col-sm-9">
                                    <input class="form-control" v-validate="{ rules: { required: true, numeric: true, min: 10, max:10 } }" type="number" name="mobile" placeholder="Mobile No." v-model="retailer.mobile">
                                    <span v-show="errors.has('mobile')">{{ errors.first('mobile') }}</span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="inputEmail3" class="col-sm-3 control-label col-form-label">
                                    Email Id<sup>*</sup>
                                </label>
                                <div class="col-sm-9">
                                    <input class="form-control" v-validate="{ rules: { required: true, email: true } }" type="email" name="email" placeholder="User Email" v-model="retailer.email">
                                    <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="inputEmail3" class="col-sm-3 control-label col-form-label">
                                    Aadhar Number<sup>*</sup>
                                </label>
                                <div class="col-sm-9">
                                    <input type="text" v-validate="{ rules: { required: true, max: 12 } }" class="form-control text-uppercase" name="aadhar" placeholder="Aadhar Number" v-model="retailer.aadhar">
                                    <span v-show="errors.has('aadhar')">{{ errors.first('aadhar') }}</span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="inputEmail3" class="col-sm-3 control-label col-form-label">
                                    Firm/Shop name<sup>*</sup>
                                </label>
                                <div class="col-sm-9">
                                    <input type="text" v-validate="{ rules: { required: true } }" class="form-control" name="shop_name" placeholder="Shop Name" data-vv-as="Shop Name" v-model="retailer.shopName">
                                    <span v-show="errors.has('shop_name')">{{ errors.first('shop_name') }}</span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="inputEmail3" class="col-sm-3 control-label col-form-label">
                                    Address<sup>*</sup>
                                </label>
                                <div class="col-sm-9">
                                    <textarea class="form-control" v-validate="{ rules: { required: true, max:300 } }" name="address" rows="4" v-model="retailer.address"></textarea>
                                    <span v-show="errors.has('address')">{{ errors.first('address') }}</span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="inputEmail3" class="col-sm-3 control-label col-form-label">GPS Coordinates</label>
                                <div class="col-sm-9">
                                    <input type="text" v-validate="{ rules: { max:20 } }" class="form-control" name="gps" placeholder="GPS Coordinates" v-model="retailer.gps">
                                    <span v-show="errors.has('gps')">{{ errors.first('gps') }}</span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="inputEmail3" class="col-sm-3 control-label col-form-label">
                                    Bank Name<sup>*</sup>
                                </label>
                                <div class="col-sm-9">
                                    <select v-validate="{ rules: { required: true } }" class="form-control" name="bank_name" data-vv-as="Bank Name" v-model="retailer.bankName">
                                        <option value="" selected>Select a Bank</option>
                                        <option v-for="(banks, index) in bankNameDatabase" :value="index">{{ banks }}</option>
                                    </select>
                                    <span v-show="errors.has('bank_name')">{{ errors.first('bank_name') }}</span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="inputEmail3" class="col-sm-3 control-label col-form-label">
                                    Bank Branch<sup>*</sup>
                                </label>
                                <div class="col-sm-9">
                                    <input type="text" v-validate="{ rules: { required: true } }" class="form-control" name="bank_branch" placeholder="Branch of Your Bank" data-vv-as="Bank Branch" v-model="retailer.bankBranch">
                                    <span v-show="errors.has('bank_branch')">{{ errors.first('bank_branch') }}</span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="inputEmail3" class="col-sm-3 control-label col-form-label">
                                    Bank Account Number<sup>*</sup>
                                </label>
                                <div class="col-sm-9">
                                    <input type="text" v-validate="{ rules: { required: true, numeric: true } }" class="form-control" name="account_number" placeholder="Bank Account Number" data-vv-as="Account Number" v-model="retailer.accountNumber">
                                    <span v-show="errors.has('account_number')">{{ errors.first('account_number') }}</span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="inputPassword3" class="col-sm-3 control-label col-form-label">
                                    Password<sup>*</sup>
                                </label>
                                <div class="col-sm-9">
                                    <input type="password" v-validate="{ rules: { required: true, max: 20 } }" class="form-control" name="password" placeholder="Password" v-model="retailer.password">
                                    <span v-show="errors.has('password')">{{ errors.first('password') }}</span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="inputPassword4" class="col-sm-3 control-label col-form-label">
                                    Re Password<sup>*</sup>
                                </label>
                                <div class="col-sm-9">
                                    <input type="password" v-validate="{ rules: { required: true, max: 20, confirmed: 'password' } }" class="form-control" name="re_password" placeholder="Retype Password" data-vv-as="Re Password" v-model="retailer.passwordConfirmation">
                                    <span v-show="errors.has('re_password')">{{ errors.first('re_password') }}</span>
                                </div>
                            </div>

                            <div class="form-group m-b-0">
                                <div class="offset-sm-3 col-sm-9">
                                    <button type="button" @click="addretailer" class="btn btn-info waves-effect waves-light m-t-10" :disabled="isSubmitted">
                                        <img v-bind:class="{ 'hidden': !isSubmitted }" src="static/svg-loaders/audio.svg" alt="" class="add-img-loader">
                                        <span v-bind:class="{ 'hidden': isSubmitted }" class="">Add New retailer</span>
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { addRetailerDomain } from '../../../config';
import { apiDomain } from '../../../config';
import { getHeaderMain } from '../../../config';
import { mapState } from 'vuex';
import header from '../../partials/header.vue';
export default {
    components:{
        headerTop: header
    },

    data() {
        return{
            retailer:{
                username: '', email: '', address: '', mobile: '', gps: '', bankName: '', bankBranch: '', accountNumber: '', aadhar: '',
                shopName: '', password: '', passwordConfirmation: ''
            },

            isSubmitted: false,

            bankNameDatabase: {}
        }
    },

    computed: {
        ...mapState({
            userStore : state => state.userStore
        })
    },

    methods: {
        addretailer()
        {
            this.$validator.validateAll().then(res => {
                if(res){
                    this.isSubmitted = true;
                    axios.post(addRetailerDomain,
                        this.retailer, { headers: getHeaderMain() }
                    ).then(response => {
                        this.isSubmitted = false;

                        // for (var data in this.retailer) {
                        //     if (this.retailer.hasOwnProperty(data)) {
                        //         p[data] = "";
                        //     }
                        // }

                        this.$swal({
                            title: 'User Created!',
                            html: '<div class="text-left">'+response.data.message+'</div>',
                            type: 'success',
                            animation: false,
                            customClass: 'animated tada'
                        });

                    }).catch(error => {
                        this.isSubmitted = false;
                        if(error.response.status == 401 || error.response.status == 402){
                            let errors = error.response.data; let a = "";
                            for (var key in errors) {
                                if (errors.hasOwnProperty(key)) {
                                    a += '<li>'+errors[key]+'</li>';
                                }
                            }

                            this.$swal({
                                title: 'Bad Luck!',
                                html: '<div class="text-left">'+a+'</div>',
                                type: 'error',
                                animation: false,
                                customClass: 'animated tada'
                            });
                        }else{
                            this.$swal({
                                title: 'Bad Luck!',
                                html: 'Internal Server Error!',
                                type: 'error',
                                animation: false,
                                customClass: 'animated tada'
                            });
                        }

                    });
                }
            });
        }
    },

    mounted()
    {
        axios.post(apiDomain+'getBanks/', null, { headers: getHeaderMain() })
        .then(res => {

            if(res.data.status == 1){
                this.bankNameDatabase = res.data.banks;
            }

        }).catch(error => {
            console.log(error);
        });
    }
}
</script>

<style lang="css" scoped>

    .add-img-loader{
        width: 12px;
    }

    .m-t-10{
        width: 30%;
    }

</style>
