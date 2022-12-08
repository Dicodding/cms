import { defineComponent, ref } from 'vue';

export const sideBarComponent = defineComponent({
  name: 'SideBar',
  setup() {
    const nikeName = ref('xxx');

    return {
      nikeName
    };
  },
  render() {
    return <div>SideBar</div>;
  }
});
