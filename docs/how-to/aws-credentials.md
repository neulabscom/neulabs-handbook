---
id: aws-credentials
title: Aws Credentials
slug: /how-to/aws-credentials
---

# Utenze SSO

**Descrizione**

Per accedere agli account AWS è necessario avere un'utenza sso, che viene creata e fornita dal team DevOps, ogni utenza ha la possibilità di accedere solo agli account assegnati. 


**Logica SSO**

Come detto in precedenza ogni utente una volta effettuato il login vedrà solamente gli account del proprio dominio di lavoro, e ad essi, potrà accedere con i ruoli specifici assegnati al gruppo di cui fa parte l'utenza.

Un esempio pratico:

- Utente Mario Rossi effettua il login
- Vede due account: AppProduction e AppStaging
- Per ogni account potrà avere ruoli diversi per accedere:
    - AppProduction ruoli: Deployer e ReadOnly
    - AppStaging ruoli: Developer e ReadOnly

Ogni untente dovrà:

- Attivare il MFA per una maggiore sicurezza
- Cambiare la password ogni 90gg


# Gestione credenziali

La gestione delle credenzili per una maggiore flessibilità e sicurezza può esse gestita con [Leapp](https://github.com/Noovolari/leapp) che consente di effettuare in modo veloce l'accesso SSO login e utilizzare in modo facile i vari ruoli associati agli account.
