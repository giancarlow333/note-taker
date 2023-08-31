# Note Taker

This app allows one to write and save notes.  It uses an Express.js backend to write and retrieve notes from a JSON file.

## Functionality

The basic logic of the app is as follows:

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Mockup

The following images show the app in use:

![The app showing a note being typed in](./public/assets/img/screenshot_1.png)
![The app after the note typed in the first image is saved](./public/assets/img/screenshot_2.png)

## Deployed Application

You can find a live version of the app [here](https://limitless-bastion-53747-30bc20a6077a.herokuapp.com/notes).

## Sources

* The HTML pages, CSS, and frontent were provided by the UCLA coding bootcamp as "starter code"; see the [first commit]() for details.
* Much of the code in server.js (the backend) was repurposed from class activities.
* Many thanks must be given to the class TA, Daniel Stark, for helping me work out an issue with server.js wherein notes were not added to the screen after POST was invoked!

---

Written by Giancarlo Whitaker, 2023