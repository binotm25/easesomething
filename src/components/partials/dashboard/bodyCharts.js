export const dashboard1 = function(){
    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010',
            retailer: 50,
            distributors: 80,
            clients: 20
        }, {
            period: '2011',
            retailer: 130,
            distributors: 100,
            clients: 80
        }, {
            period: '2012',
            retailer: 80,
            distributors: 60,
            clients: 70
        }, {
            period: '2013',
            retailer: 70,
            distributors: 200,
            clients: 140
        }, {
            period: '2014',
            retailer: 180,
            distributors: 150,
            clients: 140
        }, {
            period: '2015',
            retailer: 105,
            distributors: 100,
            clients: 80
        },
        {
            period: '2016',
            retailer: 250,
            distributors: 150,
            clients: 200
        }],
        xkey: 'period',
        ykeys: ['retailer', 'distributors', 'clients'],
        labels: ['retailer', 'distributors', 'clients'],
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
    var sparkResize;

    sparklineLogin();

    $('.vcarousel').carousel({
        interval: 3000
    });

    $(".counter").counterUp({
        delay: 100,
        time: 1200
    });

}
