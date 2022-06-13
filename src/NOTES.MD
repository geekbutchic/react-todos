## {Instructor} Introduce child/parent component relationship, controlled inputs. ✅

* Create a new github repo called react-todos, clone the repo to your computer and add the link to populi. ✅


* Run "npx create-react-app ." inside /react-todos. ✅

* Create a new component <ToDoComponent /> in app.js and add it to the <App> component as a child component:
    * <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToDoComponent />
      </header>
    </div>
* In ToDoComponent, implement the following functionality:
    * There should be two text input fields, one dropdown input field (Hint: use <select> and <option>), and a button ✅
    * Every input field should store its current value in a useState variable. ✅
    * The input field should also receive its current value from the variable in useState, i.e. it should be a controlled component:
        * <input type="text" value={title} onChange={(event)=>{
            const newTitle = event.target.value
            setTitle(title)
        }}>
    * The first text input field should set a state variable called title. ✅
    * The second text input field should set a state variable called description. ✅
    * The dropdown field should have 3 values "low", "medium" and "high" and should set a state variable called importance. ✅
    * The button should say submit and onClick, it should push a new object into a state variable called toDoList with the current values inputted by the user. E.G. If I type a title of "New Todo", a description of "My new todo", select an importance of "medium", and press submit, the state variable toDoList should look like this:
        * [{
            title: "New Todo",
            description: "My new Todo",
            importance: "medium"
          }]
    * Finally, render the list of todo's stored in toDoList to the page. ✅