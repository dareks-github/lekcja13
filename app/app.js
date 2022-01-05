// export app.js

import express from "express"
//
import routes from "./routes.js"
//

const app = express()
app.use("/", routes) // początkowa scieżka dla routera
// app.use("/users", usersRoutes) // inna ścieżka
// app.use(json)
export default app