Project notes

User Story: User will be able to interact with, to add and delete, cards with design-related quotes. Each card will contain data with the following properties: quote, work, author, category.

Data
The data will be retrieved from an array called ‘data.’ 

Components
Currently: app, header, main, footer
	-hierarchy: header, main, footer as children of app
Features to include:
-filter: users will be able to filter quotes into categories based on the properties in each quote (Ex: author). This will eliminate all quotes not by the selected property. 



## Project Requirements

1. You must make a single page application (only one `index.html` file) using
   `create-react-app`.
2. Your app should use at least 5 components in a way that keeps your code well
   organized.
3. There should be at least 3 client-side routes using [React
   Router][react-router]. Be sure to include a nav bar or other UI element that
   allows users to navigate between routes.              |

4. Use a `json-server` to create a RESTful API for your backend and make both a
   `GET` and a `POST` request to the json server. Use a form to make your post
   request, specifically a controlled form/component. Additionally, you may
   choose to incorporate data from an external API but it is not required.
   - You should keep your `json-server` data simple: avoid nested data and
     associations. You'll learn how to work with more complex data in the next
     two phases. Focus on the frontend for this project.
   - Upon return of json from your POST request, a state update by a setState
     function is required!

     ```JavaScript
     // in App:
     function addMovie(newMovie){
      setMovies([...movies, newMovie]) // Updating movies state.
     }

     //in Form
     const configObj = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({title: "Titanic"})
     }

     fetch('http://localhost:3000/movies', configObj)
      .then(res => res.json())
      .then(data => addMovie(data)) //THIS STATE UPDATE IS REQUIRED!!!
      // clear form

     ```
     Remember: responsibility for re-rendering the page to display the updated
     list of movies should belong to the addMovie function; depending on a
     subsequent action to load the new data is not best practice.
5. Add some styling: you're encouraged to write your CSS from scratch, either by
   using [styled components][] or writing CSS files and using id/className to
   style your elements. You can also incorporate a UI framework (like [React
   Bootstrap][react-bootstrap], [Semantic UI][semantic-ui], or [Material
   UI][material-ui]) if you prefer.

### Stretch Goals

Once you have met the minimum requirements, feel free to explore! These are only
the basic requirements — you're free to add on as much stuff as you'd like. For
example, you may want to incorporate data from an external API. Check out [this
list of APIs][APIs] if you need some inspiration!