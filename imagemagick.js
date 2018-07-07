const imagemagickCli = require('imagemagick-cli');

imagemagickCli
  .exec('convert site/assets/img/*.png -append site/assets/img/diferenciais.png')
  .then(({ stdout }) => {
    console.log(`${stdout}`);
  });