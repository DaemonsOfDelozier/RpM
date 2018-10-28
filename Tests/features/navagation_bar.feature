Feature: Navigation Bar

   Background: We are on the hosted page
	Given Server is running
	Then  Go to hosted page

   Scenario: See the navagation bar
        Given There is a navigation bar
        Then  We want to see RPM, Explore, Route Map, Help, and Account

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
        
