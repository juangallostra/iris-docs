# Module Generator Setup

## Generator Setup

Start by cloning the `generator-iris-module` repository

```PS
❯ git clone https://JGIng@dev.azure.com/JGIng/Iris/_git/generator-iris-module
```

Once the repository has been cloned, `cd` into `generator-iris-module`, install the generator dependencies and create a symlink so that the local copy of the package is used.

```PS
❯ cd generator-iris-module
❯ yarn # install dependencies, equivalent to yarn install
❯ yarn link # create symlink to use local copy
```
After that, install [Yeoman](https://yeoman.io)'s command line utility. Yeoman is a generic scaffolding system and `yo` its CLI.

```PS
❯ npm install -g yo
```

Once `yo` has been installed we already have everything in place to be able to run the iris generator. To get an overview of the different options run 

```PS
❯ yo iris-module --help
```

## Example Module Creation

Lets assume we want a create a new module called Presence Control with Device as its first entity. First create or change directory to the folder where you want the module to be created.

```PS
❯ mkdir PresenceControl
❯ cd PresenceControl
```

To generate the module run

```PS
❯ yo iris-module "Presence Control" "Device" --serviceCode "PrsCtl" --entityCode "Dvc"
```

After the command finishes its execution open a new terminal session and run the api via the script `.\run-api.bat`

```PS
❯ .\run-api.bat
```

While the API is running, go back to the first terminal session and call `.\update-client.bat`

```PS
❯ .\update-client.bat
```
This might throw an error like the one shown below, but this is expected.

```PS
C:\Users\gallo\Documents\dev\Iris\PresenceCounter>cd lib/PresenceControls.ApiClient

C:\Users\gallo\Documents\dev\Iris\PresenceCounter\lib\PresenceControls.ApiClient>dotnet graphql update
Download schema started.

C:\Users\gallo\Documents\dev\Iris\PresenceCounter\lib\PresenceControls.ApiClient>dotnet build
Microsoft (R) Build Engine versión 16.8.0+126527ff1 para .NET
Copyright (C) Microsoft Corporation. Todos los derechos reservados.

  Determinando los proyectos que se van a restaurar...
  Todos los proyectos están actualizados para la restauración.
  dotnet "C:\Users\gallo\.nuget\packages\strawberryshake\11.0.0-preview.103\build\..\tools\dotnet-graphql.dll" generate -p "C:\Users\gallo\Documents\dev\Iris\PresenceCounter\lib\PresenceControls.ApiClient" -s -l 7.3 -d -n PresenceControls
  Generate client started.
  Generate client completed in 914 ms
  PresenceControls -> C:\Users\gallo\Documents\dev\Iris\PresenceCounter\lib\PresenceControls\bin\Debug\net5.0\PresenceControls.dll
C:\Users\gallo\Documents\dev\Iris\PresenceCounter\lib\PresenceControls.ApiClient\ServicesInitializer.cs(23,30): error CS1061: "IServiceCollection" no contiene una definición para "AddPresenceControlsApiClient" ni un método de extensión accesible "AddPresenceControlsApiClient" que acepte un primer argumento del tipo "IServiceCollection" (¿falta alguna directiva using o una referencia de ensamblado?) [C:\Users\gallo\Documents\dev\Iris\PresenceCounter\lib\PresenceControls.ApiClient\PresenceControls.ApiClient.csproj]

ERROR al compilar.

C:\Users\gallo\Documents\dev\Iris\PresenceCounter\lib\PresenceControls.ApiClient\ServicesInitializer.cs(23,30): error CS1061: "IServiceCollection" no contiene una definición para "AddPresenceControlsApiClient" ni un método de extensión accesible "AddPresenceControlsApiClient" que acepte un primer argumento del tipo "IServiceCollection" (¿falta alguna directiva using o una referencia de ensamblado?) [C:\Users\gallo\Documents\dev\Iris\PresenceCounter\lib\PresenceControls.ApiClient\PresenceControls.ApiClient.csproj]
    0 Advertencia(s)
    1 Errores

Tiempo transcurrido 00:00:02.46
```

Kill the api process (`Ctrl+D` should suffice) running on the second terminal and build the project again. 

```PS
❯ dotnet build
``` 
And that's it, the Presence Control module is ready.