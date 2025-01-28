Feature: Archive Product
    As a user, I should be able to archive products

    Scenario: As a user, I should be able to archive the added products
        Given I am on the page 'http://localhost:3000/signin'
        When I set the auth token 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Nzc5LCJtb2JpbGVfbm8iOiI3ODcxMTI2MTc3IiwiaXNfdmVyaWZpZWQiOmZhbHNlLCJpYXQiOjE2OTI2ODM4NzUsImV4cCI6MTY5Mjc3MDI3NX0.c8QkFyJ6k9MN9ZKJKeHCPTlyITlSl_hgwPbGLbcqaMk' in 'authToken' to the local storage
        Then I go to 'http://localhost:3000'
        Then I wait for 2 seconds
        Then I should see 'My Products'
        Then I wait for 5 seconds
        When I click the element 'product-0'
        Then I wait for 5 seconds
        Then I go to 'http://localhost:3000/productDetails/3aa84067-8939-4274-8faf-18c38a2d5e92'
        Then I wait for 5 seconds
        When I click the element 'more'
        Then I should see 'Archive Product'
        Then I click the element 'archiveProduct'
        Then I should see 'Archive Product'
        Then I should see 'Upgraded My Product'
        And I should see 'Lost My Product'
        Then I click the element 'Lost my product'
        When I click the element 'cancel'
        Then I wait for 5 seconds
        Then I should see 'Product Details'
        Then I wait for 5 seconds
        Then I click the element 'more'
        Then I should see 'Archive Product'
        Then I click the element 'archiveProduct'
        Then I should see 'Archive Product'
        Then I should see 'Upgraded My Product'
        And I should see 'Lost My Product'
        Then I click the element 'Lost my product'
        When I click the element 'next'
        Then I go to 'http://localhost:3000'
    # Then I should see 'Archive Product Successfully!'

    Scenario: As a user, I should be able to view all the archived products from Archives products field in the Profile page
        Given I am on the page 'http://localhost:3000/signin'
        When I set the auth token 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Nzc5LCJtb2JpbGVfbm8iOiI3ODcxMTI2MTc3IiwiaXNfdmVyaWZpZWQiOmZhbHNlLCJpYXQiOjE2OTI2ODM4NzUsImV4cCI6MTY5Mjc3MDI3NX0.c8QkFyJ6k9MN9ZKJKeHCPTlyITlSl_hgwPbGLbcqaMk' in 'authToken' to the local storage
        And I go to 'http://localhost:3000/userProfile'
        Then I wait for 5 seconds
        And I focus the element 'archivedProductsText'
        Then I should see 'Archived Products'
        When I click the element 'archivedProductsText'
        Then I wait for 5 seconds
        Then I go to 'http://localhost:3000/archivedProducts'
        Then I wait for 5 seconds
        Then I should see 'Archived Products'
        Then I should see 'My mobile'
        Then I should see 'Serial No: WERTYUIO2345678'
        And I should see 'View Documents'
        When I click the element 'info-0'
        Then I should see 'Product Specification'
        Then I should see 'Serial Number'
        Then I should see 'WERTYUIO2345678'
        Then I wait for 2 seconds
        Then I click the element 'copy'
        Then I should see 'Serial Number copied'
        Then I should see 'Product Name'
        Then I should see 'SAMSUNG S22 Ultra 5G (Burgundy, 256 GB)(12 GB RAM)'
        Then I should see 'purchased_on'
        Then I should see '2023-07-30'
        Then I should see 'Modal Number'
        Then I should see 'S22 Ultra'
        Then I should see 'Invoice Number'
        Then I should see 'Nil'
        Then I should see 'Color'
        Then I should see 'Burgundy'
        Then I should see 'Invoice Document'
        When I click the element 'view'
        Then I wait for 2 seconds
        Then I should see 'View Document'
        Then I click the element 'close1'
        # When I click the element 'download' ---
        # Then I should see 'Downloaded' ---
        When I click the element 'close'
        Then I should see 'Archived Products'
        When I click the element 'unArchiveProduct-0'
        Then I should see 'Unarchive Product?'
        And I should see 'Are you sure want to unarchive My mobile'
        When I click the element 'next'
        Then I go to 'http://localhost:3000'


    Scenario: As a user, I should be able to archive the added products with giving other reasons
        Given I am on the page 'http://localhost:3000/signin'
        When I set the auth token 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Nzc5LCJtb2JpbGVfbm8iOiI3ODcxMTI2MTc3IiwiaXNfdmVyaWZpZWQiOmZhbHNlLCJpYXQiOjE2OTI2ODM4NzUsImV4cCI6MTY5Mjc3MDI3NX0.c8QkFyJ6k9MN9ZKJKeHCPTlyITlSl_hgwPbGLbcqaMk' in 'authToken' to the local storage
        Then I go to 'http://localhost:3000'
        Then I should see 'My Products'
        Then I wait for 5 seconds
        When I click the element 'product-1'
        Then I wait for 5 seconds
        Then I go to 'http://localhost:3000/productDetails/3aa84067-8939-4274-8faf-18c38a2d5e92'
        Then I wait for 5 seconds
        When I click the element 'more'
        Then I should see 'Archive Product'
        Then I click the element 'archiveProduct'
        Then I should see 'Archive Product'
        Then I should see 'Upgraded My Product'
        And I should see 'Lost My Product'
        Then I click the element 'Lost my product'
        When I click the element 'cancel'
        Then I wait for 5 seconds
        Then I should see 'Product Details'
        Then I wait for 5 seconds
        Then I click the element 'more'
        Then I should see 'Archive Product'
        Then I click the element 'archiveProduct'
        Then I should see 'Archive Product'
        Then I should see 'Upgraded My Product'
        And I should see 'Lost My Product'
        Then The element 'next' should be disabled
        Then I should see 'Upgraded My Product'
        When I click the element 'Others'
        Then The element 'next' should be enabled
        When I should see the element 'text'
        Then I type 'My product is under service' in the 'text'
        When I click the element 'next'
        Then I go to 'http://localhost:3000'
    # Then I should see 'Archived'

    Scenario: As a user, I should be able to unarchive all the archived products from Archives products field in the Profile page
        Given I am on the page 'http://localhost:3000/signin'
        When I set the auth token 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Nzc5LCJtb2JpbGVfbm8iOiI3ODcxMTI2MTc3IiwiaXNfdmVyaWZpZWQiOmZhbHNlLCJpYXQiOjE2OTI2ODM4NzUsImV4cCI6MTY5Mjc3MDI3NX0.c8QkFyJ6k9MN9ZKJKeHCPTlyITlSl_hgwPbGLbcqaMk' in 'authToken' to the local storage
        And I go to 'http://localhost:3000/userProfile'
        Then I wait for 5 seconds
        And I focus the element 'archivedProductsText'
        Then I should see 'Archived Products'
        When I click the element 'archivedProductsText'
        Then I wait for 5 seconds
        Then I go to 'http://localhost:3000/archivedProducts'
        Then I wait for 5 seconds
        Then I should see 'Archived Products'
        Then I should see 'Hyderater'
        Then I should see 'Serial No: poiuytre2345678'
        And I should see 'View Documents'
        Then I should see the element 'info-0'
        When I click the element 'unArchiveProduct-0'
        Then I should see 'Unarchive Product?'
        And I should see 'Are you sure want to unarchive Hyderater'
        When I click the element 'cancel'
        Then I should see 'Archived Products'
        When I click the element 'unArchiveProduct-0'
        Then I should see 'Unarchive Product?'
        And I should see 'Are you sure want to unarchive Hyderater'
        When I click the element 'next'
        Then I should see 'Schedule Periodic Service Reminders'
        Then The element 'next' should be disabled
        And I should see 'Set Preferred Service Intervals'
        When I click the element '6 Months'
        Then I click the element 'plus1'
        Then I click the element 'plus1'
        Then I click the element 'plus1'
        Then I click the element 'plus1'
        Then I click the element 'minus1'
        Then I should see '3' in the 'totalServices'
        Then I click the element 'plus2'
        Then I click the element 'plus2'
        And I should see '2' in the 'availedServices'
        Then I type '01-08-2023' in the 'lastService'
        Then The element 'next' should be enabled
        Then I click the element 'next'
        Then I wait for 5 seconds
        Then I should see 'Upcoming service scheduled on'
        And I should see '1 Feb 24'
        And I should see "We'll remind you 7 days prior"
        Then I wait for 2 seconds
        # When I click the element 'close'
        Then I go to 'http://localhost:3000'
        Then I wait for 5 seconds
        And I should see 'Actions Required'
        And I should see the element 'card-1'
        And I should see 'Schedule Service Reminder'
        And I should see 'Hyderater'
        And I should see 'Schedule your periodic service reminders'
        And I should see the element 'schedule1'

