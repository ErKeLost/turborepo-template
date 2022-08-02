import * as vue from 'vue';

declare function useBoolean(initValue?: boolean): {
    bool: vue.Ref<boolean>;
    setBool: (value: boolean) => void;
    setTrue: () => void;
    setFalse: () => void;
    toggle: () => void;
};

export { useBoolean as default };
