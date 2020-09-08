var express = require('express');
var router = express.Router();

const presentation = "<h1>Me-app i jsramverk</h1><p>Jag heter Heidi Patja och är bosatt i Sundbyberg.</p><p>Vanligtvis är jag en ganska aktiv person, som bland annat ägnar mycket tid åt vandring och cykling, men just nu har jag en gipsad högerarm vilket gör livet lite mer begränsat. Det leder också till att denna beskrivning blir kort. Vi sparar bokstäverna till kodandet istället.</p>"

router.get('/', function(req, res, next) {
    const data = {
        data: {
            msg: presentation
        }
    };

    res.json(data);
});

module.exports = router;
