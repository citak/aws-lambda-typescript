import type { SQSEvent } from 'aws-lambda';

export const handler = async (event: SQSEvent): Promise<void> => {
    try {
        console.log(event);
    } catch (err: any) {
        console.warn(err);
    }
};
