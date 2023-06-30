# AnimalWelfareApp
> This is the animal welfare app (frontend for the animal welfare api) built using react native.

## Tech Stack 
   - Frontend
     - React Native (Expo)
    
   - Backend
     - Visit the github repo for the animal welfare api [https://github.com/SANKALP1011/AnimalHelperApi]

## Screen Recording of the app

   - Screen recording of the entire app is provided below with the attached google drive link
     
     > [https://drive.google.com/drive/folders/1E7XhKvfEH386YNy--kXZvzjGkfGqLfAl?usp=sharing](Video)

## Folder Structure 

   - Api Call ( Entire api call is done in those specific folders )
     
     ``` javascript
     - User.service.js
     - Ngo.service.js
     - Doctor.service.js
     ```
   - Screen Stack ( Divided into Authenticated and UnAuthenticated Stack )
     
     ``` javascript
     - UserStack.stack.js ( Divided into Auth and Unauth )
     - DoctorStack.stack.js ( Divided into Auth and Unauth )
     - NgoStack.stack.js ( Divided into Auth and Unauth )
     ```
   - Screens ( Divided into User , Doctor , Ngo and Animal)

     ``` javascript
     USER
     
      - UserDetails.screen.js
      - UserHome.screen.js

     Doctor
     
      - DoctorDetails.screen.js
      - DoctorHome.screen.js

     Ngo
     
      - NgoHome.screen.js
      - NgoDetails.screen.js

     Animal

      - Userside (Folder)
      - Doctoside (Folder)
      - Ngoside (Folder)

     ```

   - Context

     ``` javascript

     - user.authContext.js
     - ngo.authContext.js
     - doctor.authContext.js

     ```
     

## Getting Started

  - Install the expo cli on your local machine.
    
  - Once installed , run the app on your local machine with the help of command
    
    ```
    expo start
    ```

## Docker Conatiner

  - Clone the docker image from the docker hub with following url

    > [https://hub.docker.com/repository/docker/sankalp1011/animalwelfareapp/general]

  - Run the image with the help of the followimg command

    ``` bash
    docker run -it -p 19000:19000 animalwelfareapp
    ```
    

## TO DO

   - Work on onboarding screen.
   - Add Logout Button
