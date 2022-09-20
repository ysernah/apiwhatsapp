const VerifyToken =(req, res) =>{
res.send("hola verifyToken");
}

const ReceivedMessage =(req, res) =>{
    res.send("hola vReceived");
    }

    module.exports ={
        VerifyToken,
        ReceivedMessage
    }