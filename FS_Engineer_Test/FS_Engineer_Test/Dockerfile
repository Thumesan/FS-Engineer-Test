#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["FS_Engineer_Test/FS_Engineer_Test.csproj", "FS_Engineer_Test/"]
RUN dotnet restore "FS_Engineer_Test/FS_Engineer_Test.csproj"
COPY . .
WORKDIR "/src/FS_Engineer_Test"
RUN dotnet build "FS_Engineer_Test.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "FS_Engineer_Test.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "FS_Engineer_Test.dll"]