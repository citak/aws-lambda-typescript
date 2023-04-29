import sinon from "sinon";
import "mocha";
import assert from "assert";
import { handler } from './../src/index';

describe('Lambda Handler', (): void => {
    afterEach((): void =>  {
        sinon.restore();
    });

    it('Handler is succesful with a log', async (): Promise<void> => {
        const event = {
            Records: []
        };
        const consoleLogSpy = sinon.spy(console, 'log');
        assert.equal(await handler(event), undefined);
        assert.equal(consoleLogSpy.calledOnceWith(event), true);
    });

    it('Handler fails with a warning', async (): Promise<void> => {
        const consoleError = new Error('Some error!');
        const event = {
            Records: []
        };
        sinon.stub(console, "log")
            .throws(consoleError);

        const consoleWarnSpy = sinon.spy(console, 'warn');
        assert.equal(await handler(event), undefined);
        assert.equal(consoleWarnSpy.calledOnceWith(consoleError), true);
    });
});
