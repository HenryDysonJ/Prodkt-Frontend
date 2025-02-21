Feature: Admin Portal
	Product
	Scenario: As an admin I should be able to view & edit Products Management and add product
		Given I am on the page 'http://localhost:3000/login'
		When I set the auth token 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODkwLCJtb2JpbGVfbm8iOm51bGwsImlzX3ZlcmlmaWVkIjpmYWxzZSwiaWF0IjoxNzA0MTc2MzQ0LCJleHAiOjE3MDQ3ODExNDR9.64QaI5pZg0Tma3nESBOfK82_IM2UwHS4o8A_7PM1iEY' in 'authToken' to the local storage
		Then I go to 'http://localhost:3000/user'
		When I click the element 'navbar1'
		Then I click the element 'subNav0'
		Then I wait for 3 seconds
		Then I should see 'Insights'
		And I should see 'Total no. of categories'
		Then I should see '41'
		And I should see 'Total no. of products added'
		Then I should see '38715'
		Then I should see 'Products Management (38715)'
		Then I should see 'List of Products'
		And I should see 'New Requests'
		# Then The value of the attribute 'List Of Products' in the element 'option1' should be 'true'
		Then I click the element 'search'
		Then I type 'PHILIPS' in the 'search'
		Then I wait for 2 seconds
		Then I should see 'S.No'
		And I should see '3'
		And I should see 'Category'
		Then I should see ''
		And I should see 'Brand'
		And I should see 'PHILIPS'
		Then I should see 'Model'
		And I should see 'E209'
		And I should see 'No of Users Added'
		And I should see '0'
		Then I should see 'Action'
		Then I click the element 'more'
		And I should see 'View'
		Then I click the element 'viewProduct'
		And I should see 'Products Details'
		Then I should see 'PHILIPS Xenium E209(Black)'
		And I should see 'Brand Name'
		And I should see 'PHILIPS'
		Then I should see 'Model Number'
		And I should see 'E209'
		Then I should see 'RAM'
		And I should see '32 MB'
		Then I should see 'Storage'
		And I should see '32 MB'
		Then I should see 'Warranty Details'
		And I should see ''
		When I click the element 'copy'
		When I click the element 'close'
		Then I dont want to see 'Product Details'
		When I click the element 'filter'
		Then I should see 'Filter By'
		And I click the element 'category_value'
		When I type 'mobile' in the 'category_value'
		Then I press the key 'ArrowDown'
		Then I press the key 'Enter'
		Then I wait for 2 seconds
		Then I focus the element 'brand_value'
		When I type 'Nokia' in the 'brand_value'
		Then I press the key 'ArrowDown'
		Then I press the key 'Enter'
		Then I click the element 'reset'
		Then I dont want to see 'Mobile' in the 'category_value'
		And I dont want to see 'Nokia' in the 'brand_value'
		Then I wait for 2 seconds
		Then I click the element 'category_value'
		When I type 'mobile' in the 'category_value'
		Then I press the key 'ArrowDown'
		Then I press the key 'Enter'
		Then I focus the element 'brand_value'
		When I type 'Nokia' in the 'brand_value'
		Then I press the key 'ArrowDown'
		Then I press the key 'Enter'
		Then I click the 'Apply Filter'
		Then I wait for 2 seconds
		Then I dont want to see 'Filter by'
		Then I click the element 'filter'
		Then I click the element 'close'
		And I dont want to see 'Filter by'
