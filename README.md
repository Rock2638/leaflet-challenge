# leaflet-challenge

To access the published page, click this this:  [Leaflet Step-1 (rock2638.github.io)](https://rock2638.github.io/leaflet-challenge/Leaflet-Part-1/index.html)

## Background ##

The USGS (United States Geological Survey), is interested in building a new set of tools that will allow them to visualise their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. 

## Overview ##
In this challenge, I develop a way to visualise USGS earthquake data that will allow them to better educate the public and other government organisations (and hopefully secure more funding) on issues facing our planet.

## Running the analysis - Earthquake Visualisation
This Challenge uses both  **HTML**  and  **JavaScript**. 

This repository contains the folder: **Leaflet-Part-1**. The focus is on creating the Earthquake Visualisation. This folder also contains the **index.html** file.

The static folder inside Leaflet-Part-1, contains two sub-folders, a css folder and a js folder.
### css folder: ###
In this folder, there is a file called **style.css**.  This file controls the presentation of the HTML document. It controls the layout, colors, fonts, and overall appearance of web page.  Changes were applied to be able to show the legend at the bottom right-hand side.

### js folder: ###
In this folder, there is a file called **logic.js**. This is a file that contains the codes written in JavaScript, to create the dynamic and interactive effects within the web browser. 

## The Dataset and Visualisation ##

 - A dataset for all earthquakes during the **past seven days** were chosen
   from the page: http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php .
 - Using d3.json, the data is read, and Leaflet is used to create a map that plots all the earthquakes from the dataset based on their longitude and latitude.
 - Data markers are included to reflect the magnitude of the earthquake by their size and the depth of the earthquake by colour.
 - Earthquakes with higher magnitudes appear larger, and earthquakes with greater depth appear darker in colour.
 - Popups are included that provide additional information about the earthquake when its associated marker is clicked.
 - A legend is created that provides context for the map data.
        
