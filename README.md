# Weather app

## About

This is a weather app that shows current and future weather of a given location. This is the [4th project](https://www.theodinproject.com/lessons/node-path-javascript-weather-app#project-solution) of the [TOP](https://www.theodinproject.com/) course. Weather data and condition images are obtained from [WeatherAPI](https://www.weatherapi.com/).

Find the live link [here](https://kaglet.github.io/weather_app/).

Find some preview screenshots here: 
![image](https://github.com/kaglet/weather_app/assets/96872447/a96392fe-f55a-4384-b952-b945a3abdf3f)
![weather](https://github.com/kaglet/weather_app/assets/96872447/13d08bc5-7fd5-45fe-b994-c68f9d6c3711)

## Features

- Fetch and display today's weather details.
- Fetch and display future weather details.
- Location dropdown suggestor.
- Convert temperature metric.
- Loading with spinner while async functions are yet to be complete.
- Different weather icons shown depending on if day or night time. 

## Main skills emphasized

- Separation of concerns with IIFE modules, ES6 modules, factory functions, and classes. Separation between UI components and other functionality is emphasized as seen in the organized file structure.
- Asynchronous JavaScript (using Promises and async/await) with APIs.
- Short files, always designed to be less than 50 lines, improving readability, maintainability and modularity. 2 files exceed this due to the wrapping rules of the linter, so leeway is given.

## Execution Concept

Some main aims I wanted for this project: a good folder/file structure, easily readable code (especially compared to my last projects which I wasn't too happy with in this regard). To help, I kept in mind some tips highlighted in this article: [How to avoid callback hell](http://callbackhell.com/). I tried to keep code shallow, replacing nested code with a modular "nested folder" structure rather than dumping everything into one file. At each folder level there can be subfolders that support the main functionality present in each folder. 

I decided when to use factory functions vs classes vs IIFE modules and came up with the following for consistency. Factory functions was used for UI component creations, module controllers for managing non-UI components and data with common functions or services, and classes when I wanted to easily extend from a base class. I also considered classes when getter and setter accessor methods could be taken advantage of due to repetition in those tasks. 
Related to UI components I only use IIFE modules where I decided was absolutely necessary such as functionality surrounding managing a centralized singleton component, such as the dropdown, and loading screen. For non-UI components functionality related to a single manager of tasks is relegated here as services that the entity provides, such as the dataProcessor, storageManager, weatherDataRequester etc. These are special related functionality sets where one can easily look through the code and see which entity is providing the service. If an IIFE module isn't really needed for everything, I don't use it.

In previous projects I adopted the approach to use modules for everything because I figured modules could do everything in an object oriented sense rather than a procedural sense. In this project I adopted a more balanced approach, opting to use procedural programming to generate the UI. In the past my over reliance on large modules and modules for everything made the code more convoluted.

Focusing on modularity in these ways helped me keep the steps of fetching, processing, storing, and then using the data for the UI or other functions, all broadly separate, and manageable. 

I hope the result of my thought process is code that is more readable and self explanatory, only exposing the details relevant to a certain level while hiding other details to improve code reading fatigue.

# Special Challenges 

- The weatherAPI provided dozens of images in the folder that each map to a specific weather condition. Due to the large volume I found it unfeasible to import each one of them manually to be present in the webpack build on the user end, so I had to find a better way. As a result of research and headbanging, there is now an ES6 module I dedicated for dynamically importing all day and night time weather images, instead of manually importing all possible images that could be used. From a weather condition code the matching image inside the dynamic import cache is mapped to for display. Helpful resources here, for my future reference: [require-context](https://webpack.js.org/guides/dependency-management/#require-context), [Dynamically importing images from a directory using webpack](https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack), [Google search that finally got what I wanted](https://www.google.com/search?q=how+to+import+an+entire+folder+of+pictures+webpack&oq=how+to+import+an+entire+folder+of+pictures+webpack&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yDQgCEAAYhgMYgAQYigUyDQgDEAAYhgMYgAQYigUyDQgEEAAYhgMYgAQYigUyDQgFEAAYhgMYgAQYigUyDQgGEAAYhgMYgAQYigUyCggHEAAYgAQYogQyCggIEAAYgAQYogQyCggJEAAYgAQYogTSAQg3MDQ2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8).

## Credits

### Assets

- [Fontawesome](https://fontawesome.com/) was used for the icons.
- [Google Fonts](https://fonts.google.com/) was used for the fonts.

### Libraries and APIs 
- WeatherAPI used for the weather data. 
