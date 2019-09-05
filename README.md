# Blog-CRUD
A simple **CRUD Blog** application using React Native.

# Installation
In order to run this app you should follow these steps:

## Physical Device Setup

**Step 1:** Clone this repository and change into the project folder **Blog-CRUD**.

**Step 2:** Outside of **Blog-CRUD** (same tree level as the project folder), create a new folder called **jsonserver**:

```
mkdir jsonserver
```
Then:
```
cd jsonserver
```

Inside this newly create folder run the following commands:

```
npm init
```

And:

```
npm install json-server ngrok
```

As soon as you finish running the previous command, everything related to the server configuration will be set.

Now open a terminal window and run:

```
npm run db
```

After that, open a second window and enter:

```
npm run tunnel
```

Here you'll see, if everything went accordingly, two ***Forwarding*** urls. Copy the first one and change into the **Blog-CRUD** folder. Then, go to the file jsonServer.js located in ./src/api. Change the baseURL variable to the one you copied.  

**Step 3:** Inside the **Blog-CRUD** folder, in your terminal, run as below:

```
npm install
```

After installing, run:

```
npm start
```

This opens the React Native bundler, which gets your code ready to be ran on a mobile device.

Install the ***expo*** app on your mobile device from the App Store or Google Play Store.

Scan the QR code from the React Native Bundler on your phone.
