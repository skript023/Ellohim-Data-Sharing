# Ellohim Data Sharing Service

This backend is first of all not meant to be secure and can be easily abused. The purpose of this project to sharing data between users in [Ellohim Project](https://github.com/skript023/Ellohim-Project) or [Zerstorers](https://github.com/skript023/Zerstorer-Internal). Keep this in mind and you'd be best to introduce some kind of password authentication on the endpoint that gives out session tokens.

## How to deploy

### 1. Clone the code

```bash
git clone https://github.com/skript023/Ellohim-Data-Sharing.git
cd Ellohim Data Sharing
```

### 2. Fill in database details

Open [`data/auth.js`](data/auth.js):
```json
{
    "credentials": {
        "mongodb": {
            "dev": {
                "auth": {
                    "user": "db_user",
                    "password": "db_password",
                    "host": "example.com",
                    "database": "db_name"
                },
                "options": {
                    "useNewUrlParser": true,
                    "useUnifiedTopology": true,
                    "useFindAndModify": false,
                    "useCreateIndex": true
                }
            },
            "prod": {
                "auth": {
                    "user": "db_user",
                    "password": "db_password",
                    "host": "example.com",
                    "database": "db_name"
                },
                "options": {
                    "useNewUrlParser": true,
                    "useUnifiedTopology": true,
                    "useFindAndModify": false,
                    "useCreateIndex": true
                }
            }
        }
    }
}
```

### 3. Starting the backend

#### Docker

```bash
docker-compose up --build
```

#### Without Docker

Have NodeJS (v14+) installed
```bash
npm install
node --experimental-loader=./util/loader.js .
```

## Documentation

None available currently, open an issue if you wish for me to add this.