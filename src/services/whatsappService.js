const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const https = require("https");
function SendMessageWhatsApp(data){    
    const options = {
        host: "graph.facebook.com",
        path: "/v13.0/103837229153516/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer EAAv8IcnCOCEBABJq2hZCCCuJotCCYF5MhRs0rdih0WKmwiFCEFHYuZAtMZAMMIlG0ZBFzG1ZCgTlPq4naUFwxqHejDOrTogRLVLu8q8OLYgZB4XHDE8ol3q71f4MmZADGaw22qa8fJLJbrfqEaF1drZBlwoW1tTndQ3DhH0hbwZAxv4tk4Cjq4GZCM"
        }
    };
    const req = https.request(options, res => {
        res.on("data", d=> {
            process.stdout.write(d);
        });
    });

    req.on("error", error => {
        console.error(error);
    });

    req.write(data);
    req.end();
}

module.exports = {
    SendMessageWhatsApp
};