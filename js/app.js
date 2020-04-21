// replace this values with the one generated in your TokBox Account
// var  apiKey = '46688592';
// var sessionId = '2_MX40NjY4ODU5Mn5-MTU4NzQzODc2NjU1MX44WkQ0WTBib2tHLzdIaGQ5WitHTlNtZGR-fg';
// var token = 'T1==cGFydG5lcl9pZD00NjY4ODU5MiZzaWc9NjY4NjE1NWJhMzZjMDNhNDlhYWI0ZGEzMDg3ZGJhYjQ2ZTMxZDk2NjpzZXNzaW9uX2lkPTJfTVg0ME5qWTRPRFU1TW41LU1UVTROelF6T0RjMk5qVTFNWDQ0V2tRMFdUQmliMnRITHpkSWFHUTVXaXRIVGxOdFpHUi1mZyZjcmVhdGVfdGltZT0xNTg3NDM4ODAzJm5vbmNlPTAuNzYxNDc5ODg5ODI1MjA0NiZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTg3NTI1MjAyJmNvbm5lY3Rpb25fZGF0YT1Db25uZWN0ZWQmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=';

var apiKey = '';
var sessionId = '';
var token = "";

let setheaders = new Headers({
  'Access-Control-Allow-Origin':'*',
  'Content-Type': 'application/json'
});

// (optional) add server code here
var SERVER_BASE_URL = 'https://1fd8a7c3.ngrok.io';
fetch(SERVER_BASE_URL + '/session').then((response) => {
  return response.json();
}).then(function(res) {
  apiKey = res.apiKey;
  sessionId = res.currentSessionId;
  token = res.currentToken;
  console.log(res)
  initializeSession();
}).catch(handleError);


// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

// 3. Complete according to the tutorial
function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
  session.on('streamCreated', function(event) {
    session.subscribe(event.stream, 'subscriber', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  });
  
  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}