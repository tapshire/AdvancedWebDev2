<?php

xmlNo2('brislington');
xmlNo2('fishponds');
xmlNo2('parson_st');
xmlNo2('rupert_st');
xmlNo2('wells_rd');
xmlNo2('newfoundland_way');


//Function to read in saved XML data
function xmlNo2($fName){
	$reader = new XMLReader();
	$reader->open($fName . '.xml');
	
	//collect location, latitude and longitude 
	while($reader->read()){
		
		if($reader->name == 'desc'){
			$d = $reader->getAttribute('val');
		}
		if($reader->name == 'lat'){
			$lat = $reader->getAttribute('val');
		}
		if($reader->name == 'long'){
			$long = $reader->getAttribute('val');
			break;
		}
	}
	
	//Format location, longitude and latitude for new XML
	$out = '<data type="nitrogen dioxide">';
	$loc = '<location id="' . $d . '" lat="' . $lat . '" long="' . $long . '">';
	$out .= $loc;
	#echo $out;
	
	//close reader and re-open to start from beginning to catch all data
	$reader->close();
	$reader->open($fName . '.xml');
	
	//Collect All rows of date, time and no2 in XML file and format for new XML
	while($reader->read()){
		if($reader->name == 'date'){
			$dat = $reader->getAttribute('val');
			
		}
		if($reader->name == 'time'){
			$t = $reader->getAttribute('val');
		}
		if($reader->name == 'no2'){
			$no2 = $reader->getAttribute('val');
			$rec = '<reading date="' . $dat . '" time="' . $t . '" val="' . $no2 . '"/>';
			$out .= $rec;
		} 
	}
	
	
	$out .= '</location></data>';
	
	
	//Write XML to file 		
	$writer = new XMLWriter();
	$writer->openURI($fName . '_no2.xml');
	$writer->startDocument("1.0");
	$writer->text($out);
	$writer->endDocument();
	$writer->flush();
}
?>