# asset-management-server

----------------------Definitions------------------------------------------------------
1.Here whenever we create a backend we can't access directly, we can access it only through front end.
So inorder to check background we are using it as backend server.

2. when we develop an entire application, we need to check whether both front end back end.
So indorder check both front end and back end separately we are using separate ports.
By using these ports we can check both front end and back end separately.

3.In react package.json which we mention the port for front end in port folder.
In Proxy we mention the port for back end.

4.password hashing
 
 a.get the validated password.
 b. generate the salt of ur wish length.
 c.generate hash by using salt+password = hash ----------------------->> store this both generated salt and hash in db
 
 To access
 
 a. get the password.
 b. get the corresponding salt.
 c. generate the hash again by using algorithm i.e hash = salt + password
 d. compare the DB stored hash with the generated hash
 
 
 useUnifiedTopology: true 
 
 5.Both Model and Schema are connected to the MongoDb

For testing
6.Inorder to check whether it is working or not , we need to call this service in server.js

7.From the front end we are getting as objects and we can pass the same objects to the backend

8.From the front end we will get the response in requestBody and it will be in the form of OBJETCS

9.There are 3 ways to pass the parameter from front end
  a. URL PARAM
  b.URL QUERY
  c.FORM DATA
  
10. req.query applicable for PUT,POST,DELETE,GET
req.param applicable for PUT,POST,DELETE,GET
req.body available for PUT,POST,DELETE

11.parameter = 'id'; object destructuring
object = {a : 'b};


 ----------------------Problems and Solutions------------------------------------------------------