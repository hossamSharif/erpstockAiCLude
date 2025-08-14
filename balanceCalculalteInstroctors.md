 now i wanna add more funtionality to the page showin the balance of الحساب  and المصدر when user sselect the accounts . let me explain to you how the back     
   end work and how the entrie account save so you can calculate the current balance of the selected account . i have a table name journal  in my sql database   
   @gvstechn_erp.sql in journal i save the main information of the entry here is my journal structure  `journal` (                                               
     `j_id` int NOT NULL,                                                                                                                                        
     `j_ref` varchar(100) DEFAULT NULL,                                                                                                                          
     `j_details` text,                                                                                                                                           
     `j_type` text,                                                                                                                                              
     `invo_ref` varchar(100) DEFAULT NULL,                                                                                                                       
     `j_desc` text,                                                                                                                                              
     `j_date` date DEFAULT NULL,                                                                                                                                 
     `store_id` int DEFAULT NULL,                                                                                                                                
     `user_id` int DEFAULT NULL,                                                                                                                                 
     `j_pay` decimal(15,2) DEFAULT NULL,                                                                                                                         
     `standard_details` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci,                                                                                   
     `yearId` int DEFAULT NULL                                                                                                                                   
   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 . also i have table name jdetails_from ; i use it to save the debit value in the column debit and other info of        
   debit account in the  the structure of `jdetails_from` (                                                                                         
     `id` int NOT NULL,                                                                                                                                          
     `j_id` int DEFAULT NULL,                                                                                                                                    
     `j_ref` varchar(100) DEFAULT NULL,                                                                                                                          
     `ac_id` int DEFAULT NULL,                                                                                                                                   
     `credit` decimal(15,2) DEFAULT NULL,                                                                                                                        
     `debit` decimal(15,2) DEFAULT NULL,                                                                                                                         
     `j_desc` text,                                                                                                                                              
     `j_type` text,                                                                                                                                              
     `store_id` int NOT NULL,                                                                                                                                    
     `yearId` int DEFAULT NULL                                                                                                                                   
   ) also i have another table jdetails_to to save the credit account value of antry in the credit coulmn . i used to use j_ref to get journal and the joined jdetails_from and jdetails_to

 . the accounts info is saved in the sub_accounts table
   structure of `sub_accounts` (
  `id` int NOT NULL,
  `ac_id` int NOT NULL,
  `sub_name` text NOT NULL,
  `sub_type` varchar(50) NOT NULL,
  `sub_balance` decimal(10,2) DEFAULT NULL,
  `sub_code` varchar(50) NOT NULL,
  `cat_id` int DEFAULT NULL,
  `cat_name` varchar(100) DEFAULT NULL,
  `store_id` int NOT NULL,
  `phone` text,
  `address` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;  note that the accounts of the customers and suppleirs is also save in this table  in sub_accounts tabl
customers accounts have ac_id = 1 and suppleirs have ac_id = 2 . i used the id in sub account to get the related record from jdetails_from and j_details_to table the id in sub_accounts tablee = ac_id in jdetails_from and the same way in jdetails_to 
so to calculate the balance of any account you can use the total of debit feild in the jdetails_from and total of credit feild in jdetail to and sub_balance(oppening balance) from sub_accounts ; this way works with all accounts but not customers 
and suppleirs accounts becase the entries of salse and purchaces not saved to journal and jdetails_from and j_details_to , so in case the account is for 
customer (ac_id = 1) or suppleirs (ac_id = 2) in sub_accounts table , you have to get all invoiced saved to pay (sales) tables and perch(purchases) table to calculate the totals amount by getting the values of 
tot_pr and pay  and changee feilds and also concider the discount note that cust_feild in the pay table and purchase table is use to joind with sub_accounts where the cust_id = id in sub_account_table 
the structure of `perch` (
  `pay_id` int NOT NULL,
  `pay_ref` varchar(50) DEFAULT NULL,
  `store_id` int DEFAULT NULL,
  `tot_pr` decimal(20,0) DEFAULT NULL,
  `pay` decimal(20,0) DEFAULT NULL,
  `changee` decimal(20,2) DEFAULT NULL,
  `pay_date` date DEFAULT NULL,
  `pay_method` varchar(50) DEFAULT NULL,
  `cust_id` int DEFAULT NULL,
  `discount` decimal(20,0) DEFAULT NULL,
  `pay_time` time DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `payComment` text,
  `nextPay` date DEFAULT NULL,
  `yearId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
 and the structure of `pay`  (
  `pay_id` int NOT NULL,
  `pay_ref` varchar(50) DEFAULT NULL,
  `store_id` int DEFAULT NULL,
  `tot_pr` decimal(20,0) DEFAULT NULL,
  `pay` decimal(20,0) DEFAULT NULL,
  `changee` decimal(20,2) DEFAULT NULL,
  `pay_date` date DEFAULT NULL,
  `pay_method` varchar(50) DEFAULT NULL,
  `cust_id` int DEFAULT NULL,
  `discount` decimal(20,0) DEFAULT NULL,
  `pay_time` time DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `payComment` text,
  `nextPay` date DEFAULT NULL,
  `yearId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3; 
use those informationa after read it carfully and calculate the current balance of the accounts and consider the exeption of customers and suppleir in calculating the balance

## Additional Balance Calculation Rules for Special Account Types

### Sales Summary Account (sub_account.id = 48 - المبيعات)
For the specific account with sub_account.id = 48 (Sales Summary Account):
1. This is a CREDIT account by nature
2. Calculate balance using the following steps:
   - Get sum of `tot_pr` from all records in `pay` table for this store_id and yearId
   - Get total debits from `jdetails_from` table where ac_id = 48
   - Get total credits from `jdetails_to` table where ac_id = 48  
   - Add the sum of `tot_pr` to the credit_total (because sales increase credit accounts)
   - Final calculation: current_balance = opening_balance + total_credits + sales_total - total_debits
   - If current_balance >= 0: status = 'credit', else: status = 'debit'

### Purchase Summary Account (sub_account.id = 49 - المشتريات)
For the specific account with sub_account.id = 49 (Purchase Summary Account):
1. This is a DEBIT account by nature
2. Calculate balance using the following steps:
   - Get sum of `tot_pr` from all records in `perch` table for this store_id and yearId
   - Get total debits from `jdetails_from` table where ac_id = 49
   - Get total credits from `jdetails_to` table where ac_id = 49
   - Add the sum of `tot_pr` to the debit_total (because purchases increase debit accounts)
   - Final calculation: current_balance = opening_balance + total_debits + purchases_total - total_credits
   - If current_balance >= 0: status = 'debit', else: status = 'credit'

### Summary of Account Types and Balance Calculations:

1. **Regular Accounts (not special cases below)**: 
   - Use only journal entries (jdetails_from and jdetails_to)
   - Balance = opening_balance + (credits - debits for credit accounts) or (debits - credits for debit accounts)

2. **Customer Accounts (ac_id = 1)** and **Supplier Accounts (ac_id = 2)**:
   - **NEW UNIFIED APPROACH**: Both customer and supplier accounts now use BOTH pay and perch tables
   - Get sum of `changee` from `pay` table where cust_id = account.id → Add to DEBIT side
   - Get sum of `changee` from `perch` table where cust_id = account.id → Add to CREDIT side
   - Get total debits from `jdetails_from` table where ac_id = account.id
   - Get total credits from `jdetails_to` table where ac_id = account.id
   - **Final Calculation**:
     - Total_debits = journal_debits + pay_changee_total
     - Total_credits = journal_credits + perch_changee_total
     - For debit accounts (customers): current_balance = opening_balance + total_debits - total_credits
     - For credit accounts (suppliers): current_balance = opening_balance + total_credits - total_debits
   - **Important**: This applies to ALL accounts with ac_id = 1 or ac_id = 2, regardless of whether they are primarily customers or suppliers

4. **Sales Summary Account (ONLY sub_account.id = 48)**:
   - Include total sales from `pay` table (all records for store/year)
   - Add to credit side as this is a credit account
   - **Important**: Only apply this to account with id = 48, not all ac_id = 8 accounts

5. **Purchase Summary Account (ONLY sub_account.id = 49)**:
   - Include total purchases from `perch` table (all records for store/year)
   - Add to debit side as this is a debit account
   - **Important**: Only apply this to account with id = 49, not all ac_id = 9 accounts 