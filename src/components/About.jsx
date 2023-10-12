import React from 'react'

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This app contains quotes by noted designer, each on its own card included with details such as author and work that the quote is taken from.</p>
      <br/>
      <h2>Description</h2>
      <p>his React app was created to display text retrieved from a db.json file through fetches in several components. The App compnent is the parent of the Header, NewCardForm, Main, and Footer components. Main is the parent of the Card component. The Aapp component also includes a Navbar at the top with links to 3 areas - the App (home) page, About page, and Links page.

The db.sjon file contains an array with 19 quotes - each quote has 5 properties. These are extracted using a fetch, then separated onto 19 card components which are rendered on the page. These 19 are the default quotes which appear. The user is able to fill in the info in a form at the top of the page to add additional quotes to the page. The user is also able to delete quotes, including the default quotes, by clicking the delete button on the card.

The bottom of the page has a couple links to professional social profiles as well as a 'Go to Top' button. Rather than scroll all the way to the top, the user can click this to automatically go to the top of the page.</p>
    <br/>
    

    </div>
  )
}

export default About;