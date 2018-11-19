Feature: google sign in

   Scenario: Sign in and log out successfully
        Given we click on google sign in button
        When  we sign in to google
	Then  we should see our name on the nav bar
	And   we should be able to log out afterwards  

   Scenario: Sign in and out on a mobile device
        Given we click on google sign in button on mobile
        When  we sign in to google on mobile
        Then  we should see our name on the mobile nav bar
        And   we should be able to log out on mobile