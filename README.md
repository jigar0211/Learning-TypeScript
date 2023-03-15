# Learning-TypeScript ![typescript-22](https://user-images.githubusercontent.com/122254160/225262064-ef7a65d1-1b86-40b9-bd93-ace56cb0025f.png)

### **About TyeScript**
TypeScript is an open-source programming language that was first released in 2012. It was developed and maintained by Microsoft and is a superset of JavaScript. TypeScript is designed to make it easier to build large-scale applications by adding features that help with code organization, maintainability, and scalability.

One of the main features of TypeScript is its strong type system. Unlike JavaScript, which is dynamically typed, TypeScript allows developers to define types for their variables, functions, and classes. This helps catch errors early in the development process and makes it easier to maintain and scale complex codebases. TypeScript also supports static type checking, which means that the compiler can catch many errors before the code is even run.

In addition to its strong type system, TypeScript also includes other features that are designed to help with code organization and maintainability. For example, TypeScript includes support for interfaces, which allow developers to define contracts for their functions and classes. TypeScript also includes support for modules and namespaces, which make it easier to organize code into logical units and avoid naming collisions.

Another feature of TypeScript is its support for ECMAScript standards. TypeScript supports the latest version of ECMAScript, which includes many new features that are not yet supported by all browsers. TypeScript can also transpile down to older versions of ECMAScript, making it possible to use modern language features while still supporting older browsers.

## ![icons8-installing-updates-22](https://user-images.githubusercontent.com/122254160/225263873-cf5e8900-8799-415d-b235-5c07c416f58f.png) **Complete Inilizatoin Of TypeScript** 
#### Step 1 : install Ts in your IDE
```
npm install -g typescript
```
> Write this command in yout IDE's Terminal
#### Step 2 : Create src and build folder for your project
![Screenshot from 2023-03-15 14-57-16](https://user-images.githubusercontent.com/122254160/225266911-d3885509-9ed2-411f-a485-4e414ea972cf.png)
#### Step 3 :  Put all the html and js file inside the build folder & all the typescript file will be at the src folder
![Screenshot from 2023-03-15 15-02-17](https://user-images.githubusercontent.com/122254160/225267732-172a9f90-e71a-40cc-8c60-cd139e29de5e.png)
#### Step 4 :  Create a config file Using this command 
``` 
tsc --init
```
> it will create **tsconfig.json** file

#### Step 5 :  Modify mantioned code in ```tsconfig.json``` 
```
"rootDir": "./initializeTS/src", // here you give your src folder path
"outDir": "./initializeTS/build/js", // Here you give your jsvascript file path and 'build/js' will create js folder inside the build folder

// Add this line of code at the end of the tsconfig.json file
,
  "include": [
    "initializeTS/src"
  ]
```
#### Step 5 :  run this command after make changes in json file it will update all the changes of that are maked in json file.
```
tsc -w 
```
