Feature: Account Page

   Scenario: Name shows on account page
        Given We go to the account page, and we are signed in
        Then  We can see our name
        And   We can edit and view our bio

    Scenario: Look at someone elses account
        Given We are signed in on the explore page
        Then  We can click on someones name and see their profile