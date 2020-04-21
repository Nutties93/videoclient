# videoclient
Static html client page

Install all node modules
```
npm install --save
```

Create a project in TokBox. Copy the apiKey, apiSecret.

For convenience sake, I have uploaded the backend to heroku. No more ngrok.

Open index.html in any web browser. 
--> The staic html page calls openTok APIs.
```
1) Creates a stream
2) Creates a publisher
3) Connect and publish to a session

```
We can think of the above as a "CREATE VIDEO SESSION" page. And of course, running this page again, creates another new sessionId.

# App2.js

An example where 2 users can connect to a same sessionId. Simply change this to app.js instead and rename the original app.js file to something else. Update the apiKey, token and sessionId accordingly. 




