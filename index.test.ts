import { LuccaCleemyExpenses } from "./index";

describe("lucca-cleemy-expenses-typescript-sdk", () => {
    it("initialize client", async () => {
        const luccacleemyexpenses = new LuccaCleemyExpenses({
            apiKey: "API_KEY",
        });
    });
});
