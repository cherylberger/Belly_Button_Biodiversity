# Belly_Button_Biodiversity
## Data Analytics - Module 12 
### Cheryl Berger 
## Overview:  
**The purpose of the project was to help Roza complete the dashboard on Bellybutton Biodiversity for Improbable Beef.  She would like to share the results of her findings with the study participants so that they can review the fauna found in their belly buttons. This may be useful information if Improbable Beef can identify a specific specied of bacteria that can be used to manufacture synthetic beef.**

## Results:

The resources adopted from the started code and modified to complete this project are included in the following files at the Github link provided below. 
html file: 
logic file (JavaScript): 
data file (JSON):

Deliverable 1 - Create a horizontal bar chart that displays the Top 10 bacterial cultures found in the cultures of each participants belly button.

Deliverable 2 - Create a bubble chart that demonstrates the count of cultures for each strain (otu) by sizing the bubbles to match.  Color coding has been applied to aid in displaying the cultures in descending order by otu id.  Although the values are ordinal on the x-axis, the visualization is amuzing when switching between participants and may be useful in direct comparisons among particpants using other demographic criteria. 

Deliverable 3 - Create a gauge chart that displays the weekly frequency of bully button washing by each particpant.  Note: that the max frequency is 10 washes/week.

Deliverable 4 - Add three boostrap features and customize the webpage for improved visualization
  Jumbotron - Added jumbotron class and included a image of rod bacteria, personalized the title and added a CSS display (display-3), then, changed style (color:blue) to <p> in <h1>
   <div class="jumbotron" style="background-image: url(https://tse2.mm.bing.net/th?id=OIP.kIjvnSAs-dc9xScMp1BcGAHaEt&pid=Api&P=0&w=295&h=187); background-size: 20%;"></div>
        <h1 class= "display-3">Belly Button Biodiversity by Berger</h1>
        <p style="color:blue">Use the interactive charts below to explore the dataset</p>
  
  Added a page background:
  
    <body style = "background: rgb(97, 194, 126)">
      
  Made bold font for all chart titles to match the gauge chart by updating the text in the charts.js file
      JS code for Example 1 (bar chart): 
      title: { text: "<b>Top 10 Bacteria Cultures Found<b>" },
      
      JS code for Example 2 (bubble chart):   title: { text: "<b>Bacterial Cultures Per Sample<b>" },
      
## Summary:
