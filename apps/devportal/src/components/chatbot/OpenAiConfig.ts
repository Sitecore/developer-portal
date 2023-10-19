export interface IOpenAIConfig {
  AzureOpenAIDeploymentId: string;
  AzureOpenAIEndpoint: string;
  AzureOpenAIKey: string;
}

export const OpenAIConfig: IOpenAIConfig = {
  AzureOpenAIDeploymentId: process.env.AZURE_DEPLOYMENT_ID ?? '',
  AzureOpenAIEndpoint: process.env.AZURE_OPENAI_ENDPOINT ?? '',
  AzureOpenAIKey: process.env.AZURE_OPENAI_KEY ?? '',
};
