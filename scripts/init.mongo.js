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
]);
