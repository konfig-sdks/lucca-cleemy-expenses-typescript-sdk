type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/api/v3/expenseClaims/creation-POST': {
        parameters: [
        ]
    },
    '/api/v3/expenseClaims-GET': {
        parameters: [
            {
                name: 'paging'
            },
            {
                name: 'ownerId'
            },
            {
                name: 'orderBy'
            },
            {
                name: 'declaredOn'
            },
            {
                name: 'statusId'
            },
        ]
    },
    '/api/v3/expenseTempItems-POST': {
        parameters: [
            {
                name: 'purchasedOn'
            },
            {
                name: 'expenseNatureId'
            },
            {
                name: 'id'
            },
            {
                name: 'originalTransaction'
            },
            {
                name: 'processedAmounts'
            },
            {
                name: 'mileage'
            },
            {
                name: 'quantity'
            },
            {
                name: 'effectiveQuantity'
            },
            {
                name: 'attendees'
            },
            {
                name: 'axisSections'
            },
            {
                name: 'customFields'
            },
            {
                name: 'merchant'
            },
            {
                name: 'comment'
            },
            {
                name: 'expenseReceipts'
            },
            {
                name: 'authorizedActions'
            },
            {
                name: 'sourceId'
            },
            {
                name: 'source'
            },
            {
                name: 'ownerId'
            },
            {
                name: 'paymentMethodId'
            },
            {
                name: 'paymentMethod'
            },
            {
                name: 'statusId'
            },
            {
                name: 'status'
            },
        ]
    },
    '/api/v3/expenseTempItems/{expenseTempItemId}-GET': {
        parameters: [
            {
                name: 'expenseTempItemId'
            },
        ]
    },
    '/api/v3/expenseTempItems-GET': {
        parameters: [
            {
                name: 'paging'
            },
            {
                name: 'ownerId'
            },
            {
                name: 'orderBy'
            },
            {
                name: 'purchasedOn'
            },
        ]
    },
    '/api/v3/expenseTempItems/{expenseTempItemId}-PUT': {
        parameters: [
            {
                name: 'purchasedOn'
            },
            {
                name: 'expenseNatureId'
            },
            {
                name: 'expenseTempItemId'
            },
            {
                name: 'id'
            },
            {
                name: 'originalTransaction'
            },
            {
                name: 'processedAmounts'
            },
            {
                name: 'mileage'
            },
            {
                name: 'quantity'
            },
            {
                name: 'effectiveQuantity'
            },
            {
                name: 'attendees'
            },
            {
                name: 'axisSections'
            },
            {
                name: 'customFields'
            },
            {
                name: 'merchant'
            },
            {
                name: 'comment'
            },
            {
                name: 'expenseReceipts'
            },
            {
                name: 'authorizedActions'
            },
            {
                name: 'sourceId'
            },
            {
                name: 'source'
            },
            {
                name: 'ownerId'
            },
            {
                name: 'paymentMethodId'
            },
            {
                name: 'paymentMethod'
            },
            {
                name: 'statusId'
            },
            {
                name: 'status'
            },
        ]
    },
}