var final_attr_list = [];
var y;
var txt = "";
var attr = [];
var unixTime;
var test;
var test2;
var concatinate;
var xmlData = [
    ['Date', 'No2']
];
var selection = ["null", "null", "null"];

var bris = [];
var wells = [];
var fish = [];
var newf = [];
var pars = [];
var rupe = [];

$('#chart_div').hide();
$('#linechart_material').hide();


readFile("brislington_no2.xml", bris);
readFile("fishponds_no2.xml", fish);
readFile("newfoundland_way_no2.xml", newf);
readFile("brupert_st_no2.xml", rupe);
readFile("parson_st_no2.xml", pars);
readFile("wells_rd_no2.xml", wells);


function readFile(file, station_list) {
    var request = new XMLHttpRequest();
    request.open("GET", file, false);
    request.send();
    var xml = request.responseXML;

    y = xml.getElementsByTagName("reading");
    for (i = 0; i < y.length; i++) {
        txt += "Date: " + y[i].getAttribute('date') + " Time: " + y[i].getAttribute('time') + " Val: " + y[i].getAttribute('val') + "\n";
        test = y[i].getAttribute('date');
        test2 = y[i].getAttribute('time');
        test = [test.slice(-4), test.slice(3, 5), test.slice(0, 2)].join('/');
        concatinate = test + " " + test2;
        test = Date.parse(test);
        attr.push(test);
        attr.push(y[i].getAttribute('date'));
        concatinate = Date.parse(concatinate);
        attr.push(concatinate);
        attr.push(y[i].getAttribute('time'));
        attr.push(parseInt(y[i].getAttribute('val')));
        station_list.push(attr);
        final_attr_list.push(attr);
        attr = [];
    }

    station_list.sort((a, b) => a[0] - b[0] || a[2] - b[2]);
}

final_attr_list.sort((a, b) => a[0] - b[0]);

var i;

/*BUILD FORM SELECTION OPTIONS----------------------------------------------*/

var location_ = ["brislington", "rupert street", "fishponds", "new foundland way", "parson street", "wells road"];

var time_ = ["00:00:00", "00:15:00", "00:30:00", "00:45:00", "01:00:00", "01:15:00",
    "01:30:00", "01:45:00", "02:00:00", "02:15:00", "02:30:00", "02:45:00",
    "03:00:00", "03:15:00", "03:30:00", "03:45:00", "04:00:00", "04:15:00",
    "04:30:00", "04:45:00", "05:00:00", "05:15:00", "05:30:00", "05:45:00",
    "06:00:00", "06:15:00", "06:30:00", "06:45:00", "07:00:00", "07:15:00",
    "07:30:00", "07:45:00", "08:00:00", "08:15:00", "08:30:00", "08:45:00",
    "09:00:00", "09:15:00", "09:30:00", "09:45:00", "10:00:00", "10:15:00",
    "10:30:00", "10:45:00", "11:00:00", "11:15:00", "11:30:00", "11:45:00",
    "12:00:00", "12:15:00", "12:30:00", "12:45:00", "13:00:00", "13:15:00",
    "13:30:00", "13:45:00", "14:00:00", "14:15:00", "14:30:00", "14:45:00",
    "15:00:00", "15:15:00", "15:30:00", "15:45:00", "16:00:00", "16:15:00",
    "16:30:00", "16:45:00", "17:00:00", "17:15:00", "17:30:00", "17:45:00",
    "18:00:00", "18:15:00", "18:30:00", "18:45:00", "19:00:00", "19:15:00",
    "19:30:00", "19:45:00", "20:00:00", "20:15:00", "20:30:00", "20:45:00",
    "21:00:00", "21:15:00", "21:30:00", "21:45:00", "22:00:00", "22:15:00",
    "22:30:00", "22:45:00", "23:00:00", "23:15:00", "23:30:00", "23:45:00"
]

var year_ = [final_attr_list[0][1].slice(-4)];

var month_ = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var day_ = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];

for (i = 0; i < final_attr_list.length; i++) {
    if (final_attr_list[i][1].slice(-4) !== year_[year_.length - 1]) {
        year_.push(final_attr_list[i][1].slice(-4));
    }
}

create_options_list(location_, "selectLocation");
create_options_list(time_, 'selectTime');
create_options_list(year_, 'selectYear');
create_options_list(location_, "selectLocationLine");
create_options_list(day_, "selectDayLine");
create_options_list(month_, "selectMonthLine");
create_options_list(year_, "selectYearLine");



function create_options_list(list, id_var) {
    //Create and append select list
    var selectList = document.getElementById(id_var);

    //Create and append the options
    for (var i = 0; i < list.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", i);
        option.text = list[i];
        selectList.appendChild(option);
    }
}

/*-----------------------------------------------------------------------*/


/*FORM FUNCTIONS*/


function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

$("#myForm").submit(function(e) {
    e.preventDefault();
});

function openLineForm() {
    document.getElementById("myLineForm").style.display = "block";
}

function closeLineForm() {
    document.getElementById("myLineForm").style.display = "none";
}

$("#myLineForm").submit(function(e) {
    e.preventDefault();
});



/*-----------------------------------------------------------------------*/


/* BUILD SCATTER GRAPH BASED ON FORM SUBMISSION*/

$(document).ready(function() {
    $('.btn ').click(function() {
        $('#scatter').hide();

        xmlData = [
            ['Date', 'No2']
        ];
        var station;

        var choice = $('#selectTime option:selected').text();
        selection[1] = choice;
        choice = $('#selectYear option:selected').text();
        selection[2] = choice;
        choice = $('#selectLocation option:selected').val();
        selection[0] = choice;

        choice = parseInt(choice);

        switch (choice) {
            case 0:
                station = bris;
                break;
            case 1:
                station = rupe;
                break;
            case 2:
                station = fish;
                break;
            case 3:
                station = newf;
                break;
            case 4:
                station = pars;
                break;
            case 5:
                station = wells;
                break;
        }

        console.log(station);

        choice = $('#selectLocation option:selected').text();

        if (selection[0] === "null") {
            xmlData.push(["", 0]);
        } else {
            for (i = 0; i < station.length; i++) {
                attr = [];
                if (selection[1] === station[i][3] && selection[2] === station[i][1].slice(-4)) {
                    attr.push(station[i][1]);
                    attr.push(station[i][4]);
                    xmlData.push(attr);
                }
            }
        }

        var year_bool = false;

        for (i = 0; i < station.length; i++) {
            if (station[i][1].slice(-4) === selection[2]) {
                year_bool = true;
            }
        }

        if (year_bool == true) {
            $('#chart_div').show();
            google.charts.load('current', { 'packages': ['corechart'] });
            google.charts.setOnLoadCallback(drawChart);

            function drawChart() {
                var data = google.visualization.arrayToDataTable(xmlData);

                var options = {
                    backgroundColor: '#EAEDF3',
                    title: choice + ' scatter chart for ' + selection[2] + ' at ' + selection[1],
                    //hAxis: { title: 'Date', minValue: 0, maxValue: 15 },
                    //vAxis: { title: 'No2', minValue: 0, maxValue: 15 },
                    // 'width':900,
                    // 'height':500,
                    legend: { position: 'none' },
                };

                var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));

                chart.clearChart();

                chart.draw(data, options);
            }
        } else {
            $('#chart_div').hide();
            $('#scatter').show();
            $('#scatter').text("Unfortunately there is No data for that year");
        }
    });
});



/*Line Chart for Single Day*/

$(document).ready(function() {
    $('.btnLine ').click(function() {
        $('#line').hide();

        xmlData = [
            ['Date', 'No2']
        ];
        var station;

        var choice = $('#selectDayLine option:selected').text();
        var zero = $('#selectMonthLine option:selected').val()

        zero = parseInt(zero);
        zero = zero + 1;
        zero = zero.toString();

        if (zero.length < 2) {
            choice = choice + "/0" + zero;
        } else {
            choice = choice + "/" + zero;
        }
        choice = choice + "/" + $('#selectYearLine option:selected').text();

        selection[1] = choice;

        choice = $('#selectLocationLine option:selected').val();
        selection[0] = choice;

        choice = parseInt(choice);


        switch (choice) {
            case 0:
                station = bris;
                break;
            case 1:
                station = rupe;
                break;
            case 2:
                station = fish;
                break;
            case 3:
                station = newf;
                break;
            case 4:
                station = pars;
                break;
            case 5:
                station = wells;
                break;
        }

        console.log(station);

        choice = $('#selectLocationLine option:selected').text();

        day = selection[1];

        var timeData = [];

        attr = [];

        if (selection[0] === "null") {
            timeData.push(["", 0]);
        } else {
            for (i = 0; i < station.length; i++) {
                attr = [];
                if (day === station[i][1]) {
                    attr.push(station[i][3]);
                    attr.push(station[i][4]);
                    timeData.push(attr);
                }
            }
        }

        var year_bool = false;

        console.log(day);

        for (i = 0; i < station.length; i++) {
            if (station[i][1] === day) {
                year_bool = true;
                break;
            }
        }

        if (year_bool == true) {
            $('#linechart_material').show();
            google.charts.load('current', { 'packages': ['line'] });
            google.charts.setOnLoadCallback(drawChartLine);

            function drawChartLine() {

                data = new google.visualization.DataTable();
                data.addColumn('string', 'Time');
                data.addColumn('number', choice + ' No2 Level');

                data.addRows(timeData);

                options = {
                    backgroundColor: '#EAEDF3',
                    chart: {
                        title: 'No2 levels for ' + choice + ' on ' + day,
                    },
                    legend: { position: 'none' },
                };

                chart = new google.charts.Line(document.getElementById('linechart_material'));

                chart.clearChart();

                chart.draw(data, google.charts.Line.convertOptions(options));
            }
        } else {
            $('#linechart_material').hide();
            $('#line').show();
            $('#line').text("Either there is No data for that day or you've chosen an invalid date");
        }
    });
});