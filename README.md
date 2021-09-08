# Vehicle Tracker

This is a vehicle tracker system that allows you to see selected vehicle on the map with real time data such as latitude, longitude, battery power etc.

## How to run the project

1. Clone the project using the terminal commands as follows:

    `git clone https://github.com/sabulous/vehicle-tracker.git`
    
    or if you are using SSH
    
    `git clone git@github.com:sabulous/vehicle-tracker.git`

2. Rename `env.dist` file within project folder as `.env` and save.

3. Run the following command to start the applciation:

    `yarn start`
    
## How to use the project

Once app is started at `localhost:3000` go over one of the vehicles and click on it. A Google Map should appear on the right.

## How to run tests

    yarn test

## Improvements to make

1. More structured styling (ex: separate files for each component)
2. Responsive design (ex: using media queries etc.)
3. Proper unit and integration tests
4. Pagination while fetching vehicle list to improve performance
5. Better error handling (ex: providing error types etc.)
6. Provider, Redux or some other state management library might be used for improved maintainability in the future
7. App could be dockerized
