db = new Mongo().getDB('imageDatabase');
db.images.remove({});
db.images.insert([
 {
 src:"img/sample.jpg",
 title: 'sample_boss',
 },
 {
 src: "img/boom.jpg",
 title: 'sample_boom',
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
