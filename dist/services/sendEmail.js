"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendWelcomeBeta = void 0;
const aws = require('aws-sdk');
aws.config.update({
    accessKeyId: (),
    secretAccessKey: (),
    region: ()
});
function sendWelcomeBeta(email) {
    const ses = new aws.SES({ apiVersion: "2010-12-01" });
    const params = {
        Destination: {
            ToAddresses: [email] // Email address/addresses that you want to send your email
        },
        ConfigurationSetName: (),
        Message: {
            Body: {
                Html: {
                    // HTML Format of the email
                    Charset: "UTF-8",
                    Data: "<html><body><h1>Hello  Charith</h1><p style='color:red'>Sample description</p> <p>Time 1517831318946</p></body></html>"
                },
                Text: {
                    Charset: "UTF-8",
                    Data: "Hello Charith Sample description time 1517831318946"
                }
            },
            Subject: {
                Charset: "UTF-8",
                Data: "Test email"
            }
        },
        Source: "ABC@ABC.com"
    };
    const sendEmail = ses.sendEmail(params).promise();
    sendEmail.then(data => {
        console.log("email submitted to SES", data);
    })
        .catch(error => {
        console.log(error);
    });
}
exports.sendWelcomeBeta = sendWelcomeBeta;
;
//# sourceMappingURL=sendEmail.js.map