# trihub

(Developer: Martin Bradbury)

![AmIResponsive Image](/src/assets/readme/responsive.png)

## Live website

Link to live website: [trihub](https://trihub-e2e28f386783.herokuapp.com/)

## Project Overview

TriHub is a comprehensive platform dedicated to the triathlon community. It aims to unite triathletes of all skill levels, providing a space for sharing, learning, and growing together. Our platform offers a mix of features designed to cater to the diverse needs of our members, from seasoned professionals to those just beginning their triathlon journey.

### Core Objectives

- Foster a vibrant community for triathletes to share experiences, insights, and support.
- Provide robust performance tracking tools to analyze progress and set new goals.
- Deliver customizable training plans tailored to individual schedules and abilities.
- Encourage social interaction and support among users.
- Keep the community informed with the latest training tips and industry trends.
- Ensure accessibility for triathletes of all abilities.

### Target Audience

- Competitive Athletes: Seeking to improve performance and access personalized training plans.
- Casual Participants: Interested in triathlon and looking for a supportive community.
- Spectators and Fans: Keen to stay updated with triathlon events and stories.
- Newcomers to Triathlon: Needing guidance and support as they begin their journey.
- Industry Professionals: Looking to engage with the triathlon community.

## User experience (UX)

### Key features

- **Unified Community Platform:** Encourages interaction through image and comment sharing.
- **Performance Tracking:** Allows users to log and analyze triathlon performances.
- **Customizable Training Plans:** Offers plans that adapt to individual schedules and abilities.
- **Goal Setting and Achievement Sharing:** Empowers users to set goals and share achievements.
- **Social Interaction and Support:** Promotes engagement and support among users.
- **Industry Updates:** Provides access to the latest training articles and tips.

### User Requirements and Expectations

- **Extensive Community Involvement:** Simplified sharing and feedback mechanisms.
- **Thorough Performance Monitoring:** Detailed tools for tracking triathlon outcomes.
- **Tailored Training Regimens:** Adaptable training programs to fit individual schedules.
- **Objective Setting and Triumph Display:** Features for setting goals and sharing achievements.
- **Societal Interaction and Backing:** Opportunities for social interaction and support.
- **Availability of Current Insights and Tools:** Regular updates on industry developments and tips.
- **Universal Accessibility:** A welcoming platform for triathletes of all abilities.


## Epics and User Stories

1.  Epic: User Registration:
    -   User Story 1: As a new user, I want to register on the website so that I can access the site content, share my experiences and contribute to the community.
    -   User Story 2: As a registered user, I want to be able to upload my images, write about my experiences, like / comment on posts, create performances, set a goal and receive a custom training plan based on my requirements.

2.  Epic: Performances:
    -   User Story 1: As a user, I want to view other performances by users and be able to sort the performances by event or user.
    -   User Story 2: As a user, I want to be able to create a performance and delete one of my own performances.

3.  Epic: Community Interaction:
    -   User Story 1: As a user, I want to be able to produce posts and upload photos to share my experiences.
    -   User Story 2: As a user, I want to interact with other community members through comments and forums, so that I can share my experiences and learn from others.
    -   User Story 3: As a user, I want to be able to delete my posts and all comments associated with it. 

4.  Epic: Training Plans:
    -   User Story 1: As a user, I want to be able to access custom training plans based on my criteria specified in my goal.
    -   User Story 2: As a user, I want to be able to change my training plan by updating my requirements in the goal section

5.  Epic: Promotion Triathlon:
    -   User Story 1: As a user, I want to be able to interact with other triathletes of all abilities and share my experiences. 
    -   User Story 2: As a user, I want to be able to seek support from other triathletes, build my knowledge and share my experiences of the sport.

##  As site Admin:

6.  Epic: Database and Admin Setup:
    -   Full backend CRUD on Events, Posts, Comments, Goals and performances.
    -   CRUD Training plans that users have available to them.
    -   CRUD Events that users are able to select from when logging a performance.
    -   CRUD user accounts and details. 

## Design: 

The website's design employs a straightforward color scheme featuring either a black background with white or orange text, or vice versa. Throughout the entire site, orange text and buttons serve as a recurring element.

### Background:  #ffffff 
### Orange Button: #ed4300
### Orange Text: #ed4300

## Wireframes:

From the initial design phase with wireframes through to the final version submitted for evaluation, the website's overall architecture remained consistent. Minor changes were introduced to the layout of the homepage and performance page to enhance the website's aesthetic and user experience. All the original wireframes, crafted using Adobe XD, are displayed below.

### Home Page
![Home Wireframe](/src/assets/readme/Home.png)

### Community page
![Community Wireframe](/src/assets/readme/Community.png)


### Performance page
![Performance Wireframe](/src/assets/readme/Performance.png)

### My Plan page
![My Plan Wireframe](/src/assets/readme/MyPlan.png)

##  Features:

### Nav bar

A fully responsive navigation bar is in has been used. The main focus was on a 'mobile first' design where a clickable burger icon with a drop down menu appears on mobile. There is a burger icon that is functional on tablets too up to and not including the iPad pro 12.9. Desktop view the burger menu disappears and the navigation menu appears along the navigation bar. The links in the Navigation element are dependent on if the user is logged in or not. When the user is not logged in the links available are: 'Home' - Which takes you to the homepage, 'Sign in' - Navigates to the sign in page and 'Sign up' - which navigates to the sign up page. When a user is logged in the links available are: 'Home' - Navigates to the home page, 'Community' - Navigates to the community post page, 'Performance' - Navigates to the performance page, 'My Plan' - Navigates to the goal setting and training plan page, 'Sign Out' - Enables the use to be able to sign out, 'Avatar Image' - Default or uploaded image of the user that navigates to the profile page. 

#### Desktop Navigation
![Desktop navbar](/src/assets/readme/dtnav.png)

#### Mobile Navigation
![Mobile burger navigation button](/src/assets/readme/mobnavburger.png)
![Mobile dropdown navigation menu](/src/assets/readme/mobnavmenu.png)

#### Avatar when signed in
![Default Profile Picture](/src/assets/readme/avatarnopic.png)
![Uploaded Profile Picture](/src/assets/readme/avatarpic.png)

### Hero video / Home Page Content

The hero image is a background video that auto plays on site load muted. It is fully responsive on mobile and desktop and fills the viable area. The video has a filter to enable the site logo and text to be positioned on top and stand out. The remaining content on the home page comprises of responsive card elements that contain a background image and information detailing to the user what is available on the site.

#### Hero Video Desktop
![Hero video Desktop](/src/assets/readme/hvdesk.png)

#### Hero Video Mobile
![Hero video mobile](/src/assets/readme/hvmob.png)

#### Home Page Content Desktop
![Home Page Content](/src/assets/readme/hpcont.png)

#### Home Page Content Mobile
![Home Page Content](/src/assets/readme/hpcontmob.png)

### Register / Sign in

Available in the nav bar on mobile and desktop is the sign in / register nav links. This navigates the user to a sign in page where if they have an account, they can type in their username and password to log in. Once logging in they are redirected back to the home page and the nav bar will change to allow the user to access all the site content. If the sign in in unsuccessful, the user will be given a message detailing what the issue was with their sign in attempt. 
The sign up section takes users to a page where they are asked to input their username, password and confirm password. The username is unique and the user will be informed if that username already exists. The password is case sensitive and has a requirement to make sure the password is comprehensive enough. If any of these criteria are not met, the user will be presented with a message informing them. Once registered the user will be directed to the sign in page. 

#### Sign in page Desktop
![Sign in desktop](/src/assets/readme/sidesk.png)

#### Sign in page Mobile
![Sign in mobile](/src/assets/readme/simob.png)

### Community Page

This section is available when the user has created an account and logged in. The Community page shows the user posts from all users registered on the site. The user is able to see and interact with the like button for each post, and click on the comment icon to view and leave comments. The user can see the avatar photo of the user who created the post, their name, the date in which the post was created and the title and description of the photo. If a logged in user ties to like their own post, they will get a message informing them that they are unable to do this.

#### Post page and Buttons
![Likes Button and comment button](/src/assets/readme/likecombtns.png)
![Cannot like own post](/src/assets/readme/cannotlike.png)
![Post](/src/assets/readme/postpage.png)

The user is also able to see a list of the top 10 most followed profiles. Each profile will have a button next to it on desktop enabling the user to follow or unfollow the user if already following. If the logged in users profile is in the top 10, no button will appear for them to stop them being able to follow themselves. On mobile the user can see the top 4 most followed profiles. No follow button is available from this screen but by clicking on the avatar they will navigate to the users profile. 

#### Popular profiles
![Most popular profiles Desktop](/src/assets/readme/populardesk.png)
![Most popular profiles Mobile](/src/assets/readme/popularmob.png)

At the top of the page the user has 3 buttons they are able to interact with. One filters all the posts so they can only see posts they have liked, Feed filters the posts so they can only see posts from users they are following and Add Post navigates the user to the create post page.

#### Filtering buttons and add post
![Filter buttons and add post desktop](/src/assets/readme/filterdesk.png)
![Filter buttons and add post desktop](/src/assets/readme/filtermob.png)

There is a search field that enables users to input text and search for a key word in the post / username. There is a delay when rendering the results to minimise network requests and improve user experience. 

#### Search input
![Search](/src/assets/readme/search.png)

Infinite scrolling has been incorporated to prevent the posts being paginated. When the post count exceeds 10 the user will be able to continue scrolling and the posts will be dynamically loaded.

### Create a post

Logged in users are able to create a post if the click on the add post button on the Community page. This navigates users to form where they can select a photo from their device, give it a title and comment. Database checks run on the image selected and they are unable to upload a file that is not an image, and an image over 2Mb. Once the post has been successfully created the user is redirected back to the Community page where they can see their post. 

![Create Post](/src/assets/readme/uploadpost.png)
![Create Post Size](/src/assets/readme/filesize.png)

### Performances Page

The Performances page displays every performance contributed by users. Each listing includes the event name, participant's time, any associated comments, and the creator's identity. A search bar located at the top allows users to filter entries by username or event name. The page supports infinite scrolling for easy navigation through performances. If the logged-in user is the creator of a performance, they will have the option to remove it. Lastly, a button positioned at the top of the page enables users to initiate the creation of a new performance.

#### Performance features
![Performance List](/src/assets/readme/perlist.png)
![Performance Search](/src/assets/readme/persearch.png)
![Performance Delete option](/src/assets/readme/perdelete.png)
![Create Performance](/src/assets/readme/percreate.png)

### Create a Performance

This page facilitates the creation of a new performance entry. Users can input details regarding the event, including the date of completion, the specific event name, and their recorded performance time. To prevent users from entering future performances that haven't occurred, the system restricts the completed date to today or earlier dates only.

Upon successfully creating the performance, users are redirected back to the performance page, where their newly entered performance will ne visible. Clicking the cancel button will take users back to the performance page without saving any changes.

#### Performance form and error handling
![Create Performance](/src/assets/readme/percreatform.png)
![Create Performance Error handling](/src/assets/readme/pererrorhandle.png)

### My Plan Page

The My Plan page offers two features for the user. Firstly the user has the opportunity to create a goal for an upcoming event. If the user currently has no goal set, a create goal button will be present at the top of the page and a description informing users to create a goal to receive a training plan. 

#### Create a goal
![Create a goal](/src/assets/readme/creategoalbtn.png)

Once the user has created a goal they will be able to see their goal they have created which includes, event date, time available to train each week in hours and how long in weeks the training plan should be. Any additional content the user created will appear in the goal section. 

#### Goal display
![Goal created](/src/assets/readme/goalcreated.png)

If the goal has been created a training plan will be generated based on the criteria of the users goal. It take into consideration the weeks available and length of plan and renders the appropriate training plan for those requirements. 

#### Training Plan 
![Training Plan](/src/assets/readme/trainingplan.png)

The button at the top of the page now changes to change goal giving users the functionality to change their goal should they want to at any point. If the user does want to change their goal a prompt will appear informing them that changing their goal will reset their current training plan. 

#### Change Goal + Alert
![Change Goal](/src/assets/readme/changegoal.png)
![Change Goal message](/src/assets/readme/changewarning.png)

### Create a Goal Page

On this page, users have the capability to establish a goal for an impending event and, based on their chosen parameters, a personalized training plan will be formulated for them. Users specify the event date, weekly training hours, and desired plan duration. Additionally, they can incorporate extra notes, such as targeted completion times or event specifics.

A validation check on the event date ensures that users are not scheduling events within three weeks, during which a suitable training plan cannot be generated. Upon submitting the goal, users are redirected back to their "My Plan" page, where they can view both the goal and the corresponding training plan. Should the user choose to cancel, no information is retained, and they are taken back to the "My Plan" page.

#### Goal Form and validation
![Create Goal Form](/src/assets/readme/creategoalform.png)
![Create Goal Validation](/src/assets/readme/pererrorhandle.png)

### Profile Page

On the profile page the user can see their profile details including: Avatar photo, posts, followers, following, and all details created by the user. Below their details will be a list of all the posts the user has created for quick and easy access. They will also be able to see the popular profiles section as they could in the community page. 

#### Profile Page display
![Profile Page Desktop](/src/assets/readme/profdesk.png)
![Profile Page Mobile](/src/assets/readme/profmob.png)

The user is also able to edit their profile details, change username and change password.

#### Edit profile dropdown
![Edit Profile details](/src/assets/readme/profedit.png)

### Edit Profile Page

Here the user can edit their profile details and update them. They can select their avatar image, update first and last name, add an email address, date of birth, fitness level and gender. The user is also able to create a bio for other users to see. If the user saves the updated details they will be redirected to their profile page, if they click cancel, no info is changed and they will be redirected to profile page. 

#### Edit Profile Form
![Edit Profile Form](/src/assets/readme/profeditform.png)

### Change Username

This option allows users to change their username. This will change their username on all elements on the site. 

#### Change username Form
![Change Username Form](/src/assets/readme/unchange.png)

### Change Password

This option allows users to change their password. 
#### Change Password Form
![Change Password form](/src/assets/readme/pwchange.png)

### Other User Profile Page

If you click on the avatar of another user, the logged in user is able to view all the details set by this user and what posts they have produced. They will also be able to follow or unfollow the user. 

#### Other users Profile
![Other user profile](/src/assets/readme/ouprof.png)

## Future Features

1. Implement a rich text editor to enhance customization options for the visual presentation of training plans.
2. Introduce sophisticated filtering mechanisms for training plans to offer greater personalization, such as considering fitness levels, gender, and strengths or weaknesses in specific disciplines.
3. Facilitate integration with platforms like Starva or Garmin Connect, enabling users to share their performance data with trihub.
4. Segment each workout into discrete sessions, permitting users to leave comments post-session based on their performance.
5. Allow users to tailor the automated training plan to better align with their specific needs.

## Database Schema:

This is where you'll find my original Entity Relationship Diagram (ERD). It underwent some minor adjustments throughout the project's progression, particularly as I recognized opportunities to enhance the database with additional features and fields.

![ERD](/src/assets/readme/trihub-apiERD.png)

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
- [Google Fonts](https://fonts.google.com/) is a catalogue of free, open-source fonts. Used for typography.
- [Heroku](https://www.heroku.com) is a platform for deploying and hosting web applications.
- [Markup Validation Service](https://validator.w3.org/) is used to check code ensuring that my HTML is error-free and adheres to the latest web standards.
- [NVDA](https://www.nvaccess.org/download/), Nonvisual Desktop Access is a free and open-source, portable screen reader for Microsoft Windows.

### Testing

For the test results and solved issues, we refer to the [TESTING.md file](/TESTING.md)

#### Known and unresolved issues

- Mobile users cannot access the website's content because it requires an SSL certificate. Attempting to log in redirects them to the login page without actually logging in.
- A single desktop device encountered an issue creating a performance due to the presence of the AM/PM indicator in the time input field. This problem occurred on one desktop 
  device using Google Chrome and could not be replicated on any other device.
- When viewing someone else's profile and clicking the follow or unfollow button, the counter doesn't always update without manually refreshing the page.
- Users cannot manually add seconds to their performances; instead, seconds are automatically set to 00 once the performance is created.

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
- Scroll further down on the page, select Add Buildpack. The buildpacks will install further dependencies that are not included in the 'requirements.txt'.
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

During the creation of trihub, I leveraged an assortment of resources to guarantee the platform's strength, ease of use, and appeal. Here follows a compilation of documentation that has played a pivotal role in shaping the features and capabilities of trihub:

- [Favicon, credited to](https://www.flaticon.com/free-icons/photography") Photography icons created by Vactor area- Flaticon
- [React Multiselect dropdown](https://www.npmjs.com/package/multiselect-react-dropdown), this library is used for handling hashtags. It helps keep the codebase cleaner and more maintainable.
- [Background Video](https://www.youtube.com/watch?v=MQj9wIJb7o0), This is the source of the background video used on the home page. The youtube channel that has the origional video is TeamWass and the video is used for educational purposes in the development of this project. 
- **Bootstrap**: Used for styling and responsive design, making the site accessible on a variety of devices - [Bootstrap documentation](https://getbootstrap.com/).
- **Sources of guidance in general**:
  - This resources is only available to enrolled students at The Code Institute:
  - [CI Moments Walkthrough project](https://github.com/Code-Institute-Solutions/blog/tree/main/12_views_part_3/05_edit_delete) - The CI walkthrough repo was used and admended to suport the design and requirements of my project.
  - [Cloudinary Documentation](https://cloudinary.com/) - The documentation and code in tutorial enabled me to embed the image upload widget into my project. I used the Javascript in my images.js file. 
  - [React](https://react.dev/learn) A go to place to learn.
  - [Django Rest framework](https://www.django-rest-framework.org/) A got place to learn
  - [Django & React Tutorial](https://youtu.be/JD-age0BPVo?si=vLYojx9J_rD8ZKyU), Tech with Tim, also a go to net source for inspo.
- **Testing**: Used to learn how to create test cases
  - [Django REST framwork, Testing](https://www.django-rest-framework.org/api-guide/testing/#testingDjango)
  - [django project, testing](https://docs.djangoproject.com/en/3.2/topics/testing/)
  - [Getting started with testing in Python](https://realpython.com/python-testing/)

#### Acknowledgements

A heartfelt thank you extends to everyone who has been a part of this journey. My family's unwavering support has been indispensable, especially during the late-night hours following a day spent teaching. Without their steadfast backing, the realization of this project would not have been possible.
