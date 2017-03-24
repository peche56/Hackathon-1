angular.module('app')
    .config(function($stateProvider, $urlRouterProvider, AccessLevels) {
        $stateProvider
            .state('anon', {
                abstract: true,
                data: {
                    access: AccessLevels.anon
                },
                views: {
                    'navbar@': {
                        templateUrl: 'anon/navbar.html',
                        controller: 'NavbarController'
                    }
                }
            })
            .state('anon.home', {
                url: '/',
                views: {
                    'content@': {
                        templateUrl: 'anon/home.html',
                        controller: 'MainController'
                    }
                }
            })

            .state('anon.map', {
                url: '/map',
                views: {
                    'content@': {
                        templateUrl: 'anon/map.html',
                        controller: 'MapController'
                    }
                }
            })

            .state('anon.map.berlin', {
                url: '/berlin',
                views: {
                    'content@': {
                        templateUrl: 'anon/Berlin.html',
                        controller: 'BerlinController'
                    }
                }
            })

            .state('anon.map.paris', {
                url: '/paris',
                views: {
                    'content@': {
                        templateUrl: 'anon/Paris.html',
                        controller: 'ParisController'
                    }
                }
            })

            .state('anon.map.lisbonne', {
                url: '/lisbonne',
                views: {
                    'content@': {
                        templateUrl: 'anon/Lisbonne.html',
                        controller: 'LisbonneController'
                    }
                }
            })

            .state('anon.map.madrid', {
                url: '/madrid',
                views: {
                    'content@': {
                        templateUrl: 'anon/Madrid.html',
                        controller: 'MadridController'
                    }
                }
            })

            .state('anon.map.newyork', {
                url: '/newyork',
                views: {
                    'content@': {
                        templateUrl: 'anon/newyork.html',
                        controller: 'newyorkController'
                    }
                }
            })

            .state('anon.map.mexico', {
                url: '/mexico',
                views: {
                    'content@': {
                        templateUrl: 'anon/mexico.html',
                        controller: 'mexicoController'
                    }
                }
            })

            .state('anon.map.santiago', {
                url: '/santiago',
                views: {
                    'content@': {
                        templateUrl: 'anon/santiago.html',
                        controller: 'santiagoController'
                    }
                }
            })

            .state('anon.map.brasilia', {
                url: '/brasilia',
                views: {
                    'content@': {
                        templateUrl: 'anon/brasilia.html',
                        controller: 'brasiliaController'
                    }
                }
            })

            .state('anon.map.tokyo', {
                url: '/tokyo',
                views: {
                    'content@': {
                        templateUrl: 'anon/tokyo.html',
                        controller: 'tokyoController'
                    }
                }
            })

            .state('anon.map.pekin', {
                url: '/pekin',
                views: {
                    'content@': {
                        templateUrl: 'anon/pekin.html',
                        controller: 'pekinController'
                    }
                }
            })

            .state('anon.map.bangkok', {
                url: '/bangkok',
                views: {
                    'content@': {
                        templateUrl: 'anon/bangkok.html',
                        controller: 'bangkokController'
                    }
                }
            })

            .state('anon.map.singapour', {
                url: '/singapour',
                views: {
                    'content@': {
                        templateUrl: 'anon/singapour.html',
                        controller: 'singapourController'
                    }
                }
            })

            .state('anon.login', {
                url: '/login',
                views: {
                    'content@': {
                        templateUrl: 'anon/login.html',
                        controller: 'LoginController'
                    }
                }
            })
            .state('anon.register', {
                url: '/register',
                views: {
                    'content@': {
                        templateUrl: 'anon/register.html',
                        controller: 'RegisterController'
                    }
                }
            });
        $stateProvider
            .state('user', {
                abstract: true,
                url: '/user',
                views: {
                    'navbar@': {
                        templateUrl: 'user/navbar.html',
                        controller: 'NavbarController'
                    }
                },
                data: {
                    access: AccessLevels.user
                }
            })
            .state('user.dashboard', {
                url: '/dashboard',
                views: {
                    'content@': {
                        templateUrl: 'user/dashboard.html',
                        controller: 'DashboardController'
                    }
                }
            })
            .state('user.profile', {
                url: '/profile',
                views: {
                    'content@': {
                        templateUrl: 'user/profile.html',
                        controller: 'ProfileController'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    });
