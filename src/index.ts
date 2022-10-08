import express, { Application } from 'express'
import { routes } from './routes'

const app: Application = express()
const port: Number = 4000

routes(app)

app.listen(port, () => console.log(`Server is listening on port ${port}`))
