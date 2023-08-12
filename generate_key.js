const fs = require('fs');
const forge = require('node-forge');

// Generate a new RSA private key
const rsaPrivateKey = forge.pki.rsa.generateKeyPair(2048);

// Convert the private key to PEM format
const privateKeyPem = forge.pki.privateKeyToPem(rsaPrivateKey.privateKey);

// Save the private key to a file
fs.writeFileSync('private_key.pem', privateKeyPem);

console.log('Private key generated and saved as private_key.pem');
