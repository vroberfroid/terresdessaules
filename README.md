# Terresdessaules

## Set up
- créer une instance d'un serveur Linux EC2 chez Amazon
- installer nodejs depuis internet
- ajouter ceci dans .bashrc: ``export PATH=$PATH:/home/ec2-user/prg/node-v10.15.0-linux-x64/bin``
- installer angular : ``npm install -g @angular/cli``
- créer le nouveau projet : ``ng new terresdessaules``
- modifier angular.json et ajouter le port et le host 0.0.0.0:
```
   "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "terresdessaules:build",
            "port": 80,
            "host": "0.0.0.0"
          },
```
- ajouter une règle de sécurité dans l'instance: instance > click on launch-wizard-1 dans la colonne Security Group
  La règle est HTTP port 80 - Everyone
- Démarer le projet en root (uniquement root peut activer port 80): sudo su -; ng serve
- Ajout de nodejs comme un service
  Fichier /etc/systemd/system/nodejs.service à créer avec comme contenu:
```
    [Unit]
    Description=My NodeJS Service
    After=syslog.target network.target

    [Service]
    EnvironmentFile=/root/nodejs-env
    User=root
    Group=root
    WorkingDirectory=/home/ec2-user/angular/terresdessaules/
    ExecStart=/usr/bin/ng serve
    Restart=on-failure
    SuccessExitStatus=143

    [Install]
    WantedBy=multi-user.target
```
- Démarrer le service :  ``systemctl start nodejs.service``
- Obtenir les logs du service: ``systemctl statue nodejs.service``
- Faire le lien symbolique : ``ln -s /home/ec2-user/prg/nodejs/bin/ng /usr/bin/ng``
- Check firewall redhat:
    ``yum install firewalld``


## Angular HELP

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
