// 自己编写声明文件
declare function jQuery(selector: string): HTMLElement;
// 使用namespace扩展全局变量JQ
declare namespace jQuery {
    function ajax(path: string, settings: any): void;
}

// ts特殊导出语法导出
export = jQuery;