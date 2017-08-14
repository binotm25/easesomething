<template lang="html">
    <div class="" id="data-tables-alls">
        <div id="page-wrapper">
            <div class="container-fluid">
                <header-top></header-top>
                <div class="row">
                    <div class="col-sm-12">

                        <div class="white-box">
                            <section v-show="loading">
                                <img src="static/svg-loaders/puff.svg" alt="" class="center-block total-img-loader">
                            </section>
                            <section v-show="!loading">
                                <h3 class="box-title m-b-0">Data Export</h3>
                                <p class="text-muted m-b-30">Export data to Copy, CSV, Excel, PDF & Print</p>
                                <div class="table-responsive">
                                    <table id="example23" class="display nowrap" cellspacing="0" width="100%">
                                        <thead>
                                            <tr>
                                                <th>Distributor's Name</th>
                                                <th>Mobile No.</th>
                                                <th>Email Address</th>
                                                <th>address</th>
                                                <th>Join On</th>
                                                <th>Sales in Rs.</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Distributor's Name</th>
                                                <th>Mobile No.</th>
                                                <th>Email Address</th>
                                                <th>address</th>
                                                <th>Join On</th>
                                                <th>Sales</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                            <tr v-for="distributor in distributors.data">
                                                <td>
                                                    <router-link :to="{ name: 'distributor.single', params: { userId: distributor.id } }">
                                                        {{ distributor.username }}
                                                    </router-link>
                                                </td>
                                                <td>{{ distributor.mobile }}</td>
                                                <td>{{ distributor.email }}</td>
                                                <td>{{ distributor.address }}</td>
                                                <td>{{ distributor.created_at }}</td>
                                                <td>0</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import header from '../partials/header.vue';
import { getHeaderMain } from '../../config';
import { apiDomain } from '../../config';

export default {
    components: {
        headerTop : header
    },

    data(){
        return {
            distributors : {},
            loading: true
        }
    },

    created(){

        // require("../../../static/bower_components/datatables/jquery.dataTables.min.js");
        axios.get(apiDomain+'manage/distributor/total', { headers: getHeaderMain() }).then(res => {
            if(res.status == 200){
                this.distributors = res.data.distributors;
                var self = this;
                setTimeout(function(){
                    $('#example23').DataTable({
                        dom: 'Bfrtip',
                        // buttons: [
                        //     'copy', 'csv', 'excel', 'pdf', 'print'
                        // ]
                    });

                    self.loading = false;

                }, 100);
            }
        }).catch(error => {
            console.log(error);
        });
    }
}
</script>

<style lang="css" scoped>
    @import "/static/bower_components/datatables/jquery.dataTables.min.css";
    @import "/static/bower_components/data-tables-button/css/buttons.dataTables.min.css";

    .total-img-loader{
        background: #666696;
        padding: 20px;
    }
</style>
