import {home} from '../scenes/public/home/';

export const routes = {
    public: [
        {
            "path": "/home",
            "component": home
        },
        {
            "path": "/",
            "component": home
        }
    ],
    private: []
}