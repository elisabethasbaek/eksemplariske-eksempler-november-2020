# NPM + Gulp

!! Sørg for at npm er installeret på computeren

**``npm init``**
(Husk: _license: MIT_) // Dette opretter _package.json_

**``npm i gulp``**
Dette opretter _package-lock.json_

I package.json tilføj under _"scripts"_:

    "all": "npm run clean && npm start",
    "start": "gulp",
    "clean": "rm -Rf dist",

Skriv **``gulpfile.js``** filen - lav evt. seperate filer til hver funktion

Kopier og kør i terminalen: 

    npm i gulp gulp-babel gulp-clean-css gulp-concat gulp-connect gulp-htmlmin gulp-image-resize gulp-sass gulp-sourcemaps gulp-htmlmin gulp-rename

Hvis installation af gulp-filer fejler (på Windows) i terminalen i VS Code, så åben mappen dit projekt ligger i i stifinderen, klik på _fil_ oppe i toppen, og vælg _PowerShell_

Hvad du gerne vil have i din _gulpfile.js_:
```javascript
"dependencies": {
    "@babel/core": "^7.12.3",
    "@babel/preset-env": "^7.12.1",
    "gulp": "^4.0.2",
    "gulp-babel": "^8.0.0",
    "gulp-clean-css": "^4.3.0",
    "gulp-concat": "^2.6.1",
    "gulp-connect": "^5.7.0",
    "gulp-htmlmin": "^5.0.1",
    "gulp-image-resize": "^0.13.1",
    "gulp-rename": "^2.0.0",
    "gulp-sass": "^4.1.0",
    "gulp-sourcemaps": "^2.6.5"
}
```

**``npm start``** for at starte gulp // 
**``ctrl + C``** for at afslutte gulp