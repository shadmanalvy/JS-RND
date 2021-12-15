var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
var string = '';
for(var em=0; em<6; em++){
    string += chars[Math.floor(Math.random() * chars.length)];
}
console.log((string + '@gmail.com'));