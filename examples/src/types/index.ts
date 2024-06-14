export interface NavBarItem {
    src: string;
    name: string;
};

export interface NavBar {
    title: string;
    list: Array<NavBarItem>;
};