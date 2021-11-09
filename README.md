# Music Colab - team63

## Important Notes
* Files written by Bessey are marked at the top with the comment "Put together by Bessey"
* The only components used from his work in the final submission is the navigation bar

## Third Party Libraries
* react-h5-audio-player (https://www.npmjs.com/package/react-h5-audio-player)
* multiselect-react-dropdown (https://www.npmjs.com/package/multiselect-react-dropdown)


## Site Navigation Instructions

### Setting up the project
After cloning trhe repository runn the following commands
```
npm install
npm start
```

### Login
The first page you are directed to is the login page.
You must the credentials below to view the user pages 
* username: user
* password: user

You must the credentials below to view the administrator pages 
* username: admin
* password: admin

**Do not load the page after login!** The admin and user navigations bars are different, and the correct bar is displayed based on the type of user determined, which done through logging in.

There is also a link to the sign up page which allows you to create and account. However, the account credentials cannot be used to login during this phase of the project.


 team63

### Admin Functionality 
User can navigate through pages using the navigation bar:

- Profile
    When first logged in as admin, it directs to admin profile.
    The user will able to see the past activites they have performed, and any new activity(deleting, adding, archiving, unarchiving) will be recorded to this page. Through the settings on side, admin will be able to edit their information.

**All the links to the page are hardcoded** In the later phase, it will direct to the corresponding user, post, and report 
- Users
    Page for managing users in the system
    - Search specific users by their USERNAME on searchbar
    - Create new admin account(Admin Account can only be added by another admin) 
    - Delete user accounts (Can delete multiple users by selecting, and clicking DELETE SELECTED)
    - View user profile
    - Edit user information

- Posts
    Page for managing posts in the system
    - Search specific posts by their TITLE on searchbar
    - Delete post (Can delete multiple users by selecting, and clicking DELETE SELECTED)
    - View cover page for the post
    - Edit post information

- Reports
    Page for managing reports in the system
    - Search specific reports by POSTID if post, USERNAME if user on searchbar
    - Delete reports (Can delete multiple users by selecting, and clicking DELETE SELECTED)
    - View report detail
        - In report view page, clicking reported will link to the profile or post cover page
    - Reports can be archived, which will move the report to archived reports when archived
        - You can go to archived reports buy the button on the bottom left
        - Archived report page is similar, but unarchiving will move report back to report page

- Explore
    Admin has access to same explore page as user

- Log Out
    Redirects back to Log In Page
