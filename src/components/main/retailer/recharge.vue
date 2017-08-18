<template lang="html">
    <!-- /.row -->
    <div id="page-wrapper">
        <div class="container-fluid">
            <header-top></header-top>

            <div class="row">
                <div class="col-md-12">
                    <div class="panel panel-info">
                        <div class="panel-heading">
                            Fee Payment
                            <span class="pull-right">Your Current Balance is Rs. {{ currentBalance }} /-</span>
                        </div>
                        <div class="panel-wrapper collapse in" aria-expanded="true">
                            <div class="panel-body">
                                <form action="#" class="form-horizontal" @submit.prevent="submitForm">
                                    <div class="form-body">
                                        <h3 class="box-title">Institute's Info</h3>
                                        <hr class="m-t-0 m-b-40">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="control-label col-md-3">Payment for</label>
                                                    <div class="col-md-9">
                                                        <select class="form-control" name="institution-type" v-model="data.searchType" @change="onChangeType">
                                                            <option value="">Select A Type</option>
                                                            <option value="1">College</option>
                                                            <option value="2">School</option>
                                                            <option value="3">Other Institutions</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <!--/span-->
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="control-label col-md-3">Institute Name</label>
                                                    <div class="col-md-9">
                                                        <div class="input-group">
                                                            <input type="text"
                                                                class="form-control" placeholder="Name of the Institute"
                                                                autocomplete="off"
                                                                v-model="query"
                                                                @keydown.down="down"
                                                                @keydown.up="up"
                                                                @keydown.enter="hit"
                                                                @keydown.esc="reset"

                                                                @input="checkUpdate"/>
                                                                <!-- @blur="reset" -->
                                                            <div class="input-group-addon">
                                                                <i class="fa fa-spinner fa-spin" v-if="loading"></i>
                                                                <template v-else>
                                                                    <i class="fa fa-search" v-show="isEmpty"></i>
                                                                    <i class="fa fa-times" v-show="isDirty" @click="reset"></i>
                                                                </template>
                                                            </div>
                                                        </div>

                                                        <ul v-show="hasItems">
                                                          <!-- for vue@1.0 use: ($item, item) -->
                                                            <li v-for="(item, $item) in items" :class="activeClass($item)" @mousedown="hit" @mousemove="setActive($item)">
                                                                <span v-text="item.name+', '+item.address"></span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <!--/span-->
                                        </div>
                                        <h3 class="box-title">Details</h3>
                                        <hr class="m-t-0 m-b-40">
                                        <section v-if="intiDetails">
                                            <!--/row-->
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-3">Name : </label>
                                                        <div class="col-md-9">
                                                            <p class="form-control-static"> {{ this.instituteStore.institute.name }} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-3">Address : </label>
                                                        <div class="col-md-9">
                                                            <p class="form-control-static"> {{ this.instituteStore.institute.address }}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-3">Principal Name : </label>
                                                        <div class="col-md-9">
                                                            <p class="form-control-static"> {{ this.instituteStore.institute.client.username }}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!--/span-->
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-3">Mobile : </label>
                                                        <div class="col-md-9">
                                                            <p class="form-control-static"> {{ this.instituteStore.institute.mobile }}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!--/span-->
                                            </div>
                                            <!--/row-->
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-3">Email : </label>
                                                        <div class="col-md-9">
                                                            <p class="form-control-static"> {{ this.instituteStore.institute.client.email }}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!--/span-->
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-3">Bank Name : </label>
                                                        <div class="col-md-9">
                                                            <p class="form-control-static"> {{ this.$store.getters.getBanks[(this.instituteStore.institute.client.bank_id - 1)] }}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!--/span-->
                                            </div>
                                            <!--/row-->
                                            <h3 class="box-title">Payment Dates</h3>
                                            <hr class="m-t-0 m-b-40">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-3">Payment Month</label>
                                                        <div class="col-md-9">
                                                            <select class="form-control">
                                                                <option>Select</option>
                                                                <option v-for="(month, i) in months" :value="(i+1)" :selected="currentMonth === (i + 1)" v-if="(i) < currentMonth">{{ month }}</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-3">Payment Year</label>
                                                        <div class="col-md-9">
                                                            <select class="form-control" name="">
                                                                <option v-if="currentMonth < 3" value="{ currentYear - 1 }">{{ currentYear - 1 }}</option>
                                                                <option value="{ currentYear }">{{ currentYear }}</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 class="box-title">Student's Profile</h3>
                                            <hr class="m-t-0 m-b-40">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-3">Payment For</label>
                                                        <div class="col-md-9">
                                                            <select class="form-control" name="" v-model="paymentType">
                                                                <option value="">Select a Type</option>
                                                                <option value="1">Monthly Fee</option>
                                                                <option value="2">Admission Fee</option>
                                                                <option value="3">Bus/Travel Fee</option>
                                                                <option value="4">Other Fees</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4">Student's Registration : </label>
                                                        <div class="col-md-8">
                                                            <div class="input-group">
                                                                <input type="text"
                                                                    class="form-control" placeholder="Student's Registration ID"
                                                                    autocomplete="off"
                                                                    v-model="data.studentReg"
                                                                    @keydown.down="down"
                                                                    @keydown.up="up"
                                                                    @keydown.enter="onHitStudent"
                                                                    @keydown.esc="reset"
                                                                    @input.prevent="getStudent"/>
                                                                    <!-- @blur="reset" @keydown.enter="hit"-->
                                                                <div class="input-group-addon">
                                                                    <i class="fa fa-spinner fa-spin" v-if="loading"></i>
                                                                    <template v-else>
                                                                        <i class="fa fa-search" v-show="isEmpty"></i>
                                                                        <i class="fa fa-times" v-show="isDirty" @click="reset"></i>
                                                                    </template>
                                                                </div>
                                                            </div>
                                                            <ul v-show="hasItemsStudents">
                                                              <!-- for vue@1.0 use: ($item, item) -->
                                                                <li v-for="(item, $item) in studentItems" :class="activeClass($item)" @mousedown="onHitStudent(item)" @mousemove="setActive($item)">
                                                                    <span v-text="item.name+', Class '+item.class+' - '+item.section"></span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <section v-if="initStudentDetails">
                                                <hr class="m-t-0 m-b-40">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label class="control-label col-md-3">Student's Name : </label>
                                                            <div class="col-md-9">
                                                                <p class="form-control-static"> {{ this.studentDetails.name }}</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label class="control-label col-md-3">Father's Name : </label>
                                                            <div class="col-md-9">
                                                                <p class="form-control-static"> {{ this.studentDetails.father_name }}</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <label class="control-label col-md-3">Amount : </label>
                                                            <div class="col-md-7">
                                                                <input type="number" name="" value="" v-model="amount" class="form-control" @input="amountInput">
                                                                <span v-show="feePaymentError" class="help-block"> {{ feePaymentError }} </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </section>
                                        <section v-if="!intiDetails">
                                            <h5 class="text-center">Please Select the School/College/Institute First!</h5>
                                        </section>
                                    </div>
                                    <hr class="m-t-0 m-b-40">
                                    <div class="form-actions">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="row">
                                                    <div class="col-md-offset-3 col-md-9">
                                                        <button type="button" class="btn btn-success" :disabled="isSubmitted" @click="feePayment">
                                                            <img v-bind:class="{ 'hidden': !isSubmittedPay }" src="static/svg-loaders/audio.svg" alt="" class="add-img-loader">
                                                            <span v-bind:class="{ 'hidden': isSubmittedPay }" class="">Make Payment</span>
                                                        </button>
                                                        <button type="button" class="btn btn-default">Cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6"> </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--./row-->
</template>

<script>

import { addRetailerDomain } from '../../../config';
import { apiDomain } from '../../../config';
import { mapState } from 'vuex';
import header from '../../partials/header.vue';
import jquery from 'jquery';
import VueTypeahead from 'vue-typeahead';
import moment from 'moment';

export default {
    extends: VueTypeahead,

    components:{
        headerTop: header
    },

    data(){
        return{
            currentBalance: 0,
            intiDetails: false,
            months: this.$store.state.month,
            currentMonth: moment().month(),
            currentYear: moment().year(),
            studentReg: '',
            initStudentDetails: false,
            hasItemsStudents: false,
            studentItems:{},
            studentDetails:{},
            paymentType:'',
            amount:'',
            isSubmitted: true,
            isSubmittedPay: false,
            feePaymentError: "",
            // The source url
            // (required)
            src: apiDomain+'search/institute',

            // The data that would be sent by request
            // (optional)
            data: {
                searchType:"",
                studentReg: "",
                instituteId: "",
            },

            // Limit the number of items which is shown at the list
            // (optional)
            limit: 5,

            // The minimum character length needed before triggering
            // (optional)
            minChars: 3,

            // Highlight the first item in the list
            // (optional)
            selectFirst: false,

            // Override the default value (`q`) of query parameter name
            // Use a falsy value for RESTful query
            // (optional)
            queryParamName: 'q'
        }
    },

    computed:{
        ...mapState({
            instituteStore: state => state.instituteStore
        })
    },

    methods:{
        // This function checks if the Search Type is also selected before searching the term!
        checkUpdate(e){
            if(!!this.data.searchType && e.target.value){
                this.update(this.searchType);
            }
        },

        // Checks if the user has change the Search Type to null, if then all the institute object is resetted!
        onChangeType(e){
            if(e.target.value == "" || e.target.value == null){
                this.intiDetails = false;
                this.institute = {};
            }
        },

        getStudent(e){
            if(this.data.studentReg && this.data.studentReg.length > 2){
                this.src = apiDomain+'search/student';
                this.data.instituteId = this.instituteStore.institute.id;
                this.update(['studentReg', 'instituteId'], 'studentItems');
            }else{
                return false;
            }
        },

        // The callback function which is triggered when the user hits on an item
        // (required)
        onHit (item) {
            //this.institute = item;
            this.$store.dispatch('setInstituteObject', item);
            this.intiDetails = true;
            this.reset();
        },

        onHitStudent (item) {
            //this.institute = item;
            this.studentDetails = item;
            this.initStudentDetails = true;
            this.hasItemsStudents = false;
            this.studentItems = {};
            this.data = {};
        },


        // The callback function which is triggered when the response data are received
        // (optional)
        prepareResponseData (data) {
            // data = ...
            if(!!this.data.instituteId){
                this.hasItemsStudents = true;
            }
            return data.search;
        },

        submitForm(){
            return false;
        },

        amountInput(e)
        {
            if(e.target.value != "" && this.paymentType != ""){
                this.isSubmitted = false;
                this.feePaymentError = "";
            }else{
                this.isSubmitted = true;
            }
        },

        feePayment()
        {
            if(!!this.amount && !!this.paymentType){

                let check = (parseInt(this.amount) > parseInt(this.currentBalance));
                if(check){
                    this.feePaymentError = "Your current Balance is lesser than the amount you are trying to pay!";
                    return false;
                }
                this.isSubmittedPay = true;
                this.isSubmitted = false;
                let data = { type: this.paymentType, amount: this.amount, studentId: this.studentDetails.id };

                axios.post(apiDomain+'student/payment', data)
                .then(res => {
                    this.isSubmittedPay = false;
                    this.isSubmitted = true;
                    this.currentBalance = this.currentBalance - this.amount;


                    this.$store.dispatch('setPopPaymentObject', res.data);

                    $("#paymentModal").modal("show");

                    $("#paymentModal").on("hidden.bs.modal", function () {
                        window.location.reload();
                    });

                }).catch(error => {
                    console.log(error);
                    this.isSubmitted = true;
                });
            }
        }
    },

    mounted(){
        axios.get(apiDomain+'retailer/getRetailer')
        .then(res => {

            if(res.data.status == 1){
                this.currentBalance = res.data.balance;
            }
        }).catch(error => {
            console.log(error);
        });
    },

    updated(){

    }
}
</script>

<style scoped>
    @import "../../../../static/bower_components/bootstrap-datepicker/bootstrap-datepicker.min.css";
    @import "../../../../static/bower_components/bootstrap-select/bootstrap-select.min.css";
    @import "../../../../static/bower_components/custom-select/custom-select.css";

    .Typeahead {
        position: relative;
    }
    .Typeahead__input {
        width: 100%;
        font-size: 14px;
        color: #2c3e50;
        line-height: 1.42857143;
        box-shadow: inset 0 1px 4px rgba(0,0,0,.4);
        -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
        font-weight: 300;
        padding: 12px 26px;
        border: none;
        border-radius: 22px;
        letter-spacing: 1px;
        box-sizing: border-box;
    }
    .Typeahead__input:focus {
        border-color: #4fc08d;
        outline: 0;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px #4fc08d;
    }
    .fa-times {
        cursor: pointer;
    }
    /*i {
        float: right;
        position: relative;
        top: 30px;
        right: 29px;
        opacity: 0.4;
    }*/
    ul {
        position: absolute;
        padding: 0;
        margin-top: 8px;
        min-width: 100%;
        background-color: #fff;
        list-style: none;
        border-radius: 4px;
        box-shadow: 0 0 10px rgba(0,0,0, 0.25);
        z-index: 1000;
    }
    li {
        padding: 10px 16px;
        border-bottom: 1px solid #ccc;
        cursor: pointer;
    }
    li:first-child {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }
    li:last-child {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        border-bottom: 0;
    }
    span {
        display: block;
        color: #2c3e50;
    }
    .active {
        background-color: #3aa373;
    }
    .active span {
        color: white;
    }
    .name {
        font-weight: 700;
        font-size: 18px;
    }
    .screen-name {
        font-style: italic;
    }

    .add-img-loader{
        width: 12px;
    }
</style>
