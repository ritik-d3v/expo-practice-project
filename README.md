
# Guess a number game
Expo App

## installation

```bash
npm i 
#or 
npm i -force
# or
yarn install
```
Run Expo Server
```bash
npm start
```
Now, run the app:
Press
a for android
```bash
i
```
i for ios
```bash
i
```



## To push it to EAS Server

(1) install EAS Cli
```
npm i -g eas-cli
```

(2) Login to EAS by running the following command

```
eas login
```

(3) Configure Eas file
```bash
eas configure:build

```
(4) Deploy to EAS Build
```bash
eas build --platform all
```
