import express, { Request, Response } from 'express'

const app = express()
const port = process.env.PORT || 3000

// Middleware pour parser le JSON
app.use(express.json())

// Exemple de route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello TypeScript + Express!')
})

// Lancement du serveur
app.listen(port, () => {
    console.log(`Serveur lancé sur le port ${port}`)
})
