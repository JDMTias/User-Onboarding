# Module Project: Advanced Form Management - User Onboarding
## Project Description

We've seen many different styles of form management by now -- simple to complex. Today we are going to unleash your inner form-wizard! 🧙

## Set Up The Project

- [x] Start off by installing a blank React app by running `npx create-react-app <app-name> --use-npm`.
- [x] Using `npm`, add the following as dependencies inside your React app:
  - `yup`
  - `axios`
- [x] Create a component file called `Form.js`, import it into your `App.js` file, and place the component in your JSX there.

## STEP 1 - Create Your Advanced Form

We want to create a form to onboard a new user to our system. We need _at least_ the following pieces of information about our new user:

- [x] Name
- [x] Email
- [x] Password
- [x] Terms of Service (checkbox)
- [x] A Submit button to send our form data to the server.

<!-- 1. First write out hour form, with basic componentes like the funciont MemberFrom, then the return with basic outline of what info you are going to display, no props yet, so <form>,<div>, <inputs>, etc.
your form will want to have an onsubmit so the whole thing can be used as an onSubmit, but the inputs will have onChange, as well as values, add button as well for login -->

<!--1a. for the checkboxes make sure you have a checked= and an onChange, also the input is within the label. -->

<!-- 1ba set up use state you want one to hold all the values and one to hold all the values of the form thats currently being submitted and another state that holds all the previous states, use state will be empty at first but maybe after you might have to put something in it -->

<!-- 1c need to make the onsubmit function and onchange handler you set formvalues to an object {} and inside that object is a key which is a variable [] and the name of the key is the input field [event.target.name]: , the value is what they type in event.target.value, we want to put what saves in setFormValues into formValues so use spread.  -->

<!-- 1d Onsubmit, this is what is going to put whatever they typed in into the server, using axios which is jumping into step 3 making a post request, this will require two parameters, the url and the data to be sent to the server which is formValues after writing prevent default and the post request we want to do the .then, in which we will create new state for the data being received from the server, data and setData which we want as an array so add [] to the new useState.Dont forget to add a catch this is also part of step 3 -->

## STEP 2 - Implement Form Validation and Error Messaging

Form validation is one of the facets of an application that makes it feel polished and controlled from a user perspective. With that in mind, implement the following:

- [ ] Using Yup, set up _at least_ two different validations along with custom error messages that will display on screen when validation fails.

<!-- 2a. import everything(*) as yup from yup, -->

<!-- 2b set up formSchema always the same way, the key in the object is going to be the name of the input field, .string because the input should be a string, trim to take out white spaces, required because it is required field, email because we want it to be a valid email, these are all preset functions already made by yup, running in the background. need commas after each one. messages in the strings is the error that will pop up dont forget to export it-->

<!-- 2c import to app, edit onInputChange , set two constants name, and value, yup wont be able to read the event because of the scope to se need variables to pass down to it. they are set to event.target.name/value these are found within the input fields in purple, first one will be the name of current field, second is the value of the input -->

<!--2d add yup.reach, this will require two parameters the, formSchema where all the instructions are and the second parameter is what input form it is checking, validate is checking the value against the rules we wrote in formSchema -->

<!-- 2e set up state for our error messages with usestate with an object inside {},  -->

<!--2f set up the .then and .catch. NEED MORE NOTES HERE -->

<!--2g give memberform errorMessage prop then add into form props, add error message divs to form with propname.inputname -->
## STEP 3 - Make a POST Request

Being able to `POST` data is a key skill of any developer, no matter your skill level.

- [x] Craft a `POST` request using `axios` that sends your form data to the following endpoint: _https://reqres.in/api/users_
- [x] Verify using a `console.log()` that you are receiving a successful response back

(Note: For those that are curious, we're using [reqres.in](https://reqres.in/) for this assignment's API. It's a free API that allows us to simulate a `POST` request for any data that we send it. Pretty awesome!)

## STEP 4 - Display Returned Data to Screen

When you get your data back, you will want to do something with it, right? Let's display a list of users in our app.

- [ ] Set up a state property called `users` that is initialized with an empty array
- [ ] Every time you make a `POST` request, and get that new user data back, update your `users` state with the new user added to the array
- [ ] Render `users` in your app. You can use the html pre tag and JSON.stringify() method to display your post request.

## Stretch Goals

The following are stretch goals that you should attempt _after_ you meet MVP for your project:

- [ ] Add basic styling to your form in your app. Make it look pretty with any styling method you choose.
- [ ] Implement a dropdown menu in your form. Add a `role` value to your state and add a dropdown with different roles for your users.
- [ ] Create 3 new inputs inside your form of your choice along with corresponding validation and error messaging
- [ ] Add to your existing handling so that, if a user inputs their email as `waffle@syrup.com`, they receive an error message in their form that says _"That email is already taken."_
