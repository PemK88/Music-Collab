# Music Collab

## Deployed Website Link
https://musiccollabb.herokuapp.com/

* username: user
* password: user


## Site Navigation Instructions

### Setting up the project
After cloning the repository run the following commands
```
npm install
node server.js
```

## Login
The first page you are directed to is the login page.
You must enter the credentials below to view the user pages 
* username: user
* password: user

You must enter the credentials below to view the administrator pages 
* username: admin
* password: admin

# User

### Explore

The explore page shows trending and recently uploaded works. You can also view works under a specific category by clicking on the category of interest.

By clicking on the search box you can search and select multiple works. When you click the search button these works will be displayed and you can click on their title to go to their cover page

### Profile


As you are logged in, you will be directed to the internal view of the profile page.

By clicking the edit button you can modify your biography. The downloads section shows the works that you've downloaded. These are the works you select from when stating the works you've referenced/featured. The works section shows the works you've made.

With the temporary external view button, you can view the external profile version. The biography cannot be edited, and you can see the user’s interests and works. You can follow or unfollow them using the follow button. You can also report them but must give a reason. For example, they may not be abiding by the site's rule of referencing works that are featured in their work.

On both views you can see a list of followers and followings of the user by clicking on their respective headings in the sidebar. Clicking on the username will direct you to their profile page.

In the Internal profile view, you can access the upload work page. Here you can enter the details for the work you want to upload. You can select an audio and image file. You must reference works that you feature using the section at the bottom of the page. You select the reference work from the options, which are your downloaded works and you can add a description of how the work was used. Using the + button, you can add a reference and you can use the - button to remove a reference. You must add a second reference before you have the option to remove one. Clicking the upload button clears all inputs allowing you to upload another work.

You can also access the profile settings page. Here you can edit your profile name, email, and interests but you cannot edit your username. You can change your profile photo as well as your password. Inputting an old password that is not "user" will bring up an error alert, as well as passwords that don't match.

### Cover Page

The cover page has both an internal and external view that can be toggled using the temporary button. In both views you can play the work, view its description and go to its feature history page.

In the external view, you can like or unlike the work, download it, report it, and leave comments.

In the internal view, any comments you leave are highlighted and you can delete them using the button located within the comment box (may need to scroll to see it depending on your screen size). Clicking the edit button allows you to edit the post's content. By cancelling or saving the changes, you will be directed back to the cover page.

### Features

Using the feature button on a work's cover page, you can see all the works that it features (parent works) and works that it is featured in (children works). The works are displayed like music notes on a music sheet and you can scroll through each section. By clicking on a music note, a card pops up with the work's title and artist, as well as a description of how it was used. By clicking on the title, you will be directed to the work's cover page. Clicking on the title of the work in the "Feature History" title will take you back to its cover page.

### Request Feature

In order for users to download other user's work, they must be approved by the owner of the work.
Users can send request to another user, if the user is approved, then the user can download the song. Furthermore they will be able to communicate with each other in the chat sections of the request pages.

### Logout
Clicking the logout button will direct you to the login page.


# Admin 
User can navigate through pages using the navigation bar:

- Profile

    When first logged in as admin, it directs to admin profile.
    The user will able to see the past activites they have performed, and any new activity(deleting, adding, archiving, unarchiving) will be recorded to this page. Through the settings on side, admin will be able to edit their information.


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
    - View/Edit cover page for the post
    - Edit post information

- Reports
    Page for managing reports in the system
    - Search specific reports by POSTID if post, USERNAME if user on searchbar
    - Delete reports (Can delete multiple users by selecting, and clicking DELETE SELECTED)
    - Clicking on reported will take the admin user to reported page
    - Reports can be archived, which will move the report to archived reports when archived
        - You can go to archived reports buy the button on the bottom left
        - Archived report page is similar, but unarchiving will move report back to report page

- Explore
    Admin has access to same explore page as user but without the liked posts

- Log Out
    Redirects back to Log In Page
