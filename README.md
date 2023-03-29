# This is a starter for Nextjs,  Tailwind, Sanity, React-Query built in Typescript.

You can use this if you would like to use Sanity as your CMS and have your Nextjs App ready to go.
## Steps to create and run the app

1. To use this starter run `npx create-next-app [your-project-name] -e https://github.com/julimancan/t3-sanity-starter`

2. cd into your project and run `npm install`

3. Create your Sanity project
  - run `npm -y create sanity@latest`
  - select Create a new Project
  - Put your project name 
  - Use your preferred dataset option.
  - Exit the tool by pressing `Esc` without providing output path as the studio is already embedded in the starter.
  - Go to [manage.sanity.io](https://manage.sanity.io) and select your project to retrieve the project ID
  - In the sanity manager go to the API tab and add a CORS origin with `http://localhost:3000` as the URL.
  - Create a .env file using the env.example as an example and input project id and dataset (usually "production")

4. run `npm run dev` to start your development server.

Your t3 app will be running on `http://localhost:3000` and your studio in `http://localhost:3000/admin`

There's a basic setup to add more input fields for a homepage and site settings.

Checkout the sanity documentation [Sanity Docs](https://www.sanity.io/docs) for more information on how to create your Studio.

For information on how to use Environment Variables go to [T3 Stack Docs](https://create.t3.gg/en/usage/env-variables/)