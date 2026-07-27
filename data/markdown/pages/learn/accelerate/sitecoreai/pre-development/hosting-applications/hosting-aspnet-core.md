---
title: 'Hosting the Web Applications for ASP.NET Core'
description: 'Options and recommendations to host ASP.NET Core aplication'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-03-31'
created: '2025-03-31'
audience: ['Architect','Technical Implementer']
features: ['ASP.NET Core']
---

## Context
Hosting ASP.NET Core applications effectively is key to achieving high performance, security, and scalability. With multiple hosting options available, selecting the right approach ensures seamless deployment, efficient resource management, and optimized user experiences. Whether deploying to Azure App Services, containers, IIS, or Linux, following best practices helps businesses stay agile and future-proof their applications.

## Execution

Organizations need a structured approach to hosting ASP.NET Core applications while ensuring reliability and scalability. This guide provides a clear, actionable path to selecting the best hosting environment and implementing a robust deployment strategy.

There are several alternatives for hosting ASP.NET Core applications, the following are some options on how to approach this.

 ### Hosting on Azure App Services

**Steps to Deploy:**
<ol>
  <li>Set Up an App Service Plan – Choose a pricing tier and region that suits your workload.</li>
  <li>Deploy the Application – Use Visual Studio, GitHub Actions, or Azure DevOps.</li>
  <li>Configure Application Settings – Manage environment variables and connection strings securely.</li>
  <li>Optimize Performance – Implement auto-scaling</li>
  <li>Monitor & Secure – Use Azure Application Insights and enable managed identities.</li>
</ol>

**Recommended Practices:**
<ul>
  <li>Write asynchronous code to improve responsiveness.</li>
  <li>Implement auto-scaling to handle traffic fluctuations.</li>
  <li>Secure your app using Managed Identity and App Service Authentication that can be usefull when accessing third-party service endpoints.</li>
  <li>It is recommended to use Premium V3 pricing plans for production applications.</li>
</ul>

### Hosting in Containers (Docker & Kubernetes)
**Steps to Deploy:**
<ol>
  <li>Create a Dockerfile – Define dependencies, build steps, and environment variables.</li>
  <li>Build & Test the Image – Validate the container locally.</li>
  <li>Push to a Container Registry – Store the image in Azure Container Registry.</li>
  <li>Deploy to Kubernetes – Use Azure Kubernetes Service (AKS) for scaling.</li>
  <li>Monitor & Secure – Implement Kubernetes security policies and Azure Monitor.</li>
</ol>

**Recommended Practices:**
<ul>
  <li>Use lightweight base images to minimize vulnerabilities.</li>
  <li>Manage secrets securely using Azure Key Vault.</li>
  <li>Set CPU and memory limits to optimize resource usage.</li>
</ul>

### Hosting on Windows with IIS
**Steps to Deploy:**
<ol>
  <li>Install the .NET Core Hosting Bundle – Enables IIS to serve ASP.NET Core apps.</li>
  <li>Configure IIS – Set up a site and assign it to an application pool.</li>
  <li>Deploy the Application – Publish and copy files to the IIS directory.</li>
  <li>Optimize for Performance – Enable caching and compression in IIS.</li>
  <li>Ensure Security – Enforce HTTPS and configure firewall rules.</li>
</ol>

**Recommended Practices:**
<ul>
  <li>Use IIS as a reverse proxy for improved efficiency.</li>
  <li>Optimize process management for high-traffic scenarios.</li>
  <li>Implement logging and diagnostics to track performance.</li>
</ul>

### Hosting on Azure App Service (Linux) with Containers
**Steps to Deploy:**
<ol>
  <li>Create a Containerized ASP.NET Core App – Use a Dockerfile to define dependencies, build steps, and environment variables.</li>
  <li>Build & Test the Container Locally – Ensure the containerized app runs correctly before deploying.</li>
  <li>Push to Azure Container Registry (ACR) – Store your container image securely in ACR.</li>
  <li>Set Up an App Service Plan – Choose a Linux-based App Service Plan with an appropriate pricing tier.</li>
  <li>Deploy the Container to Azure App Service – Configure the App Service to pull the image from ACR.</li>
  <li>Configure Application Settings – Define environment variables and connection strings within App Service.</li>
  <li>Enable Continuous Deployment – Automate deployments using Azure DevOps, GitHub Actions, or ACR webhooks.</li>
  <li>Monitor & Secure – Use Azure Monitor and Application Insights for performance tracking and enable Managed  </li> <li>Identity for secure access to resources.</li>
</ol>

**Recommended Practices:**
<ul>
  <li>Use Multi-Stage Docker Builds – Reduce image size and improve security by separating build and runtime environments.</li>
  <li>Implement Auto-Restart Policies – Ensure the container restarts automatically in case of failure.</li>
  <li>Secure Secrets and Configurations – Use Azure Key Vault to manage secrets and avoid storing sensitive data in the container.</li>
  <li>Optimize Scaling – Leverage Azure App Service’s built-in auto-scaling to handle varying workloads.</li>
  <li>Monitor Logs and Performance – Utilize Azure Log Analytics and Application Insights to track app health and optimize performance.</li>
</ul>

## Insights

Choosing the right hosting approach is crucial for performance, scalability, and maintainability. Each option comes with its own advantages and trade-offs, impacting cost, control, security, and flexibility. Understanding these factors helps in making an informed decision that aligns with your business and technical needs.

|Option |Advantages|Disadvantages|
| - | - | - |
|Hosting on Azure App Services|<ul>  <li>Fully managed platform with built-in scaling and monitoring.</li>  <li>Easy deployment with Visual Studio, GitHub Actions, or Azure DevOps.</li>  <li>Built-in security features like Managed Identity and App Service Authentication.</li>  <li>Supports auto-scaling to handle traffic fluctuations.</li></ul>| <ul><li>Limited control over infrastructure and OS-level configurations.</li><li>More expensive than self-managed alternatives for high-traffic applications.</li><li>Cold start issues for infrequent use in some pricing tiers.</li></ul> |
|Hosting in Containers (Docker & Kubernetes)|  <ul><li>High scalability and portability across cloud providers and on-premises</li><li>Full control over the application stack, dependencies, and OS.</li>  <li>Kubernetes (AKS) enables auto-scaling and self-healing capabilities.</li>  <li>Supports microservices architectures and complex deployments.</li></ul> | <ul><li>Requires more operational expertise to manage and maintain Kubernetes.</li><li>Initial setup and management of clusters can be complex.</li><li>Costly for small applications due to infrastructure overhead.</li></ul> |
|Hosting on Windows with IIS| <ul><li>Ideal for existing Windows-based infrastructure and .NET applications.</li>  <li>Optimized for high-performance IIS configurations with caching and compression.</li><li>Easier for organizations already using Windows Server environments.</li></ul> | <ul><li>Requires Windows Server licensing, increasing costs.</li><li>More manual setup and maintenance compared to cloud-native solutions.</li><li>Limited scalability and elasticity compared to container-based hosting.</li></ul> |
|Hosting on Azure App Service (Linux) with Containers| <ul><li>Supports containerized applications with the flexibility of Docker.</li>  <li>Fully managed PaaS with built-in scaling and monitoring.</li>  <li>Easy integration with Azure DevOps, GitHub Actions, and Azure Container Registry.</li>  <li>Cost-effective compared to Kubernetes for small-to-medium workloads.</li></ul> | <ul><li>Less control over infrastructure than running containers in AKS.</li><li>Performance tuning and debugging containerized apps can be complex.</li> <li>Limited customization compared to a full Kubernetes environment.</li></ul> |

## Related Recipes

<Row columns={2}>
  <Link title="Hosting the Web Application" link="/learn/accelerate/xm-cloud/pre-development/hosting-applications/hosting-web-application" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Sitecore ASP.NET Core SDK" link="https://doc.sitecore.com/xmc/en/developers/asp-net/latest/asp-net-core-sdk/sitecore-asp-net-core-sdk.html" />
</Row>


## Related Links

<Row columns={2}>
  <Link title="Overview of ASP.NET Core" link="https://learn.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-9.0" />
  <Link title="Host and deploy ASP.NET Core" link="https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/?view=aspnetcore-9.0" />  
</Row>