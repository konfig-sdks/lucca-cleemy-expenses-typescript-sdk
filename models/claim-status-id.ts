/*
Cleemy Expenses

Welcome on the documentation for the CleemyExpenses API.


The version of the OpenAPI document: 1.0
Contact: developers@lucca.fr

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Status of the expenseClaim. - 1: the expenseClaim is created. - 2: the expenseClaim has been partially approved. - 3: the expenseClaim has been approved. - 4: the expenseClaim has been controlled. - 5: the expenseClaim has been approved and controlled. - 6: the payment of the expenseClaim has been initiated. - 7: the expenseClaim has been paid. - 8: the expenseClaim has been refused. - 9: the expenseClaim has been cancelled.
 * @export
 * @interface ClaimStatusId
 */
export interface ClaimStatusId {
    /**
     * 
     * @type {number}
     * @memberof ClaimStatusId
     */
    'id'?: ClaimStatusIdIdEnum;
}

type ClaimStatusIdIdEnum = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

