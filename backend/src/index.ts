import express, { Request, Response } from 'express'
import db from "./config/db";

const app = express()
const port = process.env.PORT || 3000

// Middleware pour parser le JSON
app.use(express.json())

// Exemple de route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello TypeScript + Express!')
})

// Lancement du serveur
async function start() {
    try {
        // Applique les migrations Knex avant de démarrer
        await db.migrate.latest();
        console.log('✅ Migrations exécutées');

        // (Optionnel) Exécute les seeds
        // await db.seed.run();
        // console.log('🔨 Seeds exécutés');

        // Démarrage du serveur
        app.listen(port, () => {
            console.log(`🚀 Serveur lancé sur le port ${port}`);
        });
    } catch (err) {
        console.error('❌ Échec des migrations/seeds :', err);
        process.exit(1);
    }
}

start();

