# Front end test mercado libre (client side)

This is the test for the front end developer position at Mercado Libre, the project consist of two parts, this the client side and the [server side](https://github.com/Rigo9119/fe-meli-rigo-rosero-server).

## Tech stach 

For this part of the preject I used :
``` React ```
``` axios ```
``` React router ```

## To run the project

In order to tun the project you would need to download both the server which will run on ```localhost:5050``` and the client which will be running on ```localhost:3000``` as usual. 

links:
[client side](https://github.com/Rigo9119/fe-meli-rigo-rosero)
[server side](https://github.com/Rigo9119/fe-meli-rigo-rosero-server).

### clone from master

>[client side](https://github.com/Rigo9119/fe-meli-rigo-rosero)

After download and clone the repo you can run the commands:

> ```yarn install``` to install dependencies 
> ```yarn start ``` to run the project

As mention above the client will be running on ```localhost:3000```

## Issues

This test has 2 major problems(bugs), for some reason the api will always respond with the same data it doesnt matter if you change the query it will always repsond with the same list of items, because of this the breadcrumb component was not implemented, also there is a problem with the details of the products, the thing is that it will always show the first item details i couldnt figure why it doesnt allow me to do a map even though the data is an array it wont allow me to do a map().

I dont really have enough experience with react router so im sure there are  some mistakes on the implementation. 

### Fixes

April 10 - 2021: fix search results, improvements were made on the server side and the client so when reaching the api it will get search related 
items.

## Improvements 

Of course i would like to implement the breadcrumb component, i havent do it until now so it would be really nice to learn something new, 
I would like to suggest maybe a responsive design for it and typescript to prevent types issues.





