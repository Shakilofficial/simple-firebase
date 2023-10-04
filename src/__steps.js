/* 
                <------------------------->
                    INITIAL INSTALLATION
                <------------------------->
1. Visit: console.firebase.google.com
2. Create Project (Skip Google Analytics)
3. Register App (create config)
4. install firebase (Command: npm install firebase)
5. Add config file to your project
6. DANGER!!! ------> Do not publish or make firebase config to public by pushing those to github

                <------------------------->
                        INTEGRATION
                <------------------------->
7. Visit: Go to Docs > Build > Authentication > Web > Get Started 
8. export app from firebase.init.js / firebase.config.js file: export default app
9. login.jsx : import getAuth from firebase / auth
10. create const auth = getAuth(app);

                <------------------------->
                    PROVIDER SETUP
                <------------------------->
11. import googleAuthProvider  and create a new Provider
12. use signInWithPopUp and pass auth and provider 
13. Activate SignIn Method (Google, facebook, github,etc)
14. Vite: change 127.0.0.1 to localhost
15. 
*/