# <div style="text-align: center">UFCFR5-15-3 ATIWD2</div>

# 1.0 - Contents

[1.0 - Contents](#1.0---Contents)<br>
[2.0 - Introduction](#2.0---Introduction)<br>
[3.0 - Stream parsers vs DOM parsers](#3.0---Stream-parsers-vs-DOM-parsers)<br>
[4.0 - Further chart and data extension](#4.0---Further-chart-and-data-extension)<br>
[5.0 - Code link](#5.0---Code-link)

# 2.0 - Introduction



# 3.0 - Stream parsers vs DOM parsers

Stream parsers and DOM parsers are different methods used in order to navigate XML documents. PHP has in built functionality for these methods using simpleXML() for stream parsing and XMLreader() for DOM parsing. The DOM parser method creates an in memory tree representation to be searched, whereas, the stream parser method uses a sequence of events. As the DOM parser requires a tree representation to be stored in memory stream parsers are better on large documents where documents would require greater processing requirements and memory allocation in comparison to the quick memory efficient stream parsers. Stream parsers have the benefit of generating output immediately due to not requiring the storing of documents before hand.

Stream parsers main disadvantage, however, is their inability to backward navigate over a document whereas DOM parsers allow this method of tree traversal. This can be an issue when looking to find a parent of a child based on the child value or in complex, irregular XML structures with relational data. As stream parsers discard elements after they are used they are not able to gather the previous step due to the sequential nature of their makeup, meaning in order to gather parent data from leaf node branches there would have to be a design decision in the software to store the branches in memory from a given reference tag. If the data is complex with deep tree structures there is a much greater argument for DOM parsers as the memory usage of the full program may not out weigh the memory that could be used storing branches and the complex code that would have to be written to process the data from the XML document when using a stream parser.

# 4.0 - Further chart and data extension

# 5.0 - Code link

[GitHub repository code](https://github.com/tapshire/AdvancedWebDev2)


