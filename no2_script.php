<?php

xmlNo2('brislington');
xmlNo2('fishponds');
xmlNo2('parson_st');
xmlNo2('brupert_st');
xmlNo2('wells_rd');
xmlNo2('newfoundland_way');



function xmlNo2($fName){
	$reader = new XMLReader();
	$reader->open($fName . '.xml');
	
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
	
	$out = '<data type="nitrogen dioxide">';
	$loc = '<location id="' . $d . '" lat="' . $lat . '" long="' . $long . '">';
	$out .= $loc;
	#echo $out;
	
	$reader->close();
	$reader->open($fName . '.xml');
	
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
			
	$writer = new XMLWriter();
	$writer->openURI($fName . '_no2.xml');
	$writer->startDocument("1.0");
	$writer->text($out);
	$writer->endDocument();
	$writer->flush();
}
?>