import { config } from './config/vars';
import app from "./config/server";
const test = 0 ;

app.listen(config.port, () => {
    console.log(`Listening on port: ${config.port}`)
})