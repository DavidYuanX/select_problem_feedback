/**
 * 主应用 **可以使用任意技术栈**
 * 以下分别是 React 和 Vue 的示例，可切换尝试
 */
import render from '../render/ReactRender';
// import render from './render/VueRender';

/**
 * Step1 初始化应用（可选）
 */
render({ loading: true });

const loader = loading => render({ loading });

export default  [
    {
        name: 'chooseProducts',
        entry: '//localhost:7100',
        container: '#subapp-viewport',
        loader,
        activeRule: '/chooseProducts',
    },
    {
        name: 'vue',
        entry: '//localhost:7101',
        container: '#subapp-viewport',
        loader,
        activeRule: '/vue',
    },
    {
        name: 'purehtml',
        entry: '//localhost:7104',
        container: '#subapp-viewport',
        loader,
        activeRule: '/purehtml',
    }
]
