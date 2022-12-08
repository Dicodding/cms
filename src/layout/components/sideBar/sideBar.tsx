import { computed, defineComponent } from 'vue';
import LogoSrc from '@/assets/images/logo.svg';
import LogoSrcColl from '@/assets/images/bitbug_favicon.png';

import { ElMenu, ElMenuItem } from 'element-plus';
import { useAppStore } from '@/store/modules/app';

const useSiderBar = () => {
  const appStore = useAppStore();
  const iscollapse = computed(() => {
    return appStore.sideBar.opened;
  });
  const toggleSideBar = () => {
    appStore.setToggleSideStatus();
  };
  return {
    iscollapse,
    toggleSideBar
  };
};
const logoComponent = defineComponent({
  name: 'Logo',
  props: {
    collapse: {
      type: Boolean,
      default: true
    }
  },

  setup(props) {
    const logo = computed(() => {
      return props.collapse ? LogoSrc : LogoSrcColl;
    });

    return {
      logo
    };
  },
  render() {
    const { logo } = this;
    return (
      <>
        <img src={logo} class="sidebar-logo"></img>
      </>
    );
  }
});

const sideControl = defineComponent({
  name: 'side-control',
  props: {
    isActive: {
      type: Boolean,
      default: true
    }
  },
  emits: ['toggleClick'],
  setup(props, { emit }) {
    const clickHandler = () => {
      emit('toggleClick');
    };
    return {
      clickHandler
    };
  },
  render() {
    const { isActive, clickHandler } = this;
    const classes = `iconfont ${!isActive ? 'iconshouqi1' : 'iconzhankai1'}`;
    return (
      <div onClick={clickHandler}>
        <i class={classes}></i>
      </div>
    );
  }
});

const sideBarItemCompoents = defineComponent({
  name: 'sideBarItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  render() {
    const { item } = this;
    const iconClass = item.icon
      ? `iconsize iconfont ${item.icon}`
      : 'iconsize iconfont icondaikuanxinxiguanli';
    const MenuItem = [<i class={iconClass} />, <span class="title">11</span>];
    // const leafNode = ;
    return <ElMenuItem index={item.path}>{MenuItem}</ElMenuItem>;
  }
});

export const sideBarComponent = defineComponent({
  name: 'SideBar',
  setup() {
    const { iscollapse, toggleSideBar } = useSiderBar();

    const menu = [
      {
        icon: 'jiandangmingdan',
        title: '建档名单',
        path: '/home1'
      },
      {
        icon: 'zijinzhanghu',
        title: '资金账户',
        path: '/home'
      }
    ];
    return {
      iscollapse,
      toggleSideBar,
      menu
    };
  },
  render() {
    const { iscollapse, toggleSideBar, menu } = this;
    return (
      <>
        <div>
          <logoComponent collapse={iscollapse}></logoComponent>
          <ElMenu
            collapse={iscollapse}
            background-color="#FFEBF1"
            text-color="#C43761"
            unique-opened={false}
            active-text-color="#C43761"
            collapse-transition={true}
            mode="vertical"
            router={true}
          >
            <ElMenuItem index={'1'}>
              <span>1231</span>
            </ElMenuItem>
            <ElMenuItem index={'2'}>
              <span>1231</span>
            </ElMenuItem>
            ;
            {/* {menu.map((item) => {
              <sideBarItemCompoents item={item} />;
            })} */}
          </ElMenu>
          <sideControl
            isActive={iscollapse}
            onToggleClick={toggleSideBar}
          ></sideControl>
        </div>
      </>
    );
  }
});
