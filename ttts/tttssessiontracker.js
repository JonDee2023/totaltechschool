let activeSessionId = null;

function loginSession (userEmail) {

    let userEmail = localStorage.getItem("currentUser");
    
    let storedSessions = JSON.parse(localStorage.getItem("sessions") || []);

    let newSession = {
    id: storedSessions.length + 1,
    email: userEmail,
    loginTime: new Date().toISOString(),
    logoutTime: null,
    duration: null
    }

    storedSessions.push(newSession)

    localStorage.setItem("sessions", JSON.stringify(storedSessions));

    localStorage.setItem("activeSessionId", JSON.stringify(newSession.id));

    console.log("Login recorded");
};

function logoutSession() {
    let storedSessions = JSON.parse(localStorage.getItem("sessions") || []);

    let activeSessionId = JSON.parse(localStorage.getItem("activesessionId"));

    if (!activeSessionId) {
        console.log("No active session");
        return;
    }

    let ongoingSession = storedSessions.find( s => s.id === activeSessionId);

    if (ongoingSession) {
        ongoingSession.logoutTime = new Date().toISOString();

    // Calculate duration

    let loginT = new Date(ongoingSession.loginTime);

    let logoutT = new Date(ongoingSession.logoutTime);

    let diffS = logoutT - loginT;
    let diffM = Math.floor(diffS/60000);
    ongoingSession.duration = diffM + " minutes"

    localStorage.setItem("sessions", JSON.stringify(storedSessions));
    
    localStorage.removeItem("activeSessionId");

    console.log("Logout recorded");
    }

};

// View all sessions
//console.log(JSON.parse(localStorage.getItem("sessions")));

//Or use a function:
function showSessions() {
    let storedSessions = JSON.parse(localStorage.getItem("sessions")) || [];
    console.table(storedSessions);
};

// Auto logout when user closes tab:
window.addEventListener("beforeunload", function () {
    logoutSession();
});