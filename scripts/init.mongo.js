db = new Mongo().getDB('commanddb');
db.commands.remove({});

db.commands.insert([
 {
 keyword:"menu",
 synonym: 'menu',
 },
 {
 keyword:"quit",
 synonym: 'quit',
 },
 {
 keyword: "attack",
 synonyms: "attack",
 },
]);

db.commands.createIndex({ keyword: "menu" });
db.commands.createIndex({ keyword: "quit" });
db.commands.createIndex({ keyword: "attack" });