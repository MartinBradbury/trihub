# trihub

(Developer: Martin Bradbury)

![AmIResponsive Image](/src/assets/responsive.png)

## Live website

Link to live website: [trihub](https://trihub-e2e28f386783.herokuapp.com/)

## Purpose of the project

The purpose of TriHub is to make the ultimate destination for all things triathlon. TriHub is designed to bring together triathletes of all abilities, fostering a vibrant community where everyone can share, learn, and grow together. My platform offers a unique blend of features tailored to meet the diverse needs of its members, whether you're a seasoned pro or just starting your triathlon journey.

I want TriHub to foster the power of community. My platform allows users to share images and comments, creating a space where triathletes can connect, inspire, and motivate each other. Whether you've just completed your first sprint or are gearing up for an Ironman, their voice matters here. Users can share their triumphs, challenges, and insights to build a supportive network that goes beyond the finish line.

Performance tracking is at the heart of TriHub. Users can log their performances, analyze their progress, and set new goals with my intuitive tools. Users who are ooking to improve, TriHub offers customizable training plans designed to fit your schedule and ability level. Tailor your training to reach your peak performance, whether you're aiming for a personal best or simply enjoying the journey.


## Table of contents

- [Live website](#live-website)
- [Purpose of the project](#purpose-of-the-project)
- [User experience (UX)](#user-experience-ux)
    - [Key project goals](#key-project-goals)
    - [Target Audience](#target-audience)
    - [User requirements and expectations](#user-requirements-and-expectations)
- [Epics and User Stories](#epics-and-user-stories)
    -  [As site Admin](#as-site-admin)
- [Features](#features)
    - [Nav bar](#nav-bar)
    - [Hero image Carousel](#hero-image-carousel)
    - [About me cards](#about-me-cards)
    - [About me content](#about-me-content)
    - [Social media footer](#social-media-footer)
    - [Contact me](#contact-me)
    - [Routes page](#routes-page)
    - [Route detail page](#route-detail-page)
    - [Difficulty rating](#difficulty-rating)
    - [Like button and counter](#like-button-and-counter)
    - [Hike description](#hike-description)
    - [3D Hike Video](#3d-hike-video)
    - [Comment form](#comment-form)
    - [Message counter and Approved messages](#message-counter-and-approved-messages)
    - [Gallery](#gallery)
 - [Image cards Desktop](#image-cards-desktop)
 - [Image cards Mobile](#image-cards-mobile)
 - [Pagination](#pagination)
 - [Gallery image detail](#gallery-image-detail)
 - [Larger Image](#larger-image)
 - [Like button](#like-button)
 - [Comment Section](#comment-section)
 - [Upload a photo](#upload-a-photo)
    - [Upload image form](#upload-image-form)
    - [Upload image widget](#upload-image-widge)
      - [Desktop](#desktop)
      - [Mobile](#mobile)
    - [Image uploading](#image-uploading)
    - [Image input fields](#image-input-fields)
    - [Image message success](#image-message-success)
- [Wainwrights](#wainwrights)
    - [Wainwrights Desktop](#wainwrights-desktop)
    - [Wainwrights Mobile](#wainwrights-mobile)
- [Login, Logout, Register](#login-logout-register)
    - [Login Desktop](#login-desktop)
    - [Login Mobile](#login-mobile)
    - [Logout Desktop](#logout-desktop)
    - [Logout Mobile](#logout-mobile)
    - [Register desktop](#register-desktop)
    - [Register mobile](#register-mobile)
- [Admin Control](#admin-control)
    - [Admin Control](#admin-control)
    - [Admin filters](#admin-filters)
    - [Admin actions](#admin-actions)
- [Future Features](#future-features)
- [Design](#design)
    - [White Text](#white-text)
    - [Black](#black)
    - [Hover](#hover)
    - [Card Background colour](#card-background-colour)
- [Wireframes](#wireframes)
 - [About page](#about-page)
    - [Desktop](#desktop)
    - [Mobile](#mobile)
 - [Gallery page](#gallery-page)
    - [Desktop](#desktop)
    - [Mobile](#mobile)
 - [Routes page](#routes-page)
    - [Desktop](#desktop)
    - [Mobile](#mobile)
 - [Routes detail](#routes-detail)
    - [Desktop](#desktop)
    - [Mobile](#mobile)
 - [Gallery Detail](#gallery-detail)
    - [Desktop](#desktop)
    - [Mobile](#mobile)
- [Database Schema](#database-schema)
- [Technology Used](#technology-used)
    - [Languages and framework](#languages-and-framework)
    - [Database](#database)
    - [Technologies and tools](#technologies-and-tools)
- [Testing](#testing)
    - [HTML Validation](#html-validation)
    - [CSS Validation](#css-validation)
    - [JS Validation](#js-validation)
    - [Python Validation](#python-validation)
    - [Python Result](#python-result)
- [Lighthouse](#lighthouse)
    - [Lighthouse Results Table](#lighthouse-results-table)
    - [About Pages](#about-pages)
    - [Gallery Pages](#gallery-pages)
    - [Gallery Detail](#gallery-detail)
    - [Routes Page](#routes-page)
    - [Routes Details](#routes-detail)
- [User Testing](#user-testing)
    - [Notifications and Feedback Testing for Comments on All Pages](#notifications-and-feedback-testing-for-comments-on-all-pages)
    - [Notifications and Feedback Testing for Register, Signin, and Signout](#notifications-and-feedback-testing-for-register-signin-and-signout)
    - [Notifications and Feedback Testing for Routes, Routes Details](#notifications-and-feedback-testing-for-routes-routes-details)
    - [Notification and Feedback Testing for Gallery, Gallery Detail, and Image Upload](#notification-and-feedback-testing-for-gallery-gallery-detail-and-image-upload)
    - [Notification and Feedback Testing for About Page](#notification-and-feedback-testing-for-about-page)
    - [Notification and Feedback Testing for Social Media Links](#notification-and-feedback-testing-for-social-media-links)
    - [Notifications and Feedback Testing for Admin Panel](#notifications-and-feedback-testing-for-admin-panel)
- [Responsiveness](#responsiveness)
- [Devices Used for Testing, OS, and Browsers](#devices-used-for-testing-os-and-browsers)
- [Bugs](#bugs)
- [Deployment](#deployment)
    - [Pre Deployment](#pre-deployment)
    - [Deploying with Heroku](#deploying-with-heroku)
- [Credits](#credits)
    - [Code](#code)
    - [Images](#images)

## User experience (UX)

### Key project goals

- Create a Unified Community Platform: Develop a comprehensive platform that fosters a strong sense of community among triathletes of all abilities. This involves designing features that encourage interaction, such as image and comment sharing, to facilitate connections between users.
- Implement Performance Tracking Features: Integrate robust tools for logging and analyzing triathlon performances. These tools should allow users to record details of their swims, bikes, and runs, enabling them to track their progress over time and set new goals based on past achievements.
- Offer Customizable Training Plans: Provide users with access to customizable training plans that cater to their individual schedules and abilities. These plans should be adaptable to fit into a user's existing commitments, emphasizing flexibility and personalization.
- Enable Goal Setting and Achievement Sharing: Incorporate features that enable users to set personal goals and share their achievements within the community. This encourages motivation and competition among users, driving them to push their limits and strive for excellence.
- Facilitate Social Interaction and Support: Design the platform to promote social interactions and support among users. This includes following other users' progress, cheering them on during races, and engaging in discussions related to triathlon training and performance.
- Stay Updated with Industry Trends and Tips: Ensure the platform remains relevant by providing users with access to the latest training articles, nutrition advice, and performance enhancement tips. This keeps the community engaged and informed, supporting continuous learning and improvement.
- Ensure Accessibility for All Abilities: Make sure the platform is accessible and welcoming to triathletes of all abilities, from beginners to experienced racers. This includes offering guidance for newcomers and ensuring that advanced features are available to those seeking more specialized training and support.

### Target Audience

- Competitive Athletes: This group includes both amateur and professional triathletes who are actively participating in triathlon competitions. They are interested in improving their performance, tracking their progress, and accessing personalized training plans to enhance their skills across swimming, cycling, and running disciplines.
- Casual Participants: Individuals who participate in triathlons occasionally or are considering taking up the sport fall into this category. They might be looking for a supportive community to share their experiences, get inspired by others, and perhaps find training partners or mentors.
- Spectators and Fans: People who follow triathlon events, either locally or globally, form a significant portion of the audience. They may be interested in staying updated with the latest news, results, and stories from the triathlon world. This group could also include those who are intrigued by the sport and are considering getting involved in some capacity.
- Newcomers to Triathlon: Beginners who are just starting their triathlon journey would benefit from educational content, beginner-friendly training plans, and a supportive community to ease their transition into the sport.
- Industry Professionals: Companies and brands associated with triathlon equipment, clothing, and accessories, as well as coaches, trainers, and sports nutritionists, could be interested in reaching out to this audience for promotional purposes or to offer services.

### User requirements and expectations

- Comprehensive Community Engagement: Users expect a platform that facilitates easy sharing of images and comments, allowing them to connect with fellow triathletes, share experiences, and receive support.
- Detailed Performance Tracking: Users need tools to log and analyze their triathlon performances, including swim, bike, and run metrics. This feature should allow them to track their progress over time and identify areas for improvement.
- Customizable Training Plans: Users expect access to customizable training plans that adapt to their individual schedules and abilities. These plans should be flexible enough to integrate seamlessly with their existing commitments.
- Goal Setting and Achievement Sharing: Users desire a platform that supports setting personal goals and sharing achievements within the community. This feature should foster motivation and competition among users.
- Social Interaction and Support: Users anticipate being able to follow other users' progress, cheer them on during races, and engage in discussions related to triathlon training and performance. This social aspect is crucial for building a supportive community.
- Access to Latest Information and Resources: Users expect the platform to keep them informed about industry trends, training articles, nutrition advice, and performance enhancement tips. This ensures they remain up-to-date with the latest knowledge and practices in the sport.
- Accessibility for All Abilities: Users, regardless of their experience level or physical condition, expect the platform to be welcoming and inclusive. This includes offering guidance for newcomers and ensuring that advanced features are accessible to those seeking more specialized training and support.



## Epics and User Stories

1.  Epic: User Registration:
    -   User Story 1: As a new user, I want to register on the website so that I can access the site content, share my experiences and contribute to the community.
    -   User Story 2: As a registered user, I want to be able to upload my images, write about my experiences, like / comment on posts, create performances, set a goal and recieve a custom training plan based on my requirements.

2.  Epic: Performances:
    -   User Story 1: As a user, I want to view other performances by users and be able to sort the performances by event or user.
    -   User Story 2: As a user, I want to be able to create a performance and delete one of my own performances.

3.  Epic: Community Interaction:
    -   User Story 1: As a user, I want to be able to produce posts and upload photos to share my experiences.
    -   User Story 2: As a user, I want to interact with other community members through comments and forums, so that I can share my experiences and learn from others.
    -   User Story 3: As a user, I want to be able to delete my posts and all comments associated with it. 

4.  Epic: Training Plans:
    -   User Story 1: As a user, I want to be able to access custom training plans based on my creteria specified in my goal.
    -   User Story 2: As a user, I want to be able to change my training plan by updateing my requirements in the goal section

5.  Epic: Promotion Triathlon:
    -   User Story 1: As a user, I want to be able to interact with other triathletes of all abilities and share my experiences. 
    -   User Story 2: As a user, I want to be able to seek support from other triathletes, build my knowledge and share my experiences of the sport.

##  As site Admin:

6.  Epic: Database and Admin Setup:
    -   Full backend CRUD on Events, Posts, Comments, Goals and performances.
    -   CRUD Training plans that users have available to them.
    -   CRUD Events that users are able to select from when loggin a performance.
    -   CRUD user accounts and details. 


##  Features:

### Nav bar

A fully responsive navigation bar is in has been used. The main focus was on a 'mobile first' design where a clickable burger icon with a drop down menu appears on mobile. There is a burger icon that is functional on tablets too up to and not including the ipad pro 12.9. Desktop view the burger menu disappears and the navigation menu appears along the navigation bar. The links in the Navigation element are dependant on if the user is logged in or not. When the user is not logged in the links available are: 'Home' - Which takes you to the homepage, 'Sign in' - Navigates to the sign in page and 'Sign up' - which navigates to the sign up page. When a user is logged in the links available are: 'Home' - Navigates tot he home page, 'Community' - Navigates to the community post page, 'Performance' - Navigates to the performance page, 'My Plan' - Navigates to the goal setting and training plan page, 'Sign Out' - Enables the use to be able to sign out, 'Avatar Image' - Default or uploaded image of the user that navigates to the profile page. 

#### Desktop Navigation
![Desktop navbar]()

#### Mobile Navigation
![Mobile burger navigation button]()
![Mobile dropdown navigation menu]()

#### Avatar when signed in
![Default Profile Picture]()
![Uploaded Profile Picture]()

### Hero video / Home Page Content

The hero image is a background video that auto playes on site load muted. It is fully responsive on mobile and desktop and fills the viable area. The video has a filter to enable the site logo and text to be positioned on top and stand out. The remaining content on the home page comprises of responsive card elements that contain a background image and information detailing to the user what is available on the site.

#### Hero Video Desktop
![Hero video Desktop](/readme_imgs/Carousel/carouseld.png)

#### Hero Video Mobile
![Hero video mobile](/readme_imgs/Carousel/carouselm.png)

#### Home Page Content Desktop
![Home Page Content]()

#### Home Page Content Mobile
![Home Page Content]()


### Register / Sign in

Available in the nav bar on on mobile and desktop is the sign in / register nav links. This navigates the user to a sign in page where if they have an account, they can type in their username and password to log in. Once logging in they are redirected back to the home page and the nav bar will change to allow the user to access all the site content. If the sigin in unsuccessful, the user will be given a message detailing what the issue was with their sign in attempt. 
The sign up section takes users to a page where they are asked to input their username, password and confirm password. The username is unique and the user will be informed if that username already exists. The password is case sensitive and has a requirement to make sure the password is comprehensive enough. If any of these creteria are not met, the user will be presented with a message informing them. Once registered the user will be directed to the sign in page. 

#### Sign in page Desktop
![Sign in desktop Navigation]()
![Sign in desktop]()

#### Sign in page Mobile
![Sign in mobile dropdown]()
![Sign in mobile]()

### Community Page

This section is avalable when the user has created an account and logged in. The Community page shows the user posts from all users registered on the site. The user is able to see and interact with the like button for each post, and click on the the comment icon to view and leave comments. The user can see the avatar photo of the user who created the post, their name, the date in which the post was created and the title and description of the photo. If a logged in user ties to like their own post, they will get a message informing them that they are unable to do thi.

#### Post page and Buttons
![Likes Button]()
![Cannot like own post]()
![Comments Button]()
![Post]

The user is also able to see a list of the top 10 most followed profiles. Each profile will have a button next to it on desktop enabling the user to follow or unfollow the user if already following. If the logged in users profile is in the top 10, no button will appear for them to stop them being able to follow themselves. On mobile the user can see the top 4 most followed profiles. No follow button is available from this screen but by clicking on the avatar they will navigate to the users profile. 

#### Popular profiles
![Most popular profiles Desktop]()
![Most popular profiles Mobile]()

At the top of the page the user has 3 buttons they are able to interact with. One filters all the posts so they can only see posts they have liked, Feed filters the posts so thay can only see posts from users they are following and Add Post navigates the user to the create post page.

#### Filtering buttons and add post
![Liked]()
![Feed]()
![Add post]()

There is a search field that enables users to input text and search for a key word in the post / username. There is a delay when rendering the results to minimise network requests and imporve user experience. 

#### Search input
![Search]()

Infinite scrolling has been encorporated to prevent the posts being paginated. When the post cound excedes 10 the user will be able to continue scrolling and the posts will be dynamically loaded.

### Create a post

Logged in users are able to create a post if the click on the add post button on the Community page. This navigates uers to form where they can select a photo from their device, give it a title and and comment. Database checks run on the image selected and they are unable to upload a file that is not an image, and an image over 2Mb. Once the post has been successfully created the user is redirected back to the Community page where they can see their post. 

![Create Post]()
![Create Post Size]()

### Performances Page

The performances page lists all the performances uploaded by users. The performance lists the event, their time, any comments and the user that created the performance. There is a search field at the top of the performances enabling users to search based on username or event, infinite scrolling is present on the performances and if the performance was created by the logged in user, they will have the option to delete the performance. At the bottom of the performances is a button enabling users to create a performance. 

#### Performance features
![Performance List]()
![Performance Search]()
![Performance Edit button]()
![Performance Delete option]()
![Create Performance]()

### Create a Performance

This page allows users to create a performance. They can add content about the event, the date the completed the event, which event it was and their performance time. The completed date will only allow a date of today or before to stop users creating a performance in the future that has not happened yet. Once the performance is created, the user will be directed back to the performance page where their performance will not be visible. The cancel button navigates the user back to the performance page.

#### Performance form and error handling
![Create Performance]()
![Create Performance Error handling]()

### My Plan Page

The My Plan page offeres two features for the user. Firstly the user has the opportunity to create a goal for an upcoming event. If the user currently has no goal set, a create goal button will be present at the top of the page and a description informaing users to create a goal to recieve a training plan. 

#### Create a goal
![Create a goal]()

Once the user has created a goal they will be able to see their goal they have created which includes, event date, time available to traing each week in hours and how long in weeks the training plan should be. Any additional content the user created will apear in the goal section. 

#### Goal display
![Goal created]()

If the goal has been created a training plan will be generated based on the creteria of the users goal. It take into consideration the weeks available and length of plan and renders the appropriate training plan for thoes requirements. 

#### Training Plan 
![Training Plan]()

The button at the top of the page now changes to change goal giving users the functionality to change their goal should they want to at any point. If the user does want to change their goal a prompt will appear informing them that changing their goal will reset their current training plan. 

#### Change Goal + Alert
![Change Goal]()
![Change Goal message]()

### Create a Goal Page

On this page users are able to create a goal for an upcoming event they may be doing and from their selected creteria, a training plan will be generated for them. The users input event date, hours per week and plan length they want. They can also add any additional comments such as target time or the event details. 
Validation on the event date ensure the user isnt doing an event within 3 weeks and no suitable training plan can be produced for that time frame. When the goal is submitted the user is redirected back to their My Plan page where they will be able to see the goal and the generated training plan. If the user clicks cancel, no data is saved and they will be returned to the My Plan page.

#### Goal Form and vlidation
![Create Goal Form]()
![Create Goal Validation]()

### Profile Page

On the profile page the user can see their profile details including: Avatar photo, posts, followers, following, and all details created by the user. Below their details will be a list of all the posts the user has created for quick and easy access. They will also be able to see the popular profiles section as they could in the comminity page. 

#### Profile Page display
![Profile Page Desktop]()
![Profile Page Mobile]()

The user is also able to edit their profile details, change username and change password.

#### Edit profile dropdown
![Edit Profile details]()

### Edit Profile Page

Here the user can edit their profile details and update them. They can select their avatar image, update first and last name, add an email address, date of birth, fitness level and gender. The user is also able to create a bio for other users to see. If the user saves the updated details they will be redirected to their profile page, if they click cancel, no info is changed and they will be redirected to profile page. 

#### Edit Profile Form
![Edit Profile Form]()

### Change Username

This option alows users to change their username. This will change their username on all elements on the site. 

#### Change username Form
![Change Username Form]()

### Change Password

This option allows users to change their password. 
#### Change Password Form
![Change Password form]()


### Other User Profile Page

If you click on the avatar of another user, the logged in user is able to view all the details set by this user and what posts they have produced. They will also be able to follow or unfollow the user. 

#### Other users Profile
![Other user profile]()

## Future Features

1. Use a rich text editor to anyable further customisability of the rendered training plan content.
2. Use more advanced filtering for training plans to make them even more customisable. Such as fitness level, gender, discipline strengths or weaknesses.
3. Integration of strave or garmin connect for users to upload their performances to trihub.
4. Break each session down into individual session and allowing the user to add a comment after each session based on their performance. 
5. Enable the user to customise the generated training plan to further fit their requirements. 


## Design: 

The design of the website was a simple contrast of a black background in certain features or white, and white or orange text. The orange text and buttons are a feature across the whole site. 

### Background: 
### Orange Button:
### Orange Text:

## Wireframes:

The overall structure of the website was kept from initial inception of wireframes to the result of the website on submission for assessment. Slight alterations were made to the layout of the home page and performance page. These alterations were made to improve the feel of the website and UX. All initial wireframes can be seen below and were created using Adobe Xd. 

### Home Page
![Home Page Desktop]()
![Home Page Mobile]()

### Community page
![Community Page Desktop]()
![Community Page Mobile]()

### Performance page
![Performance Page Desktop]()
![Performance Page Mobile]()

### My Plan page
![My Plan Page Desktop]()
![My Plan Page Mobile]()

### Profile Page
![Profile Page Desktop]()
![Profile Page Mobile]()

## Database Schema:

Here you can find my initial ERD (Entity Relationship Diagram). This got modified slightly as my project developed and I realised I had the opportunity to develop more features and fields to my databases.

![ERD]()

### Technologies Used

#### Language

- [HTML](https://en.wikipedia.org/wiki/HTML) is used to structure the content of the application.
- [CSS](https://en.wikipedia.org/wiki/CSS) is applied to style the application, enhancing the user interface..
- [JavaScript](https://sv.wikipedia.org/wiki/Javascript) adds interactivity to web pages, improving the user experience.
- [JSX](https://legacy.reactjs.org/docs/faq-build.html#gatsby-focus-wrapper) & [Intro JSX](https://legacy.reactjs.org/docs/introducing-jsx.html)

#### Frameworks, libraries and dependencies

- [Axios](https://axios-http.com/) - A promise-based HTTP client for both the browser and Node.js, Axios plays a key role in facilitating smooth communication between the frontend and backend. It was chosen for its ability to simplify HTTP requests to the REST API, eliminating the need to manually configure HTTP headers. Additionally, Axios supports 'interceptors', which are used to request a refresh token in the event of an HTTP 401 error. This feature enhances the user experience by keeping authenticated users signed in for up to 24 hours, rather than requiring them to sign in again after five minutes.
- [CSS Validator 0.11.0]() - A tool used to validate CSS code. It ensures that all CSS written for the project adheres to standard syntax rules and best practices. Using this validator helps in maintaining clean and error-free stylesheets, which is essential for consistent and predictable rendering across different browsers.
- [jwt-decode 3.1.2](https://www.npmjs.com/package/jwt-decode) - Used for decoding JSON web tokens, this tool has been essential for maintaining secure user authentication between the frontend and backend.
- [Multiselect React Dropdown 2.0.25]() - This component is used to provide a multi-select dropdown functionality in React applications. It allows users to select multiple options from a dropdown menu, enhancing the user interface by making it more interactive and user-friendly. This component is particularly useful for forms and filtering data where multiple selections are needed. It was chosen mostly because it is fun to try out. The functionality was proven, and very handy but unfortunately a bug in our code base is stopping us from showcasing it to users. It is going to be used for the Hashtag feature.
- [React 17.0.2](https://legacy.reactjs.org/docs/getting-started.html) - A JavaScript library for building user interfaces. An older version was chosen to stay inline with all other dependencies used as part of the Moments walkthrough which provided a base that this project was then modelled on.
- [React bootstrap 1.6.6](https://react-bootstrap.github.io/) - A frontend framework built for react that provides common components. React bootstrap was chosen to help speed up the development of this project and allow time to focused elsewhere.
- [React Router 5.3.4](https://github.com/remix-run/react-router) - This fully-featured routing library for React allowed for seamless site navigation, greatly enhancing the user experience.
- [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component) - Implemented to enable the loading of additional data sets upon scrolling, especially when data surpasses pagination limits.

#### Tools and services

- [Am I Responsive?](http://ami.responsivedesign.is/) is used to show the website image on a range of devices.
- [Balsamiq](https://balsamiq.com/) is used to create wireframes.
- [CSS Validation Service](https://jigsaw.w3.org/css-validator/#validate_by_input) is used to check code ensuring that my CSS is error-free and adheres to the latest web standards.
- [DevTools](https://developer.chrome.com/docs/devtools) to help in edit pages on-the-fly and diagnose problems quickly.
- [Favicon.io](https://favicon.io/) is used to create favicon.
- [Font Awesome](https://fontawesome.com/) is used for the iconography on the website.
- [Git](https://git-scm.com/) is used for version control.
- [Gitpod](https://gitpod.io) streamlines your development process by providing a pre-configured, cloud-based development environment that's instantly ready for coding.
- [Github](https://github.com/) is essential for version control, allowing you to track changes, collaborate with others (if applicable), and secure online code storage.
- [Google Dev Tools](https://developers.google.com/web/tools) is used during testing, debugging and styling.
- [Google Fonts](https://fonts.google.com/) is a catalog of free, open-source fonts. Used for typography.
- [Heroku](https://www.heroku.com) ia a platform for deploying and hosting web applications.
- [Markup Validation Service](https://validator.w3.org/) is used to check code ensuring that my HTML is error-free and adheres to the latest web standards.
- [NVDA](https://www.nvaccess.org/download/), NonVisual Desktop Access is a free and open-source, portable screen reader for Microsoft Windows.

### Testing

For the test results and solved issues, we refer to the [TESTING.md file]()

#### Known and unresolved issues


### Deployment


Version Control

The site was created using the Gitpod editor and pushed to github to the remote repository ‘trihub’.
The following git commands were used throughout development to push code to the remote repo:

- `git add <file>` - This command was used to add the file(s) to the staging area before they are committed.
- `git commit -m “commit message”` - This command was used to commit changes to the local repository queue ready for the final step.
- `git push` - This command was used to push all committed code to the remote repository on github.


#### Heroku Deployment


 To deploy the project to Heroku
 

**Preparing the Application**

- Create and add the 'Procfile' to your application's root directory `echo web: node index.js > Procfile`. Heroku relies on this file to determine how to run your application, ensuring the correct setup of your web server. Use commands like web: `gunicorn PROJ_NAME.wsgi` in the 'Procfile' to instruct Heroku on starting your web server with Gunicorn
- Ensure you have a requirements.txt file listing all project dependencies.
- Set up necessary configuration variables in Heroku setting tab > Config Vars (eg. SECRET_KEY, DATABASE_URL, etc.).
- In your app's 'settings.py' add Heroku to ALLOWED_HOSTS

**Initial set-up**

- Sign up for a [Heroku](https://heroku.com/) account at Heroku's website.
- Download and install the Heroku Command Line Interface (CLI) to interact with Heroku from your local machine.
- Or use Heroku Web interface.

**Create Heroku App**

- Sign in or sign up to [Heroku](https://heroku.com/).
- Click the button that says "Create new app."
- Enter a unique app name.
- Choose your region from the dropdown menu.
- Click the "Create app" button.
- Scroll further down on the page, select Add Buildpack. The buildpacks will install further dependencies that are not included in the 'requirements.txt'. <br>
  It's crucial to arrange the build packs correctly! First, choose Python and then Node.js. If they're not in this sequence, you can reorder them by dragging.

**Deployment**

- Deploy by either push your code to Heroku or by connecting your GitHub repository to Heroku or using the Heroku CLI to deploy your application.
- (if applicable) Run database migrations using the Heroku CLI.
- For deploying this project, we're using GitHub as our method. After choosing GitHub, make sure to confirm the connection. Then, search for your repository name and once Heroku finds your repository - click "connect"
- Scroll down to the section "Automatic Deploys".
- Click "Enable automatic deploys" or choose "Deploy branch" and manually deploy.
- Click "Deploy branch" wait for the app to be built. Once this is done, a message should appear letting us know that the app was successfully deployed.
- Click the button "View" to see the app.

**Final Steps**

- Enable the Web Dyno, make sure the web dyno is up and running after deployment.
- Open your application from the Heroku dashboard or using the CLI command heroku open.

For more detailed instructions and troubleshooting, visit the [official Heroku Dev Center](https://devcenter.heroku.com/).



#### Local Deployment


How to clone:


Cloning a GitHub repository creates a local copy on your machine, allowing you to sync between the two locations. Here are the steps:

- Navigate to the GitHub Repository you want to clone to use locally.
- Click on the code drop down button.
- Click on HTTPS.
- Copy the repository link to the clipboard.
- Open your IDE of choice (git must be installed for the next steps). 
- Navigate to the directory where you want the clone to be created.
- Type `git clone`, and then paste the URL you copied previously. Press Enter to create your local clone.

Install Dependencies:

`npm install`

Run Application:

`npm start`

How to Fork

Most commonly, forks are used to either propose changes to someone else's project or to use someone else's project as a starting point for your own idea. In order to protect the main branch while you work on something new, essential when working as part of a team or when you want to experiment with a new feature, you will need to fork a branch.

- Log in (or sign up) to Github.
- Go to the selected repository.
- Click the Fork button in the top right corner and select create a fork.
- One can change the name of the fork and add description
- Choose to copy only the main branch or all branches to the new fork.
- Click Create a Fork. A repository should appear in your GitHub

### Credits

#### Content

List of content

Throughout the development of trihub, I utilized a variety of resources to ensure the platform is robust, user-friendly, and engaging. Below is a list of documentation that have been instrumental in crafting the features and functionality of trihub:

- [Favicon, credited to](https://www.flaticon.com/free-icons/photography") Photography icons created by Vactor area- Flaticon
- Logo used was created at [Looka](https://looka.com/dashboard)
- [React Multiselect dropdown](https://www.npmjs.com/package/multiselect-react-dropdown), this library is used for handling hashtags. It helps keep the codebase cleaner and more maintainable.
- **Bootstrap**: Used for styling and responsive design, making the site accessible on a variety of devices - [Bootstrap documentation](https://getbootstrap.com/).
- **Sources of inspiration and guidance in general**:
  - This resources is only available to enrolled students at The Code Institute:
    - The Code Institute Diploma in Full Stack Software Development (Advanced Front-End) Walk-through project Moments (frontend)
  - [React](https://react.dev/learn) A goto place to learn.
  - [Django Rest framework](https://www.django-rest-framework.org/) A got place to learn
  - [Django & React Tutorial](https://youtu.be/JD-age0BPVo?si=vLYojx9J_rD8ZKyU), Tech with Tim, also a goto net source for inspo.
- **Testing**: Used to learn how to create test cases
  - [How to write test cases for Django Rest Framework Applications](https://rajansahu713.medium.com/mastering-the-art-of-django-test-cases-fa7b0322c9fb)
  - [Django REST framwork, Testing](https://www.django-rest-framework.org/api-guide/testing/#testingDjango)
  - [django project, testing](https://docs.djangoproject.com/en/3.2/topics/testing/)
  - [Getting started with testing in Python](https://realpython.com/python-testing/)


#### Acknowledgements


I would like to thank!


- My immediate and extended family, as well as my friends, who support and cheer me on!
- Code Institutes Tutor Support service, their help has been a source of immense relief when in total panic! Also yet another channel to gain more knowhow from.
- My mentor []()



<!-- 


##  Technology Used:
### Languages and framework:

- [HTML5](https://developer.mozilla.org/en-US/docs/Learn/HTML "link to html mozilla documentation")
  was used to create content and structure
- [CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS "link to css mozilla documentation")
  was used to add custom styles
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript "link to javascript mozilla documentation") was used to dynamically reset the comment form if the reset button was clicked and to show a modal when the edit comment button was clicked
- [Django](https://www.djangoproject.com/ "link to Django docs homepage") was the python framework used to develop the site

### Database:

- [PostgreSQL from ElephantSQL](https://www.elephantsql.com/ "link to elephantSQL") was used as the PostgreSQL database for this project.

### Technologies and tools:

- [GitPod Code](https://www.gitpod.io/ "link to Gitpod webpage") was used as the ide for this whole project.
- [Cloudinary](https://cloudinary.com/ "link to cloudinary homepage") was used to host images.
- [GitHub](https://github.com/ "link to github webpage") was used to store the code files, README files and assets
- [Git](https://git-scm.com/ "link to official git website") was used as a version control software to commit and push the code to the GitHub repository
- [Heroku](https://id.heroku.com/login "link to Heroku login") was used to deploy the project
- [lucidcharts](https://www.lucidchart.com/pages/ "Link to lucidcharts") was used to make a diagram of the database schema and entity relationship diagrams.
- [Prettier](https://prettier.io/ "link to official prettier website") was used as the default formatter in Gitpod IDE, for html and css files.
- [Bootstrap](https://getbootstrap.com/ "link to official bootstrap website") was used to quickly layout, position and size critical website features
- [Adobe Xd](https://www.adobe.com/home/ "link to official Adobe website") was used in early planning to map out wireframes
- [Google Fonts](https://fonts.google.com/ "link to official google fonts website") was used to import fonts
- [Font Awesome](https://fontawesome.com/ "link to official font awesome website") was used for all icons
- [Google Chrome Developer Tools](https://developer.chrome.com/docs/devtools/overview/ "Link to official chrome developer tools website") was used for lighthouse testing, debugging and consistently checking responsiveness
- [W3C Markup Validator](https://validator.w3.org/ "link to official html validator") was used to validate all live html
- [Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/ "link to official css validator") was used to validate CSS code
- [JS Hint](https://jshint.com/ "link to official javascript validator") was used to validate JavaScript code
- [Code Institute Python Linter](https://pep8ci.herokuapp.com/ "link to official python validator") was used to validate all python code
- [Django Summernote](https://pypi.org/project/django-summernote/ "link to official summernote website") was used. This is a rich text editor plugin for Django
- [Django Crispy Forms](https://pypi.org/project/django-crispy-forms/ "link to official crispy forms website") were used throughout the project to quickly create forms

## Testing:

### HTML Validation

All HTML pages were tested with the [W3C HTML Validator](https://validator.w3.org/).

#### HTML Result

| page                   | validator                                                                                                                                | result |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------  | ------ |
| about                  |  <details><summary>About Page</summary><img src="./readme_imgs/html/about.png"></details>                                                | PASS   |
| gallery                |  <details><summary>Gallery Page</summary><img src="./readme_imgs/html/gallery.png"></details>                                            | PASS   |
| wainwright             |  <details><summary>Wainwright Page</summary><img src="./readme_imgs/html/wainwrights.png"></details>                                     | PASS   |
| Routes                 |  <details><summary>Routes</summary><img src="./readme_imgs/html/Routes.png"></details>                                                   | PASS   |
| Gallery Detail         |  <details><summary>Gallery Detail</summary><img src="./readme_imgs/html/gallery detail.png"></details>                                   | PASS   |
| Route Details          |  <details><summary>Register</summary><img src="./readme_imgs/html/routes details.png"></details>                                         | PASS   |
| sign in page           |  <details><summary>Sign In</summary><img src="./readme_imgs/html/login.png"></details>                                                   | PASS   |
| logout page            |  <details><summary>Sign Out</summary><img src="./readme_imgs/html/logout.png"></details>                                                 | PASS   |
| sign up page           |  <details><summary>Register</summary><img src="./readme_imgs/html/signup.png"></details>                                                 | PASS   |

### CSS Validation

Custom CSS was put through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).

#### CSS Result

![CSS validation](/readme_imgs/css/CSS%20validation.png)
Pass

### JS Validation

JavaScript code in the comment.js and image.js file was put through the [JSHint Validator](https://jshint.com/).

#### JS Result

The js code for both files passed.

#### Comment.js
![JS validation comments](/readme_imgs/js/js%20comment.png)

#### Images.js
![JS Validation images](/readme_imgs/js/js%20image.png)



### Python Validation

All python code was put through the [CI Python Linter](https://pep8ci.herokuapp.com/).

#### Python Result

| File            | Validator                                                                                                                | Result |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ | ------ |
| About admin     |  <details><summary>About Models</summary><img src="./readme_imgs/linter/CI Linter about admin.png"></details>            | PASS   |
| About apps      |  <details><summary>About Views</summary><img src="./readme_imgs/linter/CI Linter About Apps.png"></details>              | PASS   |
| About model     |  <details><summary>About Forms</summary><img src="./readme_imgs/linter/CI Linter About model.png"></details>             | PASS   |
| About urls      |  <details><summary>About urls</summary><img src="./readme_imgs/linter/CI Linter About urls.png"></details>               | PASS   |
| About views     |  <details><summary>About Admin</summary><img src="./readme_imgs/linter/CI Linter About Views.png"></details>             | PASS   |
| Contact admin   |  <details><summary>Blog Models</summary><img src="./readme_imgs/linter/CI Linter contact admin.png"></details>           | PASS   |
| Contact forms   |  <details><summary>Blog Views</summary><img src="./readme_imgs/linter/CI Linter contact forms.png"></details>            | PASS   |
| Contact models  |  <details><summary>Blog Forms</summary><img src="./readme_imgs/linter/CI Linter Contact models.png"></details>           | PASS   |
| Contact URLs    |  <details><summary>Blog urls</summary><img src="./readme_imgs/linter/CI linter contact urls.png"></details>              | PASS   |
| Contact Views   |  <details><summary>Blog Admin</summary><img src="./readme_imgs/linter/CI Linter contact views.png"></details>            | PASS   |
| Gallery admin   |  <details><summary>Makeover Models</summary><img src="./readme_imgs/linter/CI Linter Gallery Admin.png"></details>       | PASS   |
| Gallery Apps    |  <details><summary>Makeover Views</summary><img src="./readme_imgs/linter/CI Linter Gallery apps.png"></details>         | PASS   |
| Gallery Model   |  <details><summary>Makeover Forms</summary><img src="./readme_imgs/linter/CI Linter Gallery models.png"></details>       | PASS   |
| Gallery Urls    |  <details><summary>Makeover urls</summary><img src="./readme_imgs/linter/CI Linter gallery urls.png"></details>          | PASS   |
| Gallery Forms   |  <details><summary>Makeover Admin</summary><img src="./readme_imgs/linter/CI Linter gallery forms.png"></details>        | PASS   |
| Gallery View    |  <details><summary>Settings</summary><img src="./readme_imgs/linter/CI Linter gallery views.png></details>               | PASS   |
| Routes admin    |  <details><summary>Makeover Models</summary><img src="./readme_imgs/linter/CI Linter routes admin.png"></details>        | PASS   |
| Routes Apps     |  <details><summary>Makeover Views</summary><img src="./readme_imgs/linter/CI Linter routes apps.png"></details>          | PASS   |
| Routes Model    |  <details><summary>Makeover Forms</summary><img src="./readme_imgs/linter/CI Linter Routes models.png"></details>        | PASS   |
| Routes Urls     |  <details><summary>Makeover urls</summary><img src="./readme_imgs/linter/CI Linter routes urls.png"></details>           | PASS   |
| Routes Forms    |  <details><summary>Makeover Admin</summary><img src="./readme_imgs/linter/CI Linter routes forms.png"></details>         | PASS   |
| Routes View     |  <details><summary>Settings</summary><img src="./readme_imgs/linter/CI Linter routes views.png"></details>               | PASS   |
| Settings        |  <details><summary>Settings</summary><img src="./readme_imgs/linter/CI Linter Settings.png"></details>                   | PASS   |

## Lighthouse

Performance, accessibility, best practices and seo were tested using [lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) in Chrome DevTools.

### Lighthouse results table

Lighthouse tests were ran on all pages. Pages showed lower performance than I wanted even after I converted my images to webp and corrected some of the suggestions. If time allowed and with further development of the site I would include all image uploads are converted to webp format by admin and user. I encountered an detailing that Cloudinary was not secure. I updated the settings.py to overcome this by importing cloudinary and using this code that was suggested on slack cloudinary.config(secure=True,). 

#### About pages
![About Page Desktop](/readme_imgs/Lighthouse/aboutld%20(2).png)
![About Page Mobile](/readme_imgs/Lighthouse/aboutlm%20(2).png)

#### Gallery Pages
![Gallery Page Desktop](/readme_imgs/Lighthouse/galleryld%20(2).png)
![Gallery Page Mobile](/readme_imgs/Lighthouse/gallerylm%20(2).png)

#### Gallery Detail
![Gallery Detail Desktop](/readme_imgs/Lighthouse/galleryldd.png)
![Gallery Detail Mobile](/readme_imgs/Lighthouse/galleryldm.png)

#### Routes Page
![Routes Page Desktop](/readme_imgs/Lighthouse/routesld%20(2).png)
![Routes Page Mobile](/readme_imgs/Lighthouse/routeslm.png)

#### Routes Detail
![Routes Page Desktop](/readme_imgs/Lighthouse/routesldd.png)
![Routes Page Mobile](/readme_imgs/Lighthouse/routesldm.png)

### User Testing:

### Notifications and feedback testing for comments on all pages

| Action                                                    | Notifications and feedback for comments                | Does it work as expected? |
| --------------------------------------------------------- | ------------------------------------------------------ | ------------------------- |
| Logged out and looking at comments                        | It should say "log in to leave a comment"              | PASS                      |
| Submit a comment                                          | Comment submitted and awaiting approval                | PASS                      |
| Delete a comment                                          | Your comment has been deleted successfully!            | PASS                      |
| Edit a comment modal                                      | User is able to edit the comment in the body           | PASS                      |
| Comment text in box on click of edit                      | Targeted text appears in comment box                   | PASS                      |
| When edit button is clicked                               | The word submit changes to update                      | PASS                      |
| Change mind about editing, can click reset                | Resets update back to submit and clears comment box    | PASS                      |
| Edit a comment successfully                               | Comment Updated! Notification appears                  | PASS                      |

### Notifications and feedback testing for register, signin and signout

| Action   | Notifications and feedback for signin and out | Does it work as expected? |
| -------- | --------------------------------------------- | ------------------------- |
| signin   | Successfully signed in as username.           | PASS                      |
| signout  | You have signed out.                          | PASS                      |
| register | Successfully signed in as username.           | PASS                      |

### Notifications and feedback testing for routes, routes details

| Action                                    | Notifications and feedback for signin and out     | Does it work as expected? |
| ------------------------------------------| --------------------------------------------------| ------------------------- |
| Routes button in nav and body clicked     | Successfully navigated to routes page.             | PASS                      |
| Routes card clicked.                      | Successfully navigate to routes detail page       | PASS                      |
| Interactive map                           | User can interact with the map, zoom etc          | PASS                      |
| User can click the like btn               | User is able to like or unlike a route            | PASS                      |
| User can watch the video                  | User can interact with the youtube video          | PASS                      |
| Learn more btn                            | Clicking the learn more opens the popup           | PASS                      |
| Download Files                            | Clicking on the file download initiates download  | PASS                      |

### Notification and feedback testing for gallery, gallery detail and image upload

| Action                                    | Notifications and feedback for signin and out                 | Does it work as expected? |
| ------------------------------------------| --------------------------------------------------------------| ------------------------- |
| Gallery button in nav and body clicked    | Successfully navigated to gallery page.                        | PASS                      |
| Gallery image card clicked.               | Successfully navigate to gallery detail page                  | PASS                      |
| User can click the like btn               | User is able to like or unlike a gallery image                | PASS                      |
| Upload Image btn                          | Clicking the upload image opens the cloudinary widget         | PASS                      |
| submit image                              | Clicking on the submit image uploads the image for approval   | PASS                      |

### Notification and feedback testing for about page

| Action                                    | Notifications and feedback for signin and out     | Does it work as expected? |
| ------------------------------------------| --------------------------------------------------| ------------------------- |
| Navigation menu links work                | Successfully navigated to desired page.            | PASS                      |
| Card bodies clicked                       | Successfully navigate to desired page.            | PASS                      |
| Carousel images clicked                   | Cycle through carousel images                     | PASS                      |
| Contact me button clicked                 | Navigate to contact me form                       | PASS                      |
| Contact form completed                    | User receives a success message                   | PASS                      |
| Top of page button clicked                | User returns to the top of the page               | PASS                      |

### Notification and feedback testing for social media links

| Action                                    | Notifications and feedback for signin and out              | Does it work as expected? |
| --------                                  | ---------------------------------------------              | ------------------------- |
| Social media links clicked                | Successfully navigated to desired page in a new window      | PASS                      |

### Notifications and feedback testing for admin panel

| Action                                                | Notifications and feedback for comments                                                         | Does it work as expected? |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------- |
| When contact request is marked in admin | The request was changed successfully.                                                                         | PASS                      |
| When a comment has been approved in admin             | The comment "Comment" was changed successfully.                                                 | PASS                      |
| When a comment is deleted by admin                    | Successfully deleted 1 comment.                                                                 | PASS                      |
| When more than 1 comment is deleted by admin          | Successfully deleted 2 comments.                                                                | PASS                      |
| When a Image is confirmed in admin                    | The image was successfully published.                                                           | PASS                      |
| When a image is deleted by admin                      | Successfully deleted 1 booking.                                                                 | PASS                      |
| When admin deletes more than 1 image                  | Successfully deleted 2 bookings.                                                                | PASS                      |

### Responsiveness

All pages on the website were tested for responsiveness across multiple devices. All pages display correctly on all devices tested.

### Devices used for testing, OS and Browsers

-   iPhone 12, 13, 14
-   Latest and Legacy Android Smartphones: Test on devices from manufacturers Samsung, Google. This includes models running the latest OS versions Android 12 & 13.
-   Latest and Legacy iOS Devices: Include the latest and legacy handsets by Apple, iPhone X, iPhone 12 Mini, iPhone 13 Pro, and iPhone 14 Plus. This ensures testing on the    latest iOS versions like iOS 15 and 16.
-   Windows OS, windows 10 and windows 11 devices were used to test the website
-   Mac OS, Mac os was tested using a MacBook air.
-   Chrome
-   Firefox
-   Safari
-   Edge
-   Opera

### bugs

-   login success message sometimes appears when the user is logged in and navigates to the gallery page for the first time.
-   Reloading the page sends another request through to the database and duplicates the comment left. 

##  Deployment:

### Pre deployment

- To ensure successful deployment with heroku, it's good practice to make sure that the requirements.txt file is kept up to date so as that imported python modules are configured correctly.
- A Procfile is required to allow heroku deployment to be configured to a gunicorn web app.
- In settings.py configure the ALLOWED_HOSTS list the format ['app_name.heroku.com', 'localhost'], make sure all static files and directories are configured correctly.
- All environment variables on the env.py which gitignored on the repo must be configured correctly with the database url, cloundinary url and secret key.

### Deploying with heroku

After account setup, the steps were as follows:

1.  Create a New App on Heroku:
    -   Log into your Heroku account.
    -   Click on "Create new app" and provide a unique name for your app.
    -   Choose the region for your app (e.g., Europe).
    -   Click "Create app".
2.  Connect to GitHub:
    -   In the deployment method section, select GitHub.
    -   Search for your GitHub repository and click "Connect".
3.  Configure Deployment Settings:
    -   Choose between manual or automatic deployment. For automatic deployment, ensure the main branch is selected.
    -   In the settings tab, reveal config vars and input the required hidden variables.
4.  Set Buildpacks:
    -   Go to the settings tab and select "Buildpacks".
    -   Add Node.js and Python as the buildpacks for your application.
5.  Deploy Your App:
    -   Click "Deploy" to start the deployment process.
    -   After the first deployment, you will receive a message indicating that your app was successfully deployed.
    -   Use the "View" button to access your deployed application.
This process leverages Heroku's integration with GitHub to automate the deployment of your application, making it easier to manage and update your project.

The live link for this project can be found here - [Walking the Wainwrights](https://walking-the-wainwrights-7b754816f5c3.herokuapp.com/)

##  Credits

### Code

[CI walkthrough I think therefore I blog](https://github.com/Code-Institute-Solutions/blog/tree/main/12_views_part_3/05_edit_delete) - The CI walkthrough repo was relied upon  for the comment section, edit and delete button however I created custom models to suit the theme of the website.

[Cloudinary Documentation](https://cloudinary.com/) - The documentation and code in tutorial enabled me to embed the image upload widget into my project. I used the Javascript in my images.js file. 

[Outdoor Active](https://www.outdooractive.com/en/) - Following instructions from outdoor active I was able to embed the routes into my own website. Outdooractive also creates the 3D maps which have been used in the website. 

### Images

-   Images used in this project have been taken by myself primarily. Additional images were used on the wainwright cards and were taken from Wikipedia.
www.wikipedia.com

## Acknowledgements

Thank you to all who supported me on this project. My family have been a great support for me especially working late into the evening after a full days teaching. This project would not have been possible without their support.  -->
