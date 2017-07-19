<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Restaurant Daejeon</title>
    <link rel="stylesheet" type="text/css" href="/css/style.css">
  </head>
  <body>
    <header>
      <img src="/img/drk.png" />
    </header>

    <nav>

      <table border="1">
	      <caption></caption>
	        <thead style="background:gray">
		        <tr>
			        <th><a href="/daejeon_restaurant.php?id=main">Home</a></th>
			        <th><a href="/daejeon_restaurant.php?id=meniu">Meniu</a></th>
			        <th><a href="/daejeon_restaurant.php?id=coreea">Coreea</a></th>
              <th><a href="/daejeon_restaurant.php?id=galerie">Galerie</a></th>
              <th><a href="/daejeon_restaurant.php?id=contact">Contact</a></th>
              <th><a href="/daejeon_restaurant.php?id=feedBack">FeedBack</a></th>
		        </tr>
	        </thead>
      </table>
    </nav>

    <img src="/img/LHJ_4127.jpg" />


    <article>
      <?php
      if(empty($_GET['id'])){
        echo file_get_contents('main.txt');
      } else {
      echo file_get_contents($_GET['id'].'.txt');
      }
      ?>
    </article>

    <footer>
      <p>
      대전광역시 유성구 대학로99
      오원재
      박병훈
      </p>


    </footer>

  </body>
</html>
