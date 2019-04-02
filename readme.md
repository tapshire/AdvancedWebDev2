# <div style="text-align: center">UFCFR5-15-3 ATIWD2</div>

# 1.0 - Contents

[1.0 - Contents](#1.0---Contents)<br>
[2.0 - Introduction](#2.0---Introduction)<br>
[3.0 - Stream parsers vs DOM parsers](#3.0---Stream-parsers-vs-DOM-parsers)<br>
[4.0 - Further chart and data extension](#4.0---Further-chart-and-data-extension)<br>
[5.0 - References](#5.0---References)<br>
[6.0 - Code link](#6.0---Code-link)

# 2.0 - Introduction

Sorting large amounts of data can be a time consuming, memory exhausting process. There are many ways in which to process data depending on the type of data supplied. Focusing on stream and DOM parsers with the use of XML, an exploration of the advantages and disadvantages will be covered for both process' as well as links to a repository and individual code scripts demonstrating a stream parsers use over a large data set in order to display graphed data for air quality from six stations across Bristol.  

# 3.0 - Stream parsers vs DOM parsers

Stream parsers and DOM parsers are different methods used in order to navigate XML documents. PHP has in built functionality for these methods using XMLReader() for stream parsing and SimpleXML() for DOM parsing. The DOM parser method creates an in memory tree representation to be searched, whereas, the stream parser method uses a sequence of events. As the DOM parser requires a tree representation to be stored in memory stream parsers are better on large documents where documents would require greater processing requirements and memory allocation in comparison to the quick memory efficient stream parsers. Stream parsers have the benefit of generating output immediately due to not requiring the storing of documents before hand.

Stream parsers main disadvantage, however, is their inability to backward navigate over a document whereas DOM parsers allow this method of tree traversal. This can be an issue when looking to find a parent of a child based on the child value or in complex, irregular XML structures with relational data. As stream parsers discard elements after they are used they are not able to gather the previous step due to the sequential nature of their makeup, meaning in order to gather parent data from leaf node branches there would have to be a design decision in the software to store the branches in memory from a given reference tag. If the data is complex with deep tree structures there is a much greater argument for DOM parsers as the memory usage of the full program may not out weigh the memory that could be used storing branches and the complex code that would have to be written to process the data from the XML document when using a stream parser.

# 4.0 - Further chart and data extension

In order to extend the chart features further, highlighting the levels of No2 and whether they were high or low using the colour chart in the document and applying this to the graphs made for better understanding of the data being presented. See below chart...

![alt text](https://raw.githubusercontent.com/tapshire/AdvancedWebDev2/master/chart.png "Defra Colour Chart for levels of risk")

Below are the code fragments created in order to determine which point in the data is allocated their corresponding colour.

The below code creates a list containing "Time", "No2" and "Colour representation"...

```javascript
if (selection[0] === "null") {
            timeData.push(["", 0, null]);
        } else {
            for (i = 0; i < station.length; i++) {
                attr = [];
                if (day === station[i][1]) {
                    attr.push(station[i][3]);
                    attr.push(station[i][4]);
		    attr.push('color: ' + getColor(parseInt(station[i][4])));
                    timeData.push(attr);
					console.log(timeData);
                }
            }
        }
```

The function ***getColor(val)*** returns the colours based on the No2 value supplied...

```javascript
function getColor(val){
	console.log(val);
	
	if(val <= 67){
		return '#99FF9C';
	}else if(val <= 134){
		return '#2AFF00'
	}else if(val <= 200){
		return '#2BD400'
	}else if(val <= 267){
		return '#F5F708'
	}else if(val <= 334){
		return '#FDD101'
	}else if(val <= 400){
		return '#FEA104'
	}else if(val <= 467){
		return '#FF6066'
	}else if(val <= 534){
		return '#FC0100'
	}else if(val <= 600){
		return '#950400'
	}else{
		return '#CE30FF'
	}
}
```

Another way the visualization has been extended for this project is with the use of a calender chart. The purpose of adding this chart is to give a full representation of all the days, months and years the data was collected for each station and to display the maximum No2 level for any given day.

![alt text](https://raw.githubusercontent.com/tapshire/AdvancedWebDev2/master/calenderchart.png "Calender chart example from implementation")



# 5.0 - References

* https://docs.oracle.com/cd/E19879-01/819-3669/bnbdx/index.html

# 6.0 - Code link

Full Repository containing all files:<br>
[Full Github repository](https://github.com/tapshire/AdvancedWebDev2)<br>

Individual files for processing and visual representation:<br>
[PHP Location initial XML script](https://raw.githubusercontent.com/tapshire/AdvancedWebDev2/master/php_script.php)<br>
[PHP Location No2 XML script](https://raw.githubusercontent.com/tapshire/AdvancedWebDev2/master/no2_script.php)<br>
[JavaScript Google Charts](https://raw.githubusercontent.com/tapshire/AdvancedWebDev2/master/script.js)<br>
[HTML view](https://raw.githubusercontent.com/tapshire/AdvancedWebDev2/master/index.html)<br>
[CSS styling](https://raw.githubusercontent.com/tapshire/AdvancedWebDev2/master/index.css)<br>

Run this file in xammp. Index.php including php_script and no2_script:<br>
[php web view](https://raw.githubusercontent.com/tapshire/AdvancedWebDev2/master/index.php)<br>


