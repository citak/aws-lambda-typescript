import "mocha";
import assert from "assert";
import { handler } from './../src/index';

describe('Lambda Handler', (): void => {
    it('Handler returns undefined', async (): Promise<void> => {
        const event = {
            Records: []
        };

        assert.equal(await handler(event), undefined);
    });
});
