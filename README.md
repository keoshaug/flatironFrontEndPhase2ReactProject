# Design Quotes - Inspirational Quotes from Great Designers

## Introduction

This app contains quotes by noted designer, each on its own card included with details such as author and work that the quote is taken from.

## Description

This React app was created to display text retrieved from a db.json file through fetches in several components. The App compnent is the parent of the Header, NewCardForm, Main, and Footer components. Main is the parent of the Card component. The Aapp component also includes a Navbar at the top with links to 3 areas - the App (home) page, About page, and Links page.

The db.sjon file contains an array with 19 quotes - each quote has 5 properties. These are extracted using a fetch, then separated onto 19 card components which are rendered on the page. These 19 are the default quotes which appear. The user is able to fill in the info in a form at the top of the page to add additional quotes to the page. The user is also able to delete quotes, including the default quotes, by clicking the delete button on the card.

The bottom of the page has a couple links to professional social profiles as well as a 'Go to Top' button. Rather than scroll all the way to the top, the user can click this to automatically go to the top of the page.

## Video
A short video walkthrough available at YouTube: https://youtube.com/watch?v=LKWeEM2VXtE&t

## License
GNU General Public License v3.0

