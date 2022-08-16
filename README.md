<h1 align="center">
        Porfolio API
</h1>

## Endpoints

Base URL: `https://my-portfolio-sidny.herokuapp.com/`

## Endpoints - Users

`POST - /register/ - Req format`

```json
{
  "nickname": "johndoe",
  "email": "johndoe@email.com",
  "password": "H4rdp@ssword",
  "confirmPassword": "H4rdp@ssword"
}
```

`201 Created`

```json
{
  "id": "3787f5df-b813-44ff-953e-bfeb5ff3ef1d",
  "nickname": "johndoe",
  "email": "johndoe@email.com"
}
```

`Wrong email - 400 Bad Request`

```json
{
  "message": ["Invalid E-mail"]
}
```

`Invalid password - 400 Bad Request`

```json
{
  "message": [
    {
      "Minimun": "8 characters",
      "necessaryNumber": "At least a number",
      "necessaryUppercase": "At least a Uppercase letter",
      "necessaryLowercase": "At least a Lowercase letter",
      "necessarySpecial": "At least a special character"
    }
  ]
}
```

`Equal email - 400 Bad Request`

```json
{
  "message": "User already exists"
}
```

`Empty data - 400 Bad Request`

```json
{
  "message": [
    "Nickname: Required",
    "Email: Required",
    "Password: Required",
    {
      "Minimun": "8 characters",
      "necessaryNumber": "At least a number",
      "necessaryUppercase": "At least a Uppercase letter",
      "necessaryLowercase": "At least a Lowercase letter",
      "necessarySpecial": "At least a special character"
    },
    "Confirm password: Required"
  ]
}
```

`POST - /login/`

```json

```

## PROJECT Routes

`POST - projects`

```json

```

`GET - projects`

```json

```

`GET - projects/:id`

```json

```

`PATCH - projects/:id`

```json

```

`DELETE - projects/:id`

```json

```
