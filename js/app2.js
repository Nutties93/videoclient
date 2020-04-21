// replace this values with the one generated in your TokBox Account
var  apiKey = '46688592';
const appServerUrl = 'http://localhost:3000/tkbx';
var sessionId = '2_MX40NjY4ODU5Mn5-MTU4NzQ3MTc0MzI4M35LZDdBREdxRmEyN2IwLzNaVVRISWFSMEF-fg';
var token = 'T1==cGFydG5lcl9pZD00NjY4ODU5MiZzaWc9NTczYjQ0NDE4ZmNmZWM5MGMyZGQwOWUwYjRmMWM5NTdjNmJlNDZkMDpzZXNzaW9uX2lkPTJfTVg0ME5qWTRPRFU1TW41LU1UVTROelEzTVRjME16STRNMzVMWkRkQlJFZHhSbUV5TjJJd0x6TmFWVlJJU1dGU01FRi1mZyZjcmVhdGVfdGltZT0xNTg3NDcxNzk2Jm5vbmNlPTAuNjcwMzMwMjk5MzYyMDA0JnJvbGU9bW9kZXJhdG9yJmV4cGlyZV90aW1lPTE1ODc0NzUzOTUmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=';


// 1. Create session
createSession();

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

// 1.1 After create session, call getToken(sessionId)
function createSession() {}

// 2. After getToken, call initializeSession() and continue according to the tutorial
function getToken(sessionId) {}


initializeSession();
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