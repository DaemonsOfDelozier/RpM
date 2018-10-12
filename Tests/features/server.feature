Feature: Server

   Scenario: Initialize the Server
        # Server must be started manually.
        Given Server is running
        Then  Go to hosted page