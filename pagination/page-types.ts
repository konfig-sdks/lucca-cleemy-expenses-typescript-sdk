/*
Cleemy Expenses

Welcome on the documentation for the CleemyExpenses API.


The version of the OpenAPI document: 1.0
Contact: developers@lucca.fr

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { Pageable, PageParametersBase } from "./pageable";

/**
 * The set of parameters that appear in a paginated operation (requestBody or parameters)
 */
export type PageParameterProperties = {
  [key: string]: any;
};

export type PageParameters = PageParametersBase<PageParameterProperties>;

/**
 * The set of properties that appear in a paginated operation's response
 */
export interface PageInfo {
  [key: string]: any
}

export interface PageBase<
  Data extends PageInfo,
  Parameters extends PageParameters
> extends Pageable<Data, Parameters> {}
