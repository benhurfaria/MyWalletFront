function storeUser(user){
    const serialUser = JSON.stringify(user);
    localStorage.setItem("user", serialUser);
}

function getStoredUser(){
    let serialUser = localStorage.getItem("user");
    const user = JSON.parse(serialUser);
    return user;
}

export {storeUser, getStoredUser}