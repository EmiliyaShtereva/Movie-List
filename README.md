# Movie-List

This is a React project for a movie list where you can invite your friends for a movie.

![image](https://github.com/EmiliyaShtereva/Movie-List/assets/123276538/872da4e6-5ffe-4598-ac50-e96d17aa893f)


## Table of Contents

- [Setup](#setup)
- [Technologies Used](#technologies-used)
- [Architecture and Directories](#architecture-and-directories)
- [License](#license)

## Setup
Download GitHub repo

- Open CMD in the server folder and enter "npm install" to install all dependencies.

JSON Server init:
- Change directory to data folder and enter "npx json-server --watch db.json --port 3000" in the command prompt in the same folder.
- There are 13 movies 6 friends and 2 friend groups in the json file.

Application init:
- Enter "npm run dev" in the command prompt in the same folder to start the app in developement mode.
- To open the app in the browser, open the link provided in the terminal after entering the previous command.

Tests init:
- Enter "npm test" in the command prompt in the same folder

## Technologies Used

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) & [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [NPM](https://www.npmjs.com/)
- [json-server](https://www.npmjs.com/package/json-server)
- [Axios](https://axios-http.com/)

## Architecture and Directories
```
Manga Store
├── public
|   ├── css: global css
├── src
│   ├── assets: Project assets
│   ├── components
|   |   ├── footer
|   |   ├── modal
|   |   ├── navbar
|   |   ├── footer
|   |   ├── pagination
|   |   ├── table
|   ├── data
|   |   ├── db.json
|   ├── hooks
|   |   ├── useSearch.js
│   ├── services: requests to server for data
│   ├── App.jsx: Main application component and router
│   ├── main.jsx: EntryPoint of application.
├── tests: configurations for vitest
├── index.html
├── package.json: File that manages all the dependecies and contains script definitions.
├── vite.config.js: vite configuration
```
## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/EmiliyaShtereva/Movie-List/blob/main/LICENSE) file for details.
