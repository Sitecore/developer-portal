---
title: 'Troubleshooting Local Dev Container Environment'
description: 'Troubleshoot common issues including container errors, network problems, and platform-specific issues.'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2025-01-31'
---

## Context
In Sitecore XM Cloud, Docker might be required for [full-stack development](https://doc.sitecore.com/xmc/en/developers/xm-cloud/using-docker-for-full-stack-development.html). Setting up your [local environment](https://doc.sitecore.com/xmc/en/developers/xm-cloud/set-up-your-local-development-environment.html) might not required this, but occassional. Managing and troubleshooting these containers can be challenging due to issues like container connectivity, authorization failures, and platform-specific inconsistencies. 

Developers may encounter difficulties when containers can’t communicate with each other, struggle to access DNS services, or face errors during code deployments.

## Execution
When you create an XM Cloud project using the XM Cloud Deploy app and choose the foundation template as the source for the initial deployment, the process adds the foundation template to the source control repository you configured for the initial environment.

You can use the resulting codebase to set up your local development environment based on Docker containers. We will highlight some of the key elements that are provisioned and workflows the developer can employ.

### Getting Started
Before you can run the Docker based developer environment locally, you should ensure that your machine meets the [hardware and software requirements](https://doc.sitecore.com/xmc/en/developers/xm-cloud/preparing-to-run-the-xm-cloud-foundation-template-locally.html).

Once you have confirmed you meet the requirements, then you can follow [the walkthrough](https://doc.sitecore.com/xmc/en/developers/xm-cloud/set-up-your-full-stack-xm-cloud-local-development-environment.html) showing how to get your local environment up and running.

The rest of this recipe will discuss the different project elements related to running the solutions locally, provide an overview of some commonly used developer flows, and finally highlight troubleshooting steps.

### Folder structure and files
When you clone the xmcloud-foundation-head repository, you can find a folder /local-containers and some files used for spinning up your local containers. This recipe will highlight these different elements and give an overview of what they’re used for.
| File | Description |
| --- | ------ | 
|<code>.dockerignore</code> | This is a configuration file that describes files and directories that you want to exclude when building a Docker image. Generally, you only want to include files and folders into the image you built that are required for your solution to run, this allows you to keep the size of your built images as small and performant as possible.<br/><br/> The file will usually exclude source folders, temp folders, build interim folders like <code>obj/</code> and <code>debug/</code>, and so on. <br/><br/> Further information can be found on the [Docker Documentation Site](https://docs.docker.com/build/concepts/context/#dockerignore-files) |
|<code>/local-containers/.env</code>  |Contains environment variables that are used in your containers. You can find hostnames, usernames, passwords, registry definitions and more in there. |
|<code>/local-containers/docker-compose.yml</code>  | This file containers the initial definition of the Docker Containers you will run locally. These all the base services are defined that will be created when you start your containers. <br/><br/>In most cases you won’t make any changes to this file. If you need to change anything related to your Container definitions, then this should be made in the <code>docker-compose.override.yml</code> described below. |
|<code>/local-containers/docker-compose.override.yml</code>  | This file gives you the ability to override the base services defined in your <code>docker-compose.yaml</code>. It allows you to change any of the default values defined, and ensures you have a single location for all your Docker Container customisations. <br/><br/> This is also where you would add any new Container definitions you require – this is a common requirement when working on multi-site implementations. |
|<code>/local-containers/scripts/init.ps1</code>  |This is a PowerShell script that is used initially when you configure your local environment. It performs a series of steps to initialise your repository ready to be run. Some of the actions it performs are:<ul><li>Populating .env variables.</li><li>Installing Docker tooling packages. </li><li>Generating Certificates required to enable HTTPS locally. </li><li>Configures windows HOSTS entries.</li></ul> |
|<code>/local-containers/scripts/up.ps1</code>  | This is a PowerShell script used to take the initialised repository, and run all of the different elements locally. When this script has completed successfully you will be left with a set of running containers, powering the different XM Cloud elements and sites. At this point you’re ready to begin your development activities. <br/><br/> This script performs a few different activities and can take several minutes to complete. Some of the actions it performs are: <ul><li>Building local Container images.</li><li>Creating instances of local Containers from those built images.</li> <li>Pushing serialised content into the Databases.</li></ul>|
|<code>/local-containers/scripts/down.ps1</code>  | This is a PowerShell script used to tidy up your developer machine when you have completed your work. It doesn’t change anything in the repository itself but stops all the running Containers freeing up system resources. <br/><br/> This should be run before shutting down your machine, to ensure that it isn’t in an invalid state when attempting to run the solution again in future. |

#### Docker folder
In the repository, you will see there is a docker folder in <code>/local-containers/docker</code>, this contains a lot of the assets needed to build and run the Docker containers. You can see an example of the contents below, with an explanation of the different elements:

<ol>
</ol>
<li><code>build/</code> - contains all the [build definition files](https://docs.docker.com/reference/cli/docker/buildx/build/) for your docker images.</li>
<li><code>data/</code> - contains data for your containers, like CM logs, solr data, database files. this folder is mapped in the <code>docker-compose.override.yml</code> to the respective container targets. This is accomplished using [Docker Volumes](https://docs.docker.com/engine/storage/volumes/).</li>
<li><code>deploy/</code> - to deploy configuration, assemblies, and content into your running Docker environment, run a Publish from Visual Studio. The /local-containers/docker/deploy folder is the publish target defined in the PublishProfile and in the <code>.env</code> file, the <code>LOCAL_DEPLOY_PATH</code> is set to the relative path of the *local-containers\docker\deploy* folder. Note this is just for information, <strong>customising the XM Cloud instance is not recommended</strong>.</li>
<li><code>traefik/</code> - this is where your local encryption keys are stored.</li>
<li><code>clean.ps1</code> – this is a PowerShell script used to clean to data that has been persisted into the <code>/data</code> folder. This is useful when you need to reset the repositories data back to an initial state. Note your Containers must not be running for this script to complete successfully.</li>

### Typical Daily Developer Activities
You only have to run the <code>init.ps1</code> script once, to initialize your setup. From then on you start up your containers running the <code>up.ps1</code> script. When you are done for the day, remember to run the <code>down.ps1</code> script to stop the containers. This will keep your data and you can continue the next day where you left off - just run up.ps1 again.

Should you need to reset your local instance, run the <code>/local-containers/docker/clean.ps1</code> to clean up all stored data. This will delete all local data and give you a clean XM Cloud instance again.

#### Deploying code changes
Once you have a running set of Containers and you can successfully access the site in your browser, then you’re ready to begin your development activities. The site is now running directly from the source assets located in the <code>/headapps/SITE_NAME</code> folder.

This means you can work as if the site was running directly on your machine, when you edit those files, any changes are instantly reflected on the site through Next.JS hot-reload functionality.

#### How to check the logs of your containers
If you run into issues either starting the containers, or when you make changes to the codebase then you may need to debug any problems you hit. Getting data from the running containers is slightly different compared to if the site was running directly on your development machine.

There are two common ways to get logging information from the Docker Containers, either via the Docker UI or by using the Docker CLI.

<strong>Debugging with the Docker UI</strong><br/>
When you’re running Docker Desktop you get the ability to debug via UI. This can be accessed from the Icon in your System Tray. Once loaded you will see a UI that looks like the screenshot below.

Below are some further considerations for running XM Cloud sites locally through Docker. 
<figure><img src="/images/learn/accelerate/xm-cloud/docker-desktop.png" alt="Docker Desktop"/></figure>

The numbers above call out some key areas:
<ol>
<li>The Containers menu, this is where you can see details about the different containers that you have currently running. Note that this screen will be empty before you run the <code>up.ps1</code> script.</li>
<li>This is the list of Containers that are currently running.</li>
<li>This is the status column that shows what condition the Containers are in currently in. You can read more about [Docker Status on the Docker Documentation](https://docs.docker.com/reference/cli/docker/container/ls/#status).</li>
</ol>

If you have a container that isn’t showing a status that is “healthy” then you might need to investigate if there are any issues. By clicking on the Name of the Container you can drill down and find more details, including a live feed of STDOUT and STDERR for the container, which will show the logs that help you diagnose any issues.

Note that some containers Status may show as <code>Exited</code> as can be seen in the image above, this is expected as they're short-lived containers designed to perform initialisation tasks and then exit upon completion.

<strong>Debugging with the Docker CLI</strong><br/>
If you’re not using Docker Desktop, or if you prefer to use a CLI over a UI, then the Docker CLI is another option to help you debug any issues. You can view information on the different commands available in the Docker CLI on the [Docker Documentation](https://docs.docker.com/reference/cli/docker/container/ls/).

There are a couple of commonly used commands when working with XM Cloud Containers.

<strong>1. List all running Containers</strong> - You can run <code>docker ps -a</code> to show all running Containers. As you can see in the image below, this gives you information on each of the Containers and their current Status.

<figure><img src="/images/learn/accelerate/xm-cloud/Docker-Status.png" alt="Docker Status"/></figure>

More information on the options for the docker ps command, can be found on the [Docker Documentation](https://docs.docker.com/reference/cli/docker/container/ls/).

Some containers Status may show as “Exited” as can be seen in the image above, this is expected as they’re short-lived containers designed to perform initialisation tasks and then exit upon completion.

If have a container that isn’t showing a status that is “healthy” then you might need to investigate if there are any issues.

<strong>2. Viewing Container Logs</strong> - To view a Containers logs, you can take the ID output by the <code>docker ps -a</code> command we ran above, and use it to call <code>docker logs CONTAINER_ID</code>. You can read more about the docker logs command on the [Docker Documentation](https://docs.docker.com/reference/cli/docker/container/logs/).

In the screenshot below you can see we have run this command for the rendering container. Running the <code>docker logs</code> command outputs the content for STDOUT and STDERR for the Container.

<figure><img src="/images/learn/accelerate/xm-cloud/Docker-logs.png" alt="Docker Logs"/></figure>


## Insights
Below are some further considerations for running XM Cloud sites locally through Docker. 

### <strong>What is Traefik?</strong>

When you look at the running Containers, you will see one called [Traefik](https://traefik.io/traefik/) which is a Cloud Native Application Proxy. In our case we are leveraging it as a [Reverse Proxy](https://en.wikipedia.org/wiki/Reverse_proxy). It is responsible for taking the requests from the browser, and routing them through to the correct Container, based on the Host Header used.

Further informaton can be found on the [Traefik Documentation](https://doc.traefik.io/traefik/).

### <strong>General Troubleshooting</strong>

Below you will find some common issues that people run into when attempting to run XM Cloud sites locally with Docker, and their solutions.

#### Forgetting to run down.ps1

As mentioned above, if you shut down your development machine without running the <code>down.ps1</code> script, then when you start your machine again the Containers will still exist but will in an Exited state, which will stop the <code>up.ps1</code> from being able to bring them back up again successfully.

To fix this you need to run the down.ps1 script to tidy up these legacy resources before you can successfully run the <code>up.ps1</code> script.

#### Docker Compose v1 Deprecated

As of June 2023 Docker Compose v1 has been deprecated and removed. The XM Cloud Foundation head was created before this date and was originally built against this earlier version. It has since been migrated to run against v2, however if your repository was created before then, you will also need to update your repository. Further information can be found on [Upgrading to Docker Compose v2](https://robearlam.com/blog/docker-compose-v2) post.

#### Containers cannot communicate with each other

You can run into an issue where the different Containers cannot communicate with each other. This is typically caused by security policies applied within a company network.

The solution to this is to add hostnames to every container and switch from <code>process</code> to <code>hyperv</code> isolation. Further information can be found on [Sitecore Stack Exchange](https://sitecore.stackexchange.com/questions/26176/sitecore-10-docker-containers-cant-communicate-to-each-other).

#### Containers are unable to access Docker DNS

You can run into an issue where Containers are unable to access the Docker DNS. This is typically caused by a company's firewall policies. Try adding <code>.local</code> token to the hostnames or update the <code>Apply local firewall rules</code> group policy setting to <code>Yes</code> for the computer running Docker (your host machine). Then restart your host machine. You can read more about this solution on [Sitecore Stack Exchange](https://sitecore.stackexchange.com/questions/27506/local-sitecore-containers-unable-to-access-docker-dns).

#### CM container is unable to authorize and therefore startup fails

Sometimes the CM Container is unable to authorise and therefore startup fails, this can be due to invalid DNS settings. To solve this, make sure you set the DNS in your Docker Desktop settings:

```typescript
{
  "dns": [
    "8.8.8.8"
  ]
}
```
<br/><br/>
#### CM Container is unhealthy.

Sometimes the CM Container can have an <code>unhealthy</code> status when starting up. This indicates that the application running inside the Container has failed to start successfully. To debug this, you can check the logs for the Container as described above.

If this doesn’t provide any useful information, then you can open a Shell into the container and check the output of the Healthz page.

To do this using the Docker CLI you can run the following command:

```typescript
 docker exec -it <<CONTAINER_ID>> cmd
```
<br/><br/>
 Once connected you can then issue the following command to view the output of the healthz page:

```typescript
curl http://127.0.0.1/healthz/ready
```
<br/><br/>
This can at times give more detailed information describing why the application inside the Container is unable to start.

#### Network already exists

You can end up in a state where a Docker Network created by a previous set of Containers hasn’t been tidied correctly and is stopping your Containers from launching. In this scenario you will see an error that looks something like:

```typescript
A network with name sxastarter_default exists but was not created by compose. Set external: true to use an existing network.
```
<br/><br/>
To fix this, you need to clear your existing Docker Networks, you can list the networks you have on your system by using the <code>docker network ls</code> command, then remove them by using the <code>docker network rm command</code>. You can see an example of this in the image below:

<figure><img src="/images/learn/accelerate/xm-cloud/Docker-network.png" alt="Docker Network"/></figure>


### <strong>Corporate Machines - Software and Network Restrictions</strong>

A lot of corporations require certain security software and network restrictions to be placed on a developer’s machine. This can take the form of VPN’s, Antivirus Software, and other types of software designed to monitor and restrict certain activities.

These can all affect the ability to successfully run a Container based development workflow. If you are having issues outside of what is described above it is advised to see if you can replicate the issue on a machine without the corporate software installed, if you don’t see the same issues then you will need to work with your IT department to try and narrow down the cause of the issue.

### <strong>Windows vs Linux / MacOS Development Machines</strong>

Everything described above is assuming that you are running a Windows based machine. If you’re running a Linux or MacOS based development machine, then you won’t be able to use the Docker based approach that has been described.

This is due to the CM Container being based on a Windows Container Image, therefore requiring a Windows based Host Machine.

If you’re running a non-Windows based machine, then your best option is to run the head in isolation and the develop against a Cloud endpoint for its data. This will most likely be the CM Preview API for a Non-Production XM Cloud instance: detail can be found on [Set up your local development environment](https://doc.sitecore.com/xmc/en/developers/xm-cloud/set-up-your-local-development-environment.html).

### <strong>Base Image Versions</strong>

As mentioned above the XM Cloud Container Images are Windows based Images. At the time of writing this article the repository is setup to leverage <code>ltsc2022</code> for its base images. If you're running a later Host OS than this then you will want to change to match your Host OS version. You can do this by setting the <code>$baseOs</code> parameter when you run the <code>init.ps1</code> script.

You will always want to use the latest base image version that your Host OS supports as with each release Microsoft is making the images smaller and faster, improving the speed of your development experience. You can read more about Windows Containers Host OS compatibility on the [Microsoft Learn site](https://learn.microsoft.com/en-us/virtualization/windowscontainers/deploy-containers/version-compatibility?tabs=windows-server-2022%2Cwindows-11).

### <strong>SaaS Considerations</strong>

Sitecore XM Cloud is a SaaS application, meaning that its various application elements are hosted by Sitecore for the customers. When performing Docker based local development, you’re running a subset of the full SaaS functionality locally. This means that there are some elements that isn’t not possible to run on your development machine. Some application elements like Pages, Components & Forms amongst others are not able to be run locally.

## Related Documentation

<Row columns={2}>
  <Link title="Preparing to run the XM Cloud foundation template locally" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/preparing-to-run-the-xm-cloud-foundation-template-locally.html" />
    <Link title="Set up your full-stack XM Cloud local development environment" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/set-up-your-full-stack-xm-cloud-local-development-environment.html" />
</Row>





