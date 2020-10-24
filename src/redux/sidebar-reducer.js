let initialSidebar = {
    friendsData: [
        {id: 1, name: 'Osim', img: "https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg" },
        {id: 2, name: 'Andrew', img: "https://avatars.mds.yandex.net/get-ott/374297/2a000001616b87458162c9216ccd5144e94d/orig" },
        {id: 3, name: 'Lexa', img: "https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg" }
    ]
}

const sidebarReducer = (state = initialSidebar, action) => {
    return state;
}
export default sidebarReducer;