<div align="left">

[![Visit Lucca](./header.png)](https://lucca-hr.com)

# [Lucca](https://lucca-hr.com)<a id="lucca"></a>

Welcome on the documentation for the CleemyExpenses API.


</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`luccacleemyexpenses.expenseClaims.createNewExpenseClaim`](#luccacleemyexpensesexpenseclaimscreatenewexpenseclaim)
  * [`luccacleemyexpenses.expenseClaims.list`](#luccacleemyexpensesexpenseclaimslist)
  * [`luccacleemyexpenses.expenses.createNewTemporaryExpense`](#luccacleemyexpensesexpensescreatenewtemporaryexpense)
  * [`luccacleemyexpenses.expenses.getById`](#luccacleemyexpensesexpensesgetbyid)
  * [`luccacleemyexpenses.expenses.listTempItems`](#luccacleemyexpensesexpenseslisttempitems)
  * [`luccacleemyexpenses.expenses.updateExpenseTempItem`](#luccacleemyexpensesexpensesupdateexpensetempitem)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Lucca&serviceName=Cleemy%20Expenses&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { LuccaCleemyExpenses } from "lucca-cleemy-expenses-typescript-sdk";

const luccacleemyexpenses = new LuccaCleemyExpenses({
  // Defining the base path is optional and defaults to https://example.ilucca.net
  // basePath: "https://example.ilucca.net",
  apiKey: "API_KEY",
});

const createNewExpenseClaimResponse =
  await luccacleemyexpenses.expenseClaims.createNewExpenseClaim([
    {
      title: "title_example",
      expenseTempItems: [
        {
          id: 1,
        },
      ],
    },
  ]);

console.log(createNewExpenseClaimResponse);
```

## Reference<a id="reference"></a>


### `luccacleemyexpenses.expenseClaims.createNewExpenseClaim`<a id="luccacleemyexpensesexpenseclaimscreatenewexpenseclaim"></a>

When a user wants to declare his expenses, he creates an `ExpenseClaim`.

An `ExpenseClaim` is created by regrouping one or more `ExpenseTempItems` and converting them into ExpenseClaimItems.

Once created, an `ExpenseClaim` has to be approved by his manager.

Multiple `ExpenseClaims` can be created through a single request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewExpenseClaimResponse =
  await luccacleemyexpenses.expenseClaims.createNewExpenseClaim([
    {
      title: "title_example",
      expenseTempItems: [
        {
          id: 1,
        },
      ],
    },
  ]);
```

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

[`ExpenseClaimsCreateNewExpenseClaimRequestInner`](./models/expense-claims-create-new-expense-claim-request-inner.ts)[]

#### 🔄 Return<a id="🔄-return"></a>

[ExpenseClaimsCreateNewExpenseClaimResponse](./models/expense-claims-create-new-expense-claim-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/expenseClaims/creation` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccacleemyexpenses.expenseClaims.list`<a id="luccacleemyexpensesexpenseclaimslist"></a>

Retrieve a list of `ExpenseClaims`.

The `declaredOn` query parameter can operate comparisons with a given date-time value:
- `?declaredOn=2021-01-01`: strict equality.
- `?declaredOn=since,2021-01-01`: greater than or equal.
- `?declaredOn=until,2021-01-01`: lower than or equal.
- `?declaredOn=between,2021-01-01,2021-01-31`: comprised between two dates.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await luccacleemyexpenses.expenseClaims.list({
  paging: "100,0",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### paging: `string`<a id="paging-string"></a>

{offset},{limit}. Defaults to 0,1000.

##### ownerId: `number`[]<a id="ownerid-number"></a>

Comma-separated list of user identifiers (int).

##### orderBy: `string`<a id="orderby-string"></a>

{fieldName},{\'asc\'||\'desc\'}. Example: `?orderby=declaredOn,desc`

##### declaredOn: `string`<a id="declaredon-string"></a>

Examples: `between,2022-01-01,202201-31`.

##### statusId: `string`<a id="statusid-string"></a>

1: Created; 2: PartiallyApproved; 3: Approved; 4: Controlled; 5: ApprovedAndControlled; 6: PaymentInitiated; 7: Paid; 8: Refused; 9: Cancelled. Examples: `2,3` or `PartiallyApproved,Approved`.

#### 🔄 Return<a id="🔄-return"></a>

[ExpenseClaimsListResponse](./models/expense-claims-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/expenseClaims` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccacleemyexpenses.expenses.createNewTemporaryExpense`<a id="luccacleemyexpensesexpensescreatenewtemporaryexpense"></a>

Create a new temporary expense

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewTemporaryExpenseResponse =
  await luccacleemyexpenses.expenses.createNewTemporaryExpense({
    id: 11022,
    purchasedOn: "1970-01-01T00:00:00.00Z",
    expenseNatureId: 1,
    quantity: 1,
    effectiveQuantity: 3,
    ownerId: 361,
    paymentMethodId: 0,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### purchasedOn: `string`<a id="purchasedon-string"></a>

Day the expense was made.

##### expenseNatureId: `number`<a id="expensenatureid-number"></a>

Nature of the expense: Meals, Train, Taxi, Hotels, Taxi, Mileage... List depends on the app configuration.

##### id: `number`<a id="id-number"></a>

##### originalTransaction: [`ExpenseTempItemOriginalTransaction`](./models/expense-temp-item-original-transaction.ts)<a id="originaltransaction-expensetempitemoriginaltransactionmodelsexpense-temp-item-original-transactionts"></a>

##### processedAmounts: [`ExpenseTempItemProcessedAmounts`](./models/expense-temp-item-processed-amounts.ts)<a id="processedamounts-expensetempitemprocessedamountsmodelsexpense-temp-item-processed-amountsts"></a>

##### mileage: [`ExpenseTempItemMileage`](./models/expense-temp-item-mileage.ts)<a id="mileage-expensetempitemmileagemodelsexpense-temp-item-mileagets"></a>

##### quantity: `number`<a id="quantity-number"></a>

The quantity when the expense type is \\\'Quantity\\\'.

##### effectiveQuantity: `number`<a id="effectivequantity-number"></a>

Calculated quantity when the expense type is \\\'Quantity\\\' or \\\'Invitations\\\' (number of attendees).

##### attendees: [`ExpenseTempItemAttendees`](./models/expense-temp-item-attendees.ts)<a id="attendees-expensetempitemattendeesmodelsexpense-temp-item-attendeests"></a>

##### axisSections: `any`<a id="axissections-any"></a>
                    `any`[]

Axis sections values.

##### customFields: Record<string, [`ExpenseTempItemCustomFieldsValue`](./models/expense-temp-item-custom-fields-value.ts)><a id="customfields-record"></a>

Values for custom fields.

##### merchant: `any`<a id="merchant-any"></a>

Merchant of the expense.

##### comment: `any`<a id="comment-any"></a>

##### expenseReceipts: [`ExpenseReceipt`](./models/expense-receipt.ts)[]<a id="expensereceipts-expensereceiptmodelsexpense-receiptts"></a>

The original receipt (PDF file, image, ...).

##### authorizedActions: [`ExpenseTempItemAuthorizedActions`](./models/expense-temp-item-authorized-actions.ts)<a id="authorizedactions-expensetempitemauthorizedactionsmodelsexpense-temp-item-authorized-actionsts"></a>

##### sourceId: [`SourceId`](./models/source-id.ts)<a id="sourceid-sourceidmodelssource-idts"></a>

##### source: [`Enum`](./models/enum.ts)<a id="source-enummodelsenumts"></a>

##### ownerId: `number`<a id="ownerid-number"></a>

Unique identifier of the user that made this expense.

##### paymentMethodId:<a id="paymentmethodid"></a>

##### paymentMethod: [`Enum`](./models/enum.ts)<a id="paymentmethod-enummodelsenumts"></a>

##### statusId: [`StatusId`](./models/status-id.ts)<a id="statusid-statusidmodelsstatus-idts"></a>

##### status: [`Enum`](./models/enum.ts)<a id="status-enummodelsenumts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ExpensesCreateNewTemporaryExpenseResponse](./models/expenses-create-new-temporary-expense-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/expenseTempItems` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccacleemyexpenses.expenses.getById`<a id="luccacleemyexpensesexpensesgetbyid"></a>

Get an ExpenseTempItem by id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await luccacleemyexpenses.expenses.getById({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### expenseTempItemId: `number`<a id="expensetempitemid-number"></a>

Unique identifier of the ExpenseTempItem.

#### 🔄 Return<a id="🔄-return"></a>

[ExpensesGetByIdResponse](./models/expenses-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/expenseTempItems/{expenseTempItemId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccacleemyexpenses.expenses.listTempItems`<a id="luccacleemyexpensesexpenseslisttempitems"></a>

Retrieve a list of `ExpenseTempItems`.

The `purchasedOn` query parameter can operate comparisons with a given date-time value:
- `?purchasedOn=2021-01-01`: strict equality.
- `?purchasedOn=since,2021-01-01`: greater than or equal.
- `?purchasedOn=until,2021-01-01`: lower than or equal.
- `?purchasedOn=between,2021-01-01,2021-01-31`: comprised between two dates.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTempItemsResponse = await luccacleemyexpenses.expenses.listTempItems({
  paging: "100,0",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### paging: `string`<a id="paging-string"></a>

{offset},{limit}. Defaults to 0,1000.

##### ownerId: `any`<a id="ownerid-any"></a>
               `any`[]

Comma-separated list of user identifiers (int).

##### orderBy: `string`<a id="orderby-string"></a>

{fieldName},{\'asc\'||\'desc\'}. Example: `?orderby=purchasedOn,desc`

##### purchasedOn: `string`<a id="purchasedon-string"></a>

Examples: `between,2022-01-01,202201-31`.

#### 🔄 Return<a id="🔄-return"></a>

[ExpensesListTempItemsResponse](./models/expenses-list-temp-items-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/expenseTempItems` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccacleemyexpenses.expenses.updateExpenseTempItem`<a id="luccacleemyexpensesexpensesupdateexpensetempitem"></a>

Update an ExpenseTempItem by id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateExpenseTempItemResponse =
  await luccacleemyexpenses.expenses.updateExpenseTempItem({
    id: 11022,
    purchasedOn: "1970-01-01T00:00:00.00Z",
    expenseNatureId: 1,
    quantity: 1,
    effectiveQuantity: 3,
    ownerId: 361,
    paymentMethodId: 0,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### purchasedOn: `string`<a id="purchasedon-string"></a>

Day the expense was made.

##### expenseNatureId: `number`<a id="expensenatureid-number"></a>

Nature of the expense: Meals, Train, Taxi, Hotels, Taxi, Mileage... List depends on the app configuration.

##### expenseTempItemId: `number`<a id="expensetempitemid-number"></a>

Unique identifier of the ExpenseTempItem.

##### id: `number`<a id="id-number"></a>

##### originalTransaction: [`ExpenseTempItemOriginalTransaction`](./models/expense-temp-item-original-transaction.ts)<a id="originaltransaction-expensetempitemoriginaltransactionmodelsexpense-temp-item-original-transactionts"></a>

##### processedAmounts: [`ExpenseTempItemProcessedAmounts`](./models/expense-temp-item-processed-amounts.ts)<a id="processedamounts-expensetempitemprocessedamountsmodelsexpense-temp-item-processed-amountsts"></a>

##### mileage: [`ExpenseTempItemMileage`](./models/expense-temp-item-mileage.ts)<a id="mileage-expensetempitemmileagemodelsexpense-temp-item-mileagets"></a>

##### quantity: `number`<a id="quantity-number"></a>

The quantity when the expense type is \\\'Quantity\\\'.

##### effectiveQuantity: `number`<a id="effectivequantity-number"></a>

Calculated quantity when the expense type is \\\'Quantity\\\' or \\\'Invitations\\\' (number of attendees).

##### attendees: [`ExpenseTempItemAttendees`](./models/expense-temp-item-attendees.ts)<a id="attendees-expensetempitemattendeesmodelsexpense-temp-item-attendeests"></a>

##### axisSections: `any`<a id="axissections-any"></a>
                    `any`[]

Axis sections values.

##### customFields: Record<string, [`ExpenseTempItemCustomFieldsValue`](./models/expense-temp-item-custom-fields-value.ts)><a id="customfields-record"></a>

Values for custom fields.

##### merchant: `any`<a id="merchant-any"></a>

Merchant of the expense.

##### comment: `any`<a id="comment-any"></a>

##### expenseReceipts: [`ExpenseReceipt`](./models/expense-receipt.ts)[]<a id="expensereceipts-expensereceiptmodelsexpense-receiptts"></a>

The original receipt (PDF file, image, ...).

##### authorizedActions: [`ExpenseTempItemAuthorizedActions`](./models/expense-temp-item-authorized-actions.ts)<a id="authorizedactions-expensetempitemauthorizedactionsmodelsexpense-temp-item-authorized-actionsts"></a>

##### sourceId: [`SourceId`](./models/source-id.ts)<a id="sourceid-sourceidmodelssource-idts"></a>

##### source: [`Enum`](./models/enum.ts)<a id="source-enummodelsenumts"></a>

##### ownerId: `number`<a id="ownerid-number"></a>

Unique identifier of the user that made this expense.

##### paymentMethodId:<a id="paymentmethodid"></a>

##### paymentMethod: [`Enum`](./models/enum.ts)<a id="paymentmethod-enummodelsenumts"></a>

##### statusId: [`StatusId`](./models/status-id.ts)<a id="statusid-statusidmodelsstatus-idts"></a>

##### status: [`Enum`](./models/enum.ts)<a id="status-enummodelsenumts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ExpensesUpdateExpenseTempItemResponse](./models/expenses-update-expense-temp-item-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/expenseTempItems/{expenseTempItemId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
