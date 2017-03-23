angular.module('cardapioADSApp')

    .controller('loginCtrl', function ($scope, $location) {

        $scope.usuario = {
            login: null,
            senha: null
        }

        var usuarioPadrao = {}
        usuarioPadrao.login = 'admin';
        usuarioPadrao.senha = 'admin';


        $scope.acessarSistema = function (usuarioInformado) {

            if ((usuarioInformado.login) == (usuarioPadrao.login)
                &&
                (usuarioInformado.senha) == (usuarioPadrao.senha)){
                console.log('Conectado!');
                $location.path('/home');
            }
            else {
                alert('Usuário e Senha Incorretos!');
            }
        }

    });