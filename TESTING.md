## Introduction

This document encompasses the verification of the DRF-API backend and the React frontend.

## User Story Testing

A detailed breakdown of the project's user stories categorized into various epics. Each epic outlines specific goals and how they are achieved, providing insights into the development process.

<details>
<summary>US and Epics</summary> 
<br>

**EPIC - Navigation & Authentication**
| Goals | How are they achieved? | Comment |
| --- | --- |--- |
| As a user I can view a navbar from every page so that I can navigate easily between pages | Implement a persistent navigation bar component in React that is included on all pages | |
| As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh | Use React Router to enable client-side routing, ensuring navigation does not trigger full page reloads | |
| As a user I can create a new account so that I can access all the features for signed up users | Develop a registration form that submits user data to the Django REST API to create new user accounts | |
| As a user I can sign in to the app so that I can access functionality for logged in users | Implement a login form that authenticates users via the Django REST API and stores the authentication token in local storage | |
| As a user I can tell if I am logged in or not so that I can log in if I need to | Display user authentication status in the navigation bar, showing different links based on login state | |
| As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised | Use token-based authentication with automatic token refresh to keep users logged in until they explicitly log out | |
| As a logged out user I can see sign in and sign up options so that I can sign in/sign up | Ensure the navigation bar shows links to the sign-in and sign-up pages for unauthenticated users | |
| As a user I can view user's avatars so that I can easily identify users of the application | Display user avatars in the navigation bar, user profiles, and next to user-generated content | |

**EPIC - Adding & Liking Posts**
| Goals | How are they achieved? | Comment |
| --- | --- |--- |
| As a logged in user I can create posts so that I can share my images with the world! | Develop a post creation form in React that submits new posts to the Django REST API | |
| As a user I can view the details of a single post so that I can learn more about it | Implement a post detail page that fetches and displays a single post's data from the API | |
| As a logged in user I can like a post so that I can show my support for the posts that interest me | Add a like button to posts that sends a like request to the API and updates the like count on the UI | |

**EPIC - The Community Page**
| Goals | How are they achieved? | Comment |
| --- | --- |--- |
| As a logged in user I can view all the most recent posts, ordered by most recently created first so that I am up to date with the newest content | Fetch and display posts from the API in descending order of creation date | |
| As a logged in user, I can search for posts with keywords, so that I can find the posts and user profiles I am most interested in | Implement a search bar that filters posts based on keywords entered by the user | |
| As a logged in user I can view the posts I liked so that I can find the posts I enjoy the most | Create a view that fetches and displays posts liked by the authenticated user | |
| As a logged in user I can view content filtered by users I follow so that I can keep up to date with what they are posting about | Implement a feed that displays posts from users followed by the authenticated user |
| As a logged in user I can keep scrolling through the images on the site, that are loaded for me automatically so that I don't have to click on "next page" etc | Implement infinite scroll functionality that fetches more posts as the user scrolls down | |

**EPIC - The Post Page**
| Goals | How are they achieved? | Comment |
| --- | --- |--- |
| As a user I can view the posts page so that I can read the comments about the post | Display the post's comments below the post content on the post detail page | |
| As a post owner I can edit my post title and description so that I can make corrections or update my post after it was created | Add an edit button to the post detail page that opens a form for updating the post's title and description | |
| As a logged in user I can add comments to a post so that I can share my thoughts about the post | Implement a comment form on the post detail page that submits new comments to the API | |
| As a user I can see how long ago a comment was made so that I know how old a comment is | Display timestamps next to each comment showing how long ago they were posted | |
| As a user I can read comments on posts so that I can read what other users think about the posts | List comments below the post content on the post detail page | |
| As an owner of a comment I can delete my comment so that I can control removal of my comment from the application | Add a delete button to each comment that sends a delete request to the API and removes the comment from the UI | |
| As an owner of a comment I can edit my comment so that I can fix or update my existing comment | Add an edit button to each comment that opens a form for updating the comment's content | |
| As a user, I want to add category to my posts so that they are easier to find. | Develop category feature in the API and provide UI elements for adding and displaying category on posts | |

**EPIC - The Profile Page**
| Goals | How are they achieved? | Comment |
| --- | --- |--- |
| As a user I can view other users profiles so that I can see their posts and learn more about them | Implement user profile pages that display user information and their posts | |
| As a user I can see a list of the most followed profiles so that I can see which profiles are popular | Create a section on the site that lists the most followed profiles | |
| As a user I can view statistics about a specific user: number of posts, follows and users followed so that I can learn more about them | Display user statistics (number of posts, follows, and followed users) on profile pages | |
| As a logged in user I can follow and unfollow other users so that I can see and remove posts by specific users in my posts feed | Implement follow and unfollow buttons on user profiles that update the follow status via the API | |
| As a user I can view all the posts by a specific user so that I can catch up on their latest posts, or decide I want to follow them | List all posts by the user on their profile page | |
| As a logged in user I can edit my profile so that I can change my profile picture and bio | Add an edit profile button that opens a form for updating the profile picture and bio | |
| As a logged in user I can update my username and password so that I can change my display name and keep my profile secure | Provide options for changing username and password in the user settings | |

**EPIC - The Performance Page**
| Goals | How are they achieved? | Comment |
| --- | --- |--- |
| As a user I can view other users performances so that I can see their times and event details | Listing performances on the performances page that display performance information. | |
| As a user I can create new performances that will be added to the performance page. | Create performance page to enable users to add their performance. | |
| As a user I want to be able to delete my performance. | I am able to click the delete button on my own performance to remove it. | |
| As a user I am able to search for performances based on the user or the event | Use the search feature to filter the performances by the required creteria. | |

**EPIC - My Plan Page**
| Goals | How are they achieved? | Comment |
| --- | --- |--- |
| As a user I am able to create a goal which will generate a training plan for me | A button allowing users to create a goal and generate a training plan | |
| As a user I want to select the creteria of my plan based on weeks available and hours available. | Goal creation offers options for weeks of plan and hours available. | |
| As a user I want to be able to see my training plan and goal. | I am able to see the training plan and goal after creation on the My Plan page. | |
| As a user I want to be able to change my plan or goal. | Change goal button enabling users to change their plan or goal. | |

</details>
<br>

## Validator Testing

### JSX

I have used jsx-Prettier and EsLint throughout the development to check that my JSX and Javascript meets the standards for clean code. All code returned no errors.

### CSS

CSS was tested with W3c CSS Validator. All rests came back with no errors. [W3C CSS Validator](http://jigsaw.w3.org/css-validator/validator)
![CSS Validation](/src/assets/readme/cssvalidation.png)

### Python

All Python files were validated with pep8 and corrected to ensure there were no errors found.




### Lighthouse

I used Lighthouse to test all pages. Performance results were quite low, but this is to be expected when loading multiple images from an API, and sending lots of requests to another API. All other scores are good. If time allowed I would address some of the lower scores on both mobile and desktop. I could imporve performance by changing all images to webp format and refining my css. This would be done in future development.

<details>
<summary>Desktop</summary>
<br>

| Page         | Performance | Accessibility | Best Practices | SEO |
| ------------ | ----------- | ------------- | -------------- | --- |
| Home         | 98          | 92            | 78             | 100 |
| Community    | 69          | 90            | 78             | 100 |
| Performances | 99          | 90            | 78             | 100 |
| My Plan      | 91          | 95            | 78             | 100 |
| Profile      | 97          | 90            | 78             | 100 |
| Sign In      | 98          | 95            | 96             | 100 |

</details>
<br>

<details>
<summary>Mobile</summary>
<br>

| Page         | Performance | Accessibility | Best Practices | SEO |
| ------------ | ----------- | ------------- | -------------- | --- |
| Home         | 90          | 98            | 96             | 100 |
| Community    | 64          | 90            | 79             | 100 |
| Performances | 85          | 90            | 79             | 100 |
| My Plan      | 73          | 95            | 79             | 100 |
| Profile      | 84          | 95            | 79             | 100 |
| Sign In      | 89          | 95            | 96             | 100 |


</details>

<br>

## Manuel Device Testing

### Desktop Testing
I tested the website on multiple desktop computers to ensure it was compatable with different borwsers and operating systems. All testing returned the same result and the application functioned as in tended on all desktop devices. Below are the devices used for testing the desktop environamnt.

- Alienware Aoura i9 (Windows 10 os / google chrome browser)
- Lenovo Desktop i7 (Windows 10 os / microsoft edge browser)
- Macbook air M2 (Mac OS / safari browser)

### Mobile Testing
I tested the application on multiple mobile devices. The application rendered as intended and displayed correctly. I encountered an error however when trying to sign in which resulted in the user being sent back to the sign in page without being signed in. I discovered this was caused by a lack os SSL Certification and the browser not trusing the security of my site. I can overcome this by turning off security settings in the device browser settings. This is not idea and for future development I would look to add an SSL Certificate to ensure all borwsers trust the application site. 

- iphone 15 Pro (Safari)
- iphone 14 (safari)
- ipad Pro 12.9 (safari)
- Google Pixel (chrome)

### Executed manual test cases and results

<details>

<summary>Navigation</summary>

<br>

| Feature         | Action      | Expected Outcome                                        | Result | Comment |
| --------------  | ----------- | ------------------------------------------------------- | ------ | ------- |
| Navbar Logo     | Hover/Focus | Indicate focus                                          | Pass   |         |
| Navbar Logo     | Click       | Redirect to home                                        | Pass   |         |
| Navbar toggler  | Display     | Visible on small screens only                           | Pass   |         |
| Navbar toggler  | Click       | Opens dropdown with navigation links                    | Pass   |         |
| Community Link  | Display     | Only display when user is signed in                     | Pass   |         |
| Community Link  | Click       | Open community page                                     | Pass   |         |
| Performance Link| Display     | Only display when user is signed in                     | Pass   |         |
| Performance Link| Click       | Open liked posts feed page                              | Pass   |         |
| Navbar Links    | Display     | Links display in header on screens above a certain size | Pass   |         |
| My Plan Link    | Display     | Only displays when the user is signed in                | Pass   |         |
| My Plan Link    | Click       | Opens my Plan page                                      | Pass   |         |
| Profile Link    | Display     | Only display when user is signed in                     | Pass   |         |
| Profile Link    | Click       | Open profile page                                       | Pass   |         |
| Register Link   | Display     | Only display when user is not signed in                 | Pass   |         |
| Register Link   | Click       | Open signup page                                        | Pass   |         |
| sign in Link    | Display     | Only display when user is not signed in                 | Pass   |         |
| sign in Link    | Click       | Open sign in page                                       | Pass   |         |
| sign out Link   | Display     | Only display when user is signed in                     | Pass   |         |
| sign out Link   | Click       | Log the user out                                        | Pass   |         |

</details>

<br>

<details>

<summary>Home</summary>

<br>

| Feature         | Action      | Expected Outcome                                        | Result | Comment |
| --------------  | ----------- | ------------------------------------------------------- | ------ | ------- |
| bg Video        | plays       | Background video plays on page load                     | Pass   |         |
| bg Video        | Muted       | Background video plays muted on page load               | Pass   |         |
| bg Video        | Loops       | Background video loops when complete                    | Pass   |         |

</details>

<br>

<details>

<summary>Community Page</summary>

<br>

| Feature         | Action  | Expected Outcome                                                 | Result | Comment |
| --------------- | ------- | ---------------------------------------------------------------- | ------ | ------- |
| Post            | Display | Post displays title, author, image, content, and date of posting | Pass   |         |
| Post            | Display | Post displays the number of likes and comments                   | Pass   |         |
| Avatar          | Display | Post owner's avatar is present on the post                       | Pass   |         |
| Avatar          | Click   | Clicking an avatar opens the associated profile page             | Pass   |         |
| Edit Button     | Display | Display if logged in as the author of the post                   | Pass   |         |
| Edit Button     | Click   | Open the post editing page                                       | Pass   |         |
| Delete Button   | Display | Display if logged in as the author of the post                   | Pass   |         |
| Delete Button   | Click   | Delete the post                                                  | Pass   |         |
| Like Icon       | Click   | Like/Unlike the post                                             | Pass   |         |
| Like Counter    | Display | Display the correct number of likes received by the post         | Pass   |         |
| Comment Icon    | Click   | Open the post's comment section                                  | Pass   |         |
| Comment Counter | Display | Display the correct number of comments on the post               | Pass   |         |


</details>

<br>

<details>

<summary>Comments</summary>

<br>

| Feature       | Action  | Expected Outcome                                                 | Result | Comment |
| ------------- | ------- | ---------------------------------------------------------------- | ------ | ------- |
| Comment Form  | Display | Display when a user is signed in                                 | Pass   |         |
| Comment Form  | Submit  | Submit the form and add the comment to the post                  | Pass   |         |
| Comments      | Display | Comments appear in descending order in an infinite scroll format | Pass   |         |
| Comments      | Display | Comments display the owner's username and avatar                 | Pass   |         |
| Comments      | Click   | Clicking the avatar opens the associated profile                 | Pass   |         |
| Edit Button   | Display | Display if logged in as the author of the post                   | Pass   |         |
| Edit Button   | Click   | Open the comment form                                            | Pass   |         |
| Delete Button | Display | Display if logged in as the author of the post                   | Pass   |         |
| Delete Button | Click   | Delete the comment                                               | Pass   |         |

</details>

<br>

<details>

<summary>PostCreateForm & PostEditForm</summary>

<br>

| Feature        | Action  | Expected Outcome                                        | Result | Comment |
| -------------- | ------- | ------------------------------------------------------- | ------ | ------- |
| Upload Button  | Display | The upload Button appears                               | Pass   |         |
| Upload Button  | Click   | Opens a file selector window                            | Pass   |         |
| Title Input    | Display | The title input has a label making its purpose clear    | Pass   |         |
| Title Input    | Input   | The user can type in the Title field                    | Pass   |         |
| Content Input  | Display | The content input has a label making its purpose clear  | Pass   |         |
| Content Input  | Input   | The user can type in the content field                  | Pass   |         |
| Category Input | Display | The category input has a label making its purpose clear | Pass   |         |
| Category Input | Click   | The user can select category the menu                   | Pass   |         |
| Cancel Button  | Click   | Close the form without any changes                      | Pass   |         |
| Submit Button  | Click   | Submit the form and create/update the post              | Pass   |         |
| Submit Button  | Click   | Close the form and redirect the user to the post feed   | Pass   |         |

</details>

<br>

<details>

<summary>ProfilePage</summary>

<br>

| Feature                  | Action  | Expected Outcome                                                 | Result | Comment |
| ------------------------ | ------- | ---------------------------------------------------------------- | ------ | ------- |
| Avatar                   | Display | The user's avatar appears on the top of the page                 | Pass   |         |
| Username                 | Display | The user's username appears on the top of the page               | Pass   |         |
| User Stats               | Display | The number of posts, followers, and followed users are displayed | Pass   |         |
| Options Button           | Display | The option button appears if signed-in as the profile owner      | Pass   |         |
| Options Button           | Click   | Clicking opens the profile options menu                          | Pass   |         |
| Options Menu             | Display | Display options for editing the profile, username and password   | Pass   |         |
| "Edit profile" Button    | Click   | Open the profile editing form                                    | Pass   |         |
| "Change username" Button | Click   | Open the username editing form                                   | Pass   |         |
| "Change password" Button | Click   | Open the password editing form                                   | Pass   |         |
| User Posts               | Display | The profile owner's posts are displayed under the profile        | Pass   |         |
| User Posts               | Display | The profile post feed has an infinite scroll layout              | Pass   |         |


</details>

<br>

<details>

<summary>PopularProfile</summary>

<br>

| Feature                | Action  | Expected Outcome                                                                    | Result | Comment |
| ---------------------- | ------- | ----------------------------------------------------------------------------------- | ------ | ------- |
| Popular Profiles       | Display | The "popular profiles" section displays across the site                             | Pass   |         |
| Popular Profiles       | Display | The list updates to reflect the number of followers for each profile                | Pass   |         |
| Popular Profiles       | Display | The list moves to the top and center on smaller screens                             | Pass   |         |
| Popular Profiles       | Display | No "popular profiles" section appears on profile pages on smaller screens           | Pass   |         |
| Username               | Display | User avatars appear for each profile                                                | Pass   |         |
| Username               | Click   | Open the associated profile page                                                    | Pass   |         |
| Avatar                 | Display | User avatars appear on larger screens                                               | Pass   |         |
| Avatar                 | Click   | Open the associated profile page                                                    | Pass   |         |
| Follow/Unfollow Button | Display | A follow/unfollow button appears next to each profile on large screens if signed in | Pass   |         |
| Follow/Unfollow Button | Click   | Clicking the button follows/unfollows the user                                      | Pass   |         |
| Follow/Unfollow Button | Click   | Clicking the button updates the button and its sibling buttons on other components  | Pass   |         |

</details>

<br>

<details>

<summary>Sing In & Sign Up</summary>

<br>

| Feature                | Action  | Expected Outcome                                    | Result | Comment |
| ---------------------- | ------- | --------------------------------------------------- | ------ | ------- |
| Username Input         | Display | A label and placeholder make the purpose clear      | Pass   |         |
| Username Input         | Input   | The user can input a username                       | Pass   |         |
| Password Input         | Display | A label and placeholder make the purpose clear      | Pass   |         |
| Password Input         | Input   | The user can input a username                       | Pass   |         |
| Confirm Password Input | Display | A label and placeholder make the purpose clear      | Pass   |         |
| Confirm Password Input | Input   | The user can input a password                       | Pass   |         |
| Sign Up Button         | Click   | Validate the form before submission                 | Pass   |         |
| Sign Up Button         | Click   | Notify the user about any invalid data              | Pass   |         |
| Sign Up Button         | Click   | Submit the form and create the new user and profile | Pass   |         |
| Sign In Button         | Click   | Validate the form before submission                 | Pass   |         |
| Sign In Button         | Click   | Notify the user about any invalid data              | Pass   |         |
| Sign In Button         | Click   | Submit the form and create the new user and profile | Pass   |         |
</details>

<br>

<details>

<summary>Performances</summary>

<br>

| Feature       | Action  | Expected Outcome                                                 | Result | Comment |
| ------------- | ------- | ---------------------------------------------------------------- | ------ | ------- |
| Performances  | Display | Display when a user is signed in                                 | Pass   |         |
| Performances  | Submit  | Submit a performance and add to performance list                 | Pass   |         |
| Search        | Display | Search bar appears at the top of the page                        | Pass   |         |
| Search        | input   | Users can search for event or user                               | Pass   |         |
| Edit Button   | Display | Display if logged in as the author of the performance            | Pass   |         |
| Edit Button   | Click   | Open the dropdown to expose the delete button                    | Pass   |         |
| Delete Button | Click   | Delete the performance                                           | Pass   |         |

</details>

<br>

<details>

<summary>My Plan</summary>

<br>

| Feature         | Action    | Expected Outcome                                                 | Result | Comment |
| -------------   | -------   | ---------------------------------------------------------------- | ------ | ------- |
| Goals btn       | Display   | Create goal button is present if user has no goal                | Pass   |         |
| Goals btn       | Submit    | Clicking the create goals btn navigates to create goal page      | Pass   |         |
| Goal Form       | Display   | Create gaol form renders correctly when button clicked           | Pass   |         |
| Goal Form       | input     | Users can input their goal data in fields provided               | Pass   |         |
| Goal Form       | Error     | Error handling of goal date needing to be greater than 3 weeks   | Pass   |         |
| Change Goal btn | Display   | Change goal btn is present if user already has a goal            | Pass   |         |
| Change Goal btn | Click     | Warning message displayed when btn clicked before goal create    | Pass   |         |
| Goal            | Display   | Goal displays when user has created a goal                       | Pass   |         |
| Training Plan   | Display   | Training plan displays if user has created a goal                | Pass   |         |
| Training Plan   | Display   | Training plan is specific to the users goal                      | Pass   |         |


</details>

<br>

<details>
<summary>The manual and automatic test cases are represented in a different view, more API-centric. Below is the detailed breakdown:</summary>
<br>

### DRF API
| Feature | Action | Expected Outcome | Pass/Fail | Comment |
| --- | --- | --- | --- | --- |
| Refresh token | POST | Refreshes the auth token to keep the user signed in | Pass | |
| Sign-out view | POST | Destroys the token and signs the user out | Pass | |

### Profiles
| Feature | Action | Expected Outcome | Pass/Fail | Comment |
| --- | --- | --- | --- |--- |
| Profile List | GET | Show a list of all profiles as JSON objects | Pass | |
| Profile List | POST | Create a new profile if valid | Pass | |
| Profile List | POST | Automatically make a profile when creating a user | Pass | |
| Profile Detail | GET | Return a specific profile if given a valid id | Pass | |
| Profile Detail | POST | Create a new profile if valid | Pass | |
| Profile Detail | PUT | Update the profile if valid | Pass | |
| Profile Detail | DELETE | Destroy the profile and its owner instance if valid | Pass | |
| Related instances | DELETE | Destroying a profile destroys all content related to its owner | Pass | |
| Serializer | Annotation | Annotate the number of posts, followers, and followed users of a profile | Pass | |

### Community
| Feature | Action | Expected Outcome | Pass/Fail | Comment |
| --- | --- | --- | --- |--- |
| Post List | GET | Show a list of all posts as JSON objects | Pass | |
| Post List | POST | Create a new post if valid | Pass | |
| Post Detail | GET | Return a specific post if given a valid id | Pass | |
| Post Detail | PUT | Update the post if valid | Pass | |
| Post Detail | DELETE | Destroy the post instance if valid | Pass | |

### Comments
| Feature | Action | Expected Outcome | Pass/Fail | Comment |
| --- | --- | --- | --- |--- |
| Comment List | GET | Show a list of all comments as JSON objects | Pass | |
| Comment List | POST | Create a new comment if valid | Pass | |
| Comment Detail | GET | Return a specific comment if given a valid id | Pass | |
| Comment Detail | PUT | Update the comment if valid | Pass | |
| Comment Detail | DELETE | Destroy the comment if valid | Pass | |

### Performance
| Feature | Action | Expected Outcome | Pass/Fail | Comment |
| --- | --- | --- | --- |--- |
| Performance List | GET | Show a list of all posts as JSON objects | Pass | |
| Performance List | POST | Create a new performance if valid | Pass | |
| Performance Detail | DELETE | Destroy the performance instance if valid | Pass | |

### Followers
| Feature | Action | Expected Outcome | Pass/Fail | Comment |
| --- | --- | --- | --- |--- |
| Follower List | GET | Show a list of all followers as JSON objects | Pass | |
| Follower List | POST | Create a new follower if valid | Pass | |
| Follower Detail | GET | Return a specific follower if given a valid id | Pass | |
| Follower Detail | PUT | Update the follower if valid | Pass | |
| Follower Detail | DELETE | Destroy the follower if valid | Pass | |
| Unique Together | No duplicates | The model prevents creating duplicate follow instances with the same owner and target user |Pass | |

### Likes
| Feature | Action | Expected Outcome | Pass/Fail | Comment |
| --- | --- | --- | --- |--- |
| Like List | GET | Show a list of all likes as JSON objects | Pass | |
| Like List | POST | Create a new like if valid | Pass | |
| Like Detail | GET | Return a specific like if given a valid id | Pass | |
| Like Detail | PUT | Update the like if valid | Pass | |
| Like Detail | DELETE | Destroy the like if valid | Pass | |
| Unique Together | No duplicates | The model prevents creating duplicate like instances with the same owner and target post | Pass | |
| Like List | View | User1 can see the list of users they have Liked/unliked | Pass |

### My Plan
| Feature | Action | Expected Outcome | Pass/Fail | Comment |
| --- | --- | --- | --- |--- |
| Goal | GET | Show the goal of the logged in user | Pass | |
| Goal create | POST | Create a new goal if valid | Pass | |
| Goal edit | PUT | Update the goal if the user is valid | Pass | |
| Training Plan  | GET | Show the training plan specific to users goal | Pass | |
| Training Change  | GET | Change the training plan if the user changes their goal | Pass | |


### Custom Automated Testing

In addition to the manuel testing, I created some automated tests to test my custom code. These tests check the modals, views and serializers used on the backend.
The tests were carried out on the goals component, performance component, posts component and training plan component. 
23 automated tests were carried out, all which were set to fail initially and then corrected to pass. All 23 tests carried out passed.

#### Preparation and setup

**setUp Method**:

- This method is called before each individual test method to set up the necessary state.
- It creates a user with the username 'adam' and the password 'pass'.
- Logs in the created user.
- Creates a post associated with the logged-in user.
- Prepares the initial test environment.

**tearDown Method**:

- This method is called after each test method to clean up the test environment.
- Logs out the user.
- Deletes all User and Post instances to ensure a clean state for the next test.

![Automated testing on api](/src/assets/readme/automatedtest.png)

#### Executed automatic test cases and results

<details>
<summary>Goals</summary>

| Test | Description  | Expected Outcome  | Result | Comment |
|------|------------- | ------            | ------- |--------|
| Can list goal authenticated | test_can_list_goals_authenticated(self): | The test was successfull with a status code of 200 OK.    | PASS   |         |
| Cannot create goal unauthenticated | test_cannot_create_goals_unauthenticated(self): | The test was successfull with a status code of 403 FORBIDDEN.    | PASS   |         |
| Can create goal if authenticated | test_user_can_create_goals_when_authenticated(self): | The test was successfull with a new goal created.    | PASS   |         |
 
 </detail>

<br>

<details>

<summary>Performances</summary>

| Test | Description  | Expected Outcome  | Result | Comment |
|------|------------- | ------            | ------- |--------|
| Can list events unauthenticated | test_can_list_events_unauthenticated(self): | The test was successfull with a status code of 200 OK.    | PASS   |         |
| Can list events authenticated | test_can_list_events_authenticated(self): | The test was successfull with a status code of 200 OK.    | PASS   |         |
| Specific user can create event | test_specific_user_can_create_Events(self): | The test was successfull with a new event created.    | PASS   |         |
| Can list performances unauthenticated | test_can_list_userperformances_unauthenticated(self): | The test was successfull with a 200 OK.    | PASS   |         |
| Can list performances authenticated | test_can_list_userperformances_authenticated(self): | The test was successfull with a 200 OK.    | PASS   |         |
| Can create performance authenticated | test_user_can_create_performance(self): | The test was successfull new performance created    | PASS   |         |
| Cannot create performance if not authenticated | test_non_auth_cannot_create_peformance(self): | The test was successfull with a 403 FORBIDDEN.    | PASS   |         |
| Cannot create performance in future | test_user_cannot_create_performance_in_future(self): | The test was successfull with a 400 BAD_REQUEST.    | PASS   |         |
 


 

