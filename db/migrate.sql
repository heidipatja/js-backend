DROP TABLE IF EXISTS reports;
DROP TABLE IF EXISTS presentation;
DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
    email VARCHAR(255) NOT NULL,
    password VARCHAR(60) NOT NULL,
    UNIQUE(email)
);

CREATE TABLE IF NOT EXISTS reports (
    week INT NOT NULL,
    content VARCHAR(2000),
    UNIQUE(week)
);

CREATE TABLE IF NOT EXISTS presentation (
    id INT NOT NULL,
    content VARCHAR(2000),
    UNIQUE(id)
);

INSERT INTO reports
    (week, content)
VALUES
    (1,
    '### Kursrepo

Kursrepot finns på [GitHub](https://github.com/heidipatja/jsramverk).

### Kom igång

Installera moduler med **npm install**.

Starta appen i development mode med kommandot **npm start**.

Bygg appen för produktion med **npm run build**.

Öppna [http://localhost:3000](http://localhost:3000) för att se sidan i din webbläsare.

Projektet har skapats med [Create React App](https://github.com/facebook/create-react-app).'),
    (2,
    '### Kursrepo

Kursrepot finns på [GitHub](https://github.com/heidipatja/js-backend).

### Kom igång

Installera moduler med **npm install**.

Starta appen med kommandot **npm start**.

Öppna [http://localhost:1337](http://localhost:1337) för att se sidan i din webbläsare.'),
    (3, 'Text uppdateras snart.'),
    (4, 'Text uppdateras snart.'),
    (5, 'Text uppdateras snart.'),
    (6, 'Text uppdateras snart.'),
    (7, 'Text uppdateras snart.');

INSERT INTO presentation
    (id, content)
VALUES
    (1,
    '# Me-app i jsramverk

Jag heter Heidi Patja och är bosatt i Sundbyberg.

Vanligtvis är jag en ganska aktiv person, som bland annat ägnar mycket tid åt vandring och cykling, men just nu har jag en gipsad högerarm vilket gör livet lite mer begränsat. Det leder också till att denna beskrivning blir kort. Vi sparar bokstäverna till kodandet istället.
');
