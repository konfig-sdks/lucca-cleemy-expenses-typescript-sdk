/*
Cleemy Expenses

Welcome on the documentation for the CleemyExpenses API.


The version of the OpenAPI document: 1.0
Contact: developers@lucca.fr

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Authorized actions on the expenseClaim for the current user.
 * @export
 * @interface ExpenseClaimAuthorizedActions
 */
export interface ExpenseClaimAuthorizedActions {
    /**
     * The expenseClaim can be deleted by the current authenticated user.
     * @type {boolean}
     * @memberof ExpenseClaimAuthorizedActions
     */
    'isCancellable'?: boolean;
    /**
     * The expenseClaim can be edited by the current authenticated user.
     * @type {boolean}
     * @memberof ExpenseClaimAuthorizedActions
     */
    'isEditable'?: boolean;
    /**
     * The expenseClaim can be approved by the current authenticated user.
     * @type {boolean}
     * @memberof ExpenseClaimAuthorizedActions
     */
    'isApprovable'?: boolean;
    /**
     * The expenseClaim can be controlled by the current authenticated user.
     * @type {boolean}
     * @memberof ExpenseClaimAuthorizedActions
     */
    'isControllable'?: boolean;
    /**
     * The current authenticated user can cancel the control of the expenseClaim.
     * @type {boolean}
     * @memberof ExpenseClaimAuthorizedActions
     */
    'isUnControllable'?: boolean;
}

