import { statuses } from "./statuses";

describe("statuses", () => {
    it("The statuses object is written in ascending order with smaller numbers first and larger numbers later", () => {
        let prevStatus = 0;
        for (let status of statuses) {
            expect(status.code).toBeGreaterThan(prevStatus);
            prevStatus = status.code;
        }
    });
    it("There should not be any duplicate status codes in the statuses object", () => {
        statuses.reduce((acc, { code }) => {
            expect(acc[code]).toBe(undefined);
            return { code: "seen", ...acc };
        }, {});
    });
});
