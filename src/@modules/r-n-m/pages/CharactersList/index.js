import { defineComponent } from 'vue';
import { setup } from './setup';
// @ts-ignore
import { render } from './template.vue?vue&type=template';
// @ts-ignore
import { components } from './template.vue?vue&type=script&lang=ts';
// @ts-ignore
import $style from './styles.module.pcss';
// @ts-ignore
// export default defineComponent<{}, RawBindings>(component)
export default defineComponent({
    components,
    // setup: (props, context) => template(setup(props, context) as RawBindings),
    setup,
    render,
    $style,
});
//# sourceMappingURL=index.js.map