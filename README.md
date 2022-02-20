# Belly_Button_Biodiversity
## Data Analytics - Module 12 
### Cheryl Berger 
## Overview:  
**The purpose of the project was to help Roza complete the dashboard on Bellybutton Biodiversity for Improbable Beef.  She would like to share the results of her findings with the study participants so that they can review the fauna found in their belly buttons. This may be useful information if Improbable Beef can identify a specific specied of bacteria that can be used to manufacture synthetic beef.**

## Results:

#### The resources adopted from the started code and modified to complete this project are included in the following files at the Github link provided below. 
html file: https://github.com/cherylberger/Belly_Button_Biodiversity/blob/main/Module%2012_Challenge/index.html

logic file (JavaScript): 

data file (JSON): https://github.com/cherylberger/Belly_Button_Biodiversity/blob/main/Module%2012_Challenge/static/js/samples.json

#### Deliverable 1 - Create a horizontal bar chart that displays the Top 10 bacterial cultures found in the cultures of each participants belly button.

#### Deliverable 2 - Create a bubble chart that demonstrates the count of cultures for each strain (otu) by sizing the bubbles to match.  Color coding has been applied to aid in displaying the cultures in descending order by otu id.  Although the values are ordinal on the x-axis, the visualization is amuzing when switching between participants and may be useful in direct comparisons among particpants using other demographic criteria. 

#### Deliverable 3 - Create a gauge chart that displays the weekly frequency of bully button washing by each particpant.  Note: that the max frequency is 10 washes/week.

#### Deliverable 4 - Add three boostrap features and customize the webpage for improved visualization

  ##### Added jumbotron class and included a image of rod bacteria, personalized the title and added a CSS display (display-3), then, changed style (color:blue) to <p> in <h1>
  
  ![image](https://user-images.githubusercontent.com/94234511/154868191-8c592a3c-6d46-49a2-b984-17fcda01c6bf.png)

  Added a page background:
  
    <body style = "background: rgb(97, 194, 126)">
      
  Made bold font for all chart titles to match the gauge chart by updating the text in the charts.js file
      
      JS code for Example 1 (bar chart): 
      title: { text: "<b>Top 10 Bacteria Cultures Found<b>" },
      
      JS code for Example 2 (bubble chart):   
      title: { text: "<b>Bacterial Cultures Per Sample<b>" },

  Below is the code for the index.html
     ![image](https://user-images.githubusercontent.com/94234511/154867958-10c40b10-6d99-4d3f-b9c2-12f8bc2220bb.png)

   Below is the code for the charts.js file
     ![image](https://user-images.githubusercontent.com/94234511/154867983-58c4ae32-c14e-465f-9089-2dc821cd6f47.png)
     ![image](https://user-images.githubusercontent.com/94234511/154868029-b67a3c41-2073-4a8d-bb0f-b28434821ea5.png)
     ![image](https://user-images.githubusercontent.com/94234511/154868075-e5a2731c-bdb0-4b26-a818-dbc2a6cc0fd5.png)
     ![image](https://user-images.githubusercontent.com/94234511/154868093-b67642df-7745-428f-a6c0-bfb989967af4.png)

## Summary:
      
![image](https://user-images.githubusercontent.com/94234511/154867892-99408c89-ec58-4640-8ae5-85ad467cf5b4.png)
