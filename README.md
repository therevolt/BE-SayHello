<p align="center">
  <a href="" rel="noopener">
 <img width=400px height=200px src="https://ourcodeworld.com/public-media/articles/articleocw-57f3accea486b.png" alt="logo"></a>
</p>

<h3 align="center">Backend SayHello Apps</h3>

---

## 🧐 About
This is the repository Backend of the Bootcamp Arkademy task

## 💻 Installation

Follow the steps below

1. Clone this repo
```
git clone https://github.com/therevolt/BE-SayHello
cd BE-SayHello
```

2. Install module
##### Install Module
```
npm install
```

3. Create env file
```
# ---------------------------------------
#               CONFIG DB
# ---------------------------------------
DB_HOST= #host database
DB_USER= #user database
DB_PASS= #pass database
DB_NAME= #database name

# ---------------------------------------
#            CONFIG WEBSITE
# ---------------------------------------
DOMAIN=http://localhost:3000

# ---------------------------------------
#            CONFIG MAILER
# ---------------------------------------
EMAIL=YOUR_GMAIL_HERE
PASSWORD=YOUR_PASSWORD_GMAIL_HERE

# ---------------------------------------
#            CONFIG GENERAL
# ---------------------------------------
PORT=XXXX
HOST=http://localhost:XXXX
SECRET_KEY=XXXXXX
SECRET_KEY_RESET=XXXXXX
SECRET_KEY_VERIF=XXXXXX
SECRET_KEY_REFRESH=XXXXXX
SECRET_KEY_PIN=XXXXXX
STATIC_FOLDER=/avatar
```
Detail CONFIG GENERAL
| EXAMPLE URL | [http://localhost:6000]() |
| :-------------: |:-------------:|
| PORT | 6000 |
| HOST | [http://localhost]() |

4. Done, You can run it in the way below
##### Developer Mode (with nodemon)
```
npm run dev
```
##### Production Mode (only node)
```
npm start
```

## 🔖 Standard Response & Preview Request By Postman
#### Standard Response API
```json
{
    "status": true,
    "message": "success register",
    "data": [object Object]
}
```
Object data contains content according to the request

#### Preview Request By Postman
![Preview](https://i.ibb.co/McdR01S/sample.png)

## ⛏️ Built Using

- [ExpressJS](https://expressjs.com)
- [MySQL2 Package](https://www.npmjs.com/package/mysql2)
- [CORS Package](https://www.npmjs.com/package/cors)
- [DotEnv Package](https://www.npmjs.com/package/dotenv)
- [JWT Package](https://www.npmjs.com/package/jsonwebtoken)
- [Nodemailer Package](https://www.npmjs.com/package/nodemailer)
- [UUID Package](https://www.npmjs.com/package/uuid)
- [Multer Package](https://www.npmjs.com/package/multer)
- [Bcrypt Package](https://www.npmjs.com/package/bcrypt)
- [Socket.io Package](https://www.npmjs.com/package/socket.io)

## 💭 Documentation

[Click Here](https://documenter.getpostman.com/view/10780576/TzCHAV8d)

## 💻 FrontEnd

Repo Frontend : https://github.com/therevolt/FE-SayHello

## ✍️ Authors

- [@therevolt](https://github.com/therevolt)
