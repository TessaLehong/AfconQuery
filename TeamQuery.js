const { MongoClient } = require("mongodb");

async function main() {
    const uri = "mongodb+srv://faithmala11:Faith2002@clusterfaith.4r5v0.mongodb.net/"; 
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log("Connected to MongoDB!");

        const db = client.db("Afcon2023");
        const teamsCollection = db.collection("teams");

        // Find the team by name
        const teamName = "South Africa";
        const team = await teamsCollection.findOne({ name: teamName });

        // If the team is found, get its players
        if (team) {
            console.log(`Team: ${team.name}, Coach: ${team.coach}, Group: ${team.group}`);
            console.log("Players:", team.players);
        } else {
            console.log(`Team ${teamName} not found.`);
        }
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

main().catch(console.error);





