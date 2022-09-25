export type AmplifyDependentResourcesAttributes = {
    "function": {
        "getfunction": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "sendemailfunction": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "rphatan": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}