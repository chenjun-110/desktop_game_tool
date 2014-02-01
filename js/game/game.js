/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-1-20
 * Time: 上午11:26
 * To change this template use File | Settings | File Templates.
 */
var constants = {
    listType:{
        "official":"official",
        "user":"user"
    },
    listUrl:{
        "official":"../json/list/list.json",
        "user":"../json/list/user.json"
    },
    listModel:{
        "official":gameList,
        "user":userList
    },
    version:{
        version:1,
        key:"dataVersion",
        debug:true
    }

}
var dataService = {
    getConfig:function (id) {
        var config= html5StorageService.get(id.toString(),  versionConfig[id.toString()]);
        console.log(config);
        return config;
    },
    getGameList:function (type) {

        return html5StorageService.get(type, constants.listModel[type]);

    },
    setGameDetail:function (data,showProperties,propertiesData){
        //propertiesData={
        //                  "card":
        //                          [{"role":"水民","card":"水果"},{"role":"鬼","card":"香蕉"}],
        //                  "example":
        //                          [{"role":"水民","example":"what"},{"role":"鬼"},"card":"why"]
        //               };
        for(var i= 0,max=showProperties.length;i<max;i++){
            if(showProperties[i]=='role') continue;
            this.setGamerProperties(data,propertiesData[showProperties[i]]);
        }
        html5StorageService.update("gameDetail",data);
    },
    getGameDetail:function(){
        return html5StorageService.get("gameDetail");
    },
    deleteGameDetail:function(){
        html5StorageService.delete("gameDetail");
    },

    setGamerProperties:function(config,dataArray){
        if(dataArray.length<=0 ) return;
        console.log(dataArray);
        console.log(config);
            for(var i=0;i<config.length;i++)
                for(var j = 0 ; j <dataArray.length ; j++)
                    if(dataArray[j]["role"] == config[i]["role"])
                        JsonUtil.push(config[i],dataArray[j]);


    },
    deleteGamerProperties:function(id,key){
        var roles=this.getGameDetail();
        for(var role in roles)
            if(role.id=id)
                JsonUtil.pop(role,key);
        html5StorageService.update("gameDetail",roles);
    },
    roleMaker : function (config) {
        var playerNum = config.playerNum,
            rolesArray = [],
            rolesNumArray = [],
            roleChooser = 0,
            str = "",
            count = 1,
            returnData,
            flag = 1;
        for (var i in config.roles) {
            rolesArray.push(config.roles[i].name);
            rolesNumArray.push(config.roles[i].num);
        }
            while (flag) {
                roleChooser = Math.floor(Math.random() * 4);
                if (rolesNumArray[roleChooser] > 0) {
                    str = str + "{id:" + count + ",role:'" + rolesArray[roleChooser] + "'},";
                    rolesNumArray[roleChooser]--;
                    count++;
                }
                if (count == playerNum + 1) break;
            }
        returnData = "[" + str.substring(0, str.length - 1) + "]";
        return eval("(" + returnData + ")");
    }
}



var app = angular.module('gameTool', [], function ($compileProvider) {

  $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file):/);

});



app.controller("gameModelList",function($scope) {

    $scope.officialList = dataService.getGameList(constants.listType.official);
    $scope.userList = dataService.getGameList(constants.listType.user);
})

app.controller("gameInitCtrl",function($scope) {
    var gameid = getParameterFromUrl(location.href, "gameid");
    $scope.gameid=gameid;
    $scope.gameConfig = dataService.getConfig(gameid);

    $scope.gameInit = function(){
        //
        // 获取整个表单的input
        //  roleMaker
        //     |
        //  bindData
        //     |
        //  setGameDetail
        //
        alert("123");
        var temp={};
        var rolesArray=[];
        for(var i =0;i<$scope.gameConfig.roles.length;i++)//获取角色数组
            rolesArray.push($scope.gameConfig.roles[i].name);

        var formData=document.getElementsByTagName('input');

            //正则表达式来判断
            //name字段 {{role}}<-->{{properties}}
            //{"properties":[{"role":"水民","card":"value"},{"role":"鬼","card":"value"}]}

                for(var j =0;j<$scope.gameConfig.showProperties.length;j++){
                    if($scope.gameConfig.showProperties[j]=='role') continue;
                    var tempArr=[];

                    var reg=new RegExp(".*"+$scope.gameConfig.showProperties[j]+".*");
                    var reg2=new RegExp(/.*<-->.*/);
                    for(var index=0;index<formData.length;index++){

                        if(reg.test(formData[index].name)&&reg2.test(formData[index].name)){
                            var arr=formData[index].name.split('<-->');
                            tempArr.push("{'role':'"+arr[0]+"','"+$scope.gameConfig.showProperties[j]+"':'"+formData[index].value+"'}");
                            // tempArr correct
                        }
                    }
                    var tmp = JsonUtil.toJSON("{'"+$scope.gameConfig.showProperties[j]+"':["+tempArr+"]}");
                     JsonUtil.push(temp,tmp);

                }
       console.log(temp);
        dataService.setGameDetail(dataService.roleMaker($scope.gameConfig),$scope.gameConfig.showProperties,temp);
    }
    $scope.gameExit = function(){
        dataService.deleteGameDetail();
    }
})

app.controller("gamePlayCtrl",function($scope) {

    var gameid = getParameterFromUrl(location.href, "gameid");
    var gc=dataService.getConfig(gameid);
    gc.roleAssign=dataService.getGameDetail();
    //$scope.currentData=[role,card,other];
    $scope.currentData=[];
    $scope.gameConfig=gc;
    $scope.gamePlay=gc;

    $scope.currentData.push(0);
    for(var i=0;i<gc.showProperties.length;i++){
       $scope.currentData.push(gc.roleAssign[0][gc.showProperties[i]]);
    }

    $scope.changeCurrentGamer=function(id){
        $scope.currentData=[];
        id=id+1;
        $scope.currentData.push(id);
        for(var i=0;i<gc.showProperties.length;i++){
            $scope.currentData.push(gc.roleAssign[id][gc.showProperties[i]]);
        }
    }
    $scope.currentGamerEraser=function(id){

        for(var item in gc.showProperties){
            gc.roleAssign[id-1][item]="╮(╯_╰)╭";
            $scope.currentData.push(gc.roleAssign[id-1][item]);
        }

    }
    $scope.gameExit = function(){
        dataService.deleteGameDetail();
    }
});

app.controller("judgeScanCtrl",function($scope) {
    var gameid = getParameterFromUrl(location.href, "gameid");
    var gc=dataService.getConfig(gameid);
    gc.roleAssign=dataService.getGameDetail();
    gc.gameid=gameid;
    $scope.gameConfig=gc;
    $scope.gameExit = function(){
        dataService.deleteGameDetail();
    }
});