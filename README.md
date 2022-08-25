# Porfolio API

## Base URL:

### `https://my-home-api-sidny.herokuapp.com/`

## PROJECT Routes

- `POST - /projects/ - Req body`
  ```json
  {
    "imageLink": "https://link.png",
    "name": "ProjectName",
    "type": "Project type",
    "description": ["descriptions", "one or more descriptions"],
    "date": "12/02/2000",
    "links": ["https://link.com", "one or more links"],
    "engines": ["typescript", "nodejs", "typeORM"]
  }
  ```
  `SUCCESS - 200 OK`
  ```json
  {
    "project_id": "198d7781-b26c-46e3-903b-a8bef5b83948",
    "imageLink": "https://link.png",
    "name": "ProjectName",
    "type": "Project type",
    "description": ["descriptions", "more descriptions"],
    "date": "DD/MM/YYYY",
    "links": ["https://link.com"],
    "engines": ["typescript", "nodejs", "typeORM", "jwt", "express", "docker"]
  }
  ```
  `Missing Data - 400 Bad Request`
  ```json
  {
    "message": ["Name: Required", "Description: Required", "Date: Required"]
  }
  ```
  `Missing Links - 400 Bad Request`
  ```json
  {
    "message": "Missing project's links, at least one is needed"
  }
  ```
  `Invalid Link - 400 Bad Request`
  ```json
  {
    "message": "Invalid front link. Ex: https://www.siteName.com/"
  }
  ```
  `Adding many - 200 OK`
  ```json
  {
    "projects": [
      {
            "imageLink": "https://link.png",
  			    "name": "ProjectName",
  			    "type": "Project type",
  			    "description": ["descriptions","one or more descriptions"],
  			    "date": "DD/MM/YYYY",
  			    "links": ["https://link.com","one or more links"],
  			    "engines": ["typescript", "nodejs", "typeORM"]
      },
      {
            "imageLink": "https://link.png",
  			    "name": "ProjectName2",
  			    "type": "Project type",
  			    "description": ["descriptions","one or more descriptions"],
  			    "date": "DD/MM/YYYY",
  			    "links": ["https://link.com","one or more links"],
  			    "engines": ["typescript", "nodejs", "typeORM"]
      },...
  }
  ```
  `Adding many - 200 OK`
  ```json
  {
    "count": 2
  }
  ```
- `GET - projects`
  ```json
  {
    "nickname": "johndoe",
    "email": "johndoe@email.com",
    "projects": [
      {
        "project_id": "198d7781-b26c-46e3-903b-a8bef5b83948",
        "imageLink": "https://link.png",
        "name": "ProjectName",
        "type": "Project type",
        "description": [
          "descriptions",
          "more descriptions"
        ],
        "date": "12/02/2000",
        "links": [
          "https://link.com"
        ],
        "engines": [
          "typescript",
          "nodejs",
          "typeORM",
          "jwt",
          "express",
          "docker"
        ]

      },...
    ]
  }
  ```
- `GET - projects/:id`
  ```json
  {
    "nickname": "johndoe",
    "email": "johndoe@email.com",
    "project": {
      "project_id": "198d7781-b26c-46e3-903b-a8bef5b83948",
      "imageLink": "https://link.png",
      "name": "ProjectName",
      "type": "Project type",
      "description": ["descriptions", "more descriptions"],
      "date": "12/02/2000",
      "links": ["https://link.com"],
      "engines": ["typescript", "nodejs", "typeORM", "jwt", "express", "docker"]
    }
  }
  ```
  `Wrong ID - 400 Bad Request`
  ```json
  {
    "message": "Project not found."
  }
  ```
- `PATCH - projects/:id - Req Body`
  ```json
  {
    "imageLink": "https://link.png",
    "name": "New ProjectName2",
    "type": "New Project type",
    "description": ["descriptions", "one or more descriptions"],
    "date": "12/02/2000",
    "links": ["https://link.com", "one or more links"],
    "engines": ["typescript", "nodejs", "docker"]
  }
  ```
  `Success - 200 OK`
  ```json
  {
    "project_id": "198d7781-b26c-46e3-903b-a8bef5b83948",
    "imageLink": "https://link.png",
    "name": "New ProjectName2",
    "type": "New Project type",
    "description": ["descriptions", "one or more descriptions"],
    "date": "12/02/2000",
    "links": ["https://link.com", "one or more links"],
    "engines": ["typescript", "nodejs", "docker"]
  }
  ```
  `Wrong ID - 400 Bad Request`
  ```json
  {
    "message": "Project not found"
  }
  ```
- `DELETE - projects/:id`
  ```json
  No body
  ```
  `Success - 204 No Content`
  ```json
  No body returned for response
  ```
  `Wrong ID - 400 Bad Request`
  ```json
  {
    "message": "Project not found"
  }
  ```
