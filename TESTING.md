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

I used Lighthouse to test all pages. Performance results were quite low, but this is to be expected when loading multiple images from an API, and sending lots of requests to another API. All other scores are good.

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


