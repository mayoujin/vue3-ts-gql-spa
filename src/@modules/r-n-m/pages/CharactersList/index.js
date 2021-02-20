import { defineComponent } from 'vue';
import { setup } from './setup';
// @ts-ignore
import { render } from './template.vue?vue&type=template';
// @ts-ignore
import { components } from './template.vue?vue&type=script&lang=ts';
// @ts-ignore
import $style from './styles.module.pcss';
export default defineComponent({
    setup,
    render,
    components,
    $style,
});
//# sourceMappingURL=index.js.map