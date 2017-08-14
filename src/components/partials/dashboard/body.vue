<template lang="html">
    <div class="" id="dashboard-body">
        <div id="page-wrapper">
            <div class="container-fluid">
                <div class="row bg-title">
                    <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                        <h4 class="page-title">EaseMyPay</h4>
                    </div>
                    <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                        <ol class="breadcrumb">
                            <li class="active">Dashboard</li>
                        </ol>
                    </div>
                    <!-- /.col-lg-12 -->
                </div>
                <!-- /.row -->
                <div class="row">
                    <div class="col-md-12 col-lg-12 col-sm-12">
                        <div class="white-box">
                            <div class="row row-in">
                                <div class="col-lg-3 col-sm-6 row-in-br">
                                    <div class="col-in row">
                                        <div class="col-md-6 col-sm-6 col-xs-6">
                                            <i data-icon="E" class="linea-icon linea-basic"></i>
                                            <h5 class="text-muted vb">Total Retailers</h5>
                                        </div>
                                        <div class="col-md-6 col-sm-6 col-xs-6">
                                            <h3 class="counter text-right m-t-15 text-danger">23</h3>
                                        </div>
                                        <div class="col-md-12 col-sm-12 col-xs-12">
                                            <div class="progress">
                                                <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"> <span class="sr-only">40% Complete (success)</span> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 row-in-br  b-r-none">
                                    <div class="col-in row">
                                        <div class="col-md-6 col-sm-6 col-xs-6">
                                            <i class="linea-icon linea-basic" data-icon="F"></i>
                                            <h5 class="text-muted vb">Total Schools</h5>
                                        </div>
                                        <div class="col-md-6 col-sm-6 col-xs-6">
                                            <h3 class="counter text-right m-t-15 text-megna">169</h3>
                                        </div>
                                        <div class="col-md-12 col-sm-12 col-xs-12">
                                            <div class="progress">
                                                <div class="progress-bar progress-bar-megna" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"> <span class="sr-only">40% Complete (success)</span> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 row-in-br">
                                    <div class="col-in row">
                                        <div class="col-md-6 col-sm-6 col-xs-6"> <i class="linea-icon linea-basic" data-icon="G"></i>
                                            <h5 class="text-muted vb">Total Distributors</h5>
                                        </div>
                                        <div class="col-md-6 col-sm-6 col-xs-6">
                                            <h3 class="counter text-right m-t-15 text-primary">157</h3>
                                        </div>
                                        <div class="col-md-12 col-sm-12 col-xs-12">
                                            <div class="progress">
                                                <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"> <span class="sr-only">40% Complete (success)</span> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6  b-0">
                                    <div class="col-in row">
                                        <div class="col-md-6 col-sm-6 col-xs-6"> <i class="linea-icon linea-basic" data-icon="H"></i>
                                            <h5 class="text-muted vb">Total Earnings</h5>
                                        </div>
                                        <div class="col-md-6 col-sm-6 col-xs-6">
                                            <h3 class="counter text-right m-t-15 text-success">431</h3>
                                        </div>
                                        <div class="col-md-12 col-sm-12 col-xs-12">
                                            <div class="progress">
                                                <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"> <span class="sr-only">40% Complete (success)</span> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--row -->
                <!-- /.row -->
                <div class="row">
                    <div class="col-md-7 col-lg-9 col-sm-12 col-xs-12">
                        <div class="white-box">
                            <h3 class="box-title">Yearly Sales</h3>
                            <ul class="list-inline text-right">
                                <li>
                                    <h5><i class="fa fa-circle m-r-5" style="color: #00bfc7;"></i>Retailers</h5>
                                </li>
                                <li>
                                    <h5><i class="fa fa-circle m-r-5" style="color: #fb9678;"></i>Distributors</h5>
                                </li>
                                <li>
                                    <h5><i class="fa fa-circle m-r-5" style="color: #9675ce;"></i>Clients</h5>
                                </li>
                            </ul>
                            <div id="morris-area-chart" style="height: 340px;"></div>
                        </div>
                    </div>
                    <div class="col-md-5 col-lg-3 col-sm-6 col-xs-12">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="bg-theme-dark m-b-15">
                                    <div class="row weather p-20">
                                        <div class="col-md-6 col-xs-6 col-lg-6 col-sm-6 m-t-40">
                                            <h3>&nbsp;</h3>
                                            <h1>73<sup>°F</sup></h1>
                                            <p class="text-white">Imphal, INDIA</p>
                                        </div>
                                        <div class="col-md-6 col-xs-6 col-lg-6 col-sm-6 text-right"> <i class="wi wi-day-cloudy-high"></i>
                                            <br/>
                                            <br/>
                                            <b class="text-white">SUNNY DAY</b>
                                            <p class="w-title-sub">April 14</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="bg-theme m-b-15">
                                    <div id="myCarouse2" class="carousel vcarousel slide p-20">
                                        <!-- Carousel items -->
                                        <div class="carousel-inner ">
                                            <div class="active item">
                                                <h3 class="text-white">Something is <span class="font-bold">better than</span> nothing.</h3>
                                                <div class="twi-user">
                                                    <!-- <img src="static/plugins/images/users/hritik.jpg" alt="user" class="img-circle img-responsive pull-left"> -->
                                                    <h4 class="text-white m-b-0">Me</h4>
                                                    <p class="text-white">Bajee</p>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <h3 class="text-white">Something is <span class="font-bold">better than</span> nothing.</h3>
                                                <div class="twi-user">
                                                    <!-- <img src="static/plugins/images/users/hritik.jpg" alt="user" class="img-circle img-responsive pull-left"> -->
                                                    <h4 class="text-white m-b-0">Me</h4>
                                                    <p class="text-white">Maiba</p>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <h3 class="text-white">Something is <span class="font-bold">better than</span> nothing.</h3>
                                                <div class="twi-user">
                                                    <!-- <img src="static/plugins/images/users/ritesh.jpg" alt="user" class="img-circle img-responsive pull-left"> -->
                                                    <h4 class="text-white m-b-0">Me</h4>
                                                    <p class="text-white">Oja</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--row -->
                <div class="row">
                    <body-transactions></body-transactions>
                    <body-sales></body-sales>
                </div>
                <!-- /.row -->
                <!--row -->
                <div class="row">
                    <div class="col-md-12 col-lg-9 col-sm-12 col-xs-12 pull-right">
                        <div class="white-box">
                            <h3 class="box-title">Sales Difference</h3>
                            <ul class="list-inline text-right">
                                <li>
                                    <h5><i class="fa fa-circle m-r-5" style="color: #00bfc7;"></i>Site A View</h5>
                                </li>
                                <li>
                                    <h5><i class="fa fa-circle m-r-5" style="color: #fdc006;"></i>Site B View</h5>
                                </li>
                            </ul>
                            <div id="morris-area-chart2" style="height: 370px;"></div>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-3 col-sm-6 col-xs-12">
                        <div class="row">
                            <div class="col-md-6 col-lg-12">
                                <div class="white-box m-b-15">
                                    <h3 class="box-title">Sales Difference</h3>
                                    <div class="row">
                                        <div class="col-md-6 col-sm-6 col-xs-6  m-t-30">
                                            <h1 class="text-info">$647</h1>
                                            <p class="text-muted">APRIL 2017</p>
                                            <b>(150 Sales)</b> </div>
                                        <div class="col-md-6 col-sm-6 col-xs-6">
                                            <div id="sparkline2dash" class="text-center"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-12">
                                <div class="white-box bg-purple m-b-15">
                                    <h3 class="text-white box-title">VISIT STATASTICS</h3>
                                    <div class="row">
                                        <div class="col-md-6 col-sm-6 col-xs-6  m-t-30">
                                            <h1 class="text-white">$347</h1>
                                            <p class="light_op_text">APRIL 2017</p>
                                            <b class="text-white">(150 Sales)</b> </div>
                                        <div class="col-md-6 col-sm-6 col-xs-6">
                                            <div id="sales1" class="text-center"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.container-fluid -->
            <footer class="footer text-center"> 2017 &copy; EaseMyPay brought to you by Oja Bajee </footer>
        </div>
        <!-- /#page-wrapper -->
    </div>
</template>

<script>

import bodyTransactions from './bodyTransactions.vue';
import bodySales from './bodySales.vue';

import Raphael from 'raphael/raphael';
global.Raphael = Raphael;

import { DonutChart } from 'vue-morris';

export default {
    components:{
        bodyTransactions: bodyTransactions,
        bodySales: bodySales
    },

    mounted(){

        require("../../../../static/bower_components/waypoints/lib/jquery.waypoints.js");
        require("../../../../static/bower_components/counterup/jquery.counterup.min.js");

        Morris.Area({
            element: 'morris-area-chart',
            data: [{
                period: '2010',
                iphone: 50,
                ipad: 80,
                itouch: 20
            }, {
                period: '2011',
                iphone: 130,
                ipad: 100,
                itouch: 80
            }, {
                period: '2012',
                iphone: 80,
                ipad: 60,
                itouch: 70
            }, {
                period: '2013',
                iphone: 70,
                ipad: 200,
                itouch: 140
            }, {
                period: '2014',
                iphone: 180,
                ipad: 150,
                itouch: 140
            }, {
                period: '2015',
                iphone: 105,
                ipad: 100,
                itouch: 80
            },
            {
                period: '2016',
                iphone: 250,
                ipad: 150,
                itouch: 200
            }],
            xkey: 'period',
            ykeys: ['iphone', 'ipad', 'itouch'],
            labels: ['iPhone', 'iPad', 'iPod Touch'],
            pointSize: 3,
            fillOpacity: 0,
            pointStrokeColors:['#00bfc7', '#fb9678', '#9675ce'],
            behaveLikeLine: true,
            gridLineColor: '#e0e0e0',
            lineWidth: 3,
            hideHover: 'auto',
            lineColors: ['#00bfc7', '#fb9678', '#9675ce'],
            resize: true

        });

        Morris.Area({
            element: 'morris-area-chart2',
            data: [{
                period: '2010',
                SiteA: 0,
                SiteB: 0,

            }, {
                period: '2011',
                SiteA: 130,
                SiteB: 100,

            }, {
                period: '2012',
                SiteA: 80,
                SiteB: 60,

            }, {
                period: '2013',
                SiteA: 70,
                SiteB: 200,

            }, {
                period: '2014',
                SiteA: 180,
                SiteB: 150,

            }, {
                period: '2015',
                SiteA: 105,
                SiteB: 90,

            },
            {
                period: '2016',
                SiteA: 250,
                SiteB: 150,

            }],
            xkey: 'period',
            ykeys: ['SiteA', 'SiteB'],
            labels: ['Site A', 'Site B'],
            pointSize: 0,
            fillOpacity: 0.4,
            pointStrokeColors:['#b4becb', '#01c0c8'],
            behaveLikeLine: true,
            gridLineColor: '#e0e0e0',
            lineWidth: 0,
            smooth: false,
            hideHover: 'auto',
            lineColors: ['#b4becb', '#01c0c8'],
            resize: true

        });

        var sparklineLogin = function() {
            $('#sales1').sparkline([20, 40, 30], {
                type: 'pie',
                height: '90',
                resize: true,
                sliceColors: ['#01c0c8', '#7d5ab6', '#ffffff']
            });
            $('#sparkline2dash').sparkline([6, 10, 9, 11, 9, 10, 12], {
                type: 'bar',
                height: '154',
                barWidth: '4',
                resize: true,
                barSpacing: '10',
                barColor: '#25a6f7'
            });

        }

        sparklineLogin();

        $('.vcarousel').carousel({
            interval: 3000
        });

        $(".counter").counterUp({
            delay: 100,
            time: 1200
        });
    }

}
</script>

<style lang="css" scoped>
    h5.text-muted{
        font-size: 12px;
    }
</style>
