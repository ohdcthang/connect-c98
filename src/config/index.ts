import { SQSClient } from '@aws-sdk/client-sqs'
export const sqsConfig = {
  region: 'ap-southeast-2',
  credentials: {
    accessKeyId: 'AKIAW5BDQ342P5X2R6GQ',
    secretAccessKey: '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'
  }
}

export const sqsClient = new SQSClient(sqsConfig)
       

export const queueUrl = 'https://sqs.ap-southeast-2.amazonaws.com/474668392244/Victoriaxaoquyet'