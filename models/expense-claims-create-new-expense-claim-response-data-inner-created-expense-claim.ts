/*
Cleemy Expenses

Welcome on the documentation for the CleemyExpenses API.


The version of the OpenAPI document: 1.0
Contact: developers@lucca.fr

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ExpenseClaimsCreateNewExpenseClaimResponseDataInnerCreatedExpenseClaimNextApprover } from './expense-claims-create-new-expense-claim-response-data-inner-created-expense-claim-next-approver';

/**
 * 
 * @export
 * @interface ExpenseClaimsCreateNewExpenseClaimResponseDataInnerCreatedExpenseClaim
 */
export interface ExpenseClaimsCreateNewExpenseClaimResponseDataInnerCreatedExpenseClaim {
    /**
     * 
     * @type {number}
     * @memberof ExpenseClaimsCreateNewExpenseClaimResponseDataInnerCreatedExpenseClaim
     */
    'id'?: number;
    /**
     * 
     * @type {ExpenseClaimsCreateNewExpenseClaimResponseDataInnerCreatedExpenseClaimNextApprover}
     * @memberof ExpenseClaimsCreateNewExpenseClaimResponseDataInnerCreatedExpenseClaim
     */
    'nextApprover'?: ExpenseClaimsCreateNewExpenseClaimResponseDataInnerCreatedExpenseClaimNextApprover;
}

