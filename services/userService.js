const usersdata=require('../data/users');


//添加用户的方法
function addUser(user) {
    //业务层做数据控制
    //判断用户是否存在
    var index=-1;
    for(var i=0;i<usersdata.users.length;i++){
        if(user.username==usersdata.users[i].username){
            index=i;
            break;
        }
    }
    if(index!=-1){
        return {success:false, msg:'用户已存在'};
    }else {
        usersdata.users.push(user);
        return {success: true, msg: '用户添加成功'};
    }
}
//查询用户的方法;条件查询:传入是一个params数组，{属性:值}
function findUsers(params){
    var users=[];
    //没有条件
    if(params==undefined||params==[]){
        return usersdata.users;
    }else {
        //有条件：
        for(var i=0;i<usersdata.users.length;i++){
            //1.取出用户
            var user=usersdata.users[i];
            //2.取出要比较件的属性
            var keys=Object.keys(params);
            var isequal=true;
            //3.遍历属性
            for(var j=0;j<keys.length;j++){
                var key=keys[j];
                if(user[key]!=params[key]){
                    //4.有个属性的值不等
                    isequal=false;
                    break;
                }
            }
            if(isequal){
                users.push(user);
            }
        }
    }
    return users;
}
//更改用户的方法
function updateUser(user){
    var users=usersdata.users;
    var index=-1;
    for(var i=0;i<users.length;i++){
        if(user.username==users[i].username){
            users[i]=user;
            index=i;
            break;
        }
    }
    if(index==-1){
        return {success:false,msg:'用户不存在'};
    }else {
        return {success: true, msg:'用户已修改'};
    }
}
//删除用户的方法
function deleteUser(username){
    var users=usersdata.users;
    var index=-1;
    //查用户
    for(var i=0;i<users.length;i++){
        if(users[i].username==username){
            index=i;
            break;
        }
    }
    //根据查找情况进行操作
    if(index==-1){
        return {success:false,msg:'用户不存在'};
    }else {
        users.splice(index,1);
        return {success:true, msg: '用户删除成功'};
    }
}
//共享
exports.addUser=addUser;
exports.findUsers=findUsers;
exports.updateUser=updateUser;
exports.deleteUser=deleteUser;
