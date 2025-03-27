# Train-y

App which aims to make public transport better by simplyfying the information flow 

## Features

### Real time public transport data

#### Live data 
Ever seen the schedule of a bus and saw that you will miss it and got into a hurry only to find put that the train is delayed and having no real info about it 

Well in trainy you can see the live locations of buses which gives you much more info than the simple delayed sign from google maps

Or ever seen a bus which was packed and you had some time to spare and you wondered "would the next one be as packed as this" but didnt want to take the gamble. Well with trainy you can see the packedness of a bus in real time by seeing how many peoplle are currently in the bus.

To view this data you can either go in the interactive map and filter from there or go in the search menu where you can choose a bus from various filters (next stop - vsichki busove chiito sledvashta spirka im e tazi koqto si posichil, prevoz - liniq i kakvo e neshtoto: tramvai avtobus)

#### Previous data and trends

Have you needed to check the data for a bus to see a trend in it to prepare better for it. For example you wanted to know how packed it is at different times of the data, its actual arriving schedules not the ones on the board which are never acccurate (for example my tramway number 6 always arrives 5 minutes later than the designated schedule)


With train-y you can check data like arrival times (the actual recorded not the one on the table, how packed it is during different times - again the actual data not the anecdotes from google maps which are as innacurate as it gets)

### Online metro card


#### Easy buying 
We all know about buying tickets online but why not buying cards online with the app when you create an account to your acc is created a card which can be filled by payiing the fees and like that your card is on your phone so that when a controlior doide you can tap on the show card which pops up an rfid scannable card with which they can check the card status 

#### Easy validation

Since you need to validate you are when you login you will no longer need to present documents that you are a student for example to check this it will be integrated with exciting infrastructure

#### Easy communication with the bus driver

Ever had the scenario where you were missing the bus but the driver saw you and waited, this means that this good exists its just a matter of communication so we have a feature where you can send a message to the bus which will alert the bus driver (that way you can alert him, also it comes with preconfigured messages so that when you are in a hurry you just click on the wait 10 seconds) from there the bus driver can deicde if he wants to ait or not (also a bus driver may decide to put this on silent mode and he wont be able to recieve alerts)

### Forums

This will be official places where passangers can express opinions and do votings and they can quickly can be seen from the authorities.

A bus has very unfavorable schedule, well you can create a tread in which you make a poll and when this poll takes a lot of activity it serves as an actual zaqvlenie to the bus authorites for them to see and this simplifies the communication between the passanegrs and the authorities (polls are a built in thread option so its just like voting and you can optionally enable comments). This is very helpful for example in areas where buses some buy very rarely and if enough people vote the this will be reviewd by the bus authorities 

Also there can be entity specific posts which you can create to a certain line or even a bus (yeah you can track individual buses, the metro tracks the buses with identifiiers why shouldnt we have this info too). For example you go into the infamous 88 which has missing tire guard if you see this you can easily create a post in the thread for this specific bus (the bus nu,ber can be easily gotten by just opening your map and click on the bus you are in which will bring up all kinds of metadata including the bus number)




## How we (do/aim to do) this 

### Installing our devices on the buses

Each bus recieves a preconfigured device which has all the metadata preconfigured (line, id) and it constantly sends location data about the bus 

### Our app tracks you 

To collect data about bussiness we have access to the your location and we passively monitpor you without the need of interaction (which is way better than the current way which is to scan your card in one of these places in the bus which one rarely does since he has no incentive to do so, while you have an incentive to use our app)
