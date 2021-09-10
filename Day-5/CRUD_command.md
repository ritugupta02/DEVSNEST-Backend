## CRUD with fs module
CURD operations:
   - Create 
   - Read 
   - Update 
   - Delete

FS - File System Module

## CRUD Commands

```js
node;
```

> to import fs module we use "require()" function
```js
var fs = require("fs");
```
> In NodeJS, require() is a built-in function to include external modules that exist in separate files. require() statement basically reads a JavaScript file, executes it, and then proceeds to return the export object.

## CREATE

> To create any folder inside a directory.
```js
fs.mkdirSync("Day_5");
```

### Writing into a file
>To create a file with content.<br>
>and if file is not created then error is displayed.
```js
fs.writeFileSync('Day_5/hello.txt','Hello World!!',(err)=> {
... if(err){
..... console.log(err)
..... }
... });
```

## READ

> reads the file and returns the data <br>
> It returns a buffer, to get the actual data use "utf-8"
```js
fs.readFileSync("Day_5/hello.txt", "utf-8");
```

## UPDATE

> To append a file.
```js
fs.appendFileSync("Day_5/hello.txt", " appended data ");
```

>  To rename a file
```js
fs.renameSync("Day_5/hello.txt", "Day_5/hello1.txt");
```

## DELETE


>To delete a file
```js
fs.unlinkSync("Day_5/hello1.txt");
```

>To delete a folder
```js
fs.rmdirSync("Day_5");
```
- note: Firstly delete the file and then the folder.
