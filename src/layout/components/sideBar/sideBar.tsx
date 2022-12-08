import { defineComponent, ref } from 'vue';
import { ElMenu } from 'element-plus';

export const sideBarComponent = defineComponent({
  name: 'SideBar',
  setup() {
    const nikeName = ref('xxx');

    return {
      nikeName
    };
  },
  render() {
    return (
      <>
        <el-menu default-active="2" class="el-menu-vertical-demo"></el-menu>
      </>
    );
  }
});
