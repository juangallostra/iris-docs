(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{368:function(e,t,n){"use strict";n.r(t);var r=n(42),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"module-generator-setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#module-generator-setup"}},[e._v("#")]),e._v(" Module Generator Setup")]),e._v(" "),n("h2",{attrs:{id:"generator-setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#generator-setup"}},[e._v("#")]),e._v(" Generator Setup")]),e._v(" "),n("p",[e._v("Start by cloning the "),n("code",[e._v("generator-iris-module")]),e._v(" repository")]),e._v(" "),n("div",{staticClass:"language-PS extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("❯ git clone https://JGIng@dev.azure.com/JGIng/Iris/_git/generator-iris-module\n")])])]),n("p",[e._v("Once the repository has been cloned, "),n("code",[e._v("cd")]),e._v(" into "),n("code",[e._v("generator-iris-module")]),e._v(", install the generator dependencies and create a symlink so that the local copy of the package is used.")]),e._v(" "),n("div",{staticClass:"language-PS extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("❯ cd generator-iris-module\n❯ yarn # install dependencies, equivalent to yarn install\n❯ yarn link # create symlink to use local copy\n")])])]),n("p",[e._v("After that, install "),n("a",{attrs:{href:"https://yeoman.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yeoman"),n("OutboundLink")],1),e._v("'s command line utility. Yeoman is a generic scaffolding system and "),n("code",[e._v("yo")]),e._v(" its CLI.")]),e._v(" "),n("div",{staticClass:"language-PS extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("❯ npm install -g yo\n")])])]),n("p",[e._v("Once "),n("code",[e._v("yo")]),e._v(" has been installed we already have everything in place to be able to run the iris generator. To get an overview of the different options run")]),e._v(" "),n("div",{staticClass:"language-PS extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("❯ yo iris-module --help\n")])])]),n("h2",{attrs:{id:"example-module-creation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-module-creation"}},[e._v("#")]),e._v(" Example Module Creation")]),e._v(" "),n("p",[e._v("Lets assume we want a create a new module called Presence Control with Device as its first entity. First create or change directory to the folder where you want the module to be created.")]),e._v(" "),n("div",{staticClass:"language-PS extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("❯ mkdir PresenceControl\n❯ cd PresenceControl\n")])])]),n("p",[e._v("To generate the module run")]),e._v(" "),n("div",{staticClass:"language-PS extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('❯ yo iris-module "Presence Control" "Device" --serviceCode "PrsCtl" --entityCode "Dvc"\n')])])]),n("p",[e._v("After the command finishes its execution open a new terminal session and run the api via the script "),n("code",[e._v(".\\run-api.bat")])]),e._v(" "),n("div",{staticClass:"language-PS extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("❯ .\\run-api.bat\n")])])]),n("p",[e._v("While the API is running, go back to the first terminal session and call "),n("code",[e._v(".\\update-client.bat")])]),e._v(" "),n("div",{staticClass:"language-PS extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("❯ .\\update-client.bat\n")])])]),n("p",[e._v("This might throw an error like the one shown below, but this is expected.")]),e._v(" "),n("div",{staticClass:"language-PS extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('C:\\Users\\gallo\\Documents\\dev\\Iris\\PresenceCounter>cd lib/PresenceControls.ApiClient\n\nC:\\Users\\gallo\\Documents\\dev\\Iris\\PresenceCounter\\lib\\PresenceControls.ApiClient>dotnet graphql update\nDownload schema started.\n\nC:\\Users\\gallo\\Documents\\dev\\Iris\\PresenceCounter\\lib\\PresenceControls.ApiClient>dotnet build\nMicrosoft (R) Build Engine versión 16.8.0+126527ff1 para .NET\nCopyright (C) Microsoft Corporation. Todos los derechos reservados.\n\n  Determinando los proyectos que se van a restaurar...\n  Todos los proyectos están actualizados para la restauración.\n  dotnet "C:\\Users\\gallo\\.nuget\\packages\\strawberryshake\\11.0.0-preview.103\\build\\..\\tools\\dotnet-graphql.dll" generate -p "C:\\Users\\gallo\\Documents\\dev\\Iris\\PresenceCounter\\lib\\PresenceControls.ApiClient" -s -l 7.3 -d -n PresenceControls\n  Generate client started.\n  Generate client completed in 914 ms\n  PresenceControls -> C:\\Users\\gallo\\Documents\\dev\\Iris\\PresenceCounter\\lib\\PresenceControls\\bin\\Debug\\net5.0\\PresenceControls.dll\nC:\\Users\\gallo\\Documents\\dev\\Iris\\PresenceCounter\\lib\\PresenceControls.ApiClient\\ServicesInitializer.cs(23,30): error CS1061: "IServiceCollection" no contiene una definición para "AddPresenceControlsApiClient" ni un método de extensión accesible "AddPresenceControlsApiClient" que acepte un primer argumento del tipo "IServiceCollection" (¿falta alguna directiva using o una referencia de ensamblado?) [C:\\Users\\gallo\\Documents\\dev\\Iris\\PresenceCounter\\lib\\PresenceControls.ApiClient\\PresenceControls.ApiClient.csproj]\n\nERROR al compilar.\n\nC:\\Users\\gallo\\Documents\\dev\\Iris\\PresenceCounter\\lib\\PresenceControls.ApiClient\\ServicesInitializer.cs(23,30): error CS1061: "IServiceCollection" no contiene una definición para "AddPresenceControlsApiClient" ni un método de extensión accesible "AddPresenceControlsApiClient" que acepte un primer argumento del tipo "IServiceCollection" (¿falta alguna directiva using o una referencia de ensamblado?) [C:\\Users\\gallo\\Documents\\dev\\Iris\\PresenceCounter\\lib\\PresenceControls.ApiClient\\PresenceControls.ApiClient.csproj]\n    0 Advertencia(s)\n    1 Errores\n\nTiempo transcurrido 00:00:02.46\n')])])]),n("p",[e._v("Kill the api process ("),n("code",[e._v("Ctrl+D")]),e._v(" should suffice) running on the second terminal and build the project again.")]),e._v(" "),n("div",{staticClass:"language-PS extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("❯ dotnet build\n")])])]),n("p",[e._v("And that's it, the Presence Control module is ready.")])])}),[],!1,null,null,null);t.default=s.exports}}]);