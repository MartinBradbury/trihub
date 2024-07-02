## Introduction

This document encompasses the verification and testing of the trihub(DRF api) backend and the React frontend.

## User Story Testing

A thorough dissection of the project's user stories, organized under distinct epics, offers a comprehensive overview of the development journey. Each epic delineates particular objectives and the methodologies employed to achieve them, offering valuable insights into the project's evolution.


### US and Epics


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
| As a user I am able to search for performances based on the user or the event | Use the search feature to filter the performances by the required criteria. | |

**EPIC - My Plan Page**
| Goals | How are they achieved? | Comment |
| --- | --- |--- |
| As a user I am able to create a goal which will generate a training plan for me | A button allowing users to create a goal and generate a training plan | |
| As a user I want to select the criteria of my plan based on weeks available and hours available. | Goal creation offers options for weeks of plan and hours available. | |
| As a user I want to be able to see my training plan and goal. | I am able to see the training plan and goal after creation on the My Plan page. | |
| As a user I want to be able to change my plan or goal. | Change goal button enabling users to change their plan or goal. | |

</details>
<br>

## Validator Testing

### JSX

Throughout the development process, I employed jsx-Prettier and EsLint to ensure that my JSX and JavaScript adhered to the guidelines for clean coding practices. The analysis confirmed that all code complied with these standards, with no errors detected.

### CSS

CSS was tested with W3c CSS Validator. All rests came back with no errors. [W3C CSS Validator](http://jigsaw.w3.org/css-validator/validator)
![CSS Validation](/src/assets/readme/cssvalidation.png)

### Python

All Python files were validated with pep8 and corrected to ensure there were no errors found.
![Linter no errors](/src/assets/readme/linternoerrors.png)

Profile serializer generated a line too long error. I was unable to break the line without breaking the code function.
![Profile serializes error](/src/assets/readme/Profilesserializererr.png)

Code Institute Python Linter ![CILinter](https://pep8ci.herokuapp.com/)



### Lighthouse

Utilizing Lighthouse, I evaluated all pages of the website. The performance metrics were notably low, primarily due to the necessity of loading numerous images from an API and initiating a significant number of requests to another API. However, other scoring categories were satisfactory. Given sufficient time, I would address the lower scores observed on both mobile and desktop platforms. Enhancing performance could be achieved by converting all images to the WebP format and optimizing CSS. These improvements are planned for future development efforts.

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
To verify compatibility across various environments, I performed tests on multiple desktop computers, covering a range of browsers and operating systems. Consistent results indicated that the application operated as designed across all desktop devices. Please find listed below the specifications of the desktops used for this testing.

- Alienware Aoura i9 (Windows 10 os / google chrome browser)
- Lenovo Desktop i7 (Windows 10 os / microsoft edge browser)
- Macbook air M2 (Mac OS / safari browser)

### Mobile Testing
I conducted testing on various mobile devices, and the application performed as expected, displaying correctly. Nonetheless, I encountered an issue during the sign-in process, which led to the user being redirected to the sign-in page without actually signing in. Investigation revealed that this problem stemmed from the absence of an SSL Certificate, causing the browser to distrust the site's security. While bypassing these security settings on the device could resolve the issue temporarily, this approach is not ideal. For future development, I aim to implement an SSL Certificate to ensure that all browsers recognize and trust the application's site.

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
| Upload Button  | Display | The upload button is visibly presen                     | Pass   |         |
| Upload Button  | Click   | Initiates a file selection dialog                       | Pass   |         |
| Title Input    | Display | The title input field clearly indicates its purpose     | Pass   |         |
| Title Input    | Input   | The user can type in the Title field                    | Pass   |         |
| Content Input  | Display | The content input has a label making its purpose clear  | Pass   |         |
| Content Input  | Input   | The user can type in the content field                  | Pass   |         |
| Category Input | Display | The category input has a label making its purpose clear | Pass   |         |
| Category Input | Click   | Permits the user to select a category from a dropdown   | Pass   |         |
| Cancel Button  | Click   | Close the form without any changes                      | Pass   |         |
| Submit Button  | Click   | Submits the form, creating or updating the post         | Pass   |         |
| Submit Button  | Click   | Closes the form and redirects the user to the post feed | Pass   |         |

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
| Popular Profiles       | Display | The list moves to the top and centre on smaller screens                             | Pass   |         |
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


## The automatic test cases are depicted below, focusing on an API-centric perspective. Following is a detailed analysis:


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

Beyond manual testing, I developed automated tests specifically for my custom code. These tests focus on the modals, views, and serializers implemented on the backend. The testing covered the goals component, performance component, posts component, and training plan component. A total of 23 automated tests were executed, starting with a failure status and subsequently adjusted to pass. All 23 tests concluded with successful outcomes.

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


#### Goals

| Test | Description  | Expected Outcome  | Result | Comment |
|------|------------- | ------            | ------- |--------|
| Can list goal authenticated | test_can_list_goals_authenticated(self): | The test was successfull with a status code of 200 OK.    | PASS   |         |
| Cannot create goal unauthenticated | test_cannot_create_goals_unauthenticated(self): | The test was successfull with a status code of 403 FORBIDDEN.    | PASS   |         |
| Can create goal if authenticated | test_user_can_create_goals_when_authenticated(self): | The test was successfull with a new goal created.    | PASS   |         |


#### Performances

| Test | Description  | Expected Outcome  | Result | Comment |
|------|------------- | ------            | ------- |--------|
| Can list events unauthenticated | test_can_list_events_unauthenticated(self): | The test was successful with a status code of 200 OK.    | PASS   |         |
| Can list events authenticated | test_can_list_events_authenticated(self): | The test was successful with a status code of 200 OK.    | PASS   |         |
| Specific user can create event | test_specific_user_can_create_Events(self): | The test was successful with a new event created.    | PASS   |         |
| Can list performances unauthenticated | test_can_list_userperformances_unauthenticated(self): | The test was successful with a 200 OK.    | PASS   |         |
| Can list performances authenticated | test_can_list_userperformances_authenticated(self): | The test was successful with a 200 OK.    | PASS   |         |
| Can create performance authenticated | test_user_can_create_performance(self): | The test was successful new performance created    | PASS   |         |
| Cannot create performance if not authenticated | test_non_auth_cannot_create_peformance(self): | The test was successful with a 403 FORBIDDEN.    | PASS   |         |
| Cannot create performance in future | test_user_cannot_create_performance_in_future(self): | The test was successful with a 400 BAD_REQUEST.    | PASS   |         |


#### Posts

| Test | Description  | Expected Outcome  | Result | Comment |
|------|------------- | ------            | ------- |--------|
| Can list posts authenticated | test_can_list_posts(self): | The test was successful with a status code of 200 OK.    | PASS   |         |
| Logged in user can create posts | test_logged_in_user_can_create_post(self): | The test was successful with a status code of 201 CREATED.    | PASS   |         |
| Logged out user cannot create posts | test_loggedout_user_cannot_create_post(self): | The test was successful with 403 FORBIDDEN    | PASS   |         |
| Can retrieve post with valid ID | test_can_retrieve_post_using_valid_id(self): | The test was successful with a 200 OK.    | PASS   |         |
| Cannot retrieve post with invalid ID | test_cannot_retrieve_post_using_invalid_id(self): | The test was successful with a 404 NOT FOUND.    | PASS   |         |
| User can update own post | test_user_can_update_own_post(self): | The test was successful with a 200 OK   | PASS   |         |
| User cannot update another users posts | test_user_cant_update_another_users_post(self): | The test was successful with a 403 FORBIDDEN.    | PASS   |         |


#### Training Plans

| Test | Description  | Expected Outcome  | Result | Comment |
|------|------------- | ------            | ------- |--------|
| Can list training plans unauthenticated | test_can_list_trainingplans_unauthenticated(self): | The test was successful with a status code of 200 OK.    | PASS   |         |
| Can list training plans authenticated | test_can_list_trainingplans_authenticated(self): | The test was successful with a status code of 200 OK.    | PASS   |         |


## Issues

### Known and unresolved issues

- Mobile devices are unable to access the site content due to the requirement of an SSL Certification. Upon attempting to sign in, the user is redirected to the sign in page without signing in. 
- One desktop device tested was unable to create a performance due the field AM / PM being present in the time input field. This was only noted on one desktop device running google chrome. This error has not been able to be reproduced on any other device.
- When viewing a another user profile, when the follow and unfollow button is clicked, the counter does not always update without the manual page refresh.
- Users are not able to add seconds manually to their performances. Seconds get automatically added as 00 after the performance is created.

### NPM Audit
- **Disclaimer on npm Audit Issues**:
Given our status as students, we are not tasked with resolving the npm audit errors highlighted in this project. These issues might pertain to breaking changes that exceed the boundaries of our current assignments. Below are the vulnerabilities that have been identified:

There are a total of 137 vulnerabilities (1 low, 80 moderate, 48 high, 8 critical).

### NPM Audit Critical, High, Moderate

#### Critical Vulnerabilities
- ejs: Template injection vulnerability and lack of pollution protection.
- immer: Prototype Pollution.
- loader-utils: Prototype pollution and Regular Expression Denial of Service (ReDoS).
- shell-quote: Improper handling of input leading to command injection.

#### High Severity Vulnerabilities
- ansi-html: Uncontrolled Resource Consumption.
- axios: Cross-Site Request Forgery (CSRF).
- braces: Uncontrolled resource consumption.
- chokidar: Various dependencies affected by braces and micromatch vulnerabilities.
- ip: SSRF improper categorization in isPublic.
- lodash.template: Command Injection.
- micromatch: Dependency of braces and various other packages.
- minimatch: ReDoS vulnerability.
- node-forge: Prototype Pollution, URL parsing issues, and cryptographic signature verification issues.
- nth-check: Inefficient Regular Expression Complexity.
- postcss: Line return parsing error.
- semver: Vulnerable to Regular Expression Denial of Service.

#### Moderate Severity Vulnerabilities
- browserslist: Regular Expression Denial of Service.
