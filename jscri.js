const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Calculator</title>
      
  </head>
  <style>
    #clear{
        width: 130px;
    }

    .formstyle{
        width:130px;
        height:296px;
        margin:auto;
        border:2px solid black;
    }

    input{
        width:40px;
        background-color: aqua;
        color:white;
    }
    input:hover{
        cursor: pointer;
        background-color: rgba(12, 10, 10, 0.897);
    }
    input:active{
        background-color: blueviolet;
    }

    #answerstyle{
        width: 122px;
        background-color: burlywood;
        cursor:inherit;
    }
  </style>
  <body>
      <div class="formstyle">
          <form name = "forms">
              <input type="text" name = "answer" id = "answerstyle"><br><br>
              <input type="button" value=" 1 " onclick = "forms.answer.value+='1'">
              <input type="button" value=" 2 " onclick = "forms.answer.value+='2'">
              <input type="button" value=" 3 " onclick = "forms.answer.value+='3'">
              <br><br>
              <input type="button" value=" 4 " onclick = "forms.answer.value+='4'">
              <input type="button" value=" 5 " onclick = "forms.answer.value+='5'">
              <input type="button" value=" 6 " onclick = "forms.answer.value+='6'">
              <br><br>
              <input type="button" value=" 7 " onclick = "forms.answer.value+='7'">
              <input type="button" value=" 8 " onclick = "forms.answer.value+='8'">
              <input type="button" value=" 9 " onclick = "forms.answer.value+='9'">
              <br><br>
              <input type="button" value=" + " onclick = "forms.answer.value+='+'">
              <input type="button" value=" - " onclick = "forms.answer.value+='-'">
              <input type="button" value=" * " onclick = "forms.answer.value+='*'">
              <br><br>
              <input type="button" value=" / " onclick = "forms.answer.value+='/'">
              <input type="button" value=" 0 " onclick = "forms.answer.value+='0'">
              <input type="button" value=" = " onclick = "forms.answer.value = eval(forms.answer.value)">
              <br><br>
              <input type="button" value=" ^ " onclick = "forms.answer.value+='^'">
              <input type="button" value=" & " onclick = "forms.answer.value+='&'">
              <input type="button" value=" | " onclick = "forms.answer.value+='|'">
              <br><br>
              <input type="button" value="CLEAR ALL" onclick = "forms.answer.value=''" id = "clear">
          </form>
      </div>
  </body>
      <script src="jscri.js"></script>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});