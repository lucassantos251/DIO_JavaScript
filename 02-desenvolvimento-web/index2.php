<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="/resources/demos/style.css">
    <style type="text/css">
        .linha
        {
            font-weight: bold;
            color: green;
            padding-left: 10px;
            line-height: 50px;
        }
    </style>
    <title>Meu Segundo Site em PHP!</title>
</head>
<body>
    <?php
        for ($i = 0; $i < 10; $i++)
        {
            print("<span class=\"linha\">Linha número " . $i . "</span><br />");
        }
    ?>
    <div id="accordion">
  <h3>Gaot 0</h3>
  <div>
    <img src="/img/gato0.jpg">
  </div>
  <h3>Gaot 1</h3>
  <div>
    <img src="/img/gato1.jpg">
  </div>
  <h3>Gaot 2</h3>
  <div>
    <img src="/img/gato2.jpg">
  </div>
  <h3>Gaot 3</h3>
  <div>
    <img src="/img/gato3.jpg">
  </div>
</div>
</body>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
<script type="text/javascript">
     $(function() 
    {
        $( "#accordion" ).accordion();
    });
    $(document).ready(function()
    {
        alert("Wee!");
    });
</script>

</html>