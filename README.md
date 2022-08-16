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
  "nickname": "Sodyy",
  "email": "sidny.silva@portfolio.com"
}
```

`Wrong email - 400 bad Request`

```json
{
  "message": ["Invalid E-mail"]
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
