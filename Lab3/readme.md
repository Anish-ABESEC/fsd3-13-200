localhost -URL
127.0.0.1 -IP address

control+c for stop the server
every request from client have a pair of {request,response}
npm = node package manager 
## Node Pacakage Manager 
used to install,run,unstall ant program/project and pacakage 
-npm install <pacakageName>
-npm unistall<pacckageName>
to use npm,the project must be npm project,
to create npm project we can
-npm init -y
-it creates a package.json file automatically 
pacakage.json holds all the information realted to intall
pacakage form npm
- update package.json, set type = 'module'
-it also create a folder node_modules automatically
-node_modules holds the pacakage/library files
-generally we ignore the node_module by .gitignore
Nodemon- it restart the server automatically when file is changes,to install
>npm i nodemon -D
Note: -D flag will install this packages as developer dependency
- to execute any program ,update the package.json file them start the server as
<b>npm run dev</b>
-start -> it will execute the app on deployment 
-dev -> it will start server in development phase (only for developer)
-res: it will return contents (json/html/plain) to the user/clint
-req: it will retrive the information from client to the server
-server send also statuscodes to the client , that indicates the error /success message 
## Status Codes 
-200 ->Ok
-201 ->Created 
-400 -> Badrequest
-404 -> Not found 
-403 -> forbidden 
-500 -> nternal Server Error

## Content Type
- text/plain
- text/html
- application/json
- text/css
the content type and status code can be send back to clint by two ways 
1. res.writehead
2. res.setheader
3. res.statusCode

## Response as html content
1. res.end
   end("any html content/tag")

2. html file
    - read by createReadStream
    - file with res

## send html file to client

1. html file
- read 


server returns data only not html contents because html contents will be written by frontend devlopers.
The data is in JSON format
JSON always stors data in key value-pairs enclosed by {}
Array can be stored by []
One pair of {} will represent one object & its property will be separated by comma (,)
eg.

```
{id: ',
name : "Laptop"
price : 65000
rating : 4.6
reviews : 321
}
```


## Headers
- headers is used to tell client the tyope of data send by the server . it may be HTML files,JSON data      plain ,text files , CSS files any tokens(for login) 

1. text/plain -> text file
2. text/html -> html contents/files 
3. application/json -> contents/file
4. text/css -> stylesheet
5. application/auth -> for tokens 
   the headers can be set by  res object at server side by two ways

   <!-- THIS IS FOR REVISION -->