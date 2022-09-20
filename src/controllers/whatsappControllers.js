const VerifyToken =(req, res) =>{


    try{

            var accessToken="E(G+KbPeShVmYq3t6w9z$C&F)J@McQfTjWnZr4u7x!A%D*G-KaPdRgUkXp2s5v8y";
            var token =req.query["hub.verify_token"];
            var challenge = req.query["hub.challenge"];

            if(challenge!=null && token!=null && token ==accessToken){
                res.send(challenge)
            }else{
                 res.status(400).send();
                }
            
    }catch(e){
        res.status(400).send();
    }

}

const ReceivedMessage =(req, res) =>{
    console.info("hola Received");
    res.send("hola Received");
    }

    module.exports ={
        VerifyToken,
        ReceivedMessage
    }