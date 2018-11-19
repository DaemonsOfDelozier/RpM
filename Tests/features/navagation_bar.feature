Feature: Navigation Bar

   Scenario: See the navagation bar and go to every page on desktop
        Given There is a navigation bar
        Then  We want to see RPM, Explore, Route Map, About, and Account
		  And   Go to every page on desktop

   Scenario: See the navigation bar and go to every page on mobile
		Given We are emulating a mobile device
		When  We click the menu button
		Then  The navigation menu will expand
		And   Go to every page on mobile