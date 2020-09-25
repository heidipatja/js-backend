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

INSERT INTO users
    (email, password)
VALUES
    ('test@test.se',
    '$2a$10$p4KgahqzUR14Ee1msdU/rel/7Jf3DK5F3S5BQcGha/rYiiuKzWCKK'
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

Öppna [http://localhost:8333](http://localhost:8333) för att se sidan i din webbläsare.

Skapa en .env-fil i rooten och lägg in din JWT_SECRET. Exempel:
    JWT_SECRET=Lzm^o>Q-lGO'),
    (3, '
Kursmomentet flöt i huvudsak på bra. Det största problemet var egentligen att få tillgång till Github Education Pack, vilket jag inte fick förrän fredagen samma vecka som uppgiften skulle in. Därför blev inlämningen lite försenad.

  Det enda jag egentligen fastnade på vad det gäller driftsättningen var att få upp domänerna. Jag gick igenom guiden väldigt många gånger uppifrån och ner och såg till slut att jag hade missuppfattat ett steg och inte lagt in mina nameservers i namecheap. Därefter misslyckades jag, p.g.a. bristande UX, med att spara mina ändringar där, så det blev ett par rundor till… Att jag stötte på trubbel är inte dåligt i sig, eftersom det ledde till att jag blev väldigt bekant med både servern och hela processen. När allt går som det ska första gången är det ju lätt att man glömmer bort vad det var man gjorde, särskilt om man bara följer en guide och inte riktigt förstår vad man gör.

Frontenden gick väldigt snabbt. Dock fick jag fundera en stund på varför login och register inte fungerade, vilket förstås berodde på att min .env-fil låg i .gitignore och därför inte följde med när jag klonade repot.

Jag tyckte att veckans kursmoment var väldigt intressant och jag har fått en mycket bättre förståelse för hela processen kring driftsättning. Det är väldigt mycket detaljer som ska klaffa och det kan vara svårt att veta vad det är som är fel när man har missat en liten detalj. Det blir också tydligare att olika “fel” man gjort under utvecklingen kan bli problem vid driftsättning. Till exempel hade jag kanske själv blivit hjälpt av tydligare felmeddelanden när jag stötte på problemet med den saknade .env-filen. Det är antagligen också där testningen kommer in. Det blir tydligt att det krävs kompetens inom devops för att hela kedjan från utveckling till driftsättning ska fungera snabbt och smärtfritt.'),
    (4, '### Use cases för Selenium

1. Testa att me-sidan har rätt titel, H1 och url

2. Testa att det går att navigera till login-sidan

3. Testa att login-sidan har en grön knapp med texten "Logga in"'),
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
