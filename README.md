# Cumpa 2.0

## Project requirements
- [Docker desktop](https://www.docker.com/products/docker-desktop)

## Run project
```sh
# run from root directory
npm run docker-dev
# notice you don't need to run npm install or anything
```
This will start both a MySQL instance and the server. It may take a while to start, but once it's running there's almost no need to stop it. The project has `Hot Module Replacement` configured, meaning any change to the source code will be visible on file save. The only time you need to restart the server is when there's a change in dependencies.

Open your browser and go to http://localhost:3000/

You can access the MySQL instance at port 9995. (user=root, pass=root)

## Documentation
- [Next js](https://nextjs.org/learn/basics/getting-started)
- [React js](https://reactjs.org/docs/introducing-jsx.html)
- [Express js](https://expressjs.com/en/guide/routing.html)
- [Sequelize ORM](https://sequelize.org/master)
- [Bulma css](https://bulma.io/documentation)

## Contributing
Before contributing to this project make sure to read the [Contribution guideline](CONTRIBUTING.md)

## Functionality:
- Online booking system for fitness classes
- User register
- User login
- Amigo/Gym user toogle button
- Edit profile
- Activities

## Gym dashboard CRM
- List of clients who attended, only if attended. Show name, phone number and class they attended
- Gym dashboard, samples
- https://startbootstrap.com/previews/sb-admin-2/
- https://copilot.mistergf.io/?ref=madewithvuejs.com

## App dashboard
- Check box to change gym status, true/false (default false)
- Leads, total, percentage, comparison last period
- Convertion rate
- Retention rate
- Average time on page, last week, comparison last period
- Form abandom rate

## Freelancer requirements:
- America's time zone
- GitHub user
- Fluent english or spanish
- TeamViewer or Anydesk
- Skype call if necessary

Thanks for reading the project<br>
Marcelo
