let IS_PROD = true;
const server = IS_PROD ?
//give the link of backend deployement
    "" :

    "http://localhost:8000"


export default server;