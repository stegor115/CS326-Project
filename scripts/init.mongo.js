db = new Mongo().getDB('commanddb');
db.images.remove({});

db.images.insert([
 {
 keyword:"talk",
 synonym: 'talk',
 },
 {
 keyword:"quit",
 synonym: 'quit',
 },
 {
 keyword: "attack",
 synonyms: ["punch", "body slam", "charge", "legal_self-defense_barrage"],
 },
 {
 keyword: "block",
 synonyms: ["defend", "parry"],
 }

]);
