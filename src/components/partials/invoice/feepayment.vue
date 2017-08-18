<template lang="html">
    <div id="page-wrapper">
        <div class="container-fluid">
            <header-top></header-top>
            <div class="row">
                <div class="col-md-12">
                    <div class="white-box printableArea">
                        <h3><b>INVOICE</b> <span class="pull-right">#5669626</span></h3>
                        <hr>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="pull-left">
                                    <address>
                                        <h3> &nbsp;<b class="text-danger">EaseMyPay</b></h3>
                                        <p class="text-muted m-l-5">
                                            Somewhere on Earth,
                                            <br/> Nr' India,
                                            <br/> Nh. No. oc,
                                            <br/> Imphal 795001</p>
                                    </address>
                                </div>
                                <div class="pull-right text-right">
                                    <address>
                                        <h3>To,</h3>
                                        <h4 class="font-bold">Bajee & Sons,</h4>
                                        <p class="text-muted m-l-30">Manipur,
                                            <br/> Nr' Vishal Mart,
                                            <br/> Bajee Leikai</p>
                                        <p class="m-t-30">
                                            <b>Invoice Date :</b> <i class="fa fa-calendar"></i> {{ today }}
                                        </p>
                                        <p>
                                            <b>Due Date :</b> <i class="fa fa-calendar"></i> {{ dueDate }}
                                        </p>
                                    </address>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="table-responsive m-t-40" style="clear: both;">
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th class="text-center">#</th>
                                                <th>Description</th>
                                                <th class="text-right">School</th>
                                                <th class="text-right">Amount</th>
                                                <th class="text-right">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="text-center">1</td>
                                                <td>Monthly Fee</td>
                                                <td class="text-right">Tiny Tots Dewlahland </td>
                                                <td class="text-right"> Rs. 900 </td>
                                                <td class="text-right"> Rs. 900 </td>
                                            </tr>
                                            <tr>
                                                <td class="text-center">2</td>
                                                <td>Bus Fee</td>
                                                <td class="text-right">Tiny Tots Dewlahland </td>
                                                <td class="text-right"> Rs. 300 </td>
                                                <td class="text-right"> Rs. 300 </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="pull-right m-t-30 text-right">
                                    <p>Sub - Total amount: Rs. 1200</p>
                                    <p>vat (10%) : Rs. 120 </p>
                                    <hr>
                                    <h3><b>Total :</b> Rs. 1320</h3>
                                </div>
                                <div class="clearfix"></div>
                                <hr>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="text-right">
                            <button id="print" class="btn btn-success btn-outline" type="button" @click="print"> <span><i class="fa fa-print"></i> Print</span> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import jquery from 'jquery';
import moment from 'moment';
import header from '../../partials/header.vue';
export default {
    data(){
        return{
            today: moment().format("Do MMMM YYYY"),
            dueDate: moment().add(7, 'days').format("Do MMMM YYYY")
        }
    },

    components:{
        headerTop: header
    },

    methods:{
        print(){
            var mode = 'iframe'; //popup
            var close = mode == "popup";
            var options = {
                mode: mode,
                popClose: close
            };

            $("div.printableArea").printArea(options);
        }
    },

    created(){
        require("../../../../static/js/jquery.PrintArea.js");
    },
}
</script>

<style lang="css">
</style>
