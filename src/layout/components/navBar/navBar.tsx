import { defineComponent, ref } from 'vue';

export const navBarComponent = defineComponent({
  name: 'NavBar',
  setup() {
    const nikeName = ref('jjjj');

    return {
      nikeName
    };
  },
  render() {
    return <div>navbar</div>;
  }
});
