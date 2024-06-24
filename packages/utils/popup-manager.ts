class PopupManager {
    static instances = new Map();
    static zIndex: number = 100;

    static getInstance(id) {
        return PopupManager.instances.get(id);
    }

    static register(id, instance) {
        if (id && instance) {
            PopupManager.instances.set(id, instance);
        }
    }

    static deregister(id) {
        if (id) {
            PopupManager.instances.set(id, null);
            PopupManager.instances.delete(id);
        }
    }

    static nextZIndex() {
        return PopupManager.zIndex++;
    }
}

export default PopupManager;