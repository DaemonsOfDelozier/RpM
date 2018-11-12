Feature: Navigation Bar

   Scenario: See the navagation bar
        Given There is a navigation bar
        Then  We want to see RPM, Explore, Route Map, Help, and Account

   Scenario: On a mobile device #testing responsiveness
		Given We are emulating a mobile device
		When  We click the menu button
		Then  The navigation menu will expand
	
#Will implement these scenarios as each additional page is made
   #Scenario: Go to Homepage(RPM)
	#Given We click RPM
	#Then  We should be taken to the homepage

   #Scenario: Go to Explore
	#Given We click Explore
	#Then  We should be taken to the Explore page

   #Scenario: Go to Route Map
	#Given We click Route Map
	#Then  We should be taken to the Route Map page

   #Scenario: Go to Help
	#Given We click Help
	#Then  We should be taken to the Help page

   #Scenario: Go to Account
	#Given We click Account
	#Then  We should be taken to the Account page