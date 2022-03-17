export const userSchema = {
    name : "user",
    title : "User",
    type : "document",
    fields : [
        {
            name : "walletAddress",
            title : "Wallet Address",
            type : "string"
        },
        {
            name : "username",
            title : "Username",
            type : "string"
        },
        {
            name : "transactions",
            title : "Transactions",
            type : "array",
            of : [
                {
                    type : 'reference',
                    to : [{ type : 'transaction' }]
                }
            ]
        }
    ]
}