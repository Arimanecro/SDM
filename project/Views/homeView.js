module.exports = (data = null) => {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Crete+Round&display=swap" rel="stylesheet">
    <link rel="icon" type="image/png" href="favicon.png" />
    <title>🧶 Algorithm: Size Doesn't matter</title>
    <style>
    body {
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        flex-direction: column;
        background: #a6a0ff;
    }
    input {
        margin-left:5px;
        outline: none;
        border: #7f7770 thin solid;
        background:transparent;
        font-family: 'Crete Round', serif;
        font-size: 18px;
    }
    button { outline: none;}
    input::placeholder {
        text-align: center;
        color: #7100a0;
        font-size: 20px;
    }
    h1, p {
        padding: 0px;
        font-family: 'Crete Round', serif;
    }
    h1 { margin: 0 0 10px;}
    p  {margin: 0 0 0px;}
    #reg, #go {
        width: 29px;
        height: 29px;
        /*border: black thin solid;*/
        border:none;
        background: url(./img/submit.png) no-repeat;
        background-size: contain;
        vertical-align: bottom;
        margin-left: 2px;
    }
    #go {
        background: url(./img/search.png) no-repeat;
        background-size: contain;
    }
    .error, .success {
        display: block !important;
        width: 500px;
        padding: 0px 0px 0px 6px;
        background:red;
        font-family: 'Crete Round', serif;
        font-size: 18px;
    }
    .none { display: none }
    .success {
        background:#12c212;
    }
    </style>
</head>
<body>
<span class="none ${ data && Object.keys(data).length > 0 ? (data.error ? 'error' : 'success') : null}">${data && (data.error || data.success)}</span>
<h1>Registration:</h1>
<form action="" method="POST" >
<input id="login" type="text" name="login" placeholder="Login">
<input id="pass" type="text" name="password"  placeholder="Password">
<input id="bracketsReg" type="hidden" value="" name="brackets">
<button id="reg"></button>
</form>
</br>
<p>* Colon is forbidden symbol. Because login and pass will join by ":" </p>
<p>=======================================================</p>
<h1>Search:</h1>
<form action="" method="POST">
<input id="search" type="search" name="search" placeholder="Enter Login">
<input id="brackets" type="hidden" value="" name="brackets">
<button id="go"></button>
</form>
<p id="speed"></p>
<script src="js/abc.js"></script>
</body>
</html>
`;
};