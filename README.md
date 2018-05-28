# CartProtection
This project is meant to help facility managers to protect their assets from being stolen.
The project consists of four main sub projects
1. An android application for the device to be tracked. 
2. Front end web application based on google maps for tracking the device allowing features such as getting device position, telemetry, Location tracking and monitoring and marking it if it is out of the perimeter. The web application is based on Google maps, BootStrap for design and Restfull API for communication with the backend.
3. Backend Server which manages all the devices you wish to track using UDP communication and relays their telemetry to the web application using http REST API. The web server is based on Spring framework.
4. Carts scalable simulation, Allowing to simulates carts inside a peimiter and simulate rogue carts that leave the perimeter. Tested with up to 2000 carts simultaneously.


# Compilation and execution
## Prerequisite
You need to have maven installed, NodeJs (With static-server installed as global install using npm), Java Jre version 7+.

## Compiling
1. open terminal / cmd shell
2. cd into /JavaServer/CartProtectionBackend/
3. Run 'mvn clean compile package'

## Running
For each of the three components (beside the android one which you just need to install the APK for), Open a terminal and run the process.

### Backend Server
1. cd /JavaServer/CartProtectionBackend/target/
2. java -jar CartProtectionBackend-1.0-SNAPSHOT.jar

### Web server
1. cd /Web/html
2. static-server

### Carts simulation
1. cd /JavaServer/CartProtectionBackend/target/
2. java -jar CartsSimulation-1.0-SNAPSHOT.jar




