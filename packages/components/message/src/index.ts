import { ref, createVNode, reactive, render } from "vue";
import type { MessageOptions } from "./message";
import PopupManager from "../../../utils/popup-manager";
import MessageGroup from "./message-group.vue";
import { RenderContent } from "../../../utils/types";

const MESSAGE_TYPES = [
    "info",
    "success",
    "warning",
    "error",
    "loading"
];

class MessageManager {
    private messages = ref<MessageOptions[]>([]);
    private container: HTMLElement | null;
    private seed: number;
    private zIndex: number;
    public created: boolean;
    
    constructor() {
        this.container = document.createElement("div");
        this.container.className = "bird-message-container";
        this.container.style.zIndex = String(PopupManager.nextZIndex());
        this.messages = ref([]);
        this.seed = 0;
        this.zIndex = 100;
        this.created = true;

        const vm = createVNode(MessageGroup, {
            messages: this.messages.value,
            onClose: (id: string | number) => this.remove(id),
            onDestroy: () => this.destroy
        });

        render(vm, this.container);
        document.body.appendChild(this.container);
    }
    add(config: MessageOptions) {
        this.seed++;
        const id = `bird-message__${this.seed}`;
        const message = reactive<MessageOptions>({
            id,
            ...config,
            zIndex: this.zIndex
        });
        this.messages.value.push(message);
        return {
            close: () => this.remove(id)
        }
    }
    remove(id: number | string) {
        const index = this.messages.value.findIndex(item => item.id === id);
        const item = this.messages.value[index];

        if (item?.onClose) {
            item.onClose();
        }
        this.messages.value.splice(index, 1);
    }
    destroy() {
        if (this.messages.value.length === 0 && this.container) {
            render(null, this.container);
            document.body.removeChild(this.container);
            this.container = null;
            this.created = false;
            this.zIndex = 100;
        }
    }
}

let Instance = <MessageManager> {};

function message(options: MessageOptions) {
    if (!Instance.created) {
        Instance = new MessageManager();
    }

    return Instance.add(options);
}

MESSAGE_TYPES.forEach(type => {
    message[type] = (msg: RenderContent, duration: number, onClose: any) => {
        const messageOptions: MessageOptions = {
            type,
            message: msg,
            duration,
            onClose
        };

        return message(messageOptions);
    }
});

export default message;

