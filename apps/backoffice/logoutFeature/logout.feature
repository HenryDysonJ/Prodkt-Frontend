Feature: Admin Portal
	Category

	Scenario: As an admin,  I should be able to able to logout
		Given I am on the page 'http://localhost:3000/login'
		Then I set the auth token 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODkwLCJtb2JpbGVfbm8iOm51bGwsImlzX3ZlcmlmaWVkIjpmYWxzZSwiaWF0IjoxNzA0MTc2MzQ0LCJleHAiOjE3MDQ3ODExNDR9.64QaI5pZg0Tma3nESBOfK82_IM2UwHS4o8A_7PM1iEY' in 'authToken' to the local storage
		And I go to 'http://localhost:3000/user'
		Then I click the element 'profileMenu'
		Then I should see 'Logout'
		When I click the element 'logout'
		Then I go to 'http://localhost:3000/login'
