Feature: Admin Portal
    Login

    Scenario: As an admin, I should be able to login to admin page
    	Given I am on the page 'http://localhost:3001/login'
        Then I wait for 3 seconds
    	Then I should see 'Sign In'
    	Then I should see 'Sign In with your email and password'
    	Then I click the 'Sign In'
    	Then I should see 'Please enter the Password'
    	Then I should see 'Please enter the mail'
    	When I type 'suriya@2323' in the 'email'
    	When I type '12345' in the 'password'
        Then I click the 'Sign In'
    	Then I should see 'Please enter the valid mail'
    	Then I should see 'Password must be at least 8 characters long.'
        Then I focus the element 'email'
    	And I clear the field 'email'
    	Then I type 'suriya@crayond.co' in the 'email'
        Then I focus the element 'password'
    	And I clear the field 'password'
    	Then I type '123456789@' in the 'password'
    	When I click the 'Sign In'
        Then I wait for 3 seconds
        Then I should see 'Sign In successfully'

    Scenario: As an admin, I should be able to login if I forgot the password
        Given I am on the page 'http://localhost:3001/login'
        Then I wait for 3 seconds
        Then I should see 'Sign In'
        When I click the element 'forgotPassword'
        Then I wait for 1 seconds
        Then I should see 'Forgot Password'
        And I should see 'Enter your to registered email address to reset your password'
        Then I type 'suriya@caryond' in the 'emailId'
        Then I click the 'Send OTP'
        Then I should see 'Please enter the valid mail'
        Then I focus the element 'emailId'
        And I clear the field 'emailId'
        And I type 'suriya@crayond.co' in the 'emailId'
        Then I click the 'Send OTP'
        And I wait for the network response 'https://dev-api.prodkt.co/api/v1/auth/forgot_password'
        Then I should see 'Reset Link Send to the Email'
        Then I wait for 1 seconds
        Then I should see 'Link Sent'
        And I should see 'Your password reset link has been sent to your email address'

