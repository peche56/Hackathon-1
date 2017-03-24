angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("anon/home.html",
    "<div class=\"container\">\n" +
    "\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "\n" +
    "        <div class=\"col-lg-12\">\n" +
    "\n" +
    "\n" +
    "\n" +
    "            <input class=\"search-bar\" type=\"text\" name=\"searching\" value=\"\" placeholder=\"Search something...\" ng-model=\"query\">\n" +
    "            <button type=\"button\" class=\"btn btn-default glyphicon glyphicon-search loupe\" aria-hidden=\"true\" ng-click=\"goSearch()\"></button>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "\n" +
    "<p>{{title}}</p>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "\n" +
    "        <div class=\"col-xs-6\">\n" +
    "\n" +
    "          <iframe src=\"{{bindHTML1}}\" class=\"video\"></iframe>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-xs-6\">\n" +
    "\n" +
    "            <iframe src=\"{{bindHTML2}}\" class=\"video\"></iframe>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-xs-6\">\n" +
    "\n" +
    "            <iframe src=\"{{bindHTML3}}\" class=\"video\"></iframe>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-xs-6\">\n" +
    "\n" +
    "            <iframe src=\"{{bindHTML4}}\" class=\"video\"></iframe>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n"
  );

  $templateCache.put("anon/login.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "        <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"login()\">\n" +
    "            <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required placeholder=\"Email Address\">\n" +
    "            </div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" required placeholder=\"Password\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary btn-block\">Login</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/map.html",
    "<div id=\"map\" style=\"width: 100%; height: 500px;\"></div>\n" +
    "\n" +
    "  <script type=\"text/javascript\">\n" +
    "    var locations = [\n" +
    "      //EUROPE\n" +
    "      ['Paris'.link(\"/#!/map/paris\"), 48.85661400000001, 2.3522219000000177],\n" +
    "      ['Madrid'.link(\"/#!/map/madrid\"), 40.4167754, -3.7037901999999576],\n" +
    "      ['Lisbonne'.link(\"/#!/map/lisbonne\"), 38.7222524, -9.139336599999979],\n" +
    "      ['Rome', 41.9027835, 12.496365500000024],\n" +
    "      ['Londres', 51.5073509, -0.12775829999998223],\n" +
    "      ['Berlin'.link(\"/#!/map/berlin\"), 52.52000659999999, 13.404953999999975],\n" +
    "      ['Varsovie', 52.2296756, 21.012228700000037],\n" +
    "      ['Moscou', 55.755826, 37.6173],\n" +
    "      //ASIE\n" +
    "      ['Tokyo'.link(\"/#!/map/tokyo\"), 35.6894875, 139.69170639999993],\n" +
    "      ['Pekin'.link(\"/#!/map/pekin\"), 39.904211, 116.40739499999995],\n" +
    "      ['Bangkok'.link(\"/#!/map/bangkok\"), 13.7563309, 100.50176510000006],\n" +
    "      ['Singapour'.link(\"/#!/map/singapour\"), 1.3553794, 103.86774439999999],\n" +
    "      ['Ankara', 39.9333635, 32.85974190000002],\n" +
    "      ['Jérusalem', 31.768319, 35.21370999999999],\n" +
    "      ['Séoul', 37.566535, 126.97796919999996],\n" +
    "      //AMERIQUE\n" +
    "      ['New York'.link(\"/#!/map/newyork\") , 40.660639, -73.981934],\n" +
    "      ['Washington', 38.819167, -77.01416],\n" +
    "      ['LosAngeles', 33.976165, -118.234863],\n" +
    "      ['Mexico'.link(\"/#!/map/mexico\") , -33.665836, -99.118652],\n" +
    "      ['Santiago'.link(\"/#!/map/santiago\") , -33.950198, -70.751953],\n" +
    "      ['Brasilia'.link(\"/#!/map/brasilia\") , -15.978225, -47.8125],\n" +
    "      ['Buenos Aires', -34.972397, -58.183594],\n" +
    "      //OCEANIE\n" +
    "      ['Canberra', -35.3075, 149.124417],\n" +
    "      ['Wellington', -41.2864603, 174.77623600000004],\n" +
    "      //AFRIQUE\n" +
    "      ['Pretoria', -9.067379373933349, 17.6220703125],\n" +
    "      ['Alger', 36.753768, 3.0587560999999823,],\n" +
    "      ['Nairobi', -1.322635, 36.804199],\n" +
    "      ['Brazzaville,', -9.067379373933349, 17.6220703125],\n" +
    "      ['Le Caire', 30.023448, 31.201172],\n" +
    "      ['Rabat', 33.972522 , -6.899414],\n" +
    "      ['Tunis', 36.731842, 10.151367],\n" +
    "    ];\n" +
    "\n" +
    "    var map = new google.maps.Map(document.getElementById('map'), {\n" +
    "      zoom: 3,\n" +
    "      center: new google.maps.LatLng(40, 0),\n" +
    "      mapTypeId: google.maps.MapTypeId.ROADMAP\n" +
    "    });\n" +
    "\n" +
    "    var infowindow = new google.maps.InfoWindow();\n" +
    "\n" +
    "    var marker, i;\n" +
    "\n" +
    "    for (i = 0; i < locations.length; i++) {\n" +
    "      marker = new google.maps.Marker({\n" +
    "        position: new google.maps.LatLng(locations[i][1], locations[i][2]),\n" +
    "        map: map\n" +
    "      });\n" +
    "\n" +
    "      google.maps.event.addListener(marker, 'click', (function(marker, i) {\n" +
    "        return function() {\n" +
    "          infowindow.setContent(locations[i][0]);\n" +
    "          infowindow.open(map, marker);\n" +
    "        }\n" +
    "      })(marker, i));\n" +
    "    }\n" +
    "  </script>\n"
  );

  $templateCache.put("anon/navbar.html",
    "<nav class=\"navbar navbar-default\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\"></a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"navbar\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"anon.home\">Home</a></li>\n" +
    "\n" +
    "            </ul>\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li>\n" +
    "                    <li ui-sref-active=\"active\"><a ui-sref=\"anon.login\" ng-hide=\"auth.isAuthenticated()\">Login</a></li>\n" +
    "                    <li ui-sref-active=\"active\"><a ui-sref=\"anon.register\" ng-hide=\"auth.isAuthenticated()\">Register</a></li>\n" +
    "                    <li ui-sref-active=\"active\"><a ui-sref=\"anon.map\" ng-hide=\"auth.isAuthenticated()\">Map</a></li>\n" +
    "                    <li ui-sref-active=\"active\"><a ui-sref=\"user.dashboard\" ng-show=\"auth.isAuthenticated()\">Dashboard</a></li>\n" +
    "                    <li><a ng-click=\"logout()\" ng-show=\"auth.isAuthenticated()\" href='#'>Logout</a></li>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n"
  );

  $templateCache.put("anon/register.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "        <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"register()\">\n" +
    "            <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required placeholder=\"Email Address\">\n" +
    "            </div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" required placeholder=\"Password\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary btn-block\">Register</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("user/dashboard.html",
    "Dashboard de {{user.email}}\n"
  );

  $templateCache.put("user/navbar.html",
    "<nav class=\"navbar navbar-default\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\"></a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"navbar\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"user.dashboard\" ng-show=\"auth.isAuthenticated()\">Dashboard</a></li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"user.profile\" ng-show=\"auth.isAuthenticated()\">Profile</a></li>\n" +
    "\n" +
    "            </ul>\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"anon.home\">Website</a></li>\n" +
    "                    <li><a ng-click=\"logout()\" ng-show=\"auth.isAuthenticated()\" href='#'>Logout</a></li>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n"
  );

  $templateCache.put("user/profile.html",
    "Profile de {{user.email}}\n"
  );

}]);
