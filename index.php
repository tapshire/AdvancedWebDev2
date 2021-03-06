


<html>
    <head>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
		<link rel="stylesheet" href="index.css">
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
	</head>
	<body>
		<div class="banner">
			<h1>UFCFR5-15-3 - Assignment - 2019</h1>
			<!--buttons to select method to view data-->
			<div class="options">
				<button class="open-button" onclick="openLineForm()">No2 levels for 24hr period</button>
				<button class="open-button" onclick="openForm()">No2 Data for Time and Year</button>
				<button class="open-button" onclick="openCalenderForm()">No2 Calender view</button>
			</div>
		</div>
		<div class="footer">
			<p>&copy; Copyright 2019 Chris Tapply</p>
		</div>
		<div id="main">
			<!--chart slection-->
			<div id="chart_div"></div>
			<div id="linechart_material"></div>
			<div id="calender_chart"></div>
			<h1 id="graph">Please choose graph type</h1>
			<div class="form-popup" id="myForm">
				<!--Form to select data for time and year-->
				<form class="form-container">
					<h1>No2 Data for Time and Year</h1>
					<select id="selectLocation"></select>
					<select id="selectTime"></select>
					<select id="selectYear"></select>
					<button type="button" class="btn" >Submit</button>
					<button type="button" class="btn_cancel" onclick="closeForm()">Close</button>	
				</form>
			</div>
			<div class="form-popup-line" id="myLineForm">
				<!--Form to select data for 24hr period-->
				<form class="form-container-line">
					<h1>No2 levels for 24hr period</h1>
					<select id="selectLocationLine"></select>
					<select id="selectDayLine"></select>
					<select id="selectMonthLine"></select>
					<select id="selectYearLine"></select>
					<button type="button" class="btnLine" >Submit</button>
					<button type="button" class="btn_cancel_line" onclick="closeLineForm()">Close</button>	
				</form>
			</div>	
			<div class="form-popup-line" id="myCalenderForm">
				<!--Form to select location to show max levels-->
				<form class="form-container-line">
					<h1>No2 max levels by day</h1>
					<select id="selectLocationCalender"></select>
					<button type="button" class="btnCalender" >Submit</button>
					<button type="button" class="btn_cancel_calender" onclick="closeCalenderForm()">Close</button>	
				</form>
			</div>	
		</div>
		<?php
			set_time_limit(100);
			include 'php_script.php';
		?>
		<?php
			include 'no2_script.php';
		?>
		<script src="script.js"></script>
		
		
	</body>
</html>