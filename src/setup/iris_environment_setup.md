# Iris Setup

A step by step guide to get Iris up and running.

This guide assumes Windows is the target OS. Furthermore, all the commands are written for PowerShell.

## 1. Install Docker

**Project page**: [https://www.docker.com/](https://www.docker.com/)

Head out to [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/) and download and install Docker.
Note that if the target OS is windows, a Pro version is required.

You might have to update the Windows Subsystem for Linux (WSL) 2 Linux kernel. Follow the instructions that pop up once the installation of Docker has finished or head to [https://docs.microsoft.com/en-us/windows/wsl/wsl2-kernel](https://docs.microsoft.com/en-us/windows/wsl/wsl2-kernel). From there you can download the kernel update package. Install it. 

If the WSL has not been enabled yet you will have to enable it. To do so, head to [https://docs.microsoft.com/en-us/windows/wsl/install-win10#step-1---enable-the-windows-subsystem-for-linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10#step-1---enable-the-windows-subsystem-for-linux) and follow the instructions. After that, try to install the update again.

## 2. Install and Setup Dapr

**Project page**: [https://dapr.io/](https://dapr.io/)

**Installation instructions from**: [https://docs.dapr.io/getting-started/install-dapr-cli/](https://docs.dapr.io/getting-started/install-dapr-cli/)

To download and install Dapr run the following command on Windows PowerShell:

```PS
> iwr -useb https://raw.githubusercontent.com/dapr/cli/master/install/install.ps1 | iex
```

If an error is raised, you might have to run

```PS
> Set-ExecutionPolicy RemoteSigned -scope CurrentUser
```

Take into account that until [Tye](https://github.com/dotnet/tye) gets updated the version of Dapr that should be used is 0.11. This is due to compatibility reasons. Once the installation of Dapr has finished close the terminal window, open a new one and execute:

```PS
> dapr init
```

If everything went ok, this will launch Dapr. If you run `docker ps` you should see 3 Dapr containers running. The one called `dapr_placement` should be stopped (and optionally removed) beacuse it binds to a wrong port. To do so and start the fixed container run:

```PS
> docker stop dapr_placement
> docker rm dapr_placement
> docker run --name dapr_placement_fix -p 50005:50005 -d daprio/dapr ./placement
```

## 3. Install and Setup Tye

**Project page**: [https://github.com/dotnet/tye](https://github.com/dotnet/tye)
**Installation instructions from**: [https://github.com/dotnet/tye/blob/master/docs/getting_started.md](https://github.com/dotnet/tye/blob/master/docs/getting_started.md)

On a terminal session run:

```PS
> dotnet tool install -g Microsoft.Tye --version "0.5.0-alpha.20555.1"
```

This should be enough.

## 4. Clone Repositories

Once Docker, Dapr and Tye have been installed and are up and running it is time to clone the desired Iris repositories. For this example we will use [RoomBookings](https://dev.azure.com/JGIng/Iris/_git/RoomBookings). Clone it by:

```PS
> git clone https://JGIng@dev.azure.com/JGIng/Iris/_git/RoomBookings
```

## 5. Run

`cd` into the above cloned repository and run:

```PS
> dotnet tool restore
> dotnet build
```

If this commands fail, check that the XML Documentation files of the projects are pointing to the correct paths. To do so, navigate to
```
Left CLick on project root > Properties > Build > XML Documentation File
```
and check the path. It should be `.\[PROJECT_NAME].xml`. If it is not, change it so that it has this format and save the changes. After that, try running the previous commands again. **Additionally, some environment variables have to be set**. Please talk to the project manager so he can point out the required changes.

Finally, run:

```PS
> .\dev.bat
```

If everything went ok this command should automatically open the Tye Dashboard at `http://127.0.0.1:8000/`.

