# GraphQL Client Update

When modifying the entities of a module or making changes to the API it is required to update the GraphQL client so that the rest of libraries are in sync with the latest changes made on the API.


## Mutations

When the inputs of a mutation are modified due to changes in the entity, it is required to update the client to reflect the latest changes. Since mutations expect an input with a specific set of fields, the update process can be automated.

To do so, launch a new terminal session and run:

```PS
❯ .\run-api.bat
```

Once the API is running, launch another terminal session and update the client:

```PS
❯ .\update-client.bat
```

This might result in an error if the API configuration file (`berry.json`) inside the `lib/[...].ApiClient` folder doesn't match the url where the API is running. The field `Url` from `Schemas`:

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

## Queries

If new fields have been added to the entity, and this fields are to be retrieved when making a query, a manual update should be performed. This process cannot be automated because it is up to the developer to specify which fields should be retrieved for each entity.

Open `[ENTITY_NAME]Queries.graphql` under `[SOLUTION_NAME].ApiClient` and search for the fragment for which new fields are to be retrieved. Add the new fileds to the fragment body and run 

```PS
❯ dotnet build
``` 

for the changes to be effective.