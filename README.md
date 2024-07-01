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

This section is avalable when the user has created an account and logged in. The Community page shows the user posts from all users registered on the site. The user is able to see and interact with the like button for each post, and click on the the comment icon to view and leave comments. The user can see the avatar photo of the user who created the post, their name, the date in which the post was created and the title and description of the photo

#### Post page and Buttons
![Likes Button]()
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




<!-- ### About me content

This section informs the user about my journey and my goals. It sets the tone for what the website is about and what they can expect. This section has a contact me button which links to a contact for page and a return to top of page button to save the user scrolling up.

#### About me desktop
![About me desktop](/readme_imgs/aboutme/aboutmed.png)

#### About me Mobile
![About me mobile](/readme_imgs/aboutme/aboutmem.png)

#### Contact me button
![Contact me button](/readme_imgs/aboutme/contact.png)

#### Return to top button
![Return to top](/readme_imgs/aboutme/uparrow.png)

### Social media footer

The footer has links to social media where users are able to interact with me further. All the buttons are clickable and open the social media in a new window or tab.

#### Social media footer desktop
![Social media footer desktop](/readme_imgs/footer/sociald.png)

#### Social media footer mobile
![Social media footer mobile](/readme_imgs/footer/socialm.png)

### Contact me

This section offers the user the opportunity to send me a message directly. All fields are required for the user to send me a message and the user is informed when the message has been sent successfully with a Django message. These features work on all device sizes and are fully responsive. 

#### Contact me desktop
![Contact me Desktop](/readme_imgs/contact/contactfd.png)
![Contact me Desktop must complete field](/readme_imgs/contact/contactfdcomplete.png)
![Contact me Desktop django message](/readme_imgs/contact/contactfdmessage.png)

#### Contact me mobile
![Contact me Mobile](/readme_imgs/contact/contactfm.png)

### Routes page

The routes page is created by the admin and displays the different routes I have completed. Each route is displayed in a clickable card which takes them to the specific page for that route. The route card has a image of the route taken, the heading for the route and a snippet of the description of the route. It also has the date the route was posted and by who. On desktop the route cards are displayed in pairs with a max of 4 cards per page. On mobile devices the route cards will be displayed in a column with a max of 4 per page and the most recent on top. Pagination is used on both mobile and desktop to navigate between pages of the route cards and the most recent route will be displayed first. 

#### Route cards Desktop
![Route card Desktop](/readme_imgs/route/routed.png)

#### Route cards Mobile
![Route card Mobile](/readme_imgs/route/routem.png)

#### Pagination Desktop
![Pagination Desktop](/readme_imgs/route/paginationd.png)

#### Pagination Mobile
![Pagination Desktop](/readme_imgs/route/paginationm.png)

### Route detail page

When the user selects a route and clicks on the card they are taken to the routes detail page. This page highlights the route title at the top and below on desktop has a fully interactive os map which has been imported from Outdoor active with the route I have taken. This map can be zoomed and tracked around to the users desire. On mobile and overlaying the map on desktop there is a brief summary of the route statistics on the map with a button offering the user to learn more. (Not there is an interactive map on mobile when the user clicks the learn more).

#### Interactive map
![Interactive map](/readme_imgs/Routedetail/mapd.png)

#### Interactive map zoomed
![Interactive map zoomed](/readme_imgs/Routedetail/mapdz.png)

Once clicked a pop up will appear with all the details and statistics of the hike. It will give the user a larger interactive map, a 3D generated video of the route taken and statistics. It will also give the user the opportunity to download the GPX, KML, FIT file of my route so they are able to navigate from it from any navigation device they may have. This pop up can be operated by clicking the cross on the top right corner. 

#### Learn more page
![Learn More](/readme_imgs/Routedetail/mapdetail.png)

#### deeper statistics
![statistics](/readme_imgs/Routedetail/mapstats.png)

#### Download navigation files
![Download file](/readme_imgs/Routedetail/mapdownlaod.png)
![Download file](/readme_imgs/Routedetail/mapdownload2.png)

#### Close popup
![Close popup](/readme_imgs/Routedetail/mapdexit.png)

#### Difficulty rating

Back on the route detail page there is a difficulty rating where font awesome icons have been used and a score is given for the difficulty. 
![Difficulty Rating](/readme_imgs/Routedetail/routedifficulty.png)

#### Like button and counter

There is a like button and like counter. The like button can only be interacted with if the user is logged in. 
![Like button](/readme_imgs/Routedetail/like%20button.png)
![Like button liked](/readme_imgs/Routedetail/likebuttonliked.png)
![Like button must be logged in](/readme_imgs/Routedetail/likebuttonneedlogin.png)

#### Hike description
There is a description of my experiences on this particular hike. 
![Hike Description](/readme_imgs/Routedetail/routedescription.png)

#### 3D Hike Video

There is an embedded youtube video of a 3D representation of my hike. 
![3D Hike Video](/readme_imgs/Routedetail/3dvideo.png)
![3D Hike Video](/readme_imgs/Routedetail/3dvideoplaying.png)

#### Comment form

There is a comment form where the user is able to leave a message about this particular route. The user must be logged in to comment. 
![Comment form](/readme_imgs/Routedetail/commentform.png)
![Comment message accepted](/readme_imgs/Routedetail/commentwaiting.png)
![Comment must be logged in](/readme_imgs/Routedetail/commentformneedlogin.png)

When commented the user will receive a message saying their comment is awaiting approval and they will see a faded message. They are able to edit this message and / or delete the message. When the select edit the original message will appear in the body and the button will change to update. Django messages will inform the user when these tasks have been completed successfully. 

![Comment Edit](/readme_imgs/Routedetail/Commenteditbody.png)
![Comment Edit message](/readme_imgs/Routedetail/editcomment.png)
![Comment Delete popup](/readme_imgs/Routedetail/deletecomment.png)
![Comment Delete message](/readme_imgs/Routedetail/deleted%20message.png)

#### Message counter and Approved messages

There is a message counter that shows how many messages there are on this route of which have been approved. Approved messages appear in black text and detail the author and time posted. 
![Comment Counter and approved](/readme_imgs/Routedetail/commentcounterapproved.png)

### Gallery

The gallery section displays images uploaded by the site admin or the users. The images appear in cards with a preview of the image at the top of the card and the heading and comment below it. The cards also display when the image was posted and by who. The image cards are clickable to reveal more detail. On desktop the cards are displayed in pairs with a maximum of 4 per page. On mobile the images are displayed in a column with a max of 4 per page. The page has pagination to navigate between the gallery pages. 

#### Image cards Desktop
![Image gallery desktop](/readme_imgs/gallery/galleryd.png)

#### Image cards Mobile
![Image gallery mobile](/readme_imgs/gallery/gallerym.png)

#### Pagination
![Pagination](/readme_imgs/gallery/gallerypagi.png)

#### Gallery image detail

On clicking on the image card the user will be taken to the specific picture page. On desktop the image will be larger and in more detail. Just like on the route page, logged in users will be able to like the image, see the like counter and also comment on the image. On mobile devices the user will be able to like and comment on the image but it will not display larger due to screen size. 

#### Larger Image
![Larger Image](/readme_imgs/gallery/gallerylarge.png)

#### Like button
![Like button](/readme_imgs/gallery/likebuttongallery.png)

#### Comment Section
![Comment section](/readme_imgs/gallery/commentgallery.png)

#### Upload a photo

On the gallery page logged in users are able to upload photos. The upload photo uses a JavaScript widget from cloudinary which presents users with many ways to upload the photo. The widget also takes care of image formatting but only allows users to upload photos less than 10mb. The users have to then give the photo a title and brief description which will be displayed on the gallery card and detail. These are required fields. Once submitted the users are presented with a message informing them they the image has been submitted and waiting approval. 

#### Upload image form
![Upload Image](/readme_imgs/gallery/uploadformd.png)

#### Upload image widget
Desktop:
![upload widget desktop](/readme_imgs/gallery/widget.png)

Mobile:
![upload widget mobile](/readme_imgs/gallery/widgetm.png)

#### Image uploading
![Uploading image](/readme_imgs/gallery/widgetupload.png)

#### Image input fields
![Upload input field](/readme_imgs/gallery/uploadinput.png)

#### Image message success
![Upload Success](/readme_imgs/gallery/uploadsuccess.png)

### Wainwrights

The wainwrights page is a simple page that just details all the Wainwrights I have completed. It comprises of cards 4 per row on desktop and stacked vertically on mobile. Each card has the image of the Wainright and a description of the Wainright with its height. The card also identifies if I have completed this Wainwright or not. These cards are not clickable. 

#### Wainwrights Desktop
![Wainwrights desktop](/readme_imgs/wainwrights/wainwrightsd.png)

#### Wainwrights Mobile
![Wainwrights mobile](/readme_imgs/wainwrights/wainwrightsm.png)

### Login, Logout, Register

The user login, logout and register page and styled for the purpose of the website but have all the same functionality that Django Auth brings. Users are required to create an account with a password that meets the minimum requirements. All fields need to be completed with the exception of the email field. The Logout form logs the user out of that session. The login for asks for the users username and password. After successfully logging in, logging out or registering the users are taken to the about page.

#### Login Desktop
![Login Page desktop](/readme_imgs/user/logind.png)

#### Login Mobile
![Login Page mobile](/readme_imgs/user/loginm.png)

#### Logout Desktop
![Logout Desktop](/readme_imgs/user/logoutd.png)

#### Log out Mobile
![log out mobile](/readme_imgs/user/logoutm.png)

#### Register Desktop
![Register Desktop](/readme_imgs/user/registerd.png)

#### Register mobile
![Register mobile](/readme_imgs/user/registerm.png)

### Admin Control

The Django Admin control enables the admin to approve images, and comments as well as creating routes and updating the carousel images on the about page easily. Filter methods have been added to easily see posts and actions have been added to enable to admin to approve or delete multiple posts quickly and easily. 

#### Admin Control
![Admin Control](/readme_imgs/admin/admin%20control.png)

#### Admin filters
![Admin filters](/readme_imgs/admin/adminfilters.png)

#### Admin actions
![Admin Actions](/readme_imgs/admin/adminactions.png)

##  Future Features:

1.  Enable users to post their own routes that people can comment on.
2.  Allow users to reply to specific comments in the comments section rather than them just appearing in a list.
3.  Utilize the flagged function I put into the database so if the user deletes their account, all posts are deleted that are flagged for sensitive information but any other comments remain but only the username is removed. This will enable consistency when following convocations. 
4.  All the wainwrights will be detailed in the wainwrights section with a key at the top of the page to go directly to the wainwright. 
5.  The wainwright cards are clickable to reveal more information, map grid ref and interactive map.

##  Design:

The design of the website was simple contrast of a dark black background and lighter white text. This enabled the cards to stand out. 

### White Text: rgba(255, 255, 255, 0.692);
![Text colour](/readme_imgs/Color/text.png)

### Black: Black
![Background](/readme_imgs/Color/black.png)

### Hover: rgba(255, 255, 255, 0.2);
![Hover Colour](/readme_imgs/Color/hover.png)

### Card Background colour: rgba(255, 255, 255, 0.879);
![Card background](/readme_imgs/Color/card.png)

##  Wireframes:

The overall structure of the website was kept from initial inception of wireframes to the result of the website on submission for assessment. Slight alterations were made to the layout of the about page and wainwrights page. These alterations were made to improve the feel of the website and UX. All initial wireframes can be seen below and were created using Adobe Xd. 

### About page

#### Desktop
![About Desktop](/readme_imgs/wireframes/aboutd.png)

#### Mobile
![About Mobile](/readme_imgs/wireframes/aboutm.png)

### Gallery page

#### Desktop
![Gallery Desktop](/readme_imgs/wireframes/gallery.png)

#### Mobile
![Gallery Mobile](/readme_imgs/wireframes/gallerym.png)

### Routes page

#### Desktop
![Routes Desktop](/readme_imgs/wireframes/Routes.png)

#### Mobile
![Routes Mobile](/readme_imgs/wireframes/Routesm.png)

### Routes detail

#### Desktop
![Routes detail Desktop](/readme_imgs/wireframes/Routedetail.png)

#### Mobile
![Routes detail Mobile](/readme_imgs/wireframes/routesdetailm.png)

### Gallery Detail

#### Desktop
![Gallery Detail Desktop](/readme_imgs/wireframes/imagedetail.png)

#### Mobile
![Gallery Detail Mobile](/readme_imgs/wireframes/gallerydetailm.png)

##  Database Schema:

Here you can find my initial ERD (Entity Relationship Diagram). This got modified significantly as my project developed and I realised I had the opportunity to develop more features and fields to my databases.

![ERD](/readme_imgs/ER%20Diagram.jpeg)

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
