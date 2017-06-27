angular
.module('app', ['unsavedChanges', 'ui.router'])
.config(['$stateProvider', "$urlRouterProvider", 'unsavedWarningsConfigProvider',
  function ($stateProvider, $urlRouterProvider, unsavedWarningsConfigProvider) {

    $stateProvider
    .state({
      name: 'page1',
      url: '/page1',
      templateUrl: 'page1.html'
    })
    .state({
      name: 'page2',
      url: '/page2',
      templateUrl: 'page2.html'
    })
    $urlRouterProvider.otherwise('/page1');

    unsavedWarningsConfigProvider.useTranslateService = false;
  }
])
.controller('demoCtrl', function ($scope) {
  $scope.user = {
    name: '',
    email: ''
  };
  $scope.demoFormSubmit = function () {
    $scope.message = 'Form Saved';
    $scope.user = {};
  };
});
