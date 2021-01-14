# Connect Services

# Launch multiple services

Add a solution `SOLUTION_NAME` to the service.

Create a new folder `deps/SOLUTION_NAME` on the root of the service that is going to make use of `SOLUTION_NAME`. 

With a terminal session running from the root of the service, add the solution as a submodule

```
❯ git submodule add [REPOSITORY_URL] deps/[SOLUTION_NAME]
```

Modify the `tye.yaml` of the service to launch the just added service.

# Add a new API client for another service

Create a class library for the .NET standard under `/api`
