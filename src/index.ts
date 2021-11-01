import { config } from './config/vars';
import app from "./config/serer";

app.listen(config.port, () => {
    console.log(`Listening on port: ${config.port}`)
})