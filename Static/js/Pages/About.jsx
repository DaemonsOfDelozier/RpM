import React from "react";

export default class About extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="about">
                
                <img src="../dist/css/img/logo-2.png"/>

                <h1>Welcome</h1>
                <p>Routes Per Mile is a website dedicated to giving you an unparalleled way to share routes with other drivers. We want you to have quick and easy access to the best drives near you.</p>
                <p>The members of the company are all hand picked experts in their fields, chosen for their dedication and moxie. They have each written a small paragraph about themselves. Enjoy.</p>

                <h3>Roger Cooper - President</h3>
                <p>Specially selected by Gregory Delozier to head this esteemed company. Has knowledge of basic leadership principles and use of Google. Wrote many documents, presented updates, and made the best burndown chart you’ll ever see.</p>

                <h3>Tyler Wells - Project Manager</h3>
                <p>Assigned issues and managed sprints. Helped create concept and desired functionality. Made sure things were getting done.</p>

                <h3>Daniel Loftus - Marketing Analysis and Designer</h3>
                <p>Designed Routes Per Mile logo, layout and site pages. Created and manage social media pages for the company letting others learn and experience our site while it has been in development. Personally managed to get a twitter account suspended for inactivity.</p>

                <h3>Nadia Karina Camacho Cabrera- Requirements analyst</h3>
                <p>(With help of everybody) decided the functionality of RpM. Looked over test code. Made lovely stick figure use case model so that anyone could understand how to use the website instead of just visiting the website.</p>

                <h3>Clay James - Software Engineer</h3>
                <p>Implemented accounts with Google Sign In and Flask-login.  Developed the home page and posts back end.</p>

                <h3>Hayden Moore - Software Engineer</h3>
                <p>Implemented a responsive collapsing menu.  Helped create communication between the database and the “/explore” page.  Implemented and setup the “/new-post” page, allowing a user to submit a new route to the database.</p>

                <h3>Justin Mckenna - Testing Engineer</h3>
                <p>Develop test cases and scenarios for components and features derived from the initial requirements. Set up continuous integration through Travis CI and Sauce Labs; used this set up to report bugs and issues to the development team.</p>

                <h3>Max Kotlan - Testing Engineer</h3>
                <p>Use test driven development to verify our features meet our requirements. Develop tests using behave and pytest python libraries. Makes sure our requirements are valid.</p>

                <h3>Josh Dotson - Operations Engineer</h3>
                <p>Chief researcher of setting up things on pythonanywhere, senior SSL certificate acquirer, head of buying DNS names and making them do DNS things, master of typing “git pull,” and pressing the enter button.</p>

            </div>
        );
    }
}