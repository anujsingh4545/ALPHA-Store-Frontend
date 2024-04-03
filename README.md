# Db Schema Overview 


## User Collection
| _id                  | name       | email             | password    | loginMedium | phone       | Role  | SellerProducts | Addresses | MerchantData | Wishlists | Orders | OrderStatusList |
|----------------------|------------|-------------------|-------------|-------------|-------------|-------|----------------|-----------|--------------|-----------|--------|-----------------|
| ObjectId("user1_id") | John Doe   | john@example.com  | hashed_pass | email       | 1234567890  | User  | [...]          | [...]     | [...]        | [...]     | [...]  | [...]           |
| ObjectId("user2_id") | Jane Smith | jane@example.com  | hashed_pass | email       | 9876543210  | Admin | [...]          | [...]     | [...]        | [...]     | [...]  | [...]           |

## OrderStatus Collection
| _id                        | Order                | ordersId           | User             | userId           |
|----------------------------|----------------------|--------------------|------------------|------------------|
| ObjectId("orderstatus1_id")| ObjectId("order1")   | ObjectId("user1")  | ObjectId("user1")| ObjectId("user1")|
| ObjectId("orderstatus2_id")| ObjectId("order2")   | ObjectId("user2")  | ObjectId("user2")| ObjectId("user2")|

## StoreInfo Collection
| _id                        | CategoryList         | BrandList           | MerchantList        | RequestData        | AllProducts        |
|----------------------------|----------------------|---------------------|---------------------|--------------------|--------------------|
| ObjectId("storeinfo1_id") | [ObjectId("category1"), ObjectId("category2")] | [ObjectId("brand1"), ObjectId("brand2")] | [ObjectId("merchant1"), ObjectId("merchant2")] | [ObjectId("request1"), ObjectId("request2")] | [ObjectId("prod1"), ObjectId("prod2")] |


## Orders Collection
| _id                      | Date                 | User                | userId              | OrderItemsList     | Subtotal | Sales |
|--------------------------|----------------------|---------------------|---------------------|--------------------|----------|-------|
| ObjectId("order1_id")   | 2024-04-03 12:00:00  | ObjectId("user1")   | ObjectId("user1")   | [ObjectId("orderprod1")] | 100      | 10    |
| ObjectId("order2_id")   | 2024-04-02 10:00:00  | ObjectId("user2")   | ObjectId("user2")   | [ObjectId("orderprod2")] | 80       | 8     |


## OrderProducts Collection
| _id                         | ProductId           | Pname         | Pprice | Status        | Quantity | TotalPrice | Orders          |
|-----------------------------|---------------------|---------------|--------|---------------|----------|------------|-----------------|
| ObjectId("orderprod1_id")  | ObjectId("prod1")   | Product 1     | 50     | Not Processed| 2        | 100        | ObjectId("order1")|
| ObjectId("orderprod2_id")  | ObjectId("prod2")   | Product 2     | 40     | Not Processed| 2        | 80         | ObjectId("order2")|


## Address Collection
| _id                         | address        | City       | State | Country | ZipCode | defaultAddress | User          |
|-----------------------------|----------------|------------|-------|---------|---------|----------------|---------------|
| ObjectId("address1_id")     | 123 Main St    | City       | State | India   | 123456  | true           | ObjectId("user1")|
| ObjectId("address2_id")     | 456 Oak St     | Town       | State | India   | 654321  | false          | ObjectId("user2")|

## Wishlist Collection
| _id                          | ProductId           | User              |
|------------------------------|---------------------|-------------------|
| ObjectId("wishlist1_id")     | ObjectId("prod1")   | ObjectId("user1")|
| ObjectId("wishlist2_id")     | ObjectId("prod2")   | ObjectId("user2")|

## Product Collection
| _id                         | name        | Description  | Quantity | price | Brand     | Category | ProductUrl        | active | StoreInfo     | User          |
|-----------------------------|-------------|--------------|----------|-------|-----------|----------|-------------------|--------|---------------|---------------|
| ObjectId("prod1_id")        | Product 1   | Description1 | 10       | 50    | Brand 1   | Category1| http://example.com/prod1 | true   | ObjectId("storeinfo1")| ObjectId("user1")|
| ObjectId("prod2_id")        | Product 2   | Description2 | 20       | 40    | Brand 2   | Category2| http://example.com/prod2 | true   | ObjectId("storeinfo1")| ObjectId("user2")|

## CategoryData Collection
| _id                         | name       | Description   | active | StoreInfo   |
|-----------------------------|------------|---------------|--------|-------------|
| ObjectId("category1_id")    | Category1  | Description1  | true   | ObjectId("storeinfo1")|
| ObjectId("category2_id")    | Category2  | Description2  | true   | ObjectId("storeinfo1")|

## BrandData Collection
| _id                         | name       | Description   | active | StoreInfo   |
|-----------------------------|------------|---------------|--------|-------------|
| ObjectId("brand1_id")      | Brand 1    | Description1  | true   | ObjectId("storeinfo1")|
| ObjectId("brand2_id")      | Brand 2    | Description2  | true   | ObjectId("storeinfo1")|

## MerchantData Collection
| _id                         | UserId            | name        | email               | phone      | companyName     | CompanyDescription  | StoreInfo     |
|-----------------------------|-------------------|-------------|---------------------|------------|-----------------|---------------------|---------------|
| ObjectId("merchant1_id")   | ObjectId("user1") | Merchant 1  | merchant1@example.com | 1234567890| Company 1       | Description1        | ObjectId("storeinfo1")|
| ObjectId("merchant2_id")   | ObjectId("user2") | Merchant 2  | merchant2@example.com | 9876543210| Company 2       | Description2        | ObjectId("storeinfo1")|

## RequestData Collection
| _id                          | name        | email             | phone       | companyName  | CompanyDescription | StoreInfo   |
|------------------------------|-------------|-------------------|-------------|--------------|--------------------|-------------|
| ObjectId("request1_id")      | Requester 1 | request1@example.com | 1234567890 | Request Co.  | Description1       | ObjectId("storeinfo1")|
| ObjectId("request2_id")      | Requester 2 | request2@example.com | 9876543210 | Request Co.  | Description2       | ObjectId("storeinfo1")|
