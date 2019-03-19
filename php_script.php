<?php
echo "working .. wait";
ob_flush();
flush();

csvToXml('brislington.xml', 3);
csvToXml('fishponds.xml', 6);
csvToXml('parson_st.xml', 8);
csvToXml('brupert_st.xml', 9);
csvToXml('wells_rd.xml', 10);
csvToXml('newfoundland_way.xml', 11);

function csvToXml($fName, $fVal){
	if (($handle = fopen("air_quality.csv", "r")) !== FALSE) {
		
		# define the tags - last col value in csv file is derived so ignore
		$header = array('id', 'desc', 'date', 'time', 'nox', 'no', 'no2', 'lat', 'long');
		
		# throw away the first line - field names
		fgetcsv($handle, 200, ",");
		
		# count the number of items in the $header array so we can loop using it
		$cols = count($header);
		
		#set record count to 1
		$count = 1;
		# set row count to 2 - this is the row in the original csv file
		$row = 2;
			
		# start ##################################################
		$out = '<records>';
		
		while (($data = fgetcsv($handle, 200, ",")) !== FALSE) {
			
			if ($data[0] == $fVal) {	
				$rec = '<row count="' . $count . '" id="' . $row . '">';
			
				for ($c=0; $c < $cols; $c++) {
					$rec .= '<' . trim($header[$c]) . ' val="' . trim($data[$c]) . '"/>';
				}
				$rec .= '</row>';
				$count++;
				$out .= $rec;
			}
			$row++;
		}
		
		$out .= '</records>';
		# finish ##################################################
		
		# write out file
		file_put_contents($fName, $out);
		
		fclose($handle);
	}
	echo "....all done!";
}
?>