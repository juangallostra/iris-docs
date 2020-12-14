# GraphQL Client Update

When modifying the entities of a module or making changes to the API it is required to update the GraphQL client so that the rest of libraries are in sync with the latest changes on the API.

To do so, launch a new terminal session and run:

```PS
❯ .\run-api.bat
```

Once the API is running, launch another terminal session and update the client:

```PS
❯ .\update-client.bat
```

This might result in an error if the API configuration file (`berry.json`) inside the `lib/[...].ApiClient` folder doesn't match the API url. The field `Url` from `Schemas`:

```JSON
{
  "Schemas": [
    {
      "Name": "HikVisionsApi",
      "Type": "http",
      "File": "HikVisionsApi.graphql",
      "Url": "http://localhost:31000/graphql/"
    }
  ],
  "ClientName": "HikVisionsApiClient"
}
```

should point to the correct url where the API is running.