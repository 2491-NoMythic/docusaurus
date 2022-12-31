---
sidebar_position: 3
---

# Technical Information

The code is open source, and hosted on [Github](https://github.com/2491-NoMythic/NoMythicApp)

This will get filled out as time allows.

## Tech

-   Typescript - A form of Javascript that can use Types
-   [date-fns](https://date-fns.org) - Because dates are hard
-   [SolidJS](https://www.solidjs.com) - React like framework
-   [Solid Forms Handler](https://solid-form-handler.com/docs/introduction) - Provides form validation support
-   [TailwindCSS](https://tailwindcss.com) - CSS framework
-   [DaisyUI](https://daisyui.com) - helper for TailwindJS
-   [Solid Icons](https://solid-icons.vercel.app) - icon set for consistency
-   GoogleCloud - account login
-   [Supabase](https://supabase.com) - database in the cloud
-   [Netlify](https://www.netlify.com/for/web-applications/) - Used to deploy the app to their cloud servers

## Overview

This is going to look pretty overwhelming looking at the above tech stack. There is no doubt that there are a lot of things to learn, but at the core, it is a HTML / CSS / Javascript application that runs on a server.

To get started you should get some basic skills in HTML, and the most common tags used. CSS is simply about making that HTML pretty. Then learn some Javascript. If you are already programming a robot, this is not going to be too unfamiliar to you. Do you use Java and understand Generics? That is pretty much what the Types are Typescript adds to Javascript.

You get a basic understanding of those things, and you can start to understand this app. SolidJS is a Javascript framework and learning about that will be the next task. At it's core, it allows data to change, and immediately update the HTML (actually JSX here) so that you see the changes immediately. All this runs in the browser.

Where is the data though? Supabase! From within the browser we make REST api calls (almost the same as requesting a web page) and they return data that is stored in a database server they host. The data here is not available to anyone. You need to be authenticated, and that is where Google comes in.

We are using Google Cloud to get our credentials. When logging in to this app, you are directed to Google to allow your account to access the app. Say yes, and we get credentials we can use for Supabase to access the data.

There will be more specific information coming.

## Magic Keys and Accounts

You will need to get your Supabase keys to run. If you are not NoMythic, you will have to set up a Supabase and GoogleCloud account for login and storing data.

There will be more about how to set these up in the future.

We currently have 2 environments. Dev, and prod. That means we have keys for two different logins at Google, and two different projects at Supabase. The dev one is used when running locally when developing the application. The prod one is used for our day to day use. It would probably nice to have a test environment too. Maybe in the future.

## Running locally - setup

The first thing is to clone the project from Github. We are using VSCode to develop the app, but you will not need that just to get it running. You will however need to have keys and accounts set up. This will be assuming you have done that.

You will need to create a .env file in the main folder. Contents will have your supabase keys:

```
VITE_SUPABASE_URL=https://yoururl.supabase.co
VITE_SUPABASE_ANON_KEY=really long key you get from supabase
VITE_REDIRECT_URL=http://localhost:3000/welcome
```

If you are on NoMythic, ask for the values to these fields. You can also find them in the Supabase admin pages.

NoMythic already has supabase set up to use google authentication.

This app is based on Typescript and uses NPM to help build and run the app. You will need to install NodeJS to run the app.

## Running locally - first time

In order to get all of the "Stuff" to run, we need to get our project to download all of the requirements. To do that type at a command line: 

```bash
$ npm install
```

## Running locally - starting

In the project directory, you can type:

```bash
$ npm run start
```

This will run the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits to the code.
