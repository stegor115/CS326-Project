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
]);
