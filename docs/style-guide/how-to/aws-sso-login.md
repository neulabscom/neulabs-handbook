---
id: aws-sso-login
title: AWS SSO Login
slug: /style-guide/how-to/aws-sso-login
---

# AWS SSO Login

**Description**

To access AWS accounts, you must have an SSO user, created and provided by the DevOps team; each user can access only the assigned accounts. 


**Logic SSO**

As mentioned earlier, once logged in, users will see only the accounts in their working domain, and to them, they can access them with the specific roles assigned to the group to which the user belongs.

A practical example:

- User Mario Rossi logs in
- He sees two accounts: AppProduction and AppStaging.
- For each account, he will be able to have different roles to log in:
    - AppProduction roles: Deployer and ReadOnly
    - AppStaging roles: Developer and ReadOnly

Each user will need to:

- Enable MFA for added security
- Change password every 90gg

# Local credential management

Local credential management for greater flexibility and security can be managed with [Leapp](https://github.com/Noovolari/leapp), which enables fast SSO login and easy use of the various account roles.

We recommend avoiding creating and saving credentials classically as they become unmanageable, insecure, and not easily portable. Through **Leapp** does synchronization of credentials automatically, allows profile management in an easy and manageable way, and is more secure as it encrypts the file containing the temporary credentials generated in real-time when you ask to log in.