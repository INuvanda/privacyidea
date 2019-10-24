myApp.controller("tokenLostController", function ($scope,
                                                  TokenFactory, UserFactory,
                                                  $stateParams) {
    $scope.selectedToken.serial = $stateParams.tokenSerial;
    $scope.tokenLost = false;

    $scope.setTokenLostAsk = function() {
        $scope.confirm(
            $scope.confirm_action_levels["difficult"],
            gettextCatalog.getString("Mark Token as Lost"),
            gettextCatalog.getString("Do you really want to mark this token as lost? " +
                "This will disable the token and generate a temporary password based token as a replacement!"),
            gettextCatalog.getString("Yes, this token is really lost!"),
            $scope.setTokenLost);
    };

    $scope.setTokenLost = function() {
        TokenFactory.lost($scope.selectedToken.serial, function (data) {
            $scope.tokenLost = true;
            $scope.lostResult = data.result.value;
        });
    };
});
