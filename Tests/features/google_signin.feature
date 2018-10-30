Feature: google sign in

   Scenario: Sign in and log out successfully
        Given we click on google sign in button
        When  we sign in to google
	Then  we should see our name on the nav bar
	And   we should be able to log out afterwards  
