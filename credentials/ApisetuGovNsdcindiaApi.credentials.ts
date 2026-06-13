import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovNsdcindiaApi implements ICredentialType {
        name = 'N8nDevApisetuGovNsdcindiaApi';

        displayName = 'Apisetu Gov Nsdcindia API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovNsdcindia/apisetu-gov-nsdcindia.svg', dark: 'file:../nodes/ApisetuGovNsdcindia/apisetu-gov-nsdcindia.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/nsdcindia/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/nsdcindia/v3',
                        description: 'The base URL of your Apisetu Gov Nsdcindia API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
