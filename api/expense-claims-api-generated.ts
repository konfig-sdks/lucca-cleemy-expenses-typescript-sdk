/* tslint:disable */
/* eslint-disable */
/*
Cleemy Expenses

Welcome on the documentation for the CleemyExpenses API.


The version of the OpenAPI document: 1.0
Contact: developers@lucca.fr

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ExpenseClaimsCreateNewExpenseClaimRequestInner } from '../models';
// @ts-ignore
import { ExpenseClaimsCreateNewExpenseClaimResponse } from '../models';
// @ts-ignore
import { ExpenseClaimsListResponse } from '../models';
// @ts-ignore
import { ExpensesListTempItems400Response } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ExpenseClaimsApi - axios parameter creator
 * @export
 */
export const ExpenseClaimsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * When a user wants to declare his expenses, he creates an `ExpenseClaim`.  An `ExpenseClaim` is created by regrouping one or more `ExpenseTempItems` and converting them into ExpenseClaimItems.  Once created, an `ExpenseClaim` has to be approved by his manager.  Multiple `ExpenseClaims` can be created through a single request.
         * @summary Create a new ExpenseClaim
         * @param {Array<ExpenseClaimsCreateNewExpenseClaimRequestInner>} [expenseClaimsCreateNewExpenseClaimRequestInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewExpenseClaim: async (expenseClaimsCreateNewExpenseClaimRequestInner?: Array<ExpenseClaimsCreateNewExpenseClaimRequestInner>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v3/expenseClaims/creation`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Authorization required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "authorization", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: expenseClaimsCreateNewExpenseClaimRequestInner,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/v3/expenseClaims/creation',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(expenseClaimsCreateNewExpenseClaimRequestInner, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve a list of `ExpenseClaims`.  The `declaredOn` query parameter can operate comparisons with a given date-time value: - `?declaredOn=2021-01-01`: strict equality. - `?declaredOn=since,2021-01-01`: greater than or equal. - `?declaredOn=until,2021-01-01`: lower than or equal. - `?declaredOn=between,2021-01-01,2021-01-31`: comprised between two dates.
         * @summary List ExpenseClaims
         * @param {string} paging {offset},{limit}. Defaults to 0,1000.
         * @param {Array<number>} [ownerId] Comma-separated list of user identifiers (int).
         * @param {string} [orderBy] {fieldName},{\&#39;asc\&#39;||\&#39;desc\&#39;}. Example: &#x60;?orderby&#x3D;declaredOn,desc&#x60;
         * @param {string} [declaredOn] Examples: &#x60;between,2022-01-01,202201-31&#x60;.
         * @param {string} [statusId] 1: Created; 2: PartiallyApproved; 3: Approved; 4: Controlled; 5: ApprovedAndControlled; 6: PaymentInitiated; 7: Paid; 8: Refused; 9: Cancelled. Examples: &#x60;2,3&#x60; or &#x60;PartiallyApproved,Approved&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list: async (paging: string, ownerId?: Array<number>, orderBy?: string, declaredOn?: string, statusId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'paging' is not null or undefined
            assertParamExists('list', 'paging', paging)
            const localVarPath = `/api/v3/expenseClaims`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Authorization required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "authorization", configuration })
            if (ownerId) {
                localVarQueryParameter['ownerId'] = ownerId;
            }

            if (orderBy !== undefined) {
                localVarQueryParameter['orderBy'] = orderBy;
            }

            if (declaredOn !== undefined) {
                localVarQueryParameter['declaredOn'] = declaredOn;
            }

            if (paging !== undefined) {
                localVarQueryParameter['paging'] = paging;
            }

            if (statusId !== undefined) {
                localVarQueryParameter['statusId'] = statusId;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/v3/expenseClaims',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ExpenseClaimsApi - functional programming interface
 * @export
 */
export const ExpenseClaimsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ExpenseClaimsApiAxiosParamCreator(configuration)
    return {
        /**
         * When a user wants to declare his expenses, he creates an `ExpenseClaim`.  An `ExpenseClaim` is created by regrouping one or more `ExpenseTempItems` and converting them into ExpenseClaimItems.  Once created, an `ExpenseClaim` has to be approved by his manager.  Multiple `ExpenseClaims` can be created through a single request.
         * @summary Create a new ExpenseClaim
         * @param {ExpenseClaimsApiCreateNewExpenseClaimRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewExpenseClaim(requestParameters: ExpenseClaimsApiCreateNewExpenseClaimRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExpenseClaimsCreateNewExpenseClaimResponse>> {
            const expenseClaimsCreateNewExpenseClaimRequestInner: Array<ExpenseClaimsCreateNewExpenseClaimRequestInner> = requestParameters;
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewExpenseClaim(expenseClaimsCreateNewExpenseClaimRequestInner, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieve a list of `ExpenseClaims`.  The `declaredOn` query parameter can operate comparisons with a given date-time value: - `?declaredOn=2021-01-01`: strict equality. - `?declaredOn=since,2021-01-01`: greater than or equal. - `?declaredOn=until,2021-01-01`: lower than or equal. - `?declaredOn=between,2021-01-01,2021-01-31`: comprised between two dates.
         * @summary List ExpenseClaims
         * @param {ExpenseClaimsApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async list(requestParameters: ExpenseClaimsApiListRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExpenseClaimsListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.list(requestParameters.paging, requestParameters.ownerId, requestParameters.orderBy, requestParameters.declaredOn, requestParameters.statusId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ExpenseClaimsApi - factory interface
 * @export
 */
export const ExpenseClaimsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ExpenseClaimsApiFp(configuration)
    return {
        /**
         * When a user wants to declare his expenses, he creates an `ExpenseClaim`.  An `ExpenseClaim` is created by regrouping one or more `ExpenseTempItems` and converting them into ExpenseClaimItems.  Once created, an `ExpenseClaim` has to be approved by his manager.  Multiple `ExpenseClaims` can be created through a single request.
         * @summary Create a new ExpenseClaim
         * @param {ExpenseClaimsApiCreateNewExpenseClaimRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewExpenseClaim(requestParameters: ExpenseClaimsApiCreateNewExpenseClaimRequest, options?: AxiosRequestConfig): AxiosPromise<ExpenseClaimsCreateNewExpenseClaimResponse> {
            return localVarFp.createNewExpenseClaim(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a list of `ExpenseClaims`.  The `declaredOn` query parameter can operate comparisons with a given date-time value: - `?declaredOn=2021-01-01`: strict equality. - `?declaredOn=since,2021-01-01`: greater than or equal. - `?declaredOn=until,2021-01-01`: lower than or equal. - `?declaredOn=between,2021-01-01,2021-01-31`: comprised between two dates.
         * @summary List ExpenseClaims
         * @param {ExpenseClaimsApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list(requestParameters: ExpenseClaimsApiListRequest, options?: AxiosRequestConfig): AxiosPromise<ExpenseClaimsListResponse> {
            return localVarFp.list(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNewExpenseClaim operation in ExpenseClaimsApi.
 * @export
 * @interface ExpenseClaimsApiCreateNewExpenseClaimRequest
 */
export type ExpenseClaimsApiCreateNewExpenseClaimRequest = Array<ExpenseClaimsCreateNewExpenseClaimRequestInner>

/**
 * Request parameters for list operation in ExpenseClaimsApi.
 * @export
 * @interface ExpenseClaimsApiListRequest
 */
export type ExpenseClaimsApiListRequest = {
    
    /**
    * {offset},{limit}. Defaults to 0,1000.
    * @type {string}
    * @memberof ExpenseClaimsApiList
    */
    readonly paging: string
    
    /**
    * Comma-separated list of user identifiers (int).
    * @type {Array<number>}
    * @memberof ExpenseClaimsApiList
    */
    readonly ownerId?: Array<number>
    
    /**
    * {fieldName},{\'asc\'||\'desc\'}. Example: `?orderby=declaredOn,desc`
    * @type {string}
    * @memberof ExpenseClaimsApiList
    */
    readonly orderBy?: string
    
    /**
    * Examples: `between,2022-01-01,202201-31`.
    * @type {string}
    * @memberof ExpenseClaimsApiList
    */
    readonly declaredOn?: string
    
    /**
    * 1: Created; 2: PartiallyApproved; 3: Approved; 4: Controlled; 5: ApprovedAndControlled; 6: PaymentInitiated; 7: Paid; 8: Refused; 9: Cancelled. Examples: `2,3` or `PartiallyApproved,Approved`.
    * @type {string}
    * @memberof ExpenseClaimsApiList
    */
    readonly statusId?: string
    
}

/**
 * ExpenseClaimsApiGenerated - object-oriented interface
 * @export
 * @class ExpenseClaimsApiGenerated
 * @extends {BaseAPI}
 */
export class ExpenseClaimsApiGenerated extends BaseAPI {
    /**
     * When a user wants to declare his expenses, he creates an `ExpenseClaim`.  An `ExpenseClaim` is created by regrouping one or more `ExpenseTempItems` and converting them into ExpenseClaimItems.  Once created, an `ExpenseClaim` has to be approved by his manager.  Multiple `ExpenseClaims` can be created through a single request.
     * @summary Create a new ExpenseClaim
     * @param {ExpenseClaimsApiCreateNewExpenseClaimRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExpenseClaimsApiGenerated
     */
    public createNewExpenseClaim(requestParameters: ExpenseClaimsApiCreateNewExpenseClaimRequest, options?: AxiosRequestConfig) {
        return ExpenseClaimsApiFp(this.configuration).createNewExpenseClaim(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve a list of `ExpenseClaims`.  The `declaredOn` query parameter can operate comparisons with a given date-time value: - `?declaredOn=2021-01-01`: strict equality. - `?declaredOn=since,2021-01-01`: greater than or equal. - `?declaredOn=until,2021-01-01`: lower than or equal. - `?declaredOn=between,2021-01-01,2021-01-31`: comprised between two dates.
     * @summary List ExpenseClaims
     * @param {ExpenseClaimsApiListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExpenseClaimsApiGenerated
     */
    public list(requestParameters: ExpenseClaimsApiListRequest, options?: AxiosRequestConfig) {
        return ExpenseClaimsApiFp(this.configuration).list(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
