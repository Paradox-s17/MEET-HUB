let IS_PROD = true;
const server = IS_PROD ?
//give the link of backend deployement
    "https://meet-hub-backend.onrender.com" :

    "http://localhost:8000"


export default server;