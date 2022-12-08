import { defineComponent, ref } from 'vue';

export const tagViewComponent = defineComponent({
  name: 'TagView',
  setup() {
    const nikeName = ref('jjjj');

    return {
      nikeName
    };
  },
  render() {
    return <div>TagView</div>;
  }
});
